import createSimpleRoute from 'create-simple-route';

const name = 'home';

const templateCallback = (resolve) => {
  require.ensure([], () => resolve(require('core/features/home/home.html')));
}

const controllerCallback = ($ocLazyLoad) => {
  return (resolve) => {
    require.ensure([], () => {
        let module = require('core/features/home/home');
        $ocLazyLoad.load({name: module.name});
        resolve(module.controller);
      }
    );
  }
};

export default createSimpleRoute(name, templateCallback, controllerCallback);
