
//合并打包需加
fis.match('::package', {
  postpackager: fis.plugin('loader')
});

//发布的时候忽略以下目录或文件
var ignore = fis.get('project.ignore');
ignore.push('{*,**/*}package.json');
fis.set('project.ignore', ignore);

// 启用 fis-spriter-csssprites 插件
fis.match('::package', {
  spriter: fis.plugin('csssprites')
});

// 对 CSS 进行图片合并
fis.match('*.css', {
  // 给匹配到的文件分配属性 `useSprite`
  useSprite: true
});

// 自动补齐css前缀
fis.match('*.{css,scss}', {
  preprocessor: fis.plugin('autoprefixer', {
    "browsers": ["Android >= 2.1", "iOS >= 4", "ie >= 8", "firefox >= 15"],
    "cascade": true
  })
})

// 编译sass和处理带_的scss文件
fis.match('*.scss', {
  rExt: '.css',
   parser: fis.plugin('node-sass',{

   })
});

// css压缩
/*fis.match('*.css', {
  optimizer: fis.plugin('clean-css')
});*/

//将sass转换出来的css与其他css打包
fis.match('*.{scss,css}', {
  packTo: '/static/aio.css'
});

// js压缩
/*fis.match('*.js', {
  optimizer: fis.plugin('uglify-js')
});*/

//js打包配置
fis.match('*.js', {
  packTo: '/static/aio.js'
});

// 压缩png图片
fis.match('*.png', {
    optimizer : fis.plugin('png-compressor')
});

// 加 md5 
/*fis.match('*.{js,css,png}', {
  useHash: true
});*/




//定位资源

//定位JS：所有的 js   发布到/static/js/xxx目录下
/*fis.match('**.js', {
    release : '/static/js$0'
});*/

//定位CSS：所有的 css 发布到/static/css/xxx目录下
/*fis.match('**.css', {
    release : '/static/css$0'
});*/

//定位图片：所有image目录下的.png .jpg .gif文件发布到/static/pic/xxx目录下
/*fis.match('/images/(*.{jpg,png,gif})', {
    release: '/static/images/$1$2'
});*/


// 让所有文件，都使用相对路径。
fis.hook('relative');
fis.match('**', {
  relative: true
});

 //将代码布置到当前目录下的 
fis.match('*', {
  deploy: fis.plugin('local-deliver', {
    to: './output'
  })
});



