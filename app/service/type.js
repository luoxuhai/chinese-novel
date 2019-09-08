'use strict';

const fs = require('fs');
const Service = require('egg').Service;

class TypeService extends Service {
  async update({ name, oldType, newType }) {
    const oldPath = `${process.cwd()}/resources/${oldType}/${name}`;
    const newPath = `${process.cwd()}/resources/${newType}/${name}`;
    function rename() {
      try {
        fs.renameSync(oldPath, newPath);
      } catch (e) {
        rename();
      }
    }
    const info = require(`${oldPath}/info.json`);

    fs.writeFileSync(
      `${oldPath}/info.json`,
      JSON.stringify({ ...info, bookType: newType }, null, 2)
    );
    await this.ctx.model.Book.updateOne(
      { bookName: name },
      { bookType: newType }
    );
    return newPath;
  }
}

module.exports = TypeService;
