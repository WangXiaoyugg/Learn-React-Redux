### React-Redux 即时通讯项目

#### 前置知识
- 知识储备 + React 全家桶学习
- 项目实战
- 优化总结
- html,css,js
- node.js,npm, webpack
- react.js 开发经验
- es6
- 新人进阶React形式，逐步优化
- 按功能开发页面，抽离公共组件
- 手写每一行JS代码，少些不写或者少些css

#### 学习目标
- 了解一个中度复杂规模的应用开发流程
- 掌握React.js的高级应用
- 彻底掌握 Redux的使用
- 了解实时应用开发方式


#### 技术架构
前台页面: 登录，注册，完善信息，牛人列表页面，Boss列表页面，个人中心，消息导航，聊天页面
前端支撑: ant-mobile Redux React-Router4 axios create-react-app 第三方组件库
前端框架: React
后端支撑: Express Socket.io Mongodb

#### 开发环境搭建
- create-react-app
- npm 安装 和使用第三方库
- 定制化配置
- npm start
- localhost:3000
- npm install redux --save
- npm run eject
- 扩展package.json的script字段，npm run 
- 注册码云账号
- 项目是私有项目，所以需要把账号发给管理员校验，获取权限
- 添加本地ssh key到码云后台，开始git 开发

#### es6常用用法
- es6是什么
- es6常用语法
```
块级作用域 let/const for(let i=0;i<10;i++){};
字符串扩展 let name='小明';`hello${name}`
函数扩展 箭头函数 （）=> {} setTimeout; x=>x*3
默认参数 (name='demo')=>{console.log(`hello ${name}`)};
展开符 hello = (name1,name2) => {console.log(name1,name2)};
let arr= ['demo1','demo2'];
hello.apply(null,arr);
hello(...arr);

对象展开符 obj = {name:'demo',course:'react app'};
Object.keys(obj);
Object.keys(obj);
Object.values(obj);
Object.entries(obj);

const name = 'imooc';
const obj = {
	name,
	[name]:'hello',
	hello:function(){},
	hello1(){}
}
console.log(obj)

const obj2 = {type:"IT,name:'rake'};
console.log(...obj,...obj2,date:'2017');

解构赋值
const arr = ['hello','imooc'];
let arg1 = arr[0];
let arg2 = arr[1];
let {a1,a2} = arr;
console.log(a1,'|',a2);
同理对象可以取值

class 类
class Demo {
	constructor(){
		this.name = 'demo'
	}
	sayhello(){
		console.log(`hello ${this.name}`)
	}
} 
const demo = new Demo();
demo.sayhello();

数据结构
Set 重点研究
Map
Symbol

模块化机制 import export
//demo1.js
export const name='demo';
export function sayHello(){};
export default course = "React";
//demo2.js
import {name,sayHello} from './demo1.js'
import course from './demo1.js'
import * as mod1 from './demo1.js'

装饰器
对象扩展，函数绑定
async await
promise
迭代器生成器
代理

数组常用写法
arr.map(v => v*2);
对象的常用写法
```

#### express + mongodb 入门
- express 开发 web 接口
1. npm install express --save
2. 新建 server／server.js
```
参考 www.express.com.cn
npm install nodemon -g
nodemon server.js
```
3. app.get , app.post
4. app.use
5. res.send ,res.json,res.sendfile

- nosql mongodb
1. 安装mongodb
brew install mongodb
mongod --config /usr/local/ect/mongod.conf
mongo 启动mongodb

- nodejs mongoose 模块连接和操作mongodb
npm install mongoose -g
```
const mongoose = require('mongoose');
//链接 mongo 并且使用 imooc集合
const DB_URL = 'mongodb://localhost:27017/imooc';
mongoose.connect(DB_URL);
mongoose.connection.on('connected',function(){
	console.log('connect success')
})

定义文档模型 ，Schema 和 model
const User = mongoose.model('user',new mongoose.Schema({
	user:{type:String,require:true},
	age:{type:Number,require:true}
}))

增删改查
User.create({user:'imooc',age:18},function(err,doc){
	if(!err){
		console.log(doc);
	}else {
		console.log(err)
	}
})

User.find({},function(err,doc){
	res.json(doc);
})
User.findOne({age:18},function(err,doc)=>{

})
User.remove({age:18},function(err,doc)=>{
	console.log(doc);
})
User.update({user:'小明'},{'$set':{age:26}},function(err,doc){
	console.log(doc)
})
```

- express 和 mongodb 结合
1. mongodb独立工具函数
2. express使用 body-parser 支持 post 参数
3. cookie-parser 支持 cookie 信息