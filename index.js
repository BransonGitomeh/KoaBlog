var koa = require('koa');
var route = require('koa-route');

var app = koa();

//my-lib for rendering views
var render = require('./lib/render');

//database
var PostDB = {
  1:{
    title:'Branson',
    content:'i am an awesome person and i know that'
  },

  2:{
    title:'Caroline',
    content:'i am an awesomest Gf ever... :-P'
  }
};

//blogs functions('actions')
var blog = {
  list:function *(){
        console.log('asked for a list of all blogs');
        this.body = yield render("list",{PostDB:PostDB});
  }
}

//router
app.use(route.get('/blog', blog.list));


app.listen(3000);
console.log('listening on port 3000');
