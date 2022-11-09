class Book {
    // This belongs to the class, not the object
    // This should be the only place the string 'Book' is defined.
    // All other places should reference this with ClassName.type
    static type = 'Book';

    // define type using getter so it is not modifiable
    get type(){
        return Book.type;
    }

    // these are what we are/might use from Google Books
    kind = '';
    id = '';
    selfLink = '';
    volumeInfo = {
        imageLinks: {
            thumbnail: '',
        },
        title: '',
        subtitle: '',
        authors: [],
        categories: [],
        publisher: '',
        pageCount: '',
        description: '',
    }
    accessInfo = {
        webReaderLink: ''
    }
    saleInfo = {
        buyLink: ''
    }

    get thumbnail(){
        return this.volumeInfo.imageLinks?.thumbnail?.replace('&edge=curl', '');
    }
}
