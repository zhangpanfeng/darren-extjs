//Ext.onReady(function(){
//    
//    Ext.define('D.test.Base',{
//        food: 'apple',
//        setFood: function(fd){
//            this.food = fd;
//        },
//        eat: function(){
//            alert('eat ' + this.food);
//        }
//    });
//    
//    Ext.define('D.test.A',{
//        extend: 'D.test.Base'
//    });
//    
//    var a = Ext.create('D.test.A');
//    
//    a.eat();
//    
//    a.setFood("Orange");
//    
//    a.eat();
//});



// use config
Ext.onReady(function(){
    Ext.define('D.test.Base',{
        config:{
            food: 'apple'
        },
        eat: function(){
            alert('eat ' + this.getFood());
        },
        constructor: function(config) {
            this.initConfig(config);

            return this;
        }
    });
    
    Ext.define('D.test.A',{
        extend: 'D.test.Base'
    });
    
    var a = Ext.create('D.test.A');
    
    a.eat();
    
    a.setFood("Orange");
    
    a.eat();
});