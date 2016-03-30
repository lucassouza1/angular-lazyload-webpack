'use strict';

import {run, config} from './core/features/app';

export default require('angular')
  .module('app', [
    // External
    require('angular-ui-router'),
    (() => { require('oclazyload'); return 'oc.lazyLoad' })(),

    // Services
    require('./commons/auth').name,

    // Routes
    require('./core/features/auth/auth.routing').name,
    require('./core/features/home/home.routing').name,
    require('./core/features/components/components.routing').name,
  ])
  .config(config)
  .run(run);
