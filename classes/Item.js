/**
 * Class: Item
 */

class Item {

    constructor(name, price, amount) {
        this._name = name;
        this._price = price;
        this._amount = amount
    }

    /**
     * Getters and Setters
     */

    get name() {
        return this._name;
    }

    get price() {
        return this._price;
    }

    get amount() {
        return this._amount;
    }

    set name(name) {
        this._name = name;
    }

    set price(price) {
        this._price = price;
    }

    set amount(amount) {
        this._amount = amount;
    }
}

module.exports = Item;