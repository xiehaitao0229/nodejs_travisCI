const Koa = require('koa');
const app = new Koa();

app.use(async(ctx,next)=>{
    ctx.body = 'hello koa2  -->Travis CI 自动化部署'
})

app.listen(3000);