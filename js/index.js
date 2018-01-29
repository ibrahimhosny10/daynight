jQuery(document).ready(function(){
	$('.dayopen').on('click', function(e) {
		var href, target;e.preventDefault();
		target = $(this).data('target');
		href = "#" + target;
		$("#" + target).fadeIn().addClass('activeday');
		return $(document).scrollTop(0);
	});
	return $('.dayclose').on('click', function(e) {e.preventDefault();
		return $('.activeday').fadeOut().removeClass('activeday');
	});
});