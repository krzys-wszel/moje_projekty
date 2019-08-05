 


const root = document.documentElement;
 root.style.cursor = 'none';
document.addEventListener( 'mousemove', ( { pageX, pageY } ) => {
	root.style.setProperty( '--cursorX', `${ pageX }px` );
	root.style.setProperty( '--cursorY', `${ pageY }px` );
} );

document.addEventListener( 'mouseenter', ( { target } ) => {
	if ( target && target.matches && target.matches( 'a, button' ) ) {
		root.style.setProperty( '--cursorScale', 1.5 );
		root.style.setProperty( '--cursorOpacity', 0 );
   }
}, true );
document.addEventListener( 'mouseleave', ( { relatedTarget } ) => {
	if ( relatedTarget && relatedTarget.matches && !relatedTarget.matches( 'a, button' ) ) {
		root.style.setProperty( '--cursorScale', 1 );
		root.style.setProperty( '--cursorOpacity', 1 );
	}
}, true );

  
 