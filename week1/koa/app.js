const Koa = require('koa');
const app = new Koa();

//Logger middleware
app.use(async(ctx, next) => {
    await next();
    const rt = ctx.response.get('X-Response-Time');
    console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});


//x-response-time
app.use(async(ctx, next) => {
    const start = Date.now();
    await next();
    //Calculating the miliseconds here
    const ms = Date.now() - start;
    ctx.set('X-Response-Time', `${ms}ms`);
});


//Launching the Koa application on port 5000
app.use(async ctx => {
    ctx.body = '<h1>Hello World !</h1>';
});

app.listen(5000);