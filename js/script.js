$(document).ready(function(){
 // put your code here

/* $(".theButton").click(function(){
     $("#panel .container").siblings().hide();
 })*/

 /*$(".theButton").click(function(){
     $(this).hide();
 })*/

 $(".theButton").click(function(){
     $("#panel .container").siblings().fadeTo("slow", 0.5);
 })

 $(".superButton").click(function(){
     $("#panel .container").siblings().fadeTo("fast", 1);
 })
});