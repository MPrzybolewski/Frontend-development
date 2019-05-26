var lesPaulType = {
    id: 1,
    name: "LesPaul"
}

var hollowBodyType = {
    id: 2,
    name: "hollowBody"
}

function Guitar(id, color, brand, type, withStrings) {
    this.id = id;
    this.color = color;
    this.brand = brand;
    this.type = type;
    this.withStrings = withStrings;
}

Guitar.prototype.getId = function () {
    return this.id;
}

Guitar.prototype.getColor = function () {
    return this.color;
}

Guitar.prototype.getBrand = function () {
    return this.brand;
}

Guitar.prototype.getType = function () {
    return this.type;
}

Guitar.prototype.hasStrings = function () {
    return this.withStrings;
}

Guitar.prototype.play = function () {
    console.log("la la la")
}

function ElectricGuitar(id, color, brand, type, withStrings, withAmplifire) {
    Guitar.call(this, id, color, brand, type, withStrings);
    this.withAmplifire = withAmplifire;
}

ElectricGuitar.prototype = Object.create(Guitar.prototype);
ElectricGuitar.prototype.constructor = ElectricGuitar;

ElectricGuitar.prototype.hasAmplifire = function () {
    return this.withAmplifire;
}

ElectricGuitar.prototype.playWithWhammyBar = function () {
    console.log("wow wow wow");
}

var GUITAR_DB = (function () {
    let guitarDB = [];

    function isGuitarCurrentlyExist(guitar)
    {
        guitarDB.forEach(dbGuitar => {
            if(dbGuitar.id == guitar.id)
            {
                return true;
            }
        })

        return false;
    }

    function getGuitarIndexById(id) {
        guitarDB.forEach(guitar => {
            if(guitar.id == id) {
                return guitarDB.indexOf(guitar);
            }
        });

        return -1;
    }
    
    return {
        showGuitars: function() {
            console.log(guitarDB)
        },

        add: function(guitar) {
            isGuitarCurrentlyExist() ? console.log('Guitar with this ID already exists!') : guitarDB.push(guitar)
        },

        remove: function(guitar) {
            guitarDB.indexOf(guitar) != -1 ? guitarDB.splice(guitarDB.indexOf(guitar), 1) : console.log('Guitar not exists in database')
        },

        getById: function(id) {
            var guitarIndex = getGuitarIndexById(id);
            if(guitarIndex != -1) {
                return guitarDB[guitarIndex];
            }
            else {
                return 'Guitar not exists'
            }
        },

        updateGuitarColor: function(guitar, color) {
            guitarDB[guitarDB.indexOf(guitar)].color = color;
        },

        getByType: function(type){
            
        }
    }
})



var aElectricGuitar = new ElectricGuitar(1, "red", "Gretsch", lesPaulType, true, true);
var aElectricGuitar1 = new ElectricGuitar(2, "blue", "Fender", hollowBodyType, true, true);
var aElectricGuitar2 = new ElectricGuitar(3, "red", "Gretsch", hollowBodyType, true, true);
var aElectricGuitar3 = new ElectricGuitar(4, "white", "Les Paul", lesPaulType, true, true);

console.log(aElectricGuitar.hasAmplifire());

var dbInstance = GUITAR_DB()
dbInstance.add(aElectricGuitar);
dbInstance.showGuitars();

dbInstance.remove(aElectricGuitar);
dbInstance.showGuitars();

dbInstance.add(aElectricGuitar);
dbInstance.showGuitars();
console.log('Get by Id Test')
console.log(dbInstance.getById(1));