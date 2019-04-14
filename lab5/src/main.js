class Guitar {
    constructor(id, color, brand, type, withStrings) {
        this._id = id;
        this._color = color;
        this._brand =brand;
        this._type =type;
        this._withStrings = withStrings;
        this._sound = "la";
    }

    set color(value) {
        this._color = value;
    }

    set brand(value) {
        this._brand = value;
    }

    set type(value) {
        this._type = value;
    }

    set withString(value) {
        this._withStrings = value;
    }

    get color() {
        return this._color;
    }

    get brand() {
        return this.brand;
    }

    get type() {
        return this.type;
    }

    get withString() {
        return this.withString;
    }

    play() {
        console.log(this._sound)
    }
}

class GuitarType {
    constructor(id,name) {
        this._id = id;
        this._name = name;
    }

    set id(value) {
        this._id = value;
    }

    set name(value) {
        this._name = value;
    }

    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }
}

class ElectricGuitar extends Guitar {
    constructor(id, color, brand, type, withStrings, withAmplifire) {
        super(id, color, brand, type, withStrings);
        this._withAmplifire = withAmplifire;
        this._sound = "wow";
        this.addGuitarEffect = (value) => {
            this._sound = `${this._sound} ${value}`;
        }
    }

    set withAmplifire(value) {
        this._withAmplifire = value;
    }

    get withAmplifire() {
        return this._withAmplifire;
    }
}

var lesPaulType = new GuitarType(1, "Les Paul");
var hollowBodyType = new GuitarType(2, "Hollow Body");

var electric = new ElectricGuitar(1, "brown", "gretsch", lesPaulType, true);
electric.play();
electric.addGuitarEffect("BUM");
electric.play();