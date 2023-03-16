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
];

const rollCart = new Set();

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

function addNewRoll (rollType, glazingIndex, packSizeIndex, rollBasePrice) {
    const roll = new Roll (rollType, glazingIndex, packSizeIndex, rollBasePrice); 
    rollCart.add(roll);
    return rollCart;
}

const rollOne = addNewRoll(
    "Original",
    1,
    0,
    rolls["Original"].basePrice
);
const rollTwo = addNewRoll(
    "Walnut",
    2,
    3,
    rolls["Walnut"].basePrice
);
const rollThree = addNewRoll(
    "Raisin",
    1,
    1,
    rolls["Raisin"].basePrice
);
const rollFour = addNewRoll(
    "Apple",
    0,
    1,
    rolls["Apple"].basePrice
);

for (const roll of rollCart) {
    console.log(roll);
    createElement(roll);
}
function createElement(roll) {
    console.log('Creating an Element!')
    const template = document.querySelector('#roll-template');
    const clone = template.content.cloneNode(true);
    roll.element = clone.querySelector('.rollItem');

    console.log(roll.element);
    const btnDelete = roll.element.querySelector('.remove-button');
    btnDelete.addEventListener('click', () => {
        deleteroll(roll);   
    });

    const rollListElement = document.querySelector('#body-textCart');
    rollListElement.prepend(roll.element);
    updateElement(roll);
}

function updateElement(roll) {
    const rollImageElement = roll.element.querySelector('#roll-image');
    const rollTitleElement = roll.element.querySelector('#roll-type');
    const rollGlazingElement = roll.element.querySelector('#glazing');
    const rollPackSizeElement = roll.element.querySelector('#pack-size');    
    const rollPricingElement = roll.element.querySelector('#pricing')

    rollImageElement.src = "./images/" + roll.type + "-cinnamon-roll.jpg";
    rollTitleElement.innerText = roll.type;
    rollGlazingElement.innterText = allGlazings[roll.glazingIndex].glazing;
    rollPackSizeElement.innerText = allPacksizes[roll.packSizeIndex].packsize;
    rollPricingElement.innterText = roll.basePrice;
}

function deleteroll(roll) {
    roll.element.remove();
    rollCart.delete(roll);
}
