async function mockList(pageIndex = 1, pageSize = 10, total = 45, drowsiness) {
  await sleep(drowsiness);

  const children = [];
  for (let i = 1; i < pageSize; i++) {
    children.push({
      id: i * pageIndex * pageSize,
      keywords: `上海市普陀区金沙江路 1518${i * pageIndex} 弄`,
      name: `江小白${i}代`,
      size: 'large',
      shape: 'square',
      src: 'https://songshuzhong.github.io/visualizer/static/img/html5.png',
      date: `2016-0${(i % 9) + 1}-0${(i % 9) + 1}`,
      province: '上海',
      city: '普陀区',
      address: `上海市普陀区金沙江路 1518${i * pageIndex} 弄`,
      pageIndex,
      zip: 200333,
      type: 'primary',
      icon: 'el-icon-more',
      color: '#0bbd87',
      timestamp: `2016-0${(i % 9) + 1}-0${(i % 9) + 1}`,
      percentage: Math.floor(Math.random() * (1 - 100) + 100),
    });
  }

  return children;
}

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

module.exports = {
  'POST /api/mis': async ctx => {
    await sleep(3000);
    ctx.restify({ code: 1000, msg: 'success' });
  },
  'POST /api/save': async ctx => {
    await sleep(3000);
    ctx.restify({ code: 1000, msg: 'success' });
  },
  'GET /api/card/123456': async ctx => {
    let list = await mockList(1, 15, 45, 1000);
    ctx.restify({
      code: 1000,
      msg: 'success',
      data: list[0],
    });
  },
  'GET /api/pagelist': async ctx => {
    const { pageIndex, pageSize } = ctx.request.query;
    const total = 45;

    let hasMore = true;
    let list = await mockList(pageIndex, pageSize, total, 1000);

    if (pageIndex * pageSize > total) {
      list = [];
      hasMore = true;
    }

    ctx.restify({
      code: 1000,
      msg: 'success',
      data: {
        page: pageIndex,
        pageSize: pageSize,
        hasMore,
        total,
        rows: list,
      },
    });
  },
};
