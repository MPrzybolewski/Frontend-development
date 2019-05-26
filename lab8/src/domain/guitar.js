export default class Guitar {
    constructor(id, color, brand, type, withStrings) {
        this.id = id;
        this.color = color;
        this.brand = brand;
        this.type = type;
        this.withStrings = withStrings;
        this.sound = "la";
    }

    play() {
        console.log(this._sound)
    }
}