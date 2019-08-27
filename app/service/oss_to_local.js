'use strict';

const Service = require('egg').Service;
const fs = require('fs');

module.exports = class OssToLocalService extends Service {
  async index(localCount) {
    const { ctx } = this;

    const books = await ctx.model.Book.find({}, [
      'bookName',
      'bookDesc',
      'bookType',
      'author',
      'wordSum',
      'catalogueList',
      'catalogueSum',
      'bookFile',
    ])
      .populate('author', [ 'name', 'dynasty', 'intro' ])
      // 跳過本地已有圖書
      .skip(localCount);

    for (const [ i, e ] of books.entries()) {
      console.log(`開始緩存 ${e.bookName}`);
      const localPath = `${process.cwd()}/resources/${e.bookType || '其他'}/${
        e.bookName
      }`;

      fs.mkdirSync(localPath, {
        recursive: true,
      });

      for (const [ _i ] of e.catalogueList.entries()) {
        await ctx.oss.get(
          `${e.bookFile}/${_i}.html`,
          `${localPath}/${_i}.html`
        );
      }

      // 生成圖書資訊JSON檔案
      fs.writeFileSync(
        `${localPath}/info.json`,
        JSON.stringify(
          {
            name: e.bookName,
            catalogues: e.catalogueList,
            catalogueTotal: e.catalogueSum,
            bookType: e.bookType,
            words: e.wordSum,
            author: e.author,
            intro: e.bookDesc,
          },
          (key, value) => {
            if (key === 'author') {
              delete value._id;
              return value;
            }
            return value;
          },
          2
        )
      );
      // if (i === 0) break;
      console.log('緩存完成!');
    }

    return books.length;
  }
};
