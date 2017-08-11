Ext.define('DZ.customer.view.CustomerList', {
    extend: 'Ext.grid.Panel',
    xtype: 'customer-list',
    store: 'DZ.customer.store.CustomerStore',
    columns: [
        {text: "NO", width: 120, xtype: 'rownumberer'},
        {text: "Name", flex: 1, sortable: true, dataIndex: 'name'},
        {text: "Age", width: 120, sortable: true, dataIndex: 'age'},
        {text: "Gender", width: 120, sortable: true, dataIndex: 'gender', editor:{}},
        {text: "Phone", width: 120, sortable: true, dataIndex: 'phone'}
    ],
    //renderTo:'grid_div',
    //draggable: true,
    width: 800,
    columnLines: true,
    //height: 500,
    title: 'Grid with Numbered Rows',
    tbar: [
        { xtype: 'button', 
            text: 'delete', 
            handler: function(a, b, c, d){
                var gridPanel = this.up('customer-list');
                var selected = gridPanel.getSelectionModel().getSelected();
                var store = gridPanel.getStore();
                Ext.each(selected.items, function(item){
                    store.remove(item);
                });
            } 
        },
        { xtype: 'button', 
            text: 'load', 
            handler: function(a, b, c, d){
                var gridPanel = this.up('customer-list');
                var selected = gridPanel.getSelectionModel().getSelected();
                var store = gridPanel.getStore();
                store.load();
            } 
        },
        { xtype: 'button', 
            text: 'setFilterload', 
            handler: function(a, b, c, d){
                var gridPanel = this.up('customer-list');
                var selected = gridPanel.getSelectionModel().getSelected();
                var store = gridPanel.getStore();
                store.useUtil();
                store.load();
            } 
        }
    ],
    dockedItems: [{
        xtype: 'pagingtoolbar',
        dock: 'bottom',
        displayInfo: true,
        pageSize: 10, // 分页大小
        store: 'DZ.customer.store.CustomerStore'
//        items: [
//            { xtype: 'button', text: 'Button 1' }
//        ]
    }],
//    selModel: {
//        type: 'spreadsheet',
//        // Disables sorting by header click, though it will be still available via menu
//        columnSelect: true,
//        checkboxSelect: true,
//        pruneRemoved: false,
//        extensible: 'y'
//    },
    plugins: [Ext.create('Ext.grid.plugin.CellEditing', {clicksToEdit: 1})],
    selType: 'checkboxmodel',
    initComponent: function() {

        this.callParent();
    }
});