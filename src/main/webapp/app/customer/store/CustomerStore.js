Ext.define('DZ.customer.store.CustomerStore', {
    extend: 'Ext.data.ArrayStore',
    model: 'DZ.customer.model.CustomerModel',
    //autoLoad:true,
    requires: ['DZ.customer.util.CustomerUtil'],
    pageSize: 10, // 分页大小
    proxy:{
        type:'ajax',
        url:'getCustomerList.do',
        method:'get',
        reader : {
            type : 'json',
            rootProperty:'records',
            totalProperty:'recordsCount'
        }
    },
//    sorters: [{
//        property: 'age',
//        direction: 'ASC'
//    }],
    useUtil: function(){
//       var util = Ext.create('DZ.customer.util.CustomerUtil');
//       //this.filters = [util.filter()];
//       
//       this.filters = [function(item) {
//         return item.data.age > 0;
//         }];
//       console.log(this.filters);
    },
    filters:[
        function(item) {
            return item.data.age > 0;
        }
    ]
});