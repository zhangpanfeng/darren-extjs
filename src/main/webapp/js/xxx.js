Ext.define('MediaView.modules.campaign.FilterPanel', {
    extend : 'Ext.panel.Panel',

    requires : [ 'MediaView.component.data.NielsenCombo', 'MediaView.component.data.NielsenFilterCombo' ],
    xtype : "FilterPanel",
    itemId : 'filterPanel',
    width : "100%",
    height : 120,
    layout : {
        type : "vbox"
    },
    cls : 'campaign-filter-panel',
    items : [ {
        xtype : "panel",
        width : "100%",
        padding : '5 0 5 0',
        layout : {
            type : "hbox"
        },
        items : [ {
            xtype : 'fieldcontainer',
            labelAlign : 'top',
            fieldLabel : ClistResources[Globals.locale].labels.splitId,
            combineErrors : true,
            msgTarget : 'side',
            flex : 1,
            layout : 'hbox',
            height : 50,
            items : [ {

                xtype : 'nielsenCombo',
                itemId : 'cmpFilterBox',
                mapperId : 'filterCampData',
                forceNewStore : true,
                queryMode : 'local',
                forceSelection : false,
                editable : false,
                name : 'title',
                displayField : 'CMPG_TG_ID',
                valueField : 'CMPG_ID',
                disabled : true,
                isFirstLoad : true,
                openedTabs : {
                    ddd: 1
                },
                changeFlag : true,
                xxx:{
                    ss:1
                }
            } ]
        } ]
    } ]

});
