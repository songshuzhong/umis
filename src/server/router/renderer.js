module.exports = {
  'GET /': async ctx => {
    await ctx.render('index')
  },
  'GET /index': async ctx => {
    await ctx.render('index')
  },
  'GET /about': async ctx => {
    await ctx.render('about/umis')
  },
  'GET /contact': async ctx => {
    await ctx.render('contact/umis')
  },
}
