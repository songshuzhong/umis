async function mockList(pid, pageSize, drowsiness) {
  await sleep(drowsiness)

  const children = []
  for (let i = 1; i < pageSize; i++) {
    children.push({
      id: pid + i,
      name: '计划系列名称之' + pid + i,
      renderer: 'mis-avatar',
      src: 'https://songshuzhong.github.io/visualizer/static/img/html5.png',
    })
  }

  return children
}

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

module.exports = {
  'POST /api/mis': async ctx => {
    await sleep(1000)
    ctx.restify({ code: 1000, msg: 'success' })
  },
  'GET /api/list/:id/:drowsiness': async ctx => {
    const pid = ctx.params.id || '1'
    const drowsiness = ctx.params.drowsiness || 0

    let list = await mockList(pid, drowsiness)
    ctx.restify(list)
  },
  'GET /api/pagelist/:pageIndex/:pageSize': async ctx => {
    const pageIndex = ctx.params.pageIndex
    const pageSize = ctx.params.pageSize

    let list = await mockList(pageIndex, pageSize, 1500)
    ctx.restify({
      code: 1000,
      result: {
        page: pageIndex,
        page_size: pageSize,
        total: 20,
        list,
      },
    })
  },
}
