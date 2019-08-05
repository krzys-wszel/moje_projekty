 


  
 $('body').mouseover(function() {
	$(this).css({
	  cursor: 'none'
	});
  });
  
  $(document).on('mousemove', function(e) {
	$('#circle-big').css({
	  left: e.pageX,
	  top: e.pageY
	});
	$('#circle').css({
	  left: e.pageX,
	  top: e.pageY
	});

});

 document.addEventListener( 'mouseenter', ( { target } ) => {
 	if ( target && target.matches && target.matches( 'a, button' ) ) {
 		$('#circle-big').css({
			 transform: 'scale(1.5)',
			// width: '100px',
			// height: '100px',
			 
		 });
 	}
 }, true );

 document.addEventListener( 'mouseleave', ( { target } ) => {
	if ( target && target.matches && target.matches( 'a, button' ) ) {
		$('#circle-big').css({
			transform: 'scale(1)',
		//	width: '60px',
		//	height: '60px',
		});
	}
}, true );
  
 