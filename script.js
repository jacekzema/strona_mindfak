$(document).ready(function () 
{
    $(".cross").hide();
    $(".menu").hide();
    $( ".hamburger" ).click(function() 
	{
		$( ".menu" ).slideToggle( "slow", function() 
        {
		  $( ".hamburger" ).fadeOut(50);
		  $( ".cross" ).show(120);
		});
    });
        $( ".cross" ).click(function() 
	{
		$( ".menu" ).slideToggle( "slow", function() 
        {
		  $( ".cross" ).fadeOut(50);
		  $( ".hamburger" ).show(120);
		});
    });
});