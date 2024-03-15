$(function (){
    $( "#slider-price" ).slider({
        range: "max",
        min:0,
        max: 3000,
        value: 0,
        slide: function( event, ui ) {
            // $( "#amount" ).val( ui.value );
        }
    });
    // $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
    //     " - $" + $( "#slider-range" ).slider( "values", 1 ) );
    $( "#slider-percentage" ).slider({
        range: "max",
        min:0,
        max: 100,
        value: 0,
        slide: function( event, ui ) {
            // $( "#amount" ).val( ui.value );
        }
    });
    $( "#slider-speed" ).slider({
        range: "max",
        min:0,
        max: 300,
        value: 0,
        slide: function( event, ui ) {
            // $( "#amount" ).val( ui.value );
        }
    });
    $( "#datepicker" ).datepicker();
})