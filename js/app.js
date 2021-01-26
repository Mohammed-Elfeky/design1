$(document).ready(function(){
    
  $('#loading').fadeOut(2000,function(){
      $('body').css('overflow','visible')
      new WOW().init();
  })
  
})
let basket=[]
let total=0

let elements={
  all:[
   {
     img:'sweets-1.jpeg',
     info:"Sweet Item",
     id:1
   },
   {
    img:'sweets-2.jpeg',
    info:"Sweet Item",
    id:2
  },
  {
    img:'sweets-3.jpeg',
    info:"Sweet Item",
    id:3
  },
  {
    img:'cupcake-1.jpeg',
    info:"Cupcake Item",
    id:4
  },
  {
   img:'cupcake-2.jpeg',
   info:"Cupcake Item",
   id:5
 },
 {
   img:'cake-1.jpeg',
   info:"Cake Item",
   id:6
 },
 {
  img:'cake-2.jpeg',
  info:"Cake Item",
  id:7
},
{
 img:'doughnut-2.jpeg',
 info:"Doughnut Item",
 id:8
},
{
 img:'doughnut-1.jpeg',
 info:"Doughnut Item",
 id:9
}
  ],
  sweet:[
    {
      img:'sweets-1.jpeg',
      info:"Sweet Item",
      id:1
    },
    {
     img:'sweets-2.jpeg',
     info:"Sweet Item",
     id:2
   },
   {
     img:'sweets-3.jpeg',
     info:"Sweet Item",
     id:3
   }
  ],
  cupcake:[
    {
      img:'cupcake-1.jpeg',
      info:"Cupcake Item",
      id:4
    },
    {
     img:'cupcake-2.jpeg',
     info:"Cupcake Item",
     id:5
   }
  ],
  cake:[
    {
      img:'cake-1.jpeg',
      info:"Cake Item",
      id:6
    },
    {
     img:'cake-2.jpeg',
     info:"Cake Item",
     id:7
   }
  ],
  doughnut:[
    {
      img:'doughnut-2.jpeg',
      info:"Doughnut Item",
      id:8
     },
     {
      img:'doughnut-1.jpeg',
      info:"Doughnut Item",
      id:9
     }
  ]
}
display(elements.all)

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
  console.log('nice')

  $('#Store .row').html('')
  
  arr.forEach(ele=>{
      $('#Store .row').append(`<div class=" col-lg-4 col-md-6 mb-2 hide" >
                                    <div class="item">
                                    <div class="emg">
                                      <a href="">
                                        <img src="img/${ele.img}" class="img-fluid" alt="">
                                      </a>
                                      <i onclick="whenAdd(event)"  id="${ele.id}" data-price="${5}" data-title="${ele.info}" data-photo="img/${ele.img}" href=""  class="fa fa-shopping-cart add" aria-hidden="true"></i>
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
  console.log('hi')
      event.preventDefault();
      console.log(elements.sweet)
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


$('.shopping-card i').click(function(){
  $('#popup').css('display','none')
})
$('#hi').click(function(){
  $('#popup').css('display','flex')
})


$('.price').click(function(event){
  event.preventDefault()
})
////////////////////////////////////////////////////


function whenAdd(event){
  const product=event.target
  add(product)
  show()
  changeAndShowTotal()
}
function remove(id){
    
    removing=basket.filter(ele=>{
        return ele.id !== id.toString()
    })
    basket=removing
    show()
    changeAndShowTotal()
}

function add(product){

    const productObject={
        id:product.getAttribute('id'),
        price:parseInt(product.getAttribute("data-price")),
        title:product.getAttribute("data-title"),
        photo:product.getAttribute('data-photo'),
        quantity:1,
        totalPrice:parseInt(product.getAttribute("data-price"))
    }

    // if the product is already in the basket dont add it 
    for(let i=0;i<basket.length;i++){
        if(basket[i].id === productObject.id){
            return;
        }
    }

    basket.push(productObject)
    
}

function show(){
    $('.products-container').html('')
    basket.forEach(ele=>{
        $('.products-container').append(
            `<div class="row my-3">

                <!-- product img -->
                <div class="col-md-2 text-center">
                <div class="img-container">
                    <img src="${ele.photo}" alt="" class="img-fluid">
                </div>
                </div>
                <!-- end product img -->
    
            
                <!-- product name -->
                <div class="col-md-4 text-center d-flex justify-content-center">
                <p class="text-uppercase m-0 my-3 align-self-center">
                    ${ele.title}
                </p>
                </div>
                <!-- end product name -->
    
                
                <!-- product price -->
                <div class="col-md-2 text-center d-flex justify-content-center">
                <p class="text-uppercase m-0 my-3 align-self-center">
                    $${ele.price}
                </p>
                </div>
                <!-- end product price -->
    
                <!-- product quantity -->
                <div class="col-md-2 text-center d-flex justify-content-center">
                    <div class="align-self-center ">
                      <div class="d-flex justify-content-between align-items-center">
                        <span  onclick='addOne(${ele.id})' class="mystore mb-2">+</span>
                        <span class="quantity mb-2">${ele.quantity}</span>
                        <span onclick='removeOne(${ele.id})' class="mystore mb-2">-</span>
                      </div>
                      <span  onclick='remove(${ele.id})' class="mystore">remove</span>
                    </div>
                </div>
                <!-- end product quantity -->
    
                <!-- product total -->
                <div class="col-md-2 text-center d-flex justify-content-center">
                <p class="text-uppercase m-0 my-3 align-self-center">
                    $${ele.totalPrice}
                </p>
                </div>
                <!-- end product total -->
          </div>
            `
        )
    })
    
}

function addOne(id){
    for(let i=0;i<basket.length;i++){
        if(basket[i].id === id.toString()){
            basket[i].quantity++
            basket[i].totalPrice=basket[i].quantity*basket[i].price
        }
    }
    show()
    changeAndShowTotal()
}

function removeOne(id){
    for(let i=0;i<basket.length;i++){
        if(basket[i].id === id.toString()){
            if(basket[i].quantity !== 1){
                basket[i].quantity--
                basket[i].totalPrice=basket[i].quantity*basket[i].price
            }
        }
    }
    show()
    changeAndShowTotal()
}

function changeAndShowTotal(){

    let theTotal=0
    let quantity=0

    basket.forEach(ele=>{
        theTotal=theTotal+ele.totalPrice
    }) 

    basket.forEach(ele=>{
      quantity= quantity+ ele.quantity
    })

    if(theTotal === 0){
      $('.total').html('')
      $('#price-container').html('')
    }else{
      $('.total').html('$ '+theTotal)
      $('#price-container').html('$ '+theTotal)
    }

    

    if(theTotal === 0){
      $('#quantity-container').html('')
    }else{
      $('#quantity-container').html(quantity+'items -')
    }
    
    
    
    


}





