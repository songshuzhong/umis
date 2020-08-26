export default {
  methods: {
    getProps(props, iData, extend) {
      const { data, header, body, footer, ...other } = props;
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
