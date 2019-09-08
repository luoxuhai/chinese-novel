'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.put('/oss_to_local/info', controller.ossToLocal.updateInfo);
  router.resources('ossToLocal', '/oss_to_local', controller.ossToLocal);
  router.resources('type', '/type', controller.type);
};
