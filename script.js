var prevScrollpos = window.pageYOffset;
   
//barra principal desaparece on scroll
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("barraPrincipal").style.top = "0";
      } else {
        document.getElementById("barraPrincipal").style.top = "-50px";
      }
      prevScrollpos = currentScrollPos;
    }

//Slide Show
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}
//Fim SlideShow

function closePopup() {
  // Remove the #id from the URL
  window.location.hash = '';
}


//COUNTDOWN
var endDate = new Date("January 30, 2023 00:00:00");
var currentDate = new Date();
var remainingTime = endDate - currentDate;

setInterval(function() {
  currentDate = new Date();
  remainingTime = endDate - currentDate;
  var days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  var hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
  document.getElementById("countdown1").innerHTML ="Winter Sales ends in:";
  document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s";
}, 1000);

function addToCart(item){
  var itemToAdd
  window.location="pagina de peça.html"
  if(item == 1)  {
    document.getElementsByClassName("product-img").innerHTML = '<img src="tw roupa/cool_h_b.jpeg"';
  }else if(item == 2) {
    document.getElementsByClassName("product-img").innerHTML = '<img src="tw roupa/flor_h_b.jpeg"';
  }else if(item == 3) {
    document.getElementsByClassName("product-img").innerHTML = '<img src="tw roupa/tsiw_h_b.jpeg"';
  }else if(item == 4) {
    document.getElementsByClassName("product-img").innerHTML = '<img src="tw roupa/ghost_h_b.jpeg"';
  }else if(item == 5) {
    document.getElementsByClassName("product-img").innerHTML = '<img src="tw roupa/sol_h_b.jpeg"';
  }

  

}
//funcionalidades carrinho de compras 
function addItem(item) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let existingItem = cart.find(i => i.id === item.id);
  if (existingItem) {
    existingItem.quantity += item.quantity;
  } else {
    cart.push(item);
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCart();
}
function removeItem(itemId) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart = cart.filter(item => item.id !== itemId);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCart();
}
function updateQuantity(itemId, newQuantity) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let item = cart.find(i => i.id === itemId);
  if(item){
      item.quantity = newQuantity;
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCart();
}
function updateCart(){
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let cartList = document.getElementById("cart-list");
  let totalPrice = 0;
  cartList.innerHTML = '';
  for(let i = 0; i < cart.length; i++){
    let item = cart[i];
    totalPrice += item.price * item.quantity;
    cartList.inner
  }
}