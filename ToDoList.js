$(window).on('load', function(){
    /* 載入畫面用 */
});

$(document).ready(function(){
    new Vue({
        el:'#list',
        data:{
            listItem:'',    /* 用來儲存user輸入的項目 */
            items:[{
                id: '',
                text:  '',
                completed: false
            }]
        },
        methods:{
            /* 新增任務 */
            add:function() {
                var text = this.listItem;
                var id = Math.floor(Date.now());
                if (!text) { return false }

                this.items.push({
                    id: id,
                    text: text,
                    completed: false
                });
                this.listItem = '';
            },

            /* 刪除任務 */
            remove:function(index) {
                this.items.splice(index, 1); /* 從此項目開始刪除，到這個項目為止。 */
            },
            removeAll:function(index) {
                this.items.splice(index);    /* 刪除全部。 */
            }
        }    
    });
});