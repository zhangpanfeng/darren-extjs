//// normal case
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
//    Ext.define('D.test.B',{
//        book: "Extjs",
//        read: function(){
//            alert('read ' + this.book);
//        }
//    });
//    
//    Ext.define('D.test.A',{
//        extend: 'D.test.Base',
//        mixins: [
//            'D.test.B'
//        ]
//    });
//    
//    var a = Ext.create('D.test.A');
//    
//    a.eat();
//    
//    a.setFood("Orange");
//    
//    a.eat();
//    
//    a.read();
//});

//conflict case1
//当extend和mixins存在冲突时，优先选用superclass的属性和方法
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
//    Ext.define('D.test.B',{
//        book: "Extjs",
//        read: function(){
//            alert('read ' + this.book);
//        },
//        // add
//        food: 'banana',
//        setFood: function(fd){
//            this.food = fd;
//        },
//        eat: function(){
//            alert('eat ' + this.food);
//        }
//    });
//    
//    Ext.define('D.test.A',{
//        extend: 'D.test.Base',
////        mixins: [
////            'D.test.B'
////        ],
//        
//        mixins: {
//            b:'D.test.B'
//        },
//        //add
//        
//        eat: function(){
//            //this.callParent();
//            //var bb = Ext.create('D.test.B');
//            this.mixins.b.eat.call(this);
//        }
//        
//    });
//    
//    var a = Ext.create('D.test.A');
//    a.food = a.mixins.b.food;
//    a.eat();
//    
//    a.setFood("Orange");
//    
//    a.eat();
//    
//    a.read();
//});


//conflict case2
//当mixins和mixins存在冲突时，需要指定调用的方法和属性
Ext.onReady(function(){
  
  Ext.define('D.test.C',{
      food: 'apple',
      setFood: function(fd){
          this.food = fd;
      },
      eat: function(){
          alert('eat ' + this.food);
      }
  });
  
  Ext.define('D.test.B',{
      book: "Extjs",
      read: function(){
          alert('read ' + this.book);
      },
      // add
      food: 'banana',
      setFood: function(fd){
          this.food = fd;
      },
      eat: function(){
          alert('eat ' + this.food);
      }
  });
  
  Ext.define('D.test.A',{
      mixins: {
          b:'D.test.B',
          c:'D.test.C'
      },
      //add
      
      eat: function(){
          //this.callParent();
          this.mixins.c.eat.call(this);
      }
      
  });
  
  var a = Ext.create('D.test.A');
  //a.food = a.mixins.c.food;
  a.eat();
  
  a.setFood("Orange");
  
  a.eat();
  
  a.read();
});