
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


    // $('.ml2').each(function(){
    // $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
});

