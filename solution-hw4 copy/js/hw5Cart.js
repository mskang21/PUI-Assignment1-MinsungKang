let allGlazings = [
    {
        glazing:'Keep original',
        priceAdapt:'0.00',
    },
    {
        glazing:'Sugar milk',
        priceAdapt:'0.00',
    },
    {
        glazing:'Vanilla milk',
        priceAdapt:'0.50',
    },
    {
        glazing:'Double chocolate',
        priceAdapt:'1.50',
    },
];
let allPacksizes = [
    {
        packsize:'1',
        priceAdapt:'1',
    },
    {
        packsize:'3',
        priceAdapt:'3',
    },
    {
        packsize:'6',
        priceAdapt:'5',
    },
    {
        packsize:'12',
        priceAdapt:'10',
    },
];

class Roll {
    constructor(rollType, glazingIndex, packSizeIndex, rollBasePrice) {
        this.type = rollType;
        this.glazingIndex =  glazingIndex; 
        this.packSizeIndex = packSizeIndex;
        this.basePrice = rollBasePrice;
    }
    calcPrice (glazingPrice, packMult) {
        let totalPrice = (this.basePrice + glazingPrice) * packMult;
        return totalPrice.toFixed(2);
    }
}

let rollOne = new Roll("Original", 1, 0, rolls["Original"].basePrice);
let rollTwo = new Roll("Walnut", 2, 3, rolls["Walnut"].basePrice);
let rollThree = new Roll("Raisin", 1, 1,  rolls["Raisin"].basePrice);
let rollFour = new Roll("Apple", 0, 1, rolls["Apple"].basePrice);

let cart = [rollOne, rollTwo, rollThree, rollFour];
console.log(cart);

function appendCartItem (Roll) {
    let cartTemplate = document.getElementById("cart-item");
    let cartItem = cartTemplate.content;
    let rollImageElement = cartItem.getElementById("roll-image");
    rollImageElement.src = './images/' + rollType.toLowerCase() + "-cinnamon-roll" + '.jpg'
    let rollTypeTextElement = cartItem.getElementById("roll-type");
    rollTypeTextElement.innerText = rollType
    let glazingTextElement = cartItem.getElementById("glazing");
    glazingTextElement.innerText = allGlazings[glazingIndex]
    let packSizeTextElement = cartItem.getElementById("pack-size");
    packSizeTextElement.innerText = allPacksizes[packSizeIndex]
    let pricingTextElement = cartItem.getElementById("pricing");
    pricingTextElement.innerText = calcPrice   
}

appendCartItem(rollOne);
appendCartItem(rollTwo);
appendCartItem(rollThree);
appendCartItem(rollFour);


function removeFromCart () {
    this.rollType = rollType;
    this.glazing = allGlazings[GlazingIndex].glazing;
    this.packSize = allPacksizes[PacksizeIndex].packsize;
    this.basePrice = basePrice;
    let currentRoll = new Roll(this.rollType, this.glazing, this.packSize, this.basePrice);
    cart.splice(currentRoll);
    console.log(cart);
}

document.querySelector("#remove-button").addEventListener("click", removeFromCart);

