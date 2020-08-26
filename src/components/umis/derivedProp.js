export default {
  computed: {},
  methods: {
    iData(props) {
      return props.data;
    },
    iProps() {
      const { data, ...other } = this.$props;
      return other;
    },
    iHeader() {
      return this.$props.header;
    },
    iBody() {
      return this.$props.body;
    },
    iFooter() {
      return this.$props.footer;
    },
  },
};
