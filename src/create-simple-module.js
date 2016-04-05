import capitalize from 'lodash/capitalize';
import {extend} from 'angular';

function createSimpleModule({name, templateCallback, controllerCallback, definition = {}}) {   
  function routing($stateProvider) {    
    $stateProvider.state(name, extend({
      url: '/' + name,
      templateProvider: ($q) => {
        'ngInject';
        return $q(templateCallback);
      },
      controller: capitalize(name) + 'Ctrl as vm',
      resolve: {
        ctrl: ($q, $ocLazyLoad) => {
          'ngInject';
          return $q(controllerCallback($ocLazyLoad));
        }
      },
      data: {       
        breadcrumb: name.split('.').map(capitalize),
        permissions: {
          only: [name]
        }
      }
    }, definition));
  }

  return angular
    .module(name + '.routing', [])
    .config(routing);
}

export default createSimpleModule;
