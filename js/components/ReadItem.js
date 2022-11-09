app.component('ReadItem', {
    props: {
        favorites: {type: PublicationCollection, required: true},
        bookmarks: {type: PublicationCollection, required: true},
        item: {type: Object, required: true},
    },

    data: function () {
        return {
            showDetails: false,
        };
    },

    computed: {
        favorite() {
            return this.favorites.contains(this.item);
        },
        bookmarked() {
            return this.bookmarks.contains(this.item);
        },
        detailsComponent(){
            return this.item.type + 'Details';
        }
    },

    methods: {
        displayDetails() {
            this.showDetails = true;
        },

        addFavorite() {
            this.favorites.add(this.item);
        },
        removeFavorite() {
            this.favorites.remove(this.item);
        },

        addBookmark() {
            this.bookmarks.add(this.item);
        },
        removeBookmark() {
            this.bookmarks.remove(this.item);
        },
    },

    template: `
        <div class="shelf col-sm-4 col-md-3 col-lg-2 col-6">
            
            <!-- BOOK THUMBNAIL -->
            <div class="book">
                <img :src="item.thumbnail" :alt="item.volumeInfo.title" @click="displayDetails" class="thumbnail">
                <div role="toolbar" class="btn-toolbar">
                    <div role="group" class="btn-group">
                        <button @click="displayDetails" title="More Info" type="button" class="btn btn-secondary"><i class="fas fa-info-circle"></i></button> 
                        
                        <button v-if="bookmarked" title="Remove Bookmark" @click="removeBookmark" type="button" class="btn btn-secondary"><i class="fas fa-bookmark"></i></button> 
                        <button v-else @click="addBookmark" title="Add Bookmark" type="button" class="btn btn-secondary"><i class="far fa-bookmark"></i></button> 
                        
                        <button v-if="favorite" @click="removeFavorite" title="Remove Favorite" type="button" class="btn btn-secondary"><i class="fas fa-heart"></i></button>
                        <button v-else @click="addFavorite" title="Add Favorite" type="button" class="btn btn-secondary"><i class="far fa-heart"></i></button>
                    </div>
                </div>
            </div>
            
            <bs-modal v-model="showDetails" :title="item.volumeInfo.title" hide-footer>
                 <component :is="detailsComponent" :item="item"></component>
            </bs-modal>
        </div>
    `,
});
