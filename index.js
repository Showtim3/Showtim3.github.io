
$(document).ready(function(){
    console.log("Hi");
    $('.carousel').carousel({
        full_width:true,
        indicators:true,
        numVisible:1,
    });
    $('.scrollspy').scrollSpy();
    $('.modal').modal();
    $('.tooltipped').tooltip();
    $('.sidenav').sidenav();
    $('.collapsible').collapsible();

    // $('.ml2').each(function(){
    // $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
});
$(window).on('load',function() {
    // executes when complete page is fully loaded, including all frames, objects and images
    // $('#portfolio').style.display = 'block';
    // $('#introBox').style.display = 'none';

    setTimeout(() =>{
    // $('#introBox').hide();
    $('#introBox').fadeOut('slow');

    $('#portfolio').show();
    console.log('Done')},
        4000)

});
