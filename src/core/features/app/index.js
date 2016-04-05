import env from 'commons/env.json';
import i18n from 'angular-i18n/pt-br';

export function config() {
}

export function run($rootScope, $state, $log, PermissionStore, authService, permissionService) {
  'ngInject';

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

  $rootScope.$on('auth:valid', loadUserProfile);
  $rootScope.$on('auth:invalid', resetUserProfile);
}
