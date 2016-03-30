export function config() {
}

export function run($rootScope, $state, $log) {
  'ngInject';

  function loadUserProfile() {
    $log.info('Load Profile');
    $state.go('home');
  }

  function resetUserProfile() {
    $log.info('Reset Profile');
    $state.go('auth');
  }

  $rootScope.$on('auth:valid', loadUserProfile);
  $rootScope.$on('auth:invalid', resetUserProfile);
}
