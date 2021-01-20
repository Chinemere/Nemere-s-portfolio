$(document).ready(function(){
    $(".scrollspy").scrollSpy();
   })

   $( document).ready (function(){
    $(".me").slideUp(2000).slideDown(2000)
})
 
   $( document).ready (function(){
       $(".me").hover(function(){
           $(this).attr("src", "blog.png")
       }, function(){
           $(this).attr("src", "chinemere-pics.jpg")
       })
   })

  

//    $(document).ready(function(){
//     $("p").hover(function(){
//       $(this).css("background-color", "yellow");
//       }, function(){
//       $(this).css("background-color", "pink");
//     });
//   });