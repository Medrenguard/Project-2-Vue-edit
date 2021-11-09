var glossary = new Vue({
    el: "#app",
    data: {
        currentTerm: undefined,
        currentItem: undefined,
        DB: outerDB,
    },
    computed:{
        leftMenu: function () {
            if (this.currentTerm === undefined) {
                return 'Выберите категорию';
            } else {
                res = '<div class="sub-title">' + this.DB[this.currentTerm]["nameRu"] + '</div><ul>';
                for (i in this.DB[this.currentTerm]["data"]) {
                    res += '<li><a class="nv">' + this.DB[this.currentTerm]["data"][i][1] + '</li>';
                }
                res += '</ul>';
                return res;
            }
        }
    }
})