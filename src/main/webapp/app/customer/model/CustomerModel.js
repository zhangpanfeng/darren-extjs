Ext.define('DZ.customer.model.CustomerModel', {
    extend : 'Ext.data.Model',
    idProperty : 'id',
    fields : [ {
        name : 'id',
        type : 'int'
    }, {
        name : 'name',
        type : 'string'
    }, {
        name : 'age',
        type : 'int'
    }, {
        name : 'gender',
        type : 'string'
    }, {
        name : 'phone',
        type : 'string'
    } ]
});