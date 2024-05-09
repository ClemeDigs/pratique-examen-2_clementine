class Keyboard {
    /**
     * 
     * @param {string} name 
     * @param {string} brand 
     * @param {string} compatibleDevices 
     * @param {string} connectivityTechnology 
     * @param {string} keyboardDescription 
     * @param {string} specialFeature 
     * @param {string} colour 
     * @param {number} numberOfKeys 
     * @param {string} style 
     * @param {string} productDimensions 
     * @param {string} material 
     */
    constructor(
    name,
    brand,
    compatibleDevices,
    connectivityTechnology,
    keyboardDescription,
    specialFeature,
    colour,
    numberOfKeys,
    style,
    productDimensions,
    material
    ) {
    this.name = name;
    this.brand = brand;
    this.compatibleDevices = compatibleDevices;
    this.connectivityTechnology = connectivityTechnology;
    this.keyboardDescription = keyboardDescription;
    this.specialFeature = specialFeature;
    this.colour = colour;
    this.numberOfKeys = numberOfKeys;
    this.style = style;
    this.productDimensions = productDimensions;
    this.material = material;
}


    toHtml() {
        const divHtml = document.createElement('div');
        divHtml.classList.add('keyboards');
        const entries = Object.entries(this);

        for(let entry of entries) {
            let pHtml = document.createElement('p');
            pHtml.textContent = entry[0] + ': ' + entry[1];
            divHtml.appendChild(pHtml);
        }
        return divHtml;
    }

}

const keyboards = [
new Keyboard(
    "Magic-Refiner",
    "MAGIC-REFINER",
    "Smartphone",
    "Bluetooth",
    "Mechanical",
    "Ergonomic",
    "Off-white & Orange/Red Switch",
    68,
    "Modern",
    "31.2L x 10.2W x 4.3H Centimetres",
    "Polycarbonate"
),
new Keyboard(
    "Magic-Refiner",
    "MAGIC-REFINER",
    "Smartphone",
    "Bluetooth",
    "Mechanical",
    "Ergonomic",
    "Off-white & Orange/Red Switch",
    68,
    "Modern",
    "31.2L x 10.2W x 4.3H Centimetres",
    "Polycarbonate"
),
new Keyboard(
    "Magic-Refiner",
    "MAGIC-REFINER",
    "Smartphone",
    "Bluetooth",
    "Mechanical",
    "Ergonomic",
    "Off-white & Orange/Red Switch",
    68,
    "Modern",
    "31.2L x 10.2W x 4.3H Centimetres",
    "Polycarbonate"
),
new Keyboard(
    "Magic-Refiner",
    "MAGIC-REFINER",
    "Smartphone",
    "Bluetooth",
    "Mechanical",
    "Ergonomic",
    "Off-white & Orange/Red Switch",
    68,
    "Modern",
    "31.2L x 10.2W x 4.3H Centimetres",
    "Polycarbonate"
),
];

for (let keyboard of keyboards) {
    document.body.appendChild(keyboard.toHtml());
}
