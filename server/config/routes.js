var router = require('koa-router')();
var fs = require('fs');
var _ = require('lodash');
var yaml = require('yaml-front-matter');
var marked = require('marked');

exports.setRuquestUrl = (app) => {
    //配置ajax的路由
    //取markdown目录
    router.get('/ajax/getmdlist', getMdList);
    function *getMdList(next){
        try {
            var mdList = fs.readdirSync('./source/_posts');
            mdList = _.dropWhile(mdList,function(post){
                return !post.match(/.md/i);
            });
            this.status=200;
            this.body = {
                code: 200,
                data: {
                    mdList: mdList
                }
            }
        } catch (e) {
            this.status = 500;
            this.body = {
                code: 500,
                message: e.code
            };
        }
    }
    //取markdown详情信息
    router.get('/ajax/getmddetail/:mdtitle', getMdDetail);
    function *getMdDetail(next){
        try {
            var mdTitle = this.params.mdtitle;
            var mdDetail = '';
            mdDetail = fs.readFileSync('./source/_posts/'+mdTitle,{encoding:'utf-8'}) || '';
            mdDetail = yaml.loadFront('---\n'+mdDetail);
            this.status=200;
            this.body = {
                code: 200,
                data: mdDetail
            }
        } catch (e) {
            this.status = 500;
            this.body = {
                code: 500,
                message: e.code
            };
        }
    }

    //取markdown详情信息
    router.post('/ajax/addmddetail', addMdDetail);
    function *addMdDetail(next){
        try {
            var mdTitle = this.params.mdtitle;
            var mdDetail = '';
            mdDetail = fs.readFileSync('./source/_posts/'+mdTitle,{encoding:'utf-8'}) || '';
            mdDetail = yaml.loadFront('---\n'+mdDetail);
            this.status=200;
            this.body = {
                code: 200,
                data: mdDetail
            }
        } catch (e) {
            this.status = 500;
            this.body = {
                code: 500,
                message: e.code
            };
        }
    }

    //配置SPA路由
    router.get('/*', main);

    function *main(next) {
        this.body = yield this.render('index.html');
    }

    app.use(router.routes()).use(router.allowedMethods());
};
