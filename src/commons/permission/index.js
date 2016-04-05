class PermissionService {
  constructor($q, PermissionStore) {    
    this.$q = $q;
    this.permissionStore = PermissionStore;
    this.resetPermissions();
  }
  
  getPermissionsByUser() {
    return this.$q((resolve) => {      
      let permissions = ['auth'];
      permissions.push('home');
      permissions.push('components');
      
      resolve(permissions);
    });
  }
  
  definePermission(permission, callback) {
    this.addPermission(permission);
    this.permissionStore.definePermission(permission, callback)
  }
  
  addPermission(permission) {
    this.permission.push(permission);
  }
  
  hasPermission(permission) {
    return this.permission.indexOf(permission) != -1;
  }
  
  resetPermissions() {
    this.permission = [];
  }  
}

function run(permissionService) {
  const permission = 'auth';
  permissionService.definePermission(permission, () => {
    return permissionService.hasPermission(permission);
  });
}

export default angular
  .module('permission.service', [])
  .service('permissionService', PermissionService)
  .run(run);