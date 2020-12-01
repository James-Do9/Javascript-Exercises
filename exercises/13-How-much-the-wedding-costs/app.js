let guests = prompt('How many people are coming to your wedding?');

function getPrice(guests){
    var cost = 0;
    if( guests <= 50){
        var cost = 4000;
        return cost
    }
    if( guests <= 100 && guests > 50){
        var cost = 10000;
        return cost
    }
    if( guests <= 200 && guests > 100){
        var cost = 15000;
        return cost
    }
    else{
        var cost = 20000;
        return cost
    }
    // Your code here
}

let price = getPrice(guests);
console.log('Your wedding will cost '+price+' dollars');