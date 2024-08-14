// Your friend Peter is considering a house that is 8m wide, 10m deep and 10m high. The garden size is 100m2. The house costs 2.500.000. 
// Your friend Julia is considering a house that is 5m wide, 11m deep and 8m high.  The garden size is 70m2. This house costs 1.000.000.
// Formula is housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
// calculate their house prices and cost and see if they are getting a good deal. If the house price is more than its cost, then its a good deal. 


const houseDetails = [
    {
    name:"Peter",
    width:8,
    depth:10,
    height:10,
    gardenSizeInM2:100,
    houseCost:2500000,
    },
    {
    name:"Julia",
    width:5,
    depth:11,
    height:8,
    gardenSizeInM2:70,
    houseCost:1000000,
    }    
];

function housePrice (house) {
    return house.width*house.depth*house.height*2.5*1000+house.gardenSizeInM2*300;
}

function dealOrNoDeal(house) {
    const price = housePrice(house);

    if (price>house.houseCost) {
        console.log(`${house.name} is getting a good deal for his money`)
    }else {
        console.log(`${house.name} is being ripped off`)

    }
};
function netMargin(house) {
    const margin= housePrice(house)-house.houseCost;
    console.log(`The net margin for ${house.name} is ${margin}`)
}

houseDetails.forEach(netMargin);
// returns
// The net margin for Peter is -470000
// The net margin for Julia is 121000
houseDetails.forEach(dealOrNoDeal);
// returns 
// Peter is being ripped off
// Julia is getting a good deal for his money

// Suggested improvements:
// Since both dealOrNoDeal and netMargin functions call housePrice,calculate the price once and pass it to both functions to avoid redundant computations.
// Instead of handling the logic separately in dealOrNoDeal and netMargin, combine them into one function to handle everything in a single pass.
const houseDetails = [
    {
        name: "Peter",
        width: 8,
        depth: 10,
        height: 10,
        gardenSizeInM2: 100,
        houseCost: 2500000,
    },
    {
        name: "Julia",
        width: 5,
        depth: 11,
        height: 8,
        gardenSizeInM2: 70,
        houseCost: 1000000,
    }    
];

function housePrice({ width, depth, height, gardenSizeInM2 }) {
    return width * depth * height * 2.5 * 1000 + gardenSizeInM2 * 300;
}

function evaluateHouse(house) {
    const { name, houseCost } = house;
    const price = housePrice(house);
    const margin = price - houseCost;

    const dealMessage = price > houseCost 
        ? `${name} is getting a good deal for their money.` 
        : `${name} is being ripped off.`;

    console.log(`The net margin for ${name} is ${margin}. ${dealMessage}`);
}

houseDetails.forEach(evaluateHouse);
