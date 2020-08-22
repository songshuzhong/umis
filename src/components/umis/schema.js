const json = [
  {
    renderer: "mis-menu",
    name: "menu",
    label: "菜单",
    icon: "el-icon-location",
    mode: "horizontal",
    defaultActive: "option1",
    body: [
      {
        renderer: "mis-menu-item",
        name: "option1",
        label: "显隐性联动"
      },
      {
        renderer: "mis-menu-item",
        name: "option2",
        label: "可用性联动"
      },
      {
        renderer: "mis-menu-item",
        name: "option3",
        label: "表单验证"
      },
      {
        renderer: "mis-menu-item",
        name: "group1option1",
        label: "栅栏"
      },
      {
        renderer: "mis-menu-item",
        name: "group1option2",
        label: "卡片列表"
      }
    ]
  },
  {
    renderer: "mis-layout",
    body: [
      {
        renderer: "mis-main",
        body: [
          {
            renderer: "mis-form",
            name: "form1",
            api: "http://dev.bendi.ad.weibo.com:3000/api/mis",
            visibleOn: 'menu == "option1"',
            controls: [
              {
                renderer: "mis-input",
                name: "input",
                label: "input",
                value: "mis",
                visibleOn: "switchs == true"
              },
              {
                renderer: "mis-datepicker",
                name: "date",
                label: "日期"
              },
              {
                renderer: "mis-checkbox",
                name: "checkbox",
                label: "主食",
                options: [
                  {
                    value: "1",
                    text: "龙须面"
                  },
                  {
                    value: "2",
                    text: "北京烤鸭"
                  }
                ]
              },
              {
                renderer: "mis-radio",
                name: "radio",
                label: "餐具",
                options: [
                  {
                    value: "1",
                    text: "需要"
                  },
                  {
                    value: "2",
                    text: "不需要"
                  }
                ]
              },
              {
                renderer: "mis-switch",
                name: "switchs",
                label: "配送",
                value: false
              },
              {
                renderer: "mis-button",
                text: "按钮"
              }
            ]
          },
          {
            renderer: "mis-form",
            name: "form2",
            visibleOn: 'menu == "option2"',
            controls: [
              {
                renderer: "mis-select",
                name: "select2",
                label: "选择框",
                disabledOn: "switchs2 == false",
                options: [
                  {
                    value: "选项1",
                    text: "黄金糕"
                  },
                  {
                    value: "选项2",
                    text: "双皮奶"
                  }
                ]
              },
              {
                renderer: "mis-switch",
                name: "switchs2",
                label: "配送",
                value: false
              }
            ]
          },
          {
            renderer: "mis-form",
            name: "form3",
            visibleOn: 'menu == "option3"',
            controls: [
              {
                renderer: "mis-input",
                name: "email3",
                label: "邮箱",
                value: "",
                rules: [
                  {
                    required: true,
                    message: "请输入邮箱地址",
                    trigger: "blur"
                  },
                  {
                    type: "email",
                    message: "请输入正确的邮箱地址",
                    trigger: ["blur", "change"]
                  }
                ]
              },
              {
                renderer: "mis-input",
                name: "age3",
                label: "年龄",
                value: "",
                rules: [{ required: true, message: "年龄不能为空" }]
              },
              {
                renderer: "mis-button",
                text: "按钮"
              }
            ]
          },
          {
            name: "grid",
            renderer: "mis-grid",
            gutter: 20,
            visibleOn: 'menu == "group1option1"',
            body: [
              {
                renderer: "mis-avatar",
                src:
                  "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
              }
            ]
          },
          {
            renderer: "mis-cards",
            name: "cards1",
            span: 12,
            gutter: 20,
            shadow: "hover",
            visibleOn: 'menu == "group1option2"',
            body: [
              {
                renderer: "mis-avatar",
                src:
                  "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
                header: "<span>这是第一个卡片</span>"
              },
              {
                renderer: "mis-avatar",
                header: "<span>这是第二个卡片</span>",
                src:
                  "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
              },
              {
                renderer: "mis-html",
                html: "<h1>HTML</h1>"
              }
            ]
          }
        ]
      },
      {
        renderer: "mis-footer"
      }
    ]
  }
];

export default json;
