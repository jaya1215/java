// first:

function kilometerToMeter(kilo){
    var meter = kilo * 1000;
    return meter;
}
 var nanameter = kilometerToMeter(20);
 console.log(nanameter);

// second:

function budgetCalculator(watch, phone, laptop){
    var watchPrice = 50 * watch;
    var phonePrice = 100 * phone;
    var laptopPrice = 500 * laptop;
    var total =watchPrice + phonePrice + laptopPrice;
    return total;
}
 var totalPrice = budgetCalculator(5,3,4);
 console.log(totalPrice);

// third:

function hotelCost(totalDay){
    if(totalDay <= 10){
        var cost1 = totalDay * 100;
        return cost1;
    }
    else if(totalDay <= 20){
        var remaining = totalDay - 10;
        var cost2 = remaining * 80;
        var total = (10 * 100) + cost2;
        return total;
    }
    else {
        var remaining = totalDay - 20;
        var cost3 = remaining * 50;
        var total =  (10 * 100) + (10 * 80) + cost3;
        return total;
    }
    
}
 var totalCost = hotelCost(33);
 console.log(netCost);

// forth:

function megaFriend(friend){
        
    var largest = friend[0].length;
    for(var i = 0; i < friend.length; i++){
        var element = friend[i];
        if (element.length > largest){
            largest = element.length;
            var largeName = element;
        }
    }
    return largeName;
}
var friend = ['Rahim', 'Kariman', 'Shanto', 'Rafsan', 'Rohimaname', 'Muktadir'];
 var largeName = megaFriend(friend);

 console.log(largeName);
