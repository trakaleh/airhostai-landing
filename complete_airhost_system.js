// ====================================
// 🚀 AIRHOST ASSISTANT - SISTEMA COMPLETO
// ====================================

// package.json
{
  "name": "airhost-assistant",
  "version": "1.0.0",
  "description": "Automatización completa para hosts de Airbnb",
  "main": "server.js",
{
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  }
}
  },
  "dependencies": {
    "express": "^4.18.2",
    "stripe": "^13.11.0",
    "node-cron": "^3.0.2",
    "axios": "^1.5.0",
    "nodemailer": "^6.9.7",
    "mongoose": "^7.5.3",
    "bcryptjs": "^2.4.3",
    "jsonwebtoken": "^9.0.2",
    "cors": "^2.8.5",
    "helmet": "^7.0.0",
    "dotenv": "^16.3.1",
    "multer": "^1.4.5-lts.1",
    "cloudinary": "^1.40.0",
    "ical": "^0.8.0",
    "moment": "^2.29.4",
    "twilio": "^4.16.0"
  },
  "devDependencies": {
    "nodemon": "^3.0.1"
  }
{

// ====================================
// 🔧 CONFIGURACIÓN Y VARIABLES DE ENTORNO
// ====================================

// .env
NODE_ENV=development
PORT=3000

# Base de datos
MONGODB_URI=mongodb://localhost:27017/airhost-assistant

# Stripe
STRIPE_SECRET_KEY=sk_test_tu_stripe_secret_key_aqui
STRIPE_PUBLISHABLE_KEY=pk_test_tu_stripe_publishable_key_aqui
STRIPE_WEBHOOK_SECRET=whsec_tu_webhook_secret_aqui

# WhatsApp (Twilio)
TWILIO_ACCOUNT_SID=tu_twilio_account_sid
TWILIO_AUTH_TOKEN=tu_twilio_auth_token
TWILIO_WHATSAPP_NUMBER=whatsapp:+14155238886

# Email
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=tu_email@gmail.com
SMTP_PASS=tu_app_password

# APIs Smart Locks
NUKI_API_TOKEN=tu_nuki_api_token
AUGUST_API_TOKEN=tu_august_api_token
YALE_API_TOKEN=tu_yale_api_token

# Cloudinary (para imágenes)
CLOUDINARY_CLOUD_NAME=tu_cloud_name
CLOUDINARY_API_KEY=tu_api_key
CLOUDINARY_API_SECRET=tu_api_secret

# JWT
JWT_SECRET=tu_jwt_secret_super_seguro

# URLs
FRONTEND_URL=http://localhost:3000
WEBHOOK_BASE_URL=https://tu-dominio.com

// ====================================
// 📊 MODELOS DE BASE DE DATOS
// ====================================

// models/User.js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    phone: { type: String, required: true },
    plan: { type: String, enum: ['basic', 'pro', 'enterprise'], default: 'basic' },
    subscription: {
        stripe_customer_id: String,
        stripe_subscription_id: String,
        status: { type: String, enum: ['active', 'canceled', 'past_due'], default: 'active' },
        current_period_end: Date
    },
    preferences: {
        language: { type: String, default: 'es' },
        currency: { type: String, default: 'EUR' },
        timezone: { type: String, default: 'Europe/Madrid' }
    },
    properties: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Property' }]
}, { timestamps: true });

userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 12);
    next();
});

userSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password, this.password);
};

module.exports = mongoose.model('User', userSchema);

// models/Property.js
const propertySchema = new mongoose.Schema({
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    name: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
    property_type: { type: String, enum: ['apartment', 'house', 'villa', 'studio'], required: true },
    
    // Channel Manager
    channels: {
        airbnb: {
            listing_id: String,
            ical_url: String,
            last_sync: Date
        },
        booking: {
            listing_id: String,
            ical_url: String,
            last_sync: Date
        },
        vrbo: {
            listing_id: String,
            ical_url: String,
            last_sync: Date
        }
    },
    
    // Smart Lock Configuration
    smart_lock: {
        brand: { type: String, enum: ['nuki', 'august', 'yale', 'schlage'] },
        lock_id: String,
        api_token: String,
        is_active: { type: Boolean, default: false }
    },
    
    // Pricing
    pricing: {
        base_price: { type: Number, required: true },
        currency: { type: String, default: 'EUR' },
        deposit_amount: { type: Number, required: true }
    },
    
    // WiFi & Access Info
    access_info: {
        wifi_name: String,
        wifi_password: String,
        instructions: String
    },
    
    // Message Templates
    message_templates: {
        welcome: String,
        access_info: String,
        checkout_reminder: String,
        review_request: String
    }
}, { timestamps: true });

module.exports = mongoose.model('Property', propertySchema);

// models/Reservation.js
const reservationSchema = new mongoose.Schema({
    property: { type: mongoose.Schema.Types.ObjectId, ref: 'Property', required: true },
    guest: {
        name: { type: String, required: true },
        email: { type: String, required: true },
        phone: String,
        language: { type: String, default: 'en' },
        country: String
    },
    
    // Dates
    check_in: { type: Date, required: true },
    check_out: { type: Date, required: true },
    
    // Channel Info
    source: { type: String, enum: ['airbnb', 'booking', 'vrbo', 'direct'], required: true },
    external_id: String,
    
    // Status
    status: { type: String, enum: ['confirmed', 'checked_in', 'checked_out', 'cancelled'], default: 'confirmed' },
    
    // Access Codes
    access_codes: {
        nuki_code: String,
        generated_at: Date,
        expires_at: Date
    },
    
    // Security Deposit
    deposit: {
        stripe_payment_intent_id: String,
        amount: Number,
        currency: String,
        status: { type: String, enum: ['pending', 'authorized', 'captured', 'released'], default: 'pending' },
        authorized_at: Date,
        released_at: Date
    },
    
    // Messages Sent
    messages_sent: [{
        type: { type: String, enum: ['welcome', 'access_info', 'checkout_reminder', 'review_request'] },
        sent_at: Date,
        platform: String
    }],
    
    // Guest Registration (for EU compliance)
    guest_registration: {
        submitted: { type: Boolean, default: false },
        submitted_at: Date,
        police_confirmation: String
    }
}, { timestamps: true });

module.exports = mongoose.model('Reservation', reservationSchema);

// models/Incident.js
const incidentSchema = new mongoose.Schema({
    reservation: { type: mongoose.Schema.Types.ObjectId, ref: 'Reservation', required: true },
    property: { type: mongoose.Schema.Types.ObjectId, ref: 'Property', required: true },
    
    type: { type: String, enum: ['damage', 'missing_items', 'cleanliness', 'other'], required: true },
    description: { type: String, required: true },
    estimated_cost: { type: Number, required: true },
    
    evidence_photos: [String], // URLs de Cloudinary
    
    status: { type: String, enum: ['reported', 'charged', 'resolved'], default: 'reported' },
    charged_amount: Number,
    charged_at: Date
}, { timestamps: true });

module.exports = mongoose.model('Incident', incidentSchema);

// ====================================
// 🛠️ SERVICIOS Y UTILIDADES
// ====================================

// services/StripeService.js
class StripeService {
    constructor() {
        this.stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
    }

    // Crear fianza (pre-autorización)
    async createSecurityDeposit(reservationData) {
        try {
            const { amount, currency, guest, reservationId } = reservationData;
            
            const paymentIntent = await this.stripe.paymentIntents.create({
                amount: amount * 100,
                currency: currency.toLowerCase(),
                capture_method: 'manual', // Solo autorizar, no cobrar
                payment_method_types: ['card'],
                metadata: {
                    type: 'security_deposit',
                    reservation_id: reservationId,
                    guest_email: guest.email,
                    guest_name: guest.name
                }
            });

            return {
                success: true,
                client_secret: paymentIntent.client_secret,
                payment_intent_id: paymentIntent.id
            };
        } catch (error) {
            return { success: false, error: error.message };
        }
    }

    // Cobrar por daños
    async chargeDamages(paymentIntentId, amount, description) {
        try {
            const capture = await this.stripe.paymentIntents.capture(paymentIntentId, {
                amount_to_capture: amount * 100,
                metadata: {
                    damage_description: description,
                    charged_at: new Date().toISOString()
                }
            });

            return { success: true, captured: amount };
        } catch (error) {
            return { success: false, error: error.message };
        }
    }

    // Liberar fianza
    async releaseDeposit(paymentIntentId) {
        try {
            await this.stripe.paymentIntents.cancel(paymentIntentId);
            return { success: true, message: 'Fianza liberada' };
        } catch (error) {
            return { success: false, error: error.message };
        }
    }

    // Crear suscripción
    async createSubscription(customerId, priceId) {
        try {
            const subscription = await this.stripe.subscriptions.create({
                customer: customerId,
                items: [{ price: priceId }],
                payment_behavior: 'default_incomplete',
                expand: ['latest_invoice.payment_intent']
            });

            return {
                success: true,
                subscription_id: subscription.id,
                client_secret: subscription.latest_invoice.payment_intent.client_secret
            };
        } catch (error) {
            return { success: false, error: error.message };
        }
    }
}

// services/SmartLockService.js
class SmartLockService {
    constructor() {
        this.nukiToken = process.env.NUKI_API_TOKEN;
        this.augustToken = process.env.AUGUST_API_TOKEN;
        this.yaleToken = process.env.YALE_API_TOKEN;
    }

    async generateAccessCode(lockBrand, lockId, guestName, checkIn, checkOut) {
        switch (lockBrand) {
            case 'nuki':
                return await this.generateNukiCode(lockId, guestName, checkIn, checkOut);
            case 'august':
                return await this.generateAugustCode(lockId, guestName, checkIn, checkOut);
            case 'yale':
                return await this.generateYaleCode(lockId, guestName, checkIn, checkOut);
            default:
                throw new Error('Marca de cerradura no soportada');
        }
    }

    async generateNukiCode(lockId, guestName, checkIn, checkOut) {
        try {
            const response = await axios.post(`https://api.nuki.io/smartlock/${lockId}/auth`, {
                name: guestName,
                allowedFromTime: checkIn,
                allowedUntilTime: checkOut,
                type: 13 // Código temporal
            }, {
                headers: {
                    'Authorization': `Bearer ${this.nukiToken}`,
                    'Content-Type': 'application/json'
                }
            });

            return {
                success: true,
                code: response.data.code,
                expires_at: checkOut
            };
        } catch (error) {
            return { success: false, error: error.message };
        }
    }

    async generateAugustCode(lockId, guestName, checkIn, checkOut) {
        try {
            const response = await axios.post(`https://api-production.august.com/locks/${lockId}/keys`, {
                name: guestName,
                starts_at: checkIn,
                ends_at: checkOut
            }, {
                headers: {
                    'Authorization': `Bearer ${this.augustToken}`,
                    'Content-Type': 'application/json'
                }
            });

            return {
                success: true,
                code: response.data.pin,
                expires_at: checkOut
            };
        } catch (error) {
            return { success: false, error: error.message };
        }
    }

    async generateYaleCode(lockId, guestName, checkIn, checkOut) {
        try {
            const pin = Math.floor(100000 + Math.random() * 900000).toString();
            
            const response = await axios.post(`https://api.yalehome.com/locks/${lockId}/pins`, {
                pin_code: pin,
                start_time: checkIn,
                end_time: checkOut,
                name: guestName
            }, {
                headers: {
                    'Authorization': `Bearer ${this.yaleToken}`,
                    'Content-Type': 'application/json'
                }
            });

            return {
                success: true,
                code: pin,
                expires_at: checkOut
            };
        } catch (error) {
            return { success: false, error: error.message };
        }
    }
}

// services/MessageService.js
class MessageService {
    constructor() {
        this.twilio = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
        this.translations = {
            es: {
                welcome: "¡Hola {{name}}! 👋 Bienvenido a {{property}}. Tu código de acceso es: {{code}}",
                access_info: "🏠 Información de acceso:\n🔑 Código: {{code}}\n📶 WiFi: {{wifi_name}}\n🔐 Contraseña: {{wifi_password}}",
                checkout: "🕐 Recordatorio: Check-out hoy a las {{time}}. ¡Esperamos tu reseña de 5⭐!",
                deposit_request: "🛡️ Para activar tu acceso, confirma tu fianza: {{link}}"
            },
            en: {
                welcome: "Hello {{name}}! 👋 Welcome to {{property}}. Your access code is: {{code}}",
                access_info: "🏠 Access information:\n🔑 Code: {{code}}\n📶 WiFi: {{wifi_name}}\n🔐 Password: {{wifi_password}}",
                checkout: "🕐 Reminder: Check-out today at {{time}}. We hope for your 5⭐ review!",
                deposit_request: "🛡️ To activate your access, confirm your deposit: {{link}}"
            },
            fr: {
                welcome: "Bonjour {{name}}! 👋 Bienvenue à {{property}}. Votre code d'accès est: {{code}}",
                access_info: "🏠 Informations d'accès:\n🔑 Code: {{code}}\n📶 WiFi: {{wifi_name}}\n🔐 Mot de passe: {{wifi_password}}",
                checkout: "🕐 Rappel: Check-out aujourd'hui à {{time}}. Nous espérons votre avis 5⭐!",
                deposit_request: "🛡️ Pour activer votre accès, confirmez votre caution: {{link}}"
            }
        };
    }

    async sendWhatsAppMessage(phone, messageType, variables, language = 'en') {
        try {
            const template = this.translations[language][messageType];
            if (!template) throw new Error('Template no encontrado');

            let message = template;
            Object.keys(variables).forEach(key => {
                message = message.replace(new RegExp(`{{${key}}}`, 'g'), variables[key]);
            });

            const result = await this.twilio.messages.create({
                from: process.env.TWILIO_WHATSAPP_NUMBER,
                to: `whatsapp:${phone}`,
                body: message
            });

            return { success: true, message_sid: result.sid };
        } catch (error) {
            return { success: false, error: error.message };
        }
    }

    async sendEmail(to, subject, html) {
        try {
            const nodemailer = require('nodemailer');
            
            const transporter = nodemailer.createTransporter({
                host: process.env.SMTP_HOST,
                port: process.env.SMTP_PORT,
                secure: false,
                auth: {
                    user: process.env.SMTP_USER,
                    pass: process.env.SMTP_PASS
                }
            });

            await transporter.sendMail({
                from: process.env.SMTP_USER,
                to: to,
                subject: subject,
                html: html
            });

            return { success: true };
        } catch (error) {
            return { success: false, error: error.message };
        }
    }
}

// services/ChannelManagerService.js
class ChannelManagerService {
    async syncCalendars(property) {
        const results = [];
        
        // Sync Airbnb
        if (property.channels.airbnb.ical_url) {
            const airbnbReservations = await this.syncICalCalendar(
                property.channels.airbnb.ical_url, 
                'airbnb'
            );
            results.push({ platform: 'airbnb', reservations: airbnbReservations });
        }

        // Sync Booking.com
        if (property.channels.booking.ical_url) {
            const bookingReservations = await this.syncICalCalendar(
                property.channels.booking.ical_url, 
                'booking'
            );
            results.push({ platform: 'booking', reservations: bookingReservations });
        }

        // Sync Vrbo
        if (property.channels.vrbo.ical_url) {
            const vrboReservations = await this.syncICalCalendar(
                property.channels.vrbo.ical_url, 
                'vrbo'
            );
            results.push({ platform: 'vrbo', reservations: vrboReservations });
        }

        return results;
    }

    async syncICalCalendar(icalUrl, platform) {
        try {
            const response = await axios.get(icalUrl);
            const ical = require('ical');
            const data = ical.parseICS(response.data);
            
            const reservations = [];
            
            for (let k in data) {
                const event = data[k];
                if (event.type === 'VEVENT') {
                    reservations.push({
                        external_id: event.uid,
                        check_in: event.start,
                        check_out: event.end,
                        guest_name: event.summary || 'Reserva ' + platform,
                        source: platform
                    });
                }
            }

            return reservations;
        } catch (error) {
            console.error(`Error syncing ${platform}:`, error);
            return [];
        }
    }

    async checkForConflicts(propertyId, checkIn, checkOut) {
        const Reservation = require('../models/Reservation');
        
        const conflicts = await Reservation.find({
            property: propertyId,
            status: { $ne: 'cancelled' },
            $or: [
                {
                    check_in: { $lte: checkOut },
                    check_out: { $gte: checkIn }
                }
            ]
        });

        return conflicts.length > 0;
    }
}

// ====================================
// 🔄 AUTOMATIZACIONES Y CRON JOBS
// ====================================

// automations/AutomationEngine.js
class AutomationEngine {
    constructor() {
        this.messageService = new MessageService();
        this.smartLockService = new SmartLockService();
        this.stripeService = new StripeService();
        this.channelManager = new ChannelManagerService();
    }

    async processNewReservation(reservation) {
        try {
            console.log(`🔄 Procesando nueva reserva: ${reservation._id}`);

            // 1. Generar código de acceso
            if (reservation.property.smart_lock.is_active) {
                const codeResult = await this.smartLockService.generateAccessCode(
                    reservation.property.smart_lock.brand,
                    reservation.property.smart_lock.lock_id,
                    reservation.guest.name,
                    reservation.check_in,
                    reservation.check_out
                );

                if (codeResult.success) {
                    reservation.access_codes = {
                        nuki_code: codeResult.code,
                        generated_at: new Date(),
                        expires_at: codeResult.expires_at
                    };
                    await reservation.save();
                }
            }

            // 2. Solicitar fianza
            await this.requestSecurityDeposit(reservation);

            // 3. Programar mensajes automáticos
            await this.scheduleAutomaticMessages(reservation);

            console.log(`✅ Reserva procesada correctamente: ${reservation._id}`);
        } catch (error) {
            console.error('Error procesando reserva:', error);
        }
    }

    async requestSecurityDeposit(reservation) {
        const depositLink = `${process.env.FRONTEND_URL}/deposit/${reservation._id}`;
        
        await this.messageService.sendWhatsAppMessage(
            reservation.guest.phone,
            'deposit_request',
            { link: depositLink },
            reservation.guest.language
        );
    }

    async scheduleAutomaticMessages(reservation) {
        const cron = require('node-cron');
        
        // Mensaje de bienvenida (24h antes del check-in)
        const welcomeDate = new Date(reservation.check_in);
        welcomeDate.setHours(welcomeDate.getHours() - 24);
        
        cron.schedule(this.dateToCron(welcomeDate), async () => {
            await this.sendWelcomeMessage(reservation);
        });

        // Información de acceso (2h antes del check-in)
        const accessDate = new Date(reservation.check_in);
        accessDate.setHours(accessDate.getHours() - 2);
        
        cron.schedule(this.dateToCron(accessDate), async () => {
            await this.sendAccessInfo(reservation);
        });

        // Recordatorio de checkout
        const checkoutDate = new Date(reservation.check_out);
        checkoutDate.setHours(checkoutDate.getHours() - 2);
        
        cron.schedule(this.dateToCron(checkoutDate), async () => {
            await this.sendCheckoutReminder(reservation);
        });
    }

    async sendWelcomeMessage(reservation) {
        await this.messageService.sendWhatsAppMessage(
            reservation.guest.phone,
            'welcome',
            {
                name: reservation.guest.name,
                property: reservation.property.name,
                code: reservation.access_codes.nuki_code
            },
            reservation.guest.language
        );
    }

    async sendAccessInfo(reservation) {
        await this.messageService.sendWhatsAppMessage(
            reservation.guest.phone,
            'access_info',
            {
                code: reservation.access_codes.nuki_code,
                wifi_name: reservation.property.access_info.wifi_name,
                wifi_password: reservation.property.access_info.wifi_password
            },
            reservation.guest.language
        );
    }

    async sendCheckoutReminder(reservation) {
        await this.messageService.sendWhatsAppMessage(
            reservation.guest.phone,
            'checkout',
            {
                time: new Date(reservation.check_out).toLocaleTimeString()
            },
            reservation.guest.language
        );
    }

    dateToCron(date) {
        return `${date.getMinutes()} ${date.getHours()} ${date.getDate()} ${date.getMonth() + 1} *`;
    }
}

// ====================================
// 🖥️ SERVIDOR PRINCIPAL
// ====================================

// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const path = require('path');
require('dotenv').config();

const app = express();

// Middlewares
app.use(helmet());
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.static('public'));

// Conectar a MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('✅ Conectado a MongoDB');
}).catch(err => {
    console.error('❌ Error conectando a MongoDB:', err);
});

// Inicializar servicios
const StripeService = require('./services/StripeService');
const SmartLockService = require('./services/SmartLockService');
const MessageService = require('./services/MessageService');
const ChannelManagerService = require('./services/ChannelManagerService');
const AutomationEngine = require('./automations/AutomationEngine');

const stripeService = new StripeService();
const smartLockService = new SmartLockService();
const messageService = new MessageService();
const channelManager = new ChannelManagerService();
const automationEngine = new AutomationEngine();

// Importar modelos
const User = require('./models/User');
const Property = require('./models/Property');
const Reservation = require('./models/Reservation');
const Incident = require('./models/Incident');

// ====================================
// 🔐 RUTAS DE AUTENTICACIÓN
// ====================================

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Registro
app.post('/api/auth/register', async (req, res) => {
    try {
        const { email, password, name, phone } = req.body;
        
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'Usuario ya existe' });
        }

        const user = new User({ email, password, name, phone });
        await user.save();

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
        
        res.json({
            success: true,
            token,
            user: {
                id: user._id,
                email: user.email,
                name: user.name,
                plan: user.plan
            }
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Login
app.post('/api/auth/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        
        const user = await User.findOne({ email });
        if (!user || !(await user.comparePassword(password))) {
            return res.status(401).json({ error: 'Credenciales inválidas' });
        }

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
        
        res.json({
            success: true,
            token,
            user: {
                id: user._id,
                email: user.email,
                name: user.name,
                plan: user.plan
            }
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Middleware de autenticación
const authenticate = async (req, res, next) => {
    try {
        const token = req.header('Authorization')?.replace('Bearer ', '');
        if (!token) {
            return res.status(401).json({ error: 'Token requerido' });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.userId);
        if (!user) {
            return res.status(401).json({ error: 'Usuario no encontrado' });
        }

        req.user = user;
        next();
    } catch (error) {
        res.status(401).json({ error: 'Token inválido' });
    }
};

// ====================================
// 🏠 RUTAS DE PROPIEDADES
// ====================================

// Listar propiedades
app.get('/api/properties', authenticate, async (req, res) => {
    try {
        const properties = await Property.find({ owner: req.user._id });
        res.json({ success: true, properties });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Crear propiedad
app.post('/api/properties', authenticate, async (req, res) => {
    try {
        const propertyData = {
            ...req.body,
            owner: req.user._id
        };
        
        const property = new Property(propertyData);
        await property.save();
        
        res.json({ success: true, property });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Actualizar propiedad
app.put('/api/properties/:id', authenticate, async (req, res) => {
    try {
        const property = await Property.findOneAndUpdate(
            { _id: req.params.id, owner: req.user._id },
            req.body,
            { new: true }
        );
        
        if (!property) {
            return res.status(404).json({ error: 'Propiedad no encontrada' });
        }
        
        res.json({ success: true, property });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Sincronizar calendarios
app.post('/api/properties/:id/sync', authenticate, async (req, res) => {
    try {
        const property = await Property.findOne({ _id: req.params.id, owner: req.user._id });
        if (!property) {
            return res.status(404).json({ error: 'Propiedad no encontrada' });
        }
        
        const syncResults = await channelManager.syncCalendars(property);
        
        // Procesar nuevas reservas
        for (const result of syncResults) {
            for (const reservationData of result.reservations) {
                // Verificar si ya existe la reserva
                const existingReservation = await Reservation.findOne({
                    property: property._id,
                    external_id: reservationData.external_id
                });
                
                if (!existingReservation) {
                    const reservation = new Reservation({
                        ...reservationData,
                        property: property._id,
                        guest: {
                            name: reservationData.guest_name,
                            email: reservationData.guest_email || '',
                            phone: reservationData.guest_phone || '',
                            language: 'en'
                        }
                    });
                    
                    await reservation.save();
                    await reservation.populate('property');
                    
                    // Procesar automáticamente
                    await automationEngine.processNewReservation(reservation);
                }
            }
        }
        
        res.json({ success: true, syncResults });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// ====================================
// 📅 RUTAS DE RESERVAS
// ====================================

// Listar reservas
app.get('/api/reservations', authenticate, async (req, res) => {
    try {
        const properties = await Property.find({ owner: req.user._id });
        const propertyIds = properties.map(p => p._id);
        
        const reservations = await Reservation.find({
            property: { $in: propertyIds }
        }).populate('property').sort({ check_in: -1 });
        
        res.json({ success: true, reservations });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Crear reserva manual
app.post('/api/reservations', authenticate, async (req, res) => {
    try {
        const { propertyId, guest, check_in, check_out } = req.body;
        
        // Verificar que la propiedad pertenece al usuario
        const property = await Property.findOne({ _id: propertyId, owner: req.user._id });
        if (!property) {
            return res.status(404).json({ error: 'Propiedad no encontrada' });
        }
        
        // Verificar conflictos
        const hasConflicts = await channelManager.checkForConflicts(propertyId, check_in, check_out);
        if (hasConflicts) {
            return res.status(400).json({ error: 'Hay conflictos con otras reservas' });
        }
        
        const reservation = new Reservation({
            property: propertyId,
            guest,
            check_in,
            check_out,
            source: 'direct'
        });
        
        await reservation.save();
        await reservation.populate('property');
        
        // Procesar automáticamente
        await automationEngine.processNewReservation(reservation);
        
        res.json({ success: true, reservation });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Obtener detalles de reserva
app.get('/api/reservations/:id', authenticate, async (req, res) => {
    try {
        const reservation = await Reservation.findById(req.params.id).populate('property');
        
        if (!reservation) {
            return res.status(404).json({ error: 'Reserva no encontrada' });
        }
        
        // Verificar que la propiedad pertenece al usuario
        if (reservation.property.owner.toString() !== req.user._id.toString()) {
            return res.status(403).json({ error: 'Acceso denegado' });
        }
        
        res.json({ success: true, reservation });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// ====================================
// 💳 RUTAS DE FIANZAS (STRIPE)
// ====================================

// Crear fianza
app.post('/api/deposits/create', async (req, res) => {
    try {
        const { reservation_id, amount, currency } = req.body;
        
        const reservation = await Reservation.findById(reservation_id).populate('property');
        if (!reservation) {
            return res.status(404).json({ error: 'Reserva no encontrada' });
        }
        
        const result = await stripeService.createSecurityDeposit({
            amount,
            currency,
            guest: reservation.guest,
            reservationId: reservation_id
        });
        
        if (result.success) {
            // Actualizar reserva con información de fianza
            reservation.deposit = {
                stripe_payment_intent_id: result.payment_intent_id,
                amount,
                currency,
                status: 'pending'
            };
            await reservation.save();
        }
        
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Confirmar fianza
app.post('/api/deposits/confirm', async (req, res) => {
    try {
        const { reservation_id, payment_intent_id } = req.body;
        
        const reservation = await Reservation.findById(reservation_id);
        if (!reservation) {
            return res.status(404).json({ error: 'Reserva no encontrada' });
        }
        
        // Actualizar estado de fianza
        reservation.deposit.status = 'authorized';
        reservation.deposit.authorized_at = new Date();
        await reservation.save();
        
        // Programar liberación automática (48h después del checkout)
        const releaseDate = new Date(reservation.check_out);
        releaseDate.setHours(releaseDate.getHours() + 48);
        
        // Aquí programarías la liberación automática
        // scheduleAutoRelease(reservation_id, releaseDate);
        
        res.json({ success: true, message: 'Fianza autorizada correctamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Liberar fianza
app.post('/api/deposits/:reservationId/release', authenticate, async (req, res) => {
    try {
        const reservation = await Reservation.findById(req.params.reservationId).populate('property');
        
        if (!reservation) {
            return res.status(404).json({ error: 'Reserva no encontrada' });
        }
        
        // Verificar que la propiedad pertenece al usuario
        if (reservation.property.owner.toString() !== req.user._id.toString()) {
            return res.status(403).json({ error: 'Acceso denegado' });
        }
        
        const result = await stripeService.releaseDeposit(reservation.deposit.stripe_payment_intent_id);
        
        if (result.success) {
            reservation.deposit.status = 'released';
            reservation.deposit.released_at = new Date();
            await reservation.save();
        }
        
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// ====================================
// 🚨 RUTAS DE INCIDENCIAS
// ====================================

// Reportar incidencia
app.post('/api/incidents', authenticate, async (req, res) => {
    try {
        const { reservation_id, type, description, estimated_cost, evidence_photos } = req.body;
        
        const reservation = await Reservation.findById(reservation_id).populate('property');
        if (!reservation) {
            return res.status(404).json({ error: 'Reserva no encontrada' });
        }
        
        // Verificar que la propiedad pertenece al usuario
        if (reservation.property.owner.toString() !== req.user._id.toString()) {
            return res.status(403).json({ error: 'Acceso denegado' });
        }
        
        // Crear incidencia
        const incident = new Incident({
            reservation: reservation_id,
            property: reservation.property._id,
            type,
            description,
            estimated_cost,
            evidence_photos
        });
        
        await incident.save();
        
        // Cobrar daños inmediatamente
        const chargeAmount = Math.min(estimated_cost, reservation.deposit.amount);
        
        const chargeResult = await stripeService.chargeDamages(
            reservation.deposit.stripe_payment_intent_id,
            chargeAmount,
            description
        );
        
        if (chargeResult.success) {
            // Actualizar incidencia
            incident.status = 'charged';
            incident.charged_amount = chargeAmount;
            incident.charged_at = new Date();
            await incident.save();
            
            // Actualizar reserva
            reservation.deposit.status = 'captured';
            await reservation.save();
            
            // Notificar al huésped
            await messageService.sendWhatsAppMessage(
                reservation.guest.phone,
                'damage_charge',
                {
                    amount: chargeAmount,
                    currency: reservation.deposit.currency,
                    description: description
                },
                reservation.guest.language
            );
        }
        
        res.json({ success: true, incident, charged: chargeResult.success });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Listar incidencias
app.get('/api/incidents', authenticate, async (req, res) => {
    try {
        const properties = await Property.find({ owner: req.user._id });
        const propertyIds = properties.map(p => p._id);
        
        const incidents = await Incident.find({
            property: { $in: propertyIds }
        }).populate(['reservation', 'property']);
        
        res.json({ success: true, incidents });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// ====================================
// 🔑 RUTAS DE CÓDIGOS DE ACCESO
// ====================================

// Generar nuevo código
app.post('/api/access-codes/generate', authenticate, async (req, res) => {
    try {
        const { reservation_id } = req.body;
        
        const reservation = await Reservation.findById(reservation_id).populate('property');
        if (!reservation) {
            return res.status(404).json({ error: 'Reserva no encontrada' });
        }
        
        // Verificar que la propiedad pertenece al usuario
        if (reservation.property.owner.toString() !== req.user._id.toString()) {
            return res.status(403).json({ error: 'Acceso denegado' });
        }
        
        if (!reservation.property.smart_lock.is_active) {
            return res.status(400).json({ error: 'Smart lock no configurado' });
        }
        
        const result = await smartLockService.generateAccessCode(
            reservation.property.smart_lock.brand,
            reservation.property.smart_lock.lock_id,
            reservation.guest.name,
            reservation.check_in,
            reservation.check_out
        );
        
        if (result.success) {
            reservation.access_codes = {
                nuki_code: result.code,
                generated_at: new Date(),
                expires_at: result.expires_at
            };
            await reservation.save();
        }
        
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// ====================================
// 💬 RUTAS DE MENSAJES
// ====================================

// Enviar mensaje manual
app.post('/api/messages/send', authenticate, async (req, res) => {
    try {
        const { reservation_id, message_type, custom_message } = req.body;
        
        const reservation = await Reservation.findById(reservation_id).populate('property');
        if (!reservation) {
            return res.status(404).json({ error: 'Reserva no encontrada' });
        }
        
        // Verificar que la propiedad pertenece al usuario
        if (reservation.property.owner.toString() !== req.user._id.toString()) {
            return res.status(403).json({ error: 'Acceso denegado' });
        }
        
        let result;
        
        if (custom_message) {
            // Mensaje personalizado
            result = await messageService.sendWhatsAppMessage(
                reservation.guest.phone,
                'custom',
                { message: custom_message },
                reservation.guest.language
            );
        } else {
            // Mensaje predefinido
            const variables = {
                name: reservation.guest.name,
                property: reservation.property.name,
                code: reservation.access_codes?.nuki_code,
                wifi_name: reservation.property.access_info?.wifi_name,
                wifi_password: reservation.property.access_info?.wifi_password
            };
            
            result = await messageService.sendWhatsAppMessage(
                reservation.guest.phone,
                message_type,
                variables,
                reservation.guest.language
            );
        }
        
        // Registrar mensaje enviado
        if (result.success) {
            reservation.messages_sent.push({
                type: message_type || 'custom',
                sent_at: new Date(),
                platform: 'whatsapp'
            });
            await reservation.save();
        }
        
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// ====================================
// 📊 RUTAS DE ANALYTICS
// ====================================

// Dashboard stats
app.get('/api/analytics/dashboard', authenticate, async (req, res) => {
    try {
        const properties = await Property.find({ owner: req.user._id });
        const propertyIds = properties.map(p => p._id);
        
        // Stats básicas
        const totalProperties = properties.length;
        
        const totalReservations = await Reservation.countDocuments({
            property: { $in: propertyIds }
        });
        
        const activeReservations = await Reservation.countDocuments({
            property: { $in: propertyIds },
            status: { $in: ['confirmed', 'checked_in'] },
            check_in: { $lte: new Date() },
            check_out: { $gte: new Date() }
        });
        
        const totalDepositsAuthorized = await Reservation.aggregate([
            {
                $match: {
                    property: { $in: propertyIds },
                    'deposit.status': 'authorized'
                }
            },
            {
                $group: {
                    _id: null,
                    total: { $sum: '$deposit.amount' }
                }
            }
        ]);
        
        const messagesSent = await Reservation.aggregate([
            {
                $match: {
                    property: { $in: propertyIds }
                }
            },
            {
                $project: {
                    messageCount: { $size: '$messages_sent' }
                }
            },
            {
                $group: {
                    _id: null,
                    total: { $sum: '$messageCount' }
                }
            }
        ]);
        
        const incidents = await Incident.countDocuments({
            property: { $in: propertyIds }
        });
        
        res.json({
            success: true,
            stats: {
                totalProperties,
                totalReservations,
                activeReservations,
                totalDepositsAuthorized: totalDepositsAuthorized[0]?.total || 0,
                messagesSent: messagesSent[0]?.total || 0,
                incidents
            }
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// ====================================
// 💰 RUTAS DE SUSCRIPCIONES
// ====================================

// Crear suscripción
app.post('/api/subscriptions/create', authenticate, async (req, res) => {
    try {
        const { plan } = req.body;
        
        const priceIds = {
            basic: 'price_basic_plan_id',
            pro: 'price_pro_plan_id',
            enterprise: 'price_enterprise_plan_id'
        };
        
        const priceId = priceIds[plan];
        if (!priceId) {
            return res.status(400).json({ error: 'Plan inválido' });
        }
        
        // Crear customer en Stripe si no existe
        let customerId = req.user.subscription?.stripe_customer_id;
        
        if (!customerId) {
            const customer = await stripeService.stripe.customers.create({
                email: req.user.email,
                name: req.user.name,
                metadata: {
                    user_id: req.user._id.toString()
                }
            });
            customerId = customer.id;
        }
        
        const result = await stripeService.createSubscription(customerId, priceId);
        
        if (result.success) {
            // Actualizar usuario
            req.user.plan = plan;
            req.user.subscription = {
                stripe_customer_id: customerId,
                stripe_subscription_id: result.subscription_id,
                status: 'active'
            };
            await req.user.save();
        }
        
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// ====================================
// 🔗 WEBHOOKS
// ====================================

// Webhook de Stripe
app.post('/webhook/stripe', express.raw({type: 'application/json'}), async (req, res) => {
    const sig = req.headers['stripe-signature'];
    let event;
    
    try {
        event = stripeService.stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
    } catch (err) {
        console.log(`Webhook signature verification failed.`, err.message);
        return res.status(400).send(`Webhook Error: ${err.message}`);
    }
    
    switch (event.type) {
        case 'payment_intent.succeeded':
            const paymentIntent = event.data.object;
            if (paymentIntent.metadata.type === 'security_deposit') {
                // Actualizar estado de fianza
                const reservation = await Reservation.findById(paymentIntent.metadata.reservation_id);
                if (reservation) {
                    reservation.deposit.status = 'authorized';
                    reservation.deposit.authorized_at = new Date();
                    await reservation.save();
                }
            }
            break;
            
        case 'invoice.payment_succeeded':
            const invoice = event.data.object;
            // Manejar pago de suscripción exitoso
            break;
            
        case 'customer.subscription.deleted':
            const subscription = event.data.object;
            // Manejar cancelación de suscripción
            const user = await User.findOne({ 'subscription.stripe_subscription_id': subscription.id });
            if (user) {
                user.subscription.status = 'canceled';
                await user.save();
            }
            break;
            
        default:
            console.log(`Unhandled event type ${event.type}`);
    }
    
    res.json({received: true});
});

// ====================================
// 🌐 FRONTEND ESTÁTICO
// ====================================

// Página de fianza
app.get('/deposit/:reservationId', async (req, res) => {
    try {
        const reservation = await Reservation.findById(req.params.reservationId).populate('property');
        if (!reservation) {
            return res.status(404).send('Reserva no encontrada');
        }
        
        const html = `
        <!DOCTYPE html>
        <html lang="${reservation.guest.language || 'en'}">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Confirmar Fianza - ${reservation.property.name}</title>
            <script src="https://js.stripe.com/v3/"></script>
            <style>
                * { margin: 0; padding: 0; box-sizing: border-box; }
                body { font-family: 'Inter', sans-serif; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); min-height: 100vh; display: flex; align-items: center; justify-content: center; }
                .container { background: white; border-radius: 20px; padding: 40px; max-width: 500px; width: 90%; box-shadow: 0 20px 40px rgba(0,0,0,0.1); }
                h1 { color: #333; margin-bottom: 10px; }
                .amount { font-size: 2rem; color: #667eea; font-weight: bold; margin-bottom: 20px; }
                .deposit-form { margin-top: 30px; }
                #card-element { background: #f8f9fa; padding: 15px; border-radius: 10px; border: 2px solid #e9ecef; margin-bottom: 20px; }
                .btn { background: linear-gradient(135deg, #667eea, #764ba2); color: white; border: none; padding: 15px 30px; border-radius: 10px; font-size: 1rem; cursor: pointer; width: 100%; margin-top: 20px; }
                .btn:disabled { opacity: 0.6; cursor: not-allowed; }
                .terms { background: #f8f9fa; padding: 15px; border-radius: 10px; margin: 20px 0; font-size: 0.9rem; }
                .error { color: #dc3545; margin-top: 10px; }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>🛡️ Confirmar Fianza</h1>
                <div class="amount">${reservation.property.pricing.deposit_amount}${reservation.property.pricing.currency}</div>
                <p><strong>Reserva:</strong> ${reservation.property.name}</p>
                <p><strong>Huésped:</strong> ${reservation.guest.name}</p>
                <p><strong>Check-in:</strong> ${new Date(reservation.check_in).toLocaleDateString()}</p>
                
                <div class="terms">
                    <h4>📋 Términos de la Fianza:</h4>
                    <ul>
                        <li>✅ Solo pre-autorización (no se cobra ahora)</li>
                        <li>✅ Se libera automáticamente en 48h si no hay daños</li>
                        <li>🚨 Se cobra inmediatamente si hay daños confirmados</li>
                    </ul>
                </div>
                
                <form id="deposit-form" class="deposit-form">
                    <div id="card-element"></div>
                    <div id="card-errors" class="error"></div>
                    <button type="submit" id="submit-button" class="btn">
                        🔒 Autorizar Fianza
                    </button>
                </form>
            </div>
            
            <script>
                const stripe = Stripe('${process.env.STRIPE_PUBLISHABLE_KEY}');
                const elements = stripe.elements();
                const cardElement = elements.create('card');
                cardElement.mount('#card-element');
                
                const form = document.getElementById('deposit-form');
                const submitButton = document.getElementById('submit-button');
                
                form.addEventListener('submit', async (e) => {
                    e.preventDefault();
                    submitButton.disabled = true;
                    submitButton.textContent = '⏳ Procesando...';
                    
                    try {
                        const response = await fetch('/api/deposits/create', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({
                                reservation_id: '${reservation._id}',
                                amount: ${reservation.property.pricing.deposit_amount},
                                currency: '${reservation.property.pricing.currency}'
                            })
                        });
                        
                        const {client_secret, error} = await response.json();
                        if (error) throw new Error(error);
                        
                        const {error: confirmError} = await stripe.confirmCardPayment(client_secret, {
                            payment_method: {
                                card: cardElement,
                                billing_details: {
                                    name: '${reservation.guest.name}',
                                    email: '${reservation.guest.email}'
                                }
                            }
                        });
                        
                        if (confirmError) throw new Error(confirmError.message);
                        
                        // Confirmar en backend
                        await fetch('/api/deposits/confirm', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({
                                reservation_id: '${reservation._id}',
                                payment_intent_id: client_secret.split('_secret_')[0]
                            })
                        });
                        
                        // Mostrar éxito
                        document.body.innerHTML = \`
                            <div class="container" style="text-align: center;">
                                <h1 style="color: #28a745;">✅ Fianza Autorizada</h1>
                                <p>Tu fianza ha sido autorizada correctamente.</p>
                                <p>Recibirás tu código de acceso por WhatsApp.</p>
                            </div>
                        \`;
                        
                    } catch (error) {
                        document.getElementById('card-errors').textContent = error.message;
                        submitButton.disabled = false;
                        submitButton.textContent = '🔒 Autorizar Fianza';
                    }
                });
            </script>
        </body>
        </html>
        `;
        
        res.send(html);
    } catch (error) {
        res.status(500).send('Error del servidor');
    }
});

// Servir la landing page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// ====================================
// 🚀 INICIAR SERVIDOR
// ====================================

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
    console.log(`🌐 Frontend: http://localhost:${PORT}`);
    console.log(`🔧 API: http://localhost:${PORT}/api`);
});

// ====================================
// 📁 ARCHIVOS ADICIONALES NECESARIOS
// ====================================

/*
ESTRUCTURA DE CARPETAS:

airhost-assistant/
├── package.json
├── .env
├── server.js
├── models/
│   ├── User.js
│   ├── Property.js
│   ├── Reservation.js
│   └── Incident.js
├── services/
│   ├── StripeService.js
│   ├── SmartLockService.js
│   ├── MessageService.js
│   └── ChannelManagerService.js
├── automations/
│   └── AutomationEngine.js
└── public/
    ├── index.html (landing page)
    ├── dashboard.html
    └── assets/
        ├── css/
        └── js/

COMANDOS PARA CONFIGURAR:

1. npm init -y
2. npm install express stripe node-cron axios nodemailer mongoose bcryptjs jsonwebtoken cors helmet dotenv multer cloudinary ical moment twilio
3. npm install --save-dev nodemon
4. Configurar .env con tus tokens
5. node server.js

ENDPOINTS PRINCIPALES:

Auth:
- POST /api/auth/register
- POST /api/auth/login

Properties:
- GET /api/properties
- POST /api/properties
- PUT /api/properties/:id
- POST /api/properties/:id/sync

Reservations:
- GET /api/reservations
- POST /api/reservations
- GET /api/reservations/:id

Deposits:
- POST /api/deposits/create
- POST /api/deposits/confirm
- POST /api/deposits/:id/release

Incidents:
- POST /api/incidents
- GET /api/incidents

Messages:
- POST /api/messages/send

Analytics:
- GET /api/analytics/dashboard

Webhooks:
- POST /webhook/stripe

Frontend:
- GET / (landing page)
- GET /deposit/:reservationId (página de fianza)

*/