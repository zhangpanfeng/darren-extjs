Ext.application({
    name : "DZ",
    appFolder: 'app',
    controllers: ['DZ.customer.controller.CustomerController'],
    launch : function() {
//        Ext.create("Ext.container.Viewport", {
//            layout : "fit",
//            items : [ {
//                title : "Darren Test Ext Js",
//                html : "<h1> Hello Ext Js! </h1>"
//            } ]
//        });
      Ext.create('Ext.panel.Panel', {
//      height : 500,
//      width : 800,
      items : {
          xtype : 'customer-list'
      },

      renderTo : document.body
  });

    }
})