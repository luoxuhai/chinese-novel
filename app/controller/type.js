'use strict';

const Controller = require('egg').Controller;

class TypeController extends Controller {
  async update() {
    const { ctx } = this;
    const books = require(`${process.cwd()}/test/updateType.json`);

    for (const e of books) {
      await ctx.service.type.update(e);
    }

    ctx.status = 201;
  }
}

module.exports = TypeController;
