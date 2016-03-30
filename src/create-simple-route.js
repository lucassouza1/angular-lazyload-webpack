import capitalize  from 'lodash/capitalize';

function createSimpleRoute(name, templateCallback, controllerCallback) {
  function routing($stateProvider) {

    $stateProvider.state(name, {
      url: '/' + name,
      templateProvider: ($q) => {
        return $q(templateCallback);
      },
      controller: capitalize(name) + 'Ctrl as vm',
      resolve: {
        ctrl: ($q, $ocLazyLoad) => {
          return $q(controllerCallback($ocLazyLoad));
        }
      }
    });
  }

  return angular
    .module(name + '.routing', [])
    .config(routing);
}

export default createSimpleRoute;
