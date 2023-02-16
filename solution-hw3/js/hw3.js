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
let basePrice = 2.69
function displayPrice(GlazingToDisplay, PacksizeToDisplay) {
    let PriceElement = document.querySelector('#price');
    PriceElement.innerText = "$" + (basePrice + GlazingToDisplay) * PacksizeToDisplay
}
function GlazingChange(this){
    console.log('You selected' + this.value);
    let GlazingIndex = parseInt(this.value);
    let GlazingToDisplay = parseInt(allGlazings[GlazingIndex].priceAdapt);
    displayPrice(GlazingToDisplay);
}
function PacksizeChange(this){
    console.log('You selected' + this.value);
    let PacksizeIndex = parseInt(this.value);
    let PacksizeToDisplay = parseInt(allPacksizes[PacksizeIndex].priceAdapt);
    displayPrice(PacksizeToDisplay);
}
let selectElement = document.querySelector('#glazingOptions');
let selectElement2 = document.querySelector('#packsizeOptions')

selectElement.addEventListener('change', GlazingChange);
selectElement2.addEventListener('change', PacksizeChange);