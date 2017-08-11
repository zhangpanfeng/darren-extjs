Ext.onReady(function(){
    var storage = Ext.create('Ext.util.LocalStorage',{
        id:'darren',
        session:true
    });
    
    storage.setItem('name', 'Darren');
    
    console.log(storage.getKeys());
});