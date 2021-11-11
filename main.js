var glossary = new Vue({
    el: "#app",
    data: {
        currentTerm: undefined,
        currentItem: undefined,
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
            return this.currentItem != undefined;
        },
    }
})