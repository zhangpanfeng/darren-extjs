ExtJs:{

	1: 什么是ExtJs:{
		下载: http://cdn.sencha.com/ext/gpl/ext-6.0.1-gpl.zip,
		
		官网:{
		    http://extjs.org.cn/,
			https://www.sencha.com/products/extjs/
		}
	},
	
	2: 介绍sample，api:{
		sample: http://10.227.6.62:8081/ext-6.0.1/build/examples/index.html,
		api: http://docs.sencha.com/extjs/6.0.1/modern/Ext.html
	},
	
	3: helloworld:{
		window.onload/body.onload: 当一个文档完全下载到浏览器中时，会触发 window.onload 事件。
                                   这意味着页面上的全部元素对 javascript 而言都是可以访问的，
                                   这种情况对编写功能性的代码非常有利，因为无需考虑加载的次序。

		$(document).ready():	   通过 $(document).ready() 注册的事件处理程序，则会在 DOM 完全就绪并可以使用时调用。
                                    虽然这也意味着所有元素对脚本而言都是可以访问的，但是，并不意味着所有关联的文件都已经下载完毕。
                                   换句话说，当 HTML 下载完成并解析为 DOM 树之后，代码就可以运行。		

        Ext.onReady():				?,
		
		sample: http://www.cnblogs.com/yangzhilong/p/3796768.html,
		
		
		bootstrap.js,
		
	},
	
	4: 小知识点:{
		extend,
		mixins,
		config,
		storage:{
			LocalStorage,
			SessionStorage
		}
	},
	
	5: MVC:{
		m: model/store,
		v: view,
		c: controller
	},
	
	6: proxy:{
		客户端代理:{
			LocalStorageProxy：将数据存储在localStorage中，此种方式可以持久的将数据存储在客户端,
			SessionStorageProxy：将数据存储在sessionStorage中，此种方式只在当前会话中生效，当关闭浏览器以后，数据也会随之丢失,
			MemoryProxy：将数据存储在内存中，此种方式只在当前页面有效，且如果刷新页面，数据将丢失。
		},
		
		服务器端代理:{
			Ajax：在当前域中发送请求,
			JsonP：跨域的请求,
			Rest：与服务器进行RESTful（GET/PUT/POST/DELETE）交互,
			Direct：使用  Ext.direct.Manager 发送请求
		}
	}
	
}
