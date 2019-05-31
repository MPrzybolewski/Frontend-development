
import Guitar from '../domain/guitar';
import GuitarType from '../domain/guitarType';

var GUITAR_DB = function () {
    var guitarDB = [
        new Guitar(1, "black", "gretsch", "electric", true),
        new Guitar(2, "white", "fender", "acoustic", false),
        new Guitar(3, "yelow", "gibson", "eletric", false)];

    var guitarTypeDB = [
        new GuitarType(1, "electric"),
        new GuitarType(2, "acoustic")
    ]

    function GetNewGuitarId()
    {
        const guitarIds = guitarDB.map(x => x.id);
        return (Math.max.apply(null, guitarIds) + 1);
    }

    function getGuitarIndexById(id) {
        var guitarIndex = -1;
        guitarDB.forEach(guitar => {
            if(guitar.id === id) {
                guitarIndex =  guitarDB.indexOf(guitar);
            }
        });

        return guitarIndex;
    }

    function getGuitarTypeById(id) {
        var guitarTypeString = '';
        guitarTypeDB.forEach(guitarType => {
            if(guitarType.id == id) {
                guitarTypeString = guitarType.name;
            }
        });

        return guitarTypeString;
    }
    
    return {
        showGuitars: function() {
            console.log(guitarDB)
        },

        add: function(guitar) {
            guitar.id = GetNewGuitarId();
            guitar.type = getGuitarTypeById(guitar.type)
            guitarDB.push(guitar);
            return guitar;
        },

        remove: function(id) {
            const guitarIndex = getGuitarIndexById(id);
            if (guitarIndex !== -1) {
                guitarDB.splice(guitarIndex, 1);
                return 'Guitar removed'
            }

            return 'Guitar not exists in database';
        },

        getById: function(id) {
            var guitarIndex = getGuitarIndexById(id);
            if(guitarIndex !== -1) {
                return guitarDB[guitarIndex];
            }
            else {
                return 'Guitar not exists'
            }
        },

        updateGuitarColor: function(guitar, color) {
            guitarDB[guitarDB.indexOf(guitar)].color = color;
        },

        getAll: function() {
            return guitarDB;
        },

        getGuitarTypes: function() {
            return guitarTypeDB;
        }
    }
}

export default GUITAR_DB