class AuthService {
  constructor($q, $rootScope){
    this.$q = $q;
    this.$rootScope = $rootScope;

    this.$rootScope.loggedIn = false;    
  }

  login(usename, password) {
    return this.$q((resolve) => {
      this.$rootScope.loggedIn = true;
      this.$rootScope.$broadcast('auth:valid');
      resolve();
    });
  }

  logout() {
    this.$rootScope.loggedIn = false;
    this.$rootScope.$broadcast('auth:invalid');
  }
}

function run($rootScope, $log, $timeout) {
  $timeout(() => {
    if ($rootScope.loggedIn) {
      $rootScope.$broadcast('auth:valid');
    } else {
      $rootScope.$broadcast('auth:invalid');
    }
  })
}

export default angular
  .module('auth.service', [])
  .service('authService', AuthService)
  .run(run);
