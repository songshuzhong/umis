async function mockList(pageIndex, pageSize, total, drowsiness) {
  await sleep(drowsiness);

  const children = [];
  for (let i = 1; i < pageSize; i++) {
    children.push({
      id: i * pageIndex * pageSize,
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
    });
  }

  return children;
}

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

module.exports = {
  'POST /api/mis': async ctx => {
    await sleep(1000);
    ctx.restify({ code: 1000, msg: 'success' });
  },
  'GET /api/pagelist/:pageIndex/:pageSize': async ctx => {
    const pageIndex = ctx.params.pageIndex;
    const pageSize = ctx.params.pageSize;
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
        list,
      },
    });
  },
};
