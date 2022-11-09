// more info on factories:
// https://blog.sessionstack.com/how-javascript-works-the-factory-design-pattern-4-use-cases-7b9f0d22151d

class PublicationCollectionFactory {
    // Static methods can be called without creating an instance.
    // For example: PublicationCollectionFactory.createFromGoogleBooks(...)
    // will return a new PublicationCollection
    static createFromGoogleBooks(volumes){
        const collection = new PublicationCollection();

        // loop through the results and determine what kind of publication it is
        volumes.forEach(volume => {
            let newItem = false;

            // create correct object type
            switch(volume.volumeInfo.printType.toLowerCase()){
                case "book":
                    // create book
                    // if you want to pick and choose what's passed in, do this:
                    //newItem = new Book(volume.volumeInfo.title, ...);

                    // Copy everything from the API book to our Book model
                    // we lose the ability to pick and choose what is copied over,
                    // but it's really easy. Downside is, any future code or library we use
                    // must follow Google Book's object format.
                    newItem = Object.assign(new Book(), volume);
                    break;
                case "magazine":
                    // create magazine
                    newItem = Object.assign(new Magazine(), volume);
                    break;
                default:
                    console.warn('We found something other than book/magazine.', volume);
                    break;
            }

            if(newItem){
                collection.add(newItem);
            }
        })


        return collection;
    }

    static createFromLocalStorage(items){
        // currently this is no different, but could be in the future
        return this.createFromGoogleBooks(items);
    }
}
