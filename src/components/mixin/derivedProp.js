export default {
  methods: {
    getSlimmingProps(props = {}, extend = {}) {
      const { data, hiddenOn, visibleOn, transition, ...other } = props;
      return { ...other, ...extend };
    },
    getFattingProps(props, extend = {}) {
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
      return { ...other, data: { ...data, ...extend } };
    },
    getDataProps(props = {}, extend = {}) {
      const data = props.data || {};
      return Object.assign({}, data, extend);
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
