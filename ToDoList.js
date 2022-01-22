$(window).on('load', function(){
    /* 載入畫面用 */
});

$(document).ready(function(){
new Vue({
    el:'#list',
    data:{
        listItem:'',        /* 用來儲存user輸入的項目 */
        items:[{
            // id: '',
            // text:  ''
        }]
    },
    methods:{
        /* 新增任務 */
        add:function(){
            var text = this.listItem;
            var id = Math.floor(Date.now());
            this.items.push({
                id: id,
                text: text
            });
            this.listItem = '';
        },

        /* 刪除任務 */
        remove:function(item){
            this.items.splice(item, 1);
        }
    }    
})
});