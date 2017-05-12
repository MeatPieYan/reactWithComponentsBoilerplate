module.exports = app => {
  class TestController extends app.Controller {
    * test() {
      this.ctx.body = 'hi, egg';
    }

    * index() {
      yield this.ctx.render('react');
    }
  }
  return TestController;
};
