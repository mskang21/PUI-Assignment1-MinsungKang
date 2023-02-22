console.log("Javascript Loaded");

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

function displayPrice(GlazingToDisplay, PacksizeToDisplay) {
    let PriceElement = document.querySelector('#price');
    console.log(GlazingToDisplay);
    PriceElement.innerText = "$" + (basePrice + GlazingToDisplay) * PacksizeToDisplay;
}
function GlazingChange(event){
    console.log(event);
    console.log('You selected' + this.value);
    let GlazingIndex = parseInt(this.value);
    console.log(allGlazings[GlazingIndex - 1]);
    glazing = parseFloat(allGlazings[GlazingIndex - 1].priceAdapt);
    displayPrice(glazing, packsize);
}
function PacksizeChange(event){
    console.log('You selected' + this.value);
    let PacksizeIndex = parseInt(this.value);
    packsize = parseInt(allPacksizes[PacksizeIndex - 1].priceAdapt);
    displayPrice(glazing, packsize);
}

const selectElement = document.querySelector('#glazingOptions');
let selectElement2 = document.querySelector('#packsizeOptions');

selectElement.addEventListener('change', GlazingChange);
selectElement2.addEventListener('change', PacksizeChange);

const queryString = window.location.search;
console.log(queryString);
const params = new URLSearchParams(querySring);
console.log(params);
const rolltype = params.get('roll')
console.log(rolltype)

const headerElement = document.querySelector('#');
headerElement.innerText = 'Here is the ' + rollType + '!'
const rollImage = document.querySelector('#enlargedRoll');
rollImage.src = './images/' + rollType + '.jpg';
