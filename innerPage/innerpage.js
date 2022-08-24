$(document).ready(function(){
    $(".scrollspy").scrollSpy();
   })

//    $( document).ready (function(){
//     $(".me").slideUp(2000).slideDown(2000)
// })
 
//    $( document).ready (function(){
//        $(".me").hover(function(){
//            $(this).attr("src", "blog.png")
//        }, function(){
//            $(this).attr("src", "chinemere-pics.jpg")
//        })
//    })

  AOS.init();
  

//    $(document).ready(function(){
//     $("p").hover(function(){
//       $(this).css("background-color", "yellow");
//       }, function(){
//       $(this).css("background-color", "pink");
//     });
//   });

var i = 0;
var txt = 'Get To Know Me';
var speed = 200;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("get-to-know-me").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter()

var i2 = 0;
var txt2 = 'My project';
var speed2 = 200;

function typeWriter2() {
    if (i2 < txt2.length) {
      document.getElementById("my-project").innerHTML += txt2.charAt(i2);
      i2++;
      setTimeout(typeWriter2, speed2);
    }
}
typeWriter2()

var i3 = 0;
var txt3 = 'Technologies that I use';
var speed3 = 200;

function typeWriter3() {
    if (i3 < txt3.length) {
      document.getElementById("technologies").innerHTML += txt3.charAt(i3);
      i3++;
      setTimeout(typeWriter3, speed3);
    }
}
typeWriter3()



function copywriteYear(){
  let date = new Date()
  let year = date.getFullYear()
  return year

}
let copywriteYearText = document.getElementById("year")
copywriteYearText.innerHTML=copywriteYear()








  
// function myFunction() {
//     if (document.body.scrollTop > 850 || document.documentElement.scrollTop > 850) {
//         var ee = document.getElementById("my-project");
//         ee.onload = typeWriter2()
//         alert( "Scroll top is"+ " " + document.body.scrollTop)
//     }
//     else{
        
//     }
//   }

//   window.onscroll = function() {
//     myFunction()
// };