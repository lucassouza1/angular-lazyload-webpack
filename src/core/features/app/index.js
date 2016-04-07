import env from 'commons/env.json';

export function config($injector) {
  'ngInject';  
  
  let LocalizeConfig = $injector.get('jedi.i18n.LocalizeConfig');
  LocalizeConfig.supportedLanguage = ['pt', 'en', 'es'];
}

export function run(
  $rootScope, $state, $injector, $log, PermissionStore, permissionService, tmhDynamicLocaleCache) {
  'ngInject';

  const localize = $injector.get('jedi.i18n.Localize');
  const defaultLanguage = localize.getLanguage();
    
  $rootScope.$on('auth:valid', loadUserProfile);
  $rootScope.$on('auth:invalid', resetUserProfile);
  $rootScope.setLanguage = setLanguage; 
    
  localize.addResource((lang) => {
    return require('promise?bluebird,[name]!commons/i18n/resources_'+ lang + '.json')
  });
  loadAngularLocale(defaultLanguage, $rootScope.setLanguage, true);
    
  function setLanguage(lang) {
    localStorage.setItem('i18n_lang', JSON.stringify(lang));
    loadAngularLocale(lang, () => {      
      localize.setLanguage(lang);
    });
  }  
    
  function loadAngularLocale(lang, callback, force)  {
    require('bundle?name=[name]!angular-i18n/'+ lang + '.js')(() => {                        
      if (!tmhDynamicLocaleCache.get(lang)) {
        let localInjector = angular.injector(['ngLocale']),
            externalLocale = localInjector.get('$locale');
        tmhDynamicLocaleCache.put(lang, externalLocale);
      } 
                                    
      callback(lang);
    });
  }

  function loadUserProfile() {    
    $log.info('Load Permissions');
    loadPermissions();
    
    $log.info('Load Profile');
    $state.go('home');
  }

  function resetUserProfile() {        
    $log.info('Reset Profile');
    $state.go('auth');
  }
  
  function loadPermissions() {
    permissionService.getPermissionsByUser()
      .then((permissions) => {        
        permissions.forEach((permission) => {      
          permissionService.definePermission(permission, () => {
            return permissionService.hasPermission(permission);
          })
        });
      })        
  }
}
