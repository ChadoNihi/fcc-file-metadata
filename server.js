const express = require('express'),
      stylus = require('stylus'),
      nib = require('nib'),
      pug = require('pug');

      app = express(),
      port = process.env.PORT || 5000,
      compile = (str, path)=> {
          return stylus(str)
              .set('filename', path)
              .use(nib());
      };

app.set( 'port', ( process.env.PORT || 5000 ));
app.set('views', __dirname + '/public/views');
app.set('view engine', 'pug');

app.use(stylus.middleware(
  { src: __dirname + '/src/stylesheets',
    dest: __dirname + '/public/css',
    compile: compile
  }
));
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res)=> {
  res.render('index');
});

app.listen(app.get('port'), ()=>{
  console.log(`The server is listening to port ${app.get('port')}`);
});
