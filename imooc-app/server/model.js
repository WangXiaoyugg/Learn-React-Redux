//链接mongo,并且使用imooc 这个集合
const DB_URL = 'mongodb://127.0.0.1:27017/imooc'
mongoose.connect(DB_URL)
mongoose.connection.on('connected',() => {
	console.log('mongo connected success')
})