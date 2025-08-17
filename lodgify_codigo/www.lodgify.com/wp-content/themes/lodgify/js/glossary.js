var autocomplete_js_class_list = [
	'.glossary-form-field',
	'.js-glossary-form-field-no-found',
	'.js-glossary-form-field-archive',
]

for(var autocomplete_js_class of autocomplete_js_class_list)
{
	if(document.querySelector(autocomplete_js_class))
	{
		new autoComplete({
			selector: autocomplete_js_class,
			threshold: 3,
			data: {
				src: async () => {
					var source = await fetch(LgfGlossary.glossary, {
						headers: {
							'Content-Type': 'application/json',
							'Cache-Control': 'no-cache',
						},
					});
					var data = await source.json();

					data = data.filter((data) => {
						return data.disable_link == false;
					});

					return data;
				},
				cache: false,
				key: ['post_title'],
			},
			resultItem: {
				content: (data, source) => {
					var catName = '';
					if(data.value.category_title)
					{
						catName = ' <span class="cat-name"> - ' + data.value.category_title + '</span>';
					}
					source.innerHTML = '<a target="_blank" href="' + data.value.post_link + '">' + data.value.post_title + catName + '</a>';
				},
				element: "li"
			},
		});
	}
}

jQuery(document).ready(function()
{
	glossary_search( new URLSearchParams(location.search).get('search') );

	// jQuery('.js-glossary-form-field').keypress(function(event){
	// 	if(event.keyCode == 13){
	// 		$('.glossary-form-btn').click();
	// 	}
	// });

	jQuery('body').on('submit', '.glossary-form', function(e)
	{
		e.preventDefault();

		var slugs = location.pathname
			.split('/')
			.filter(item => item);
		var search_text = jQuery(this).find('.glossary-form-field').val();

		if(slugs.length > 1)
		{
			location.href = jQuery(this).attr('action') + '?search=' + search_text
		}
		else
		{
			history.pushState({
				search: search_text
			}, 'Glossary Archive - Lodgify', '?search=' + search_text);

			glossary_search(search_text);
		}
	});
});


function glossary_search(search_text)
{
	if(search_text)
	{
		jQuery('.glossary-form-field').val( search_text );
		jQuery('.js-place-glossary-search-text').text( search_text );

		search_text = search_text.toLowerCase();

		jQuery.get(LgfGlossary.glossary, function(posts){
			posts = posts.filter(function(post)
			{
				if(post.post_title.toLowerCase().indexOf(search_text) !== -1)
				{
					return true;
				}
				if(post.category_title.toLowerCase().indexOf(search_text) !== -1)
				{
					return true;
				}
				if(post.excerpt.toLowerCase().indexOf(search_text) !== -1)
				{
					return true;
				}
				return false;
			});
console.log(search_text, posts)
			jQuery('.js-place-glossary-preaload').hide();
			jQuery('.js-place-glossary-archive').hide();
			jQuery('.js-place-glossary-search').show();
			jQuery('.js-place-glossary-list').html('');

			if(posts.length)
			{
				jQuery('.js-place-glossary-search-found').show();
				jQuery('.js-place-glossary-search-no-found').hide();

				var content = '';
				for(var post of posts)
				{
					var tag_open = post.disable_link ? 'div' : 'a href="' + post.post_link + '"';
					var tag_close = post.disable_link ? 'div' : 'a';

					content += '<'+ tag_open +' class="glossary-term-item">' +
						'<h4 class="h5">' + post.post_title + '</h4>' +
						'<div class="g-term-excerpt lh-13">'+
							post.excerpt +
							( post.disable_link == false ? '<span class="link-read-more text-underline">'+ LgfGlossary.read_more_text +'</span>' : '' ) +
						'</div>' +
					'</'+ tag_close +'>';
				}
				jQuery('.js-place-glossary-list').html(content);
			}
			else
			{
				jQuery('.js-place-glossary-search-found').hide();
				jQuery('.js-place-glossary-search-no-found').show();
			}

		}, 'json');
	}
	else
	{
		jQuery('.js-place-glossary-preaload').hide();
		jQuery('.js-place-glossary-archive').show();
	}
}


/*
new autoComplete({
	selector: '.glossary-form-field',
	threshold: 3,
	data: {
		src: async () => {
			var source = await fetch(LgfGlossary.glossary, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
					'Cache-Control': 'no-cache',
				},
				body: new URLSearchParams({
					term: document.querySelector('.glossary-form-field').value,
					action: LgfGlossary.action,
					security: LgfGlossary.security,
				}),
			});

			var data = await source.json();
			if(data.success == false)
			{
				console.log(data.data.message);
				return [];
			}

			return data.data || [];
		},
		cache: false,
		key: ['category_title', 'post_title'],
	},
	resultItem: {
		content: (data, source) => {
			var catName = '';
			if(data.value.category_title)
			{
				catName = ' <span class="cat-name"> - ' + data.value.category_title + '</span></a>';
			}
			source.innerHTML = '<a target="_blank" href="' + data.value.post_link + '">' + data.value.post_title + catName;
		},
		element: "li"
	},
});
*/