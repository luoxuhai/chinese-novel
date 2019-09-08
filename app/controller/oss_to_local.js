'use strict';

const Controller = require('egg').Controller;
const fs = require('fs');

module.exports = class OssToLocalController extends Controller {
  async index() {
    const { ctx } = this;

    // 本地圖書總數
    let localCount = 0;
    const typeDir = fs.readdirSync(`${process.cwd()}/resources`);

    typeDir.forEach(e => {
      localCount += fs.readdirSync(`${process.cwd()}/resources/${e}`).length;
    });

    const addCount = await ctx.service.ossToLocal.index(localCount);

    ctx.body = `新增${addCount}`;
  }

  async updateInfo() {
    const { ctx } = this;

    await ctx.service.ossToLocal.index(0, {}, true);

    ctx.status = 201;
  }
};
