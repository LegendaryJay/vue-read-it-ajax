app.component('BsModal', {
    data(){
        return {
            bsModal: {},
        }
    },

    emits: ['update:modelValue'],

    props: {
        title: {
            type: String,
            required: true
        },
        id : {
            type: String,
            default: 'modal-' + Math.floor(Math.random() * 10e16),
        },
        modelValue: {
            type: Boolean,
            default: false,
        },
        hideHeader: {
            type: Boolean,
            default: false,
        },
        hideFooter: {
            type: Boolean,
            default: false,
        }
    },

    computed: {
        titleId(){
            return this.id + '__Title';
        },
        bodyId(){
            return this.id + '__Body';
        },
    },

    mounted(){
        // here, "this" refers to the component
        // jQuery is needed since this is Bootstrap 4
        this.bsModal = $(this.$el).modal({show: false});

        // override default hide functionality
        this.bsModal.on('hide.bs.modal', () => {
            this.$emit('update:modelValue', false);
        })
    },

    watch: {
        modelValue: {
            // call this before the item changes
            handler: function (newValue) {
                this.bsModal.modal(newValue ? 'show' : 'hide');
            },
        }
    },

    template: `
        <div class="modal fade" tabindex="-1" role="dialog" :aria-labelledby="titleId" :aria-describedby="bodyId" aria-hidden="true">
            <div class="modal-dialog modal-xl" role="document">
                <div class="modal-content">
                    <div class="modal-header" v-if="!hideHeader">
                        <slot name="header">
                            <h5 class="modal-title" :id="titleId">{{ title }}</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                            </button>
                        </slot>
                    </div>
                    <div class="modal-body" :id="bodyId">
                        <slot></slot>
                    </div>
                    <div class="modal-footer" v-if="!hideFooter">
                       <slot name="footer">
                           <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                       </slot>
                    </div>
                </div>
            </div>
        </div>
    `
})
