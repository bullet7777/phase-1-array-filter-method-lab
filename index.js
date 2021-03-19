

function findMatching(arrayOfDrivers,name){

function filterDrivers(currentValue){
    var test=currentValue.toLowerCase() === name.toLowerCase()
return test
}

    var matchingDrivers =arrayOfDrivers.filter(filterDrivers)

    return matchingDrivers
}

function fuzzyMatch(arrayOfDrivers,letters){

    function beginLetter(currentValue){
var startingLetter=currentValue[0]===letters[0]
        return startingLetter
    }
var allDriversWithProvidedLetter=arrayOfDrivers.filter(beginLetter)

return allDriversWithProvidedLetter
}


function matchName(arrayOfDrivers,driverName){

function namesOfDrivers(currentValue){
var test=currentValue.name===driverName

return test
}

    var arrayOfObjects=arrayOfDrivers.filter(namesOfDrivers)

    return arrayOfObjects

}











