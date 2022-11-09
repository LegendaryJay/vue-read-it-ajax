class Magazine {
    // This belongs to the class, not the object
    // This should be the only place the string 'Magazine' is defined.
    // All other places should reference this with ClassName.type
    static type = 'Magazine';

    // define type using getter so it is not modifiable
    get type(){
        return Magazine.type;
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
        publishedDate: '',
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

    get formattedPublicationDate(){
        if(!this.volumeInfo.publishedDate){
            return '';
        }

        const months= ["", "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];

        let parts = this.volumeInfo.publishedDate.split('-');

        switch (parts.length){
            case 3:
                return `${months[parseInt(parts[1])]} ${parts[2]}, ${parts[0]}`;
            case 2:
                return `${months[parseInt(parts[1])]} ${parts[0]}`;
            case 1:
                return `${parts[0]}`;
            default:
                return this.volumeInfo.publishedDate;
        }
    }


}
