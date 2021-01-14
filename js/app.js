$(document).ready(function(){
    
  $('#loading').fadeOut(2000,function(){
      $('body').css('overflow','visible')
      new WOW().init();
  })
  
})
let elements={
  all:[
   {
     img:'sweets-1.jpeg',
     info:"Sweet Item"
   },
   {
    img:'sweets-2.jpeg',
    info:"Sweet Item"
  },
  {
    img:'sweets-3.jpeg',
    info:"Sweet Item"
  },
  {
    img:'cupcake-1.jpeg',
    info:"Cupcake Item"
  },
  {
   img:'cupcake-2.jpeg',
   info:"Cupcake Item"
 },
 {
   img:'cake-1.jpeg',
   info:"Cake Item"
 },
 {
  img:'cake-2.jpeg',
  info:"Cake Item"
},
{
 img:'doughnut-2.jpeg',
 info:"Doughnut Item"
},
{
 img:'doughnut-1.jpeg',
 info:"Doughnut Item"
}
  ],
  sweet:[
    {
      img:'sweets-1.jpeg',
      info:"Sweet Item"
    },
    {
     img:'sweets-2.jpeg',
     info:"Sweet Item"
   },
   {
     img:'sweets-3.jpeg',
     info:"Sweet Item"
   }
  ],
  cupcake:[
    {
      img:'cupcake-1.jpeg',
      info:"Cupcake Item"
    },
    {
     img:'cupcake-2.jpeg',
     info:"Cupcake Item"
   }
  ],
  cake:[
    {
      img:'cake-1.jpeg',
      info:"Cake Item"
    },
    {
     img:'cake-2.jpeg',
     info:"Cake Item"
   }
  ],
  doughnut:[
    {
      img:'doughnut-2.jpeg',
      info:"Doughnut Item"
     },
     {
      img:'doughnut-1.jpeg',
      info:"Doughnut Item"
     }
  ]
}
document.getElementById("hi").addEventListener("click", function() {
  const cart = document.getElementById("card");
  cart.classList.toggle("h");
  console.log(cart);
});
$(function () {
  'use strict';
  var winH   = $(window).height(),
      navH   = $('.navbar').innerHeight();
  $('.head').height(winH-navH);
});

$(window).scroll(function(){
  if($(window).scrollTop() > 600){
      $('#Top').css('display','flex')
      $('.navbar').addClass('navMove')
  }else{
      $('#Top').css('display','none')
      $('.navbar').removeClass('navMove')
  }
})
/////////////////
$('#Top').click(function(){
  $('html,body').animate({scrollTop:0},2000)
})

$(".nav-link").click(function(){
  let targetElementId=$(this).attr("href")
  let targetElementDistanceToTop=$(targetElementId).offset().top
  $('html,body').animate({ scrollTop:targetElementDistanceToTop },1000)
})

function display(arr){

  $('#Store .row').html('')
  
  arr.forEach(ele=>{
      $('#Store .row').append(`<div class=" col-lg-4 col-md-6 mb-2 hide" >
                                    <div class="item">
                                    <div class="emg">
                                      <a href="">
                                        <img src="img/${ele.img}" class="img-fluid" alt="">
                                      </a>
                                      <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                                    </div>
                                    <div class="pack">
                                      <span>${ele.info}</span>
                                      <span>$5</span>
                                    </div>
                               </div>`)
      
  })
   $('#Store .row > div').fadeIn(2000)
  
}
  
$('#all').click(function(event){
      event.preventDefault();
      display(elements.all)
})
  
$('#sweets').click(function(event){
      event.preventDefault();
      display(elements.sweet)
})
  
$('#cakes').click(function(event){
      event.preventDefault();
      display(elements.cake)
})

$('#cupcakes').click(function(event){
    event.preventDefault();
    display(elements.cupcake)
})

$('#doughnuts').click(function(event){
  event.preventDefault();
  display(elements.doughnut)
})