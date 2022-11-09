// this uses Object Composition (discussed earlier) to store the items
class PublicationCollection {
    // internal/private array for the items
    _arr;

    constructor(arr) {
        // Load array if provided.
        // Load empty array if one was not provided.
        if (!Array.isArray(arr)) {
            arr = [];
        }

        this._arr = arr;
    }

    // Methods for using the collection.
    add(publication){
        return this._arr.push(publication);
    };

    remove(publication){
        return this._arr.splice(this._findItem(publication), 1);
    };

    contains(publication){
        return this._findItem(publication) >= 0;
    };

    get count(){
        return this._arr.length;
    }

    get items(){
        return [...this._arr]
    }

    // Internal function for finding books.
    // Assumes all books have an id.
    _findItem(publication){
        return this._arr.findIndex(function(item){
            return item.id === publication.id;
        });
    };
}
