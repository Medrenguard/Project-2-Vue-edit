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
        content: function() {
            return this.DB[this.currentTerm]["data"][this.currentItem][4];
        },
        imgDescription: function() {
            return this.DB[this.currentTerm]["data"][this.currentItem][5];
        },
        getImgSrc: function() {
            return 'img/content/' + this.DB[this.currentTerm]["data"][this.currentItem][0] + '-m.jpg';
        },
        itemName: function() {
            return this.DB[this.currentTerm]["data"][this.currentItem][2];
        },
        bracketsDescription: function() {
            return this.DB[this.currentTerm]["data"][this.currentItem][3];
        },
    }
})