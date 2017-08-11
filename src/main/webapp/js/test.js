Ext.define('User', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'name',     type: 'string' },
        { name: 'age',      type: 'int' },
        { name: 'phone',    type: 'string' },
        { name: 'gender',   type: 'string' },
        { name: 'username', type: 'string' },
        { name: 'alive',    type: 'boolean', defaultValue: true }
    ],

    validators: {
        age: 'presence',
        name: { type: 'length', min: 2 },
        gender: { type: 'inclusion', list: ['Male', 'Female'] },
/*        username: [
            { type: 'exclusion', list: ['Admin', 'Operator'] },
            { type: 'format', matcher: /([a-z]+)[0-9]{2,3}/i }
        ]*/
    }
});

var instance = Ext.create('User', {
    name: 'Ed',
    gender: 'Male',
    username: 'edspencer'
});

var validation = instance.getValidation();
console.log("validation ========= " + validation);