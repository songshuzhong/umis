const json = {
  renderer: 'mis-page',
  body: {
    renderer: 'mis-main',
    body: {
      renderer: 'mis-cards',
      name: 'cards1',
      initApi: {
        url: '/api/groups',
        method: 'get',
      },
      gutter: 20,
      shadow: 'hover',
      bodyStyle: { padding: 0 },
      classname: 'mis-card-margin',
      body: {
        renderer: 'mis-avatar',
        src: '${groupAvatar}',
        isComputedSrc: true,
        title: '<%=data.groupName%>',
        description: '<%=data.groupDesc%>',
        icon: 'el-icon-plus',
        size: '50',
      },
      actions: [
        {
          actionOn: 'data.groupName === "新建组"',
          actionType: 'mis-dialog',
          body: {
            title: '新建项目组',
            appendBody: true,
            body: {
              renderer: 'mis-form',
              name: 'createProject',
              reload: 'window',
              api: {
                url: '/api/group',
                method: 'post',
              },
              controls: [
                {
                  renderer: 'mis-input',
                  name: 'name',
                  label: '项目组名',
                  tip: '项目组名',
                  rules: [{ required: true, message: '项目组名不能为空' }],
                },
                {
                  renderer: 'mis-input',
                  name: 'desc',
                  label: '项目组简介',
                  tip: '项目组描述',
                  rules: [{ required: true, message: '项目组简介不能为空' }],
                },
                {
                  renderer: 'mis-input',
                  name: 'label',
                  label: '项目组中文名',
                  tip: '项目组描述',
                  rules: [{ required: true, message: '项目组简介不能为空' }],
                },
                {
                  renderer: 'mis-input',
                  name: 'avatar',
                  label: '项目组Logo',
                  tip: '项目组Logo',
                  rules: [{ required: true, message: '项目组Logo不能为空' }],
                },
                {
                  renderer: 'mis-action',
                  actionType: 'mis-submit',
                  text: '保存数据',
                },
              ],
            },
          },
        },
        {
          actionOn: 'data.groupName !== "新建组"',
          actionType: 'mis-redirect',
          redirectType: 'routeName',
          redirect: 'Umis',
          params: {
            groupName: '${groupName}',
          },
        },
      ],
    },
  },
};

export default json;
