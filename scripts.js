$(document).ready(function(){
	$(".pressMeButton").on('click', function(){
		$(this).parent().toggleClass('addBackgroundColor');
		$(this).parent().find('h3').toggleClass('makeBigger');
		console.log('I just ran');
	});

	$('.make-words').on('click', function(){
		$('.word-box').load("sometext.html", function(){
			console.log("IT SHOULD HAVE LOADED");
		});
	})
});

