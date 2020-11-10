export default {
  props: {
    iSchemaUpdate: {
      type: Boolean,
      required: false,
      default: true,
    },
    initSchema: {
      type: Object,
      required: false,
    },
    initApi: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {
      iApiLoading: false,
      iSchemaLoading: false,
      iSchema: {},
      data: {
        list: [],
        pageIndex: 1,
        pageSize: 15,
        total: 0,
        hasMore: true,
      },
    };
  },
  watch: {
    'initSchema.url': {
      handler(val) {
        if (val) {
          if (this.initSchema.method === 'post') {
            this.getSchemaRequest();
          } else {
            this.getSchemaRequest();
          }
        }
      },
      deep: true,
    },
    'data.pageIndex'() {
      this.fetchInitRequest();
    },
  },
  mounted() {
    this.$eventHub.$on('mis-schema:change', this.upSchema);
    if (this.initSchema) {
      if (this.initSchema.method === 'post') {
        this.getSchemaRequest();
      } else {
        this.getSchemaRequest();
      }
    }
    this.fetchInitRequest();
  },
  methods: {
    fetchInitRequest() {
      if (this.initApi) {
        this.iApiLoading = true;

        if (this.initApi.method === 'post') {
          this.fetchPostRequest();
        } else {
          this.fetchGetRequest();
        }
      }
    },
    getSchemaRequest() {
      const self = this;
      self.iSchemaLoading = true;
      typeof this.schemaSource === 'function' &&
        this.schemaSource('CANCELED_DUE_TO_NEW_REQUEST');
      this.$api
        .slientApi()
        .get(this.initSchema.url, {
          params: this.initSchema.params,
          cancelToken: new this.$api.cancelToken(c => (this.schemaSource = c)),
        })
        .then(res => {
          self.iSchema = res.data;
          self.iSchemaLoading = false;
          window.UMIS = { schema: res.data };
          this.$eventHub.$emit('mis-schema:init', res.data);
        })
        .catch(thrown => {
          if (this.$api.isCancel(thrown)) {
            // console.log('Request canceled');
          }
        });
    },
    fetchGetRequest() {
      const self = this;
      const compiledUrl = this.$getCompiledUrl(this.initApi.url, this.data);

      this.$api
        .slientApi()
        .get(compiledUrl, { params: this.initApi.params })
        .then(res => {
          const data = res.data;

          if (data.hasOwnProperty('pageSize')) {
            const { total, list, hasMore } = data;
            self.data.total = total;
            self.data.list = list;
            self.data.hasMore = hasMore;
          } else {
            self.data = res.data;
          }
          self.iApiLoading = false;
        });
    },
    fetchPostRequest() {
      const self = this;
      self.iApiLoading = true;

      this.$api
        .slientApi()
        .post(this.initApi.url, this.initApi.params)
        .then(res => {
          const data = res.data;
          if (data.hasOwnProperty('pageSize')) {
            const { total, list, hasMore } = data;
            self.data.total = total;
            self.data.list = list;
            self.data.hasMore = hasMore;
          } else {
            self.iData = res.data;
          }
          self.iApiLoading = false;
        });
    },
    upSchema(data) {
      if (this.iSchemaUpdate) {
        this.iSchema = data;
        window.UMIS = { schema: data };
      }
    },
    handlePageChanged(pageIndex) {
      this.data.pageIndex = pageIndex;
    },
  },
};
