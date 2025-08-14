var names = ["Phone","Laptop","Tablet","Monitor","Mouse",
            "Keyboard","Charger","USB Cable","Headphones","Webcam"];
var prices = [100,200,300,400,500,
            600,700,800,900,1000];
var descriptions = [];

function returnFirstThreeNames (namesList){
    //destructuring
    let name1, name2, name3;
    [name1, name2, name3] = namesList;
    console.log(name1, name2, name3);
}


function FilterPrice(priceList, maxPrice, minPrice){
   priceList = priceList.filter((price) => price <= maxPrice && price >= minPrice);  
   console.log(priceList);
    return priceList;
}
function ReturnProductName(names){
    let newNames = [];
    return newNames = names.map(name => console.log(name));
}

//FilterPrice(prices, 500,200);
//ReturnProductName(names)
returnFirstThreeNames(names);
