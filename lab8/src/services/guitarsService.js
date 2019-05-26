
import Guitar from '../domain/guitar';

var GUITAR_DB = function () {
    var guitarDB = [
        new Guitar(1, "black", "gretsch", "test", true),
        new Guitar(2, "white", "fender", "test", false),
        new Guitar(3, "yelow", "gibson", "test", false)];

    function isGuitarCurrentlyExist(guitar)
    {
        return guitarDB.some(x => x.id == guitar.id);
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
    
    return {
        showGuitars: function() {
            console.log(guitarDB)
        },

        add: function(guitar) {
            if (isGuitarCurrentlyExist(guitar)) {
                return 'Guitar with this ID already exists!';
            } 

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

        getByType: function(type){
            
        }
    }
}

export default GUITAR_DB