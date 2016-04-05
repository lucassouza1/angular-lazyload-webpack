'use strict';
import angular from 'angular';
import {run, config} from './core/features/app';

export default angular
  .module('app', [
    // External
    require('angular-ui-router'),
    (() => { require('oclazyload'); return 'oc.lazyLoad' })(),    
    (() => { require('angular-permission'); return 'permission' })(),
    require('commons/jedi').name,

    // Services
    require('./commons/auth').name,
    require('./commons/permission').name,

    // Routes
    require('./core/features/auth/auth.routing').name,
    require('./core/features/home/home.routing').name,
    require('./core/features/components/components.routing').name,
  ])
  .config(config)
  .run(run);
