Ext.define('DZ.customer.controller.CustomerController', {
    extend : 'Ext.app.Controller',
    models : [ 'DZ.customer.model.CustomerModel' ],
    stores : [ 'DZ.customer.store.CustomerStore' ],
    views : [ 'DZ.customer.view.CustomerList' ],

    init : function() {
        

        //Ext.create('DZ.customer.view.CustomerList').show();
        
        
//        var store = new DZ.customer.store.CustomerStore();
//        // store.useUtil();
//        
//        var view = new DZ.customer.view.CustomerList();
//        view.store = store;
//         store.load();
//         
//         view.redraw();
    }
});