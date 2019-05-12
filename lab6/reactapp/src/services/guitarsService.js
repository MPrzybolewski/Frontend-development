import Guitar from "../domain/guitar";

var GUITAR_DB = (function () {
    let guitarDB = [
        new Guitar(1, "black", "gretsch", "test", true),
        new Guitar(2, "white", "fender", "test", false),
        new Guitar(3, "yelow", "gibson", "test", false)];

    function isGuitarCurrentlyExist(guitar)
    {
        guitarDB.forEach(dbGuitar => {
            if(dbGuitar.id === guitar.id)
            {
                return true;
            }
        })

        return false;
    }

    function getGuitarIndexById(id) {
        guitarDB.forEach(guitar => {
            if(guitar.id === id) {
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
            guitarDB.indexOf(guitar) !== -1 ? guitarDB.splice(guitarDB.indexOf(guitar), 1) : console.log('Guitar not exists in database')
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
})

export default GUITAR_DB