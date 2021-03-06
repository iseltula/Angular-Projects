(function () {
  'use strict';

  angular
    .module('jobs')
    .run(menuConfig);

  menuConfig.$inject = ['menuService'];

  function menuConfig(menuService) {
    menuService.addMenuItem('topbar', {
      title: 'Jobs',
      state: 'jobs',
      type: 'dropdown',
      roles: ['*']
    });

    // Add the dropdown list item
    menuService.addSubMenuItem('topbar', 'jobs', {
      title: 'List Jobs',
      state: 'jobs.list'
    });

    // Add the dropdown create item
    menuService.addSubMenuItem('topbar', 'jobs', {
      title: 'Create Job',
      state: 'jobs.create',
      roles: ['user']
    });
  }
}());
