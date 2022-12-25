const Koa = require('koa');
const app = new Koa();

// response
app.use(ctx => {
    if (ctx.url === '/') {
        ctx.body = 'Index Page';
    } else if (ctx.url === '/about') {
        ctx.body = 'About Page';
    } else if (ctx.url === '/contact') {
        ctx.body = 'Contact Page';
    } else {
        ctx.body = '404 Page Not Found';
    }
});

const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});