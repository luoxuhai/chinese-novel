<p align="center">
  <a href="https://github.com/ibyli/chinese-novel" target="_blank">
      <img src="https://classics.oss-cn-beijing.aliyuncs.com/app/%E4%B8%AD%E5%9B%BD%E5%8F%A4%E5%85%B8%E5%B0%8F%E8%AF%B4.jpg?x-oss-process=style/m" alt="chinese-novel">
  </a>
</p>

<h2 align="center">chinese-novel: 最全的中国古典小说数据库</h2>
<p  align="center"> 
  <a href="https://github.com/ibyli/chinese-novel/blob/master/LICENSE">
    <img height="28px" alt="License" src="http://img.shields.io/badge/license-mit-blue.svg?style=for-the-badge" style="max-width:100%;">
  </a>
</p>

最全的中国古典小说数据库

## 简介

中国古典小说是文学中的一种样式，一般是描写人物故事，塑造多种多样的人物形象，同时拥有完整布局、发展及主题的文学作品。中国古代经典的小说，有《[三国演义](https://baike.baidu.com/item/三国演义/5782)》、《[水浒传](https://baike.baidu.com/item/水浒传/348)》、《[西游记](https://baike.baidu.com/item/西游记/6786341)》、《[红楼梦](https://baike.baidu.com/item/红楼梦/15311)》、《[金瓶梅](https://baike.baidu.com/item/金瓶梅/3938665)》等代表作。

## 数据格式

###### 图书信息 : _resources/世态人情/金瓶梅/info.json_

```json
{
  "name": "金瓶梅",
  "catalogues": [
         "金瓶梅序",
        "第一回 西门庆热结十弟兄 武二郎冷遇亲哥嫂",
        "第二回 俏潘娘帘下勾情 老王婆茶坊说技",
        "第三回 定挨光王婆受贿 设圈套浪子私挑",
        "第四回 赴巫山潘氏幽欢 闹茶坊郓哥义愤",
        "第五回 捉奸情郓哥定计 饮鸩药武大遭殃",
        "第六回 何九受贿瞒天 王婆帮闲遇雨",
        "第七回 薛媒婆说娶孟三儿 杨姑娘气骂张四舅",
        "第八回 盼情郎佳人占鬼卦 烧夫灵和尚听淫声",
        "第九回 西门庆偷娶潘金莲 武都头误打李皂隶",
        "第十回 义士充配孟州道 妻妾玩赏芙蓉亭",
        ... 80 more items
        "第九十回 来旺偷拐孙雪娥 雪娥受辱守备府",
        "第九十一回 孟玉楼爱嫁李衙内 李衙内怒打玉簪儿",
        "第九十二回 陈敬济被陷严州府 吴月娘大闹授官厅",
        "第九十三回 王杏庵义恤贫儿 金道士娈淫少弟",
        "第九十四回 大酒楼刘二撒泼 洒家店雪娥为娼",
        "第九十五回 玳安儿窃玉成婚 吴典恩负心被辱",
        "第九十六回 春梅姐游旧家池馆 杨光彦作当面豺狼",
        "第九十七回 假弟妹暗续鸾胶 真夫妇明谐花烛",
        "第九十八回 陈敬济临清逢旧识 韩爱姐翠馆遇情郎",
        "第九十九回 刘二醉骂王六儿 张胜窃听张敬济",
        "第一百回 韩爱姐路遇二捣鬼 普静师幻度孝哥儿"
  ],
  "catalogueTotal": 101,
  "bookType": "世态人情",
  "words": 629367,
  "author": {
    "dynasty": "明",
    "intro": "兰陵笑笑生，是“第一奇书”《金瓶梅》的作者所用的笔名。此人真实身份已成为历史谜团。《金瓶梅》廿公跋说“《金瓶梅传》，为世庙时一巨公寓言”。明沈德符《万历野获编》则说他是“嘉靖间大名士手笔”。",
    "name": "兰陵笑笑生"
  },
  "intro": "《金瓶梅》，中国古代长篇白话世情小说，一般认为是中国第一部文人独立创作的章回体长篇小说。其成书时间约在明朝隆庆至万历年间，作者署名兰陵笑笑生。《金瓶梅》书名是由小说三个女主人公潘金莲、李瓶儿、庞春梅各取一字合成的。小说题材由《水浒传》中武松杀嫂一段演化而来，通过对兼有官僚、恶霸、富商三种身份的市侩势力的代表人物西门庆及其家庭罪恶生活的描述，体现当时民间生活的面貌，描绘了一个上至朝廷内擅权专政的太师，下至地方官僚恶霸乃至市井间的地痞、流氓、宦官、帮闲所构成的鬼蜮世界，揭露了明代中叶社会的黑暗和腐败，具有较深刻的认识价值。被列为明代“四大奇书”之首。"
}
```

###### 图书内容 : _resources/世态人情/金瓶梅/\*.html_

```html
从0开始递增的html文件, 总数为info.json中catalogues字段的length
```

## 案例展示

- 古典名著苑微信小程序
  ![古典名著苑小程序](https://classics.oss-cn-beijing.aliyuncs.com/app/QRcode.jpg?x-oss-process=style/m)

## License

[MIT](https://github.com/ibyli/chinese-novel/blob/master/LICENSE) 许可证.
