class ComponentsCtrl {
  constructor() {
    this.model = {
        list: [{
              id: 1,
              value: 'value 1 ',
              date: new Date(),
              number: 111.1
            }, {
              id: 2,
              value: 'value 2',
              date: new Date(),
              number: 222.22
            }, {
              id: 3,
              value: 'value 3',
              date: new Date(),
              number: 333.33
            }
        ]
    };
  }
}

export default angular
  .module('components.controller', [])
  .controller('ComponentsCtrl', ComponentsCtrl);