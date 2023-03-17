// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers =function(array){
    return [ array[0], array[1] ]
}

const returnLastTwoDrivers=function(array){
    return [ array[2], array[3] ]
}
const selectingDrivers=[
    returnFirstTwoDrivers,returnLastTwoDrivers
]
const fareQuintupler=function (multiplier=5,fare=5){
    return multiplier*fare
}
 function createFareMultiplier(){
    return fareQuintupler
    }

 //const fareDoubler=fareQuintupler
 function fareDoubler(fare=10){
    return fare*2
 }
 function fareTripler(fare){
    return fare*3
 }
 fareTripler(10);

    function selectDifferentDrivers(arrayOfDrivers,selectingDrivers){
        if (selectingDrivers===returnFirstTwoDrivers){
            return[ arrayOfDrivers[0], arrayOfDrivers[1]]
        }
        else if (selectingDrivers===returnLastTwoDrivers){
            return[arrayOfDrivers[2], arrayOfDrivers[3]]
        }
    }
 
 

