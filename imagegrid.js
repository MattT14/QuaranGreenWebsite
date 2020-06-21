$(function() {
			
    $( '#ri-grid' ).gridrotator( {
        animSpeed : 300,
        animType : 'rotateBottom',
        w320 : {
            rows : 3,
            columns : 4
        },
        w240 : {
            rows : 3,
            columns : 3
        },
        slideshow : false,
        onhover : true
    } );

});