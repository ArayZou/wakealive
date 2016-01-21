# wakealive

# Running
-   npm start           后端生产服务器
-   npm run hot         前端服务器
-   npm run server      后端开发服务器
-   npm run build       打包前端文件

# 设计思路

前端系统和后端系统分离

theme负责最后打包生成的博客页面
theme全静态redux-SPA，通过webpack跑本地调试server和build发布包

server负责本地后台编辑设置页面，最后生成json文件夹放入build
server用KOA加后端渲染react的模式

最后上传build里的文件或者直接webpack起build里的静态目录server

# 文件目录

├── /theme/

│   └──  /wakealive

├── /build/

│   ├── /index.html

│   ├── /bundel.js

│   └──  /json/

├── /server/

│   ├── /server.js

│   └──  /tpl

│── package.json

└── webpack.config.js

# Learn More

