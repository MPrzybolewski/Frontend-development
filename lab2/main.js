var electricType = {
    id: 1,
    name: "Electric"
}

var acousticType = {
    id: 2,
    name: "Acoustic"
}

var guitar1 = {
    id: 1,
    color: "Black",
    brand: "Gibson",
    type: electricType,
    withStrings: false
}

var guitar2 = {
    id: 2,
    color: "Red",
    brand: "Fender",
    type: acousticType,
    withStrings: true
}

var guitarDB = [guitar1, guitar2]

var addGuitar = function(guitar) {
    var isIdExists = false;
    guitarDB.forEach(dbGuitar => {
        if(dbGuitar.id == guitar.id)
        {
            isIdExists = true;
        }
    })

    isIdExists ? console.log('Guitar with this ID already exists!') : guitarDB.push(guitar)
}

var removeGuitar = function(guitar) {
    guitarDB.indexOf(guitar) != -1 ? guitarDB.splice(guitarDB.indexOf(guitar), 1) : console.log('Guitar not exists in database')
}

var updateGuitarColor = function(guitar, color) {
    guitarDB[guitarDB.indexOf(guitar)].color = color;
}

var findGuitarById = function(id) {
    var guitarIndex = -1
    guitarDB.forEach(guitar => {
        if(guitar.id == id) {
            guitarIndex = guitarDB.indexOf(guitar);
        }
    });

    if(guitarIndex != -1) {
        return guitarDB[guitarIndex];
    }
    else {
        return 'Guitar not exists'
    }
}

var isElectric = function(guitar) {
    return guitar.type == electricType;
}

var findElectricGuitars = function() {
    return guitarDB.filter(isElectric);
}

var guitar3 = {
    id: 3,
    color: "Blue",
    brand: "Gretsch",
    type: electricType,
    withStrings: true
}

var guitar4 = {
    id: 3,
    color: "Blue",
    brand: "Gretsch",
    type: electricType,
    withStrings: true
}

updateGuitarColor(guitar2, 'Orange')
addGuitar(guitar3)

//Test if remove function remove object with same fileds but not added to database
removeGuitar(guitar4)


 console.log(findGuitarById(1))
 console.log(findGuitarById(100))
 console.log(findElectricGuitars())
