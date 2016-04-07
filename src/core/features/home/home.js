'use strict';

function run($injector, $log) {
  'ngInject';
  
  $log.info('Running home module');
  
  const localize = $injector.get('jedi.i18n.Localize');
  
  localize.addResource((lang) => {
    return require('promise?bluebird,home.[name]!./i18n/' + lang + '.json')
  });
}

export default angular
  .module('home', [
    require('./home.controller').name
  ])
  .run(run);
