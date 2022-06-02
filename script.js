const buttonColorSet = document.getElementsByClassName("color-button");
for (const buttons of buttonColorSet) {
    buttons.setAttribute("style", "background-color: pink; font-weight: bold;");
}

// image changing when mouse enter to the new arrival section's element 
function newArrivalImg1Change() {
    document.getElementById("new-arrival-img1").src = "images/dress2.jpg"
}
function newArrivalImg2Change() {
    document.getElementById("new-arrival-img2").src = "images/pant4.jpg"
}
function newArrivalImg3Change() {
    document.getElementById("new-arrival-img3").src = "images/scarf2.jpg"
}

// image changing when mouse out from the new arrival section's element 
function newArrivalImg1() {
    document.getElementById("new-arrival-img1").src = "images/dress1.jpg"
}
function newArrivalImg2() {
    document.getElementById("new-arrival-img2").src = "images/pant3.jpg"
}
function newArrivalImg3() {
    document.getElementById("new-arrival-img3").src = "images/scarf1.jpg"
}

// image changing when mouse move to hot sales's image 
function hotSaleImg1Change() {
    document.getElementById("hot-sales-img1").src = "images/pant3.jpg";
}
function hotSaleImg2Change() {
    document.getElementById("hot-sales-img2").src = "images/hoodie2.jpg";
}
function hotSaleImg3Change() {
    document.getElementById("hot-sales-img3").src = "images/shoe2.jpeg";
}


// image changing when mouse out from the hot sale's element 
function hotSaleImg1() {
    document.getElementById("hot-sales-img1").src = "images/pant2.jpg";
}
function hotSaleImg2() {
    document.getElementById("hot-sales-img2").src = "images/hoodie1.jpg";
}
function hotSaleImg3() {
    document.getElementById("hot-sales-img3").src = "images/shoe1.jpg";
}


// adding some text in read more button to show as popup 
const readMoreButtons = document.getElementsByClassName("read-more-btn");
for (const readMoreButton of readMoreButtons) {
    readMoreButton.addEventListener("click", function () {
        alert("This product is our new arrival. This products is premium quality and made with special cotton and designed by worldclass designer. \n Hope you will like this!!")
    })
}

// adding some text for all the buy now buttons to show a popup 
const buyNowButtons = document.getElementsByClassName("buy-now-btn");
for (const buyNowButton of buyNowButtons) {
    buyNowButton.addEventListener("click", function () {
        alert("Thank you for buy this product from PANDA CLOTHING..! :D")
    })
}




// for subscribe field 
const subscribeButton = document.getElementById("subscibe-btn");

subscribeButton.addEventListener("click", function () {
    const nameInput = document.getElementById("floatingInputName");
    document.getElementById("thanks-for-subscribe").innerText = "Thanks " + nameInput.value.toUpperCase() + "...\n Welcome to 'Panda Clothing' family !!";
    console.log(nameInput.value);
})

