import createSimpleModule from 'create-simple-module';

const name = 'home';

const templateCallback = (resolve) => {
  require.ensure([], () => resolve(require('./home.html')));
}

const controllerCallback = ($ocLazyLoad) => {
  return (resolve) => {
    require.ensure([], () => {
        let module = require('./home');
        $ocLazyLoad.load({name: module.name});
        resolve(module.controller);
      }
    );
  }
};

export default createSimpleModule({name, templateCallback, controllerCallback});
