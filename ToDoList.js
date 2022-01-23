$(window).on('load', function(){
    /* 載入畫面用 */
});

$(document).ready(function(){
    new Vue({
        el:'#list',
        data:{
            listItem:'',    /* 用來儲存user輸入的任務 */
            status: 'no',   /* 目前任務狀態為未完成 */
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
                    computed: false  
                });
                this.listItem = '';
            },

            // // /* 更新任務狀態 */
            // computed: {
            //     filterItems:function() {
                
            //         /* 當任務狀態未勾選時，
            //            就顯示在未完成頁籤中。 */                    
            //         if (this.status == 'no') {
            //             var Items = [];
            //             this.items.forEach(function(item) {
            //                 if (!item.completed) {
            //                     Items.push(item);
            //                 }
            //             })
            //             return Items;
            //         }

            //         /* 當任務狀態勾選時，
            //            就顯示在完成頁籤中。 */                       
            //         else if (this.status == 'yes') {
            //             var Items = [];
            //             this.items.forEach(function(item) {
            //                 if (item.completed) {
            //                     Items.push(item);
            //                 }
            //             })
            //             return Items;
            //         }

            //         /* 顯示所有任務。 */                       
            //         else if (this.status == 'all') {
            //             return this.Items;
            //         }
            //         return [];
            //     }
            // },

            /* 刪除任務 */
            remove:function(index) {
                this.items.splice(index, 1); /* 從此任務開始刪除，到這個任務為止。 */
                return confirm("要刪除嗎？");
            },
            removeAll:function(index) {
                this.items.splice(index);    /* 刪除全部。 */
                return confirm("要刪除全部任務嗎？");                
            }
        }    
    });
});