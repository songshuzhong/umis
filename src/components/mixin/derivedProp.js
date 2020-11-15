export default {
  methods: {
    getSlimmingProps(props = {}, extend = {}) {
      const { hiddenOn, visibleOn, transition, ...other } = props;
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
