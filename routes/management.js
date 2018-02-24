var express = require('express');
var router = express.Router();
var common = require('../controllers/common');

var PipeImgController = require('../controllers/pipeImg');
var ManagerController = require('../controllers/manager');

var path = require('path');
// 文件上传组件
var multer  = require('multer');
var upload = multer({ dest: path.join(__dirname, '../public/upload/') });

/* 管理后台首页 */
router.get('/', common.auth_user, function(req, res, next) {
  res.render('management/index');
});

/* 管理后台--banner图片管理首页 */
router.get('/bannerImg', common.auth_user, PipeImgController.renderIndex);

/* 管理后台--banner图片管理 添加、编辑、详情页 */
router.get('/bannerImg_add-or-edit-bannerImg/:type', common.auth_user, PipeImgController.renderAddEdit);

/* 管理后台--登录页面 */
router.get('/toLogin', function(req, res) {
    res.render('login', {});
});

/* 管理后台--管理员账户密码管理 */
router.get('/wxqManager', common.auth_user, function(req, res) {
    res.render('userManager', {});
});

/* API--登录 */
router.post('/login', ManagerController.login);

/* API--上传banner图片 */
router.post('/upload_bannerImg', common.auth_user, upload.single('upload_file'), function(req, res) {
  PipeImgController.upload_bannerImg(req, res);
});

/* API--banner图片 添加 接口 */
router.post('/bannerImg/add', common.auth_user, PipeImgController.addBannerImg);

/* API--banner图片 删除 接口 */
router.post('/delete_banner', common.auth_user, PipeImgController.deleteBannerImg);

/* API--banner图片 启用状态 修改接口 */
router.post('/change_bannerStatus', common.auth_user, PipeImgController.change_bannerStatus);

router.get('/typography', common.auth_user, function(req, res, next) {
  res.render('typography', {});
});
router.get('/elements', common.auth_user, function(req, res, next) {
  res.render('elements', {});
});
router.get('/buttons', function(req, res, next) {
  res.render('buttons', {});
});
router.get('/treeview', function(req, res, next) {
  res.render('treeview', {});
});
router.get('/jquery-ui', function(req, res, next) {
  res.render('jquery-ui', {});
});
router.get('/nestable-list', function(req, res, next) {
  res.render('nestable-list', {});
});
router.get('/tables', function(req, res, next) {
  res.render('tables', {});
});
router.get('/jqgrid', function(req, res, next) {
  res.render('jqgrid', {});
});
router.get('/form-elements', function(req, res, next) {
  res.render('form-elements/index', {});
});
router.get('/error-404', function(req, res, next) {
  res.render('error-404', {});
});
router.get('/error-500', function(req, res, next) {
  res.render('error-500', {});
});
router.get('/grid', function(req, res, next) {
  res.render('grid', {});
});

router.get('/calendar', function(req, res, next) {
  res.render('calendar', {});
});
router.get('/gallery', function(req, res, next) {
  res.render('gallery', {});
});

module.exports = router;