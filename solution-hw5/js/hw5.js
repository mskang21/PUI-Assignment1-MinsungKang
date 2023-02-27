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

const queryString = window.location.search;
const params = new URLSearchParams(queryString);

const rollType = params.get('roll');

let glazing = 0;
let packsize = 1;
let GlazingIndex = 0;
let PacksizeIndex = 0;

function displayPrice(GlazingToDisplay, PacksizeToDisplay) {
    let PriceElement = document.querySelector('#price');
    console.log(GlazingToDisplay);
    let totalPrice = (findBasePrice + GlazingToDisplay) * PacksizeToDisplay;
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

function basePriceChange(rolls){
    console.log(rollType);
    basePrice = findBasePrice(rolls.rollType);
    displayPrice(glazing, packsize, basePrice)
}

const headerElement = document.querySelector('#roll-name');
console.log(rollType);
headerElement.innerText = rollType + " Cinnamon Roll"
const rollImage = document.querySelector('#roll-image');
rollImage.src = './images/' + rollType.toLowerCase() + "-cinnamon-roll" + '.jpg';

class Roll {
    constructor(rollType, glazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  glazing;
        this.size = packSize;
        this.basePrice = findBasePrice(rollType);
        let glazePrice =  parseFloat(allGlazings[GlazingIndex - 1].priceAdapt);
        let packPrice = parseFloat(allPacksizes[PacksizeIndex - 1].priceAdapt);
        this.totalPrice = basePrice +  glazePrice * packPrice;
    };
}

function findBasePrice(roll) {
    return rolls[roll];
}

function addToCart () {
    this.rollType = rollType;
    this.glazing = allGlazings[GlazingIndex].glazing;
    this.packSize = allPacksizes[PacksizeIndex].packsize;
    this.basePrice = findBasePrice(this.rollType);
    let currentRoll = new Roll(this.rollType, this.glazing, this.packSize, this.basePrice);
    cart.push(currentRoll);
    console.log(cart);
}

document.querySelector("#AddCart").addEventListener("click", addToCart);

let rollOne = new Roll("Original", allGlazings[1].glazing, allPacksizes[0].packSize, findBasePrice("Original"));
let rollTwo = new Roll("Walnut", allGlazings[1].glazing, allPacksizes[0].packSize, findBasePrice("Walnut"));
let rollThree = new Roll("Raisin", allGlazings[1].glazing, allPacksizes[0].packSize, findBasePrice("Raisin"));
let rollFour  = new Roll("Apple", allGlazings[1].glazing, allPacksizes[0].packSize, findBasePrice("Apple"));

let cart = [
];

