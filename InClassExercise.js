// Question1:
let bookTitle = document.querySelector('.item-page__main-title');
bookTitle.textContent
"Against the Tide: A Novel"
bookTitle.textContent="Dogs are men's best friend";


// Question2
let bookPic = document.querySelector('.product-image__image--single');
bookPic.src
"https://dynamic.indigoimages.ca/books/0764210238.jpg?altimages=false&scaleup=true&maxheight=515&width=380&quality=85&sale=0&lang=en"
bookPic.src="http://cdn1-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-2.jpg";


// Question3
let bookNav = ['puppy','dog','best','friend','pet','loyal','cute','pugg','lebrador'];
let navigation = Array.from(document.querySelectorAll('[class^=top-nav__list-link]'));
navigation
navigation.map((navitem,idx)=>navitem.textContent=bookNav[idx]);


// Question4
let siteLogo = document.querySelector('.indigo-logo');
siteLogo
<a href=​"https:​/​/​www.chapters.indigo.ca/​en-ca/​" class=​"indigo-logo" data-a8n=​"indigo-logo">​…​</a>​<svg xmlns=​"http:​/​/​www.w3.org/​2000/​svg" width=​"130" height=​"66" viewBox=​"0 0 130 66">​…​</svg>​</a>​
let myLogo = document.createElement('img');
myLogo
<img>​
myLogo.src="https://www.google.ca/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=0ahUKEwj9wvSC163WAhUL54MKHSEyDDkQjRwIBw&url=http%3A%2F%2Fwww.logofound.com%2Fbuy-logo%2Fanimals-pets%2Fpuppy-logo-template%2F&psig=AFQjCNGBJ-kF7Mryoq3UFERyGlIo38xA3Q&ust=1505787832341854";
"https://www.google.ca/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=0ahUKEwj9wvSC163WAhUL54MKHSEyDDkQjRwIBw&url=http%3A%2F%2Fwww.logofound.com%2Fbuy-logo%2Fanimals-pets%2Fpuppy-logo-template%2F&psig=AFQjCNGBJ-kF7Mryoq3UFERyGlIo38xA3Q&ust=1505787832341854"
let preLogo = document.querySelector('[data-a8n=indigo-logo] svg');
siteLogo.replaceChild(myLogo, preLogo);



// Question5
let Puppy = {'price':'$500','age':'2 Months','breed':'Labrador'};
let puppyDetailsHTML=`<p>
<h3>ABC</h3>
<h3>XYZ</h3>
<h3>123</h3>
</p>`;
let puppySection = document.querySelector('.item-purchase__container');
puppySection.innerHTML=puppyDetailsHTML;
function render(obj) {
   let puppyDetailsHTML = `
   <p>
    <h3>${obj.price}</h3>
    <h3>${obj.age}</h3>
    <h3>${obj.breed}</h3>
   </p>
   `;

	return puppyDetailsHTML;
}
render (Puppy);
"
   <p>
    <h3>$500</h3>
    <h3>2 Months</h3>
    <h3>Labrador</h3>
   </p>

   puppySection.innerHTML=render(Puppy);
"
   <p>
    <h3>$500</h3>
    <h3>2 Months</h3>
    <h3>Labrador</h3>
   </p>
   "





   // Question6
   Puppy = [{'price':'$500','age':'2 Months','breed':'Labrador'},{'price':'$800','age':'4 Months','breed':'Beagle'},{'price':'$1200','age':'2 Months','breed':'Bulldog'}]
   render (Puppy[1]);
"
   <p>
    <h3>$800</h3>
    <h3>4 Months</h3>
    <h3>Beagle</h3>
   </p>
   "
puppySection.innerHTML=render(Puppy[2]);
"
   <p>
    <h3>$1200</h3>
    <h3>2 Months</h3>
    <h3>Bulldog</h3>
   </p>
   "






   // Question7
   let authLink = document.querySelector('.item-contributor__link');
   authLink.setAttribute('href','www.georgiancollege.ca');






   // Question8
   let addToCart = document.querySelector('.add-to-cart-button__primary');
   addToCart
<button type=​"button" id=​"add-to-cart-button" data-a8n=​"item-page__button-add-to-cart" class=​"common-button add-to-cart-button__primary ">​add to cart​</button>​
    
addToCart.addEventListener('click',function(){
document.documentElement.innerHTML = ''
});
