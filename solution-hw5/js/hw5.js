console.log("Javascript Loaded");
console.log(rolls);

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
]
let basePrice = 2.49;
let glazing = 0;
let packsize = 1;
let GlazingIndex = 0;
let PacksizeIndex = 0;

function displayPrice(GlazingToDisplay, PacksizeToDisplay) {
    let PriceElement = document.querySelector('#price');
    console.log(GlazingToDisplay);
    console.log(PacksizeToDisplay);
    console.log(basePrice);
    let totalPrice = (basePrice + GlazingToDisplay) * PacksizeToDisplay;
    PriceElement.innerText = "$" + totalPrice.toFixed(2)
}
function GlazingChange(event){
    console.log(event);
    console.log('You selected' + this.value);
    GlazingIndex = parseInt(this.value);
    console.log(allGlazings[GlazingIndex - 1]);
    glazing = parseFloat(allGlazings[GlazingIndex - 1].priceAdapt);
    displayPrice(glazing, packsize);
}
function PacksizeChange(event){
    console.log('You selected' + this.value);
    PacksizeIndex = parseInt(this.value);
    packsize = parseFloat(allPacksizes[PacksizeIndex - 1].priceAdapt);
    displayPrice(glazing, packsize);
}

const selectElement = document.querySelector('#glazingOptions');
let selectElement2 = document.querySelector('#packsizeOptions');

selectElement.addEventListener('change', GlazingChange);
selectElement2.addEventListener('change', PacksizeChange);

const queryString = window.location.search;
console.log(queryString);
const params = new URLSearchParams(queryString);
console.log(params);
const rollType = params.get('roll');
console.log(rollType)

function basePriceChange(rolls){
    console.log(rollType);
    basePrice = rolls.rollType.basePrice
    displayPrice(glazing, packsize, basePrice)
}


const headerElement = document.querySelector('#roll-name');
headerElement.innerText = rollType + " Cinnamon Roll"
const rollImage = document.querySelector('#roll-image');
rollImage.src = './images/' + rollType.toLowerCase() + "-cinnamon-roll" + '.jpg';

class Roll {
    constructor(rollType, glazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  glazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}

function addToCart () {
    this.rollType = rollType;
    this.glazing = allGlazings[GlazingIndex].glazing;
    this.packSize = allPacksizes[PacksizeIndex].packsize;
    this.basePrice = basePrice;
    let currentRoll = new Roll(this.rollType, this.glazing, this.packSize, this.basePrice);
    cart.push(currentRoll);
    console.log(cart);
}

document.querySelector("#AddCart").addEventListener("click", addToCart);

let cart = [];

