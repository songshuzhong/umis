module.exports = {
  'GET /api/schema/visible': async ctx => {
    ctx.restify({
      code: 1000,
      msg: 'success',
      data: {
        renderer: 'mis-form',
        name: 'form1',
        api: '/api/mis',
        controls: [
          {
            renderer: 'mis-static',
          },
          {
            renderer: 'mis-input',
            name: 'adress',
            label: '地址',
            value: 'mis',
            tip: '请填写地址',
            rules: [{ required: true, message: '地址不能为空' }],
          },
          {
            renderer: 'mis-checkbox',
            name: 'food',
            type: 'button',
            label: '主食',
            value: ['1'],
            tip: '请选择主食',
            options: [
              {
                value: '1',
                text: '龙须面',
              },
              {
                value: '2',
                text: '北京烤鸭',
              },
            ],
          },
          {
            renderer: 'mis-radio',
            name: 'radio',
            label: '餐具',
            value: '1',
            tip: '需要餐具',
            options: [
              {
                value: '1',
                text: '需要',
              },
              {
                value: '2',
                text: '不需要',
              },
            ],
          },
          {
            renderer: 'mis-datepicker',
            name: 'date',
            label: '日期',
            tip: '请选择派送日期',
            hiddenOn: 'data.select2.length > 1',
            transition: 'el-zoom-in-top',
          },
          {
            renderer: 'mis-select',
            name: 'select2',
            label: '口味',
            disabledOn: 'data.switchs === false',
            tip: '请选择口味',
            options: [
              {
                value: 'sweet',
                text: '鲜甜味',
              },
              {
                value: 'spicy',
                text: '麻辣味',
              },
            ],
          },
          {
            renderer: 'mis-switch',
            name: 'switchs',
            label: '配送',
            value: false,
            tip: '开关',
          },
          {
            renderer: 'mis-combo',
            label: '联合 map',
            name: 'combomap',
            tip: '单个 联合 map',
            visibleOn: 'data.switchs === false',
            transition: 'el-zoom-in-center',
            value: {
              combomap1: 111,
              combomap2: 222,
            },
            controls: [
              {
                renderer: 'mis-input',
                name: 'combomap1',
                label: '联合1',
                rules: [
                  {
                    required: true,
                    trigger: 'blur',
                    message: '单个 联合 map不能为空',
                  },
                ],
              },
              {
                renderer: 'mis-input',
                name: 'combomap2',
                label: '联合2',
                rules: [
                  {
                    required: true,
                    trigger: 'blur',
                    message: '单个 联合 map不能为空',
                  },
                ],
              },
            ],
          },
          {
            renderer: 'mis-combo',
            label: '联合list',
            name: 'combo',
            multiple: true,
            tip: '多个 combo 组合',
            value: [
              { combo1: 111, combo2: 222 },
              { combo1: 113, combo2: 223 },
            ],
            controls: [
              {
                renderer: 'mis-input',
                name: 'combo1',
                label: '联合属性1',
                rules: [{ required: true, message: '联合属性1不能为空' }],
              },
              {
                renderer: 'mis-input',
                name: 'combo2',
                label: '联合属性2',
                rules: [{ required: true, message: '联合属性2不能为空' }],
              },
            ],
          },
          {
            renderer: 'mis-upload',
            name: 'uploadtext',
            label: '上传文件',
            action: 'https://jsonplaceholder.typicode.com/posts',
            tip: '只能上传jpg/png文件，且不超过500kb',
          },
          {
            renderer: 'mis-button',
            text: '提交',
          },
        ],
      },
    });
  },
};
