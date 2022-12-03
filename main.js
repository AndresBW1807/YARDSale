const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menucarritoIcon = document.querySelector('.navbar-shopping-cart');
const menucarrito = document.querySelector('#ShoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container')
const productDetailContainer = document.querySelector("#productDetail")
const productDetailClose = document.querySelector(".product-detail-close")
x = document.ge
navEmail.addEventListener('click', toggleMenu);
burguerMenu.addEventListener('click', toggleMenuMov);
menucarritoIcon.addEventListener('click', toggleMenuCar);
productDetailClose.addEventListener("click", closeProductDetail);

function closeProductDetail(){
    productDetailContainer.classList.add("inactive");
    console.log(123 + "456")
}

function toggleMenu(){
    desktopMenu.classList.toggle('inactive')
    menucarrito.classList.add('inactive')
    productDetailContainer.classList.add('inactive')
}

function toggleMenuMov(){
    mobileMenu.classList.toggle('inactive')
    productDetailContainer.classList.add('inactive')
    menucarrito.classList.add('inactive')
}

function toggleMenuCar(){
    mobileMenu.classList.add('inactive')
    desktopMenu.classList.add('inactive')
    productDetailContainer.classList.add('inactive')
    menucarrito.classList.toggle('inactive')
}

function openProductDetail(){
    productDetailContainer.classList.remove('inactive')
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    Image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'PC',
    price: 220,
    Image: 'https://images.pexels.com/photos/9128853/pexels-photo-9128853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Shoes',
    price: 30,
    Image: 'https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Bike',
    price: 120,
    Image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'PC',
    price: 220,
    Image: 'https://images.pexels.com/photos/9128853/pexels-photo-9128853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Shoes',
    price: 30,
    Image: 'https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Bike',
    price: 120,
    Image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'PC',
    price: 220,
    Image: 'https://images.pexels.com/photos/9128853/pexels-photo-9128853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Shoes',
    price: 30,
    Image: 'https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Bike',
    price: 120,
    Image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'PC',
    price: 220,
    Image: 'https://images.pexels.com/photos/9128853/pexels-photo-9128853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Shoes',
    price: 30,
    Image: 'https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Bike',
    price: 120,
    Image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'PC',
    price: 220,
    Image: 'https://images.pexels.com/photos/9128853/pexels-photo-9128853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Shoes',
    price: 30,
    Image: 'https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Bike',
    price: 120,
    Image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'PC',
    price: 220,
    Image: 'https://images.pexels.com/photos/9128853/pexels-photo-9128853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Shoes',
    price: 30,
    Image: 'https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

getProducts = (arrayPrducts) => {
    for (product of arrayPrducts){

        const productCard = document.createElement('div')
        productCard.classList.add('product-card')
    
        const img = document.createElement('img');
        img.setAttribute('src', product.Image)
        img.addEventListener("click", openProductDetail)
    
        const productInfo = document.createElement('div')
        productInfo.classList.add('product-info')
    
        const productInfoDiv = document.createElement('div')
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price
    
        const productName = document.createElement('p');
        productName.innerText = product.name
    
        const productInfoFigure = document.createElement('figure')
        const ProductImgCard = document.createElement('img');
        ProductImgCard.setAttribute('src', './Icons/bt_add_to_cart.svg')
    
        productInfoFigure.append(ProductImgCard)
    
        productInfoDiv.append(productPrice, productName)
    
        productInfo.append(productInfoDiv, productInfoFigure)
    
        productCard.append(img, productInfo)
    
        cardsContainer.append(productCard)
    
    }
}

getProducts(productList)

