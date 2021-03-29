/*
* 引入mockjs
* */
import Mock from 'mockjs'

/*
* url = '/api/test/list'
* data|20 = 生成20条数据
* */
Mock.mock('/api/test/list', 'get', {
    'data|20': [{
        'id|+1': 0,  // id 自增，从 0 开始
        'email': '@email',  // 随机生成邮箱地址
        'boolean': '@boolean',  // 随机生成布尔值
        'datetime': '@datetime',  // 随机生成日期时间
        'image': '@image(\'200x200\')',  // 随机生成图片大小为 200x200 的图片链接
        'text': '@csentence(30)',  // 随机生成 30 个中文字符
        'title': '@ctitle(7, 15)',  // 随机生成 7 到 15 个中文标题
        'name': '@cname',  // 随机生成中文名字
        'web': '@domain',  // 随机生成域名
        'address': '@county(true)',  // 随机生成所属的省、市、县
    }]
});
