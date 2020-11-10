async function mockList(pageIndex, pageSize, total, drowsiness) {
  await sleep(drowsiness);

  const children = [];
  for (let i = 1; i < pageSize; i++) {
    children.push({
      id: i,
      name: '计划系列名称之' + i,
      size: 'large',
      shape: 'square',
      src: 'https://songshuzhong.github.io/visualizer/static/img/html5.png',
      date: `2016-05-0${i}`,
      province: '上海',
      city: '普陀区',
      address: `上海市普陀区金沙江路 1518${i} 弄`,
      zip: 200333,
    });
  }

  if (pageIndex * pageSize <= total) {
    return children;
  }
  return [];
}

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

module.exports = {
  'POST /api/mis': async ctx => {
    await sleep(1000);
    ctx.restify({ code: 1000, msg: 'success' });
  },
  'GET /api/tabledata': async ctx => {
    ctx.restify({
      msg: 'success',
      code: 1000,
      data: [
        {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
        },
        {
          date: '2016-05-08',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
        },
        {
          date: '2016-05-06',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
        },
        {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
        },
      ],
    });
  },
  'GET /api/pagelist/:pageIndex/:pageSize': async ctx => {
    const pageIndex = ctx.params.pageIndex;
    const pageSize = ctx.params.pageSize;
    const total = 45;

    let list = await mockList(pageIndex, pageSize, total, 1000);
    ctx.restify({
      code: 1000,
      msg: 'success',
      data: {
        page: pageIndex,
        pageSize: pageSize,
        total,
        list,
      },
    });
  },
};
