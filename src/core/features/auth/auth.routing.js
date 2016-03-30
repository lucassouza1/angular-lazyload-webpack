import createSimpleRoute from 'create-simple-route';

const name = 'auth';

const templateCallback = (resolve) => {
  require.ensure([], () => resolve(require('core/features/auth/auth.html')));
}

const controllerCallback = ($ocLazyLoad) => {
  return (resolve) => {
    require.ensure([], () => {
        let module = require('core/features/auth/auth');
        $ocLazyLoad.load({name: module.name});
        resolve(module.controller);
      }
    );
  }
};

let authModule = createSimpleRoute(name, templateCallback, controllerCallback);
authModule.config(($stateProvider) => {
  $stateProvider.state('logout', {
    url: '/logout',
    controller: ($state) => {
      $state.go('auth');
    },
    resolve: {
      logout: (authService) => {
        authService.logout();
      }
    }
  });
});

export default authModule;
