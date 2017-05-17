## bower使用

初始化
```cmd
bower init
```

inatall lib并且把jquery依赖记入到bower.json
```cmd
bower install jquery --save
```

创建.bowerrc文件指定bower_components安装路径
```cmd
type null >.bowerrc
```

初始化
```cmd
bower init
```

初始化
```cmd
bower init
```

初始化
```cmd
bower init
```


##  使用Apache启动系统

配置：找到http.conf, {{YOUR PROJECT SOURCE PATH}} 替换成泥项目的路径，比如：C:\stephen\work\require-angular-module

```
#The below line directs apache to send any requests for /<users-custom-url>
#to the specified directory (directories) of your Gateway Portal for Agents installation
Alias /radist {{YOUR SOURCE}}\dist
Alias /ra {{YOUR PROJECT SOURCE PATH}}
<Directory "{{YOUR PROJECT SOURCE PATH}}">
Options Indexes FollowSymLinks
AllowOverride All
Order allow,deny
Allow from all
</Directory>
```

然后重新启动Apache，访问URL:http://localhost/ra/app/html/#/home