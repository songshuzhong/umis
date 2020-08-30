async function mockList(pid, pageSize, drowsiness) {
  await sleep(drowsiness);

  const children = [];
  for (let i = 1; i < pageSize; i++) {
    children.push({
      id: i,
      name: '计划系列名称之' + i,
      size: 'large',
      shape: 'square',
      src: 'https://songshuzhong.github.io/visualizer/static/img/html5.png',
    });
  }

  return children;
}

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

module.exports = {
  'GET /api/pagelist/:pageIndex/:pageSize': async ctx => {
    const pageIndex = ctx.params.pageIndex;
    const pageSize = ctx.params.pageSize;

    let list = await mockList(pageIndex, pageSize, 1000);
    ctx.restify({
      code: 1000,
      msg: 'success',
      data: {
        page: pageIndex,
        pageSize: pageSize,
        total: 20,
        list,
      },
    });
  },
};
