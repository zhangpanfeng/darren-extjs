Ext.define('User', {
    extend: 'Ext.data.Model',
    fields: ['id', 'name', 'email']
});

var store = Ext.create('Ext.data.Store', {
    model: 'User',
    proxy: {
        type: 'jsonp',
        url : 'jsonp.jsp'
    }

//,
//    sorters: [{
//        property: 'id',
//        direction: 'DESC'
//    }]
});

//store.sort();

/*store.load();
Ext.defer(function(){
    store.each(function(item){
        console.log(item); 
     });
}, 1000);*/

store.load({
    callback: function(records, operation, success) {
        Ext.each(records, function(item){
            console.log(item.data); 
            console.log(item.data.id + " " + item.data.name + " " + item.data.email); 
            });
        }
});