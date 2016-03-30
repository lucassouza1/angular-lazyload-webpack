import createSimpleRoute from 'create-simple-route';

const name = 'components';

const templateCallback = (resolve) => {
  require.ensure([], () => resolve(require('core/features/components/components.html')));
}

const controllerCallback = ($ocLazyLoad) => {
  return (resolve) => {
    require.ensure([], () => {
        let module = require('core/features/components/components');
        $ocLazyLoad.load({name: module.name});
        resolve(module.controller);
      }
    );
  }
};

export default createSimpleRoute(name, templateCallback, controllerCallback);