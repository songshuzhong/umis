export default {
  methods: {
    getSlimmingProps(props = {}, extend = {}) {
      const { data, hiddenOn, visibleOn, transition, ...other } = props;
      return { ...other, ...extend };
    },
    getFattingProps(props, iData = {}, extend = {}) {
      const {
        hiddenOn,
        visibleOn,
        transition,
        data,
        header,
        body,
        footer,
        ...other
      } = props;
      return { ...other, data: { ...data, ...iData, ...extend } };
    },
    getDataProps(props = {}, iData = {}) {
      const data = props.data || {};
      return Object.assign({}, iData, data);
    },
    getHeader(props) {
      return props.header;
    },
    getBody(props) {
      return props.body;
    },
    getFooter(props) {
      return props.footer;
    },
  },
};
