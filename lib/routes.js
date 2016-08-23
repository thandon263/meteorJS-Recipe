FlowRouter.route('/', {
  name: 'home',
  action() {
    BlazeLayout.render('HomeLayout');
  }
});

FlowRouter.route('/', {
  name: 'Test',
  action() {
    BlazeLayout.render('MainLayout', {main: 'Test'});
  }
});
