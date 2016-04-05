import createSimpleModule from 'create-simple-module';

const name = 'components';

const templateCallback = (resolve) => {
  require.ensure([], () => resolve(require('./components.html')), 'components');
}

const controllerCallback = ($ocLazyLoad) => {
  return (resolve) => {
    require.ensure([], () => {
        let module = require('./components');
        $ocLazyLoad.load({name: module.name});
        resolve(module.controller);
      }, 'components');
  }
};

export default createSimpleModule({name, templateCallback, controllerCallback});
