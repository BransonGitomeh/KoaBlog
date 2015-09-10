var koa = require('koa');
var route = require('koa-route');

var app = koa();

//my-lib for rendering views
var render = require('./lib/render');

//database
var PostDB = {
  1:{
    id:1,
    title:'Branson',
    content:'i am an awesome person and i know that'
  },

  2:{
    id:2,
    title:'Caroline',
    content:'i am an awesomest Gf ever... :-P'
  }
};

//blogs functions('actions')
var blog = {
  list:function *(){
        var posts = PostDB;
        console.log('asked for a list of all blogs');
        this.body = yield render("list",{posts:posts});
  }
}

//methods for a single  post
var post = {
  show:function *(id){
        var post = PostDB[id];
        console.log('asked for a single post');
        this.body = yield render("show",{post:post});
  }
}

//router
app.use(route.get('/', blog.list));
app.use(route.get('/post/:id', post.show));


app.listen(3000);
console.log('listening on port 3000');
