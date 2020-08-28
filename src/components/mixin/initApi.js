export default {
  props: {
    initApi: {
      type: Object,
      required: false,
    },
  },
  mounted() {
    if (this.initApi) {
      if (this.initApi.method === 'post') {
        this.fetchPostRequest();
      } else {
        this.fetchGetRequest();
      }
    }
  },
  methods: {
    fetchGetRequest() {
      this.$api
        .slientApi()
        .get(this.initApi.url, { params: this.initApi.params })
        .then(res => (this.data = res.data));
    },
    fetchPostRequest() {
      this.$api
        .slientApi()
        .post(this.initApi.url, this.initApi.params)
        .then(res => (this.data = res.data));
    },
  },
};
