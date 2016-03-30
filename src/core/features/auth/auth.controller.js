class AuthCtrl {
  constructor(authService) {
    this.authService = authService;

    this.model = {
      username: null,
      password: null
    };
  }

  login() {
    this.authService
      .login(this.model.username, this.model.password)
      .then(() => console.log('Login ok!'));
  }
}

export default angular
  .module('auth.controller', [])
  .controller('AuthCtrl', AuthCtrl);
