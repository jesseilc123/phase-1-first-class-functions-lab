// Code your solution in this file!
function returnFirstTwoDrivers(firstTwo){
    return firstTwo.slice(0, 2);
};

function returnLastTwoDrivers(lastTwo){
    return lastTwo.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num1){
    return function(fare){
        return fare * num1;
    };
};

function fareDoubler(num3){
    return num3 * 2;
};

function fareTripler(num4){
    return num4 * 3;
};

function selectDifferentDrivers(arrayOfDrivers, fn){
    return fn(arrayOfDrivers);
};