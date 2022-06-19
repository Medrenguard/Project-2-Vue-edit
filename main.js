var glossary = new Vue({
    el: "#app",
    data: {
        currentTerm: undefined,
        oldTerm: undefined,
        currentItem: undefined,
        oldItem: undefined,
        DB: outerDB,
    },
    computed:{
        termIsSet: function() {
            return this.currentTerm != undefined;
        },
        itemsList: function() {
            if (this.currentTerm === undefined) {
                return 0;
            } else {
                return this.DB[this.currentTerm]["data"];
            }
        },
        itemIsSet: function() {
            return this.getCachedOptions.item != undefined;
        },
        content: function() {
            return this.DB[this.getCachedOptions.term]["data"][this.getCachedOptions.item][4];
        },
        imgDescription: function() {
            return this.DB[this.getCachedOptions.term]["data"][this.getCachedOptions.item][5];
        },
        getImgSrc: function() {
            return 'img/content/' + this.DB[this.getCachedOptions.term]["data"][this.getCachedOptions.item][0] + '-m.jpg';
        },
        itemName: function() {
            return this.DB[this.getCachedOptions.term]["data"][this.getCachedOptions.item][2];
        },
        bracketsDescription: function() {
            return this.DB[this.getCachedOptions.term]["data"][this.getCachedOptions.item][3];
        },
        getCachedOptions: function() {
            let res = {term: undefined, item: undefined}
            if (this.currentTerm !== undefined && this.currentItem !== undefined) 
                { res.term = this.currentTerm; res.item = this.currentItem }
                else { res.term = this.oldTerm; res.item = this.oldItem }
            return res;
        }
    },
    methods:{
        changeTerm(newTerm) {
            if (this.currentTerm && this.currentItem !== undefined) {
                this.oldItem = this.currentItem;
                this.oldTerm = this.currentTerm; 
                this.currentItem = undefined; 
            }
            this.currentTerm = newTerm;
        },
        changeItem(newItem) {
            this.currentItem = newItem;
        },
        isActiveItem(key) {
            return key === this.currentItem
        }
    }
})