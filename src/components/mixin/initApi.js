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
    interval: {
      type: Number,
      required: false,
      default: 0,
    },
    sendOn: {
      type: String,
      required: false,
    },
    stopAutoRefreshWhen: {
      type: String,
      required: false,
    },
    silentLoading: {
      type: Boolean,
      required: false,
    },
  },
  data() {
    return {
      iLoading: false,
      iSchemaLoading: false,
      iSchema: {},
      data: {},
      rows: [],
    };
  },
  watch: {
    interval: {
      handler(val) {
        clearInterval(this.intervalFetcher);
        if (val) {
          this.handleIntervalFetch();
        }
      },
    },
    initData: {
      handler(val) {
        if (val) this.data = val;
      },
      immediate: true,
    },
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
  },
  computed: {
    iStopAutoRefresh() {
      if (this.stopAutoRefreshWhen) {
        const status = this.$onExpressionEval(
          this.stopAutoRefreshWhen,
          this.data
        );
        if (status) {
          this.clearAutoRefresh();
        }
        return status;
      }
      return false;
    },
    iApiLoading() {
      return !this.silentLoading && this.iLoading;
    },
  },
  mounted() {
    this.iTotal = 0;
    this.iPageIndex = 1;
    this.iPageSize = 15;
    this.iHasMore = true;
    this.intervalFetcher = null;
    this.$eventHub.$on('mis-schema:change', this.upSchema);
    if (this.initSchema) {
      if (this.initSchema.method === 'post') {
        this.getSchemaRequest();
      } else {
        this.getSchemaRequest();
      }
    }
    if (this.initApi) {
      if (this.interval) {
        this.handleIntervalFetch();
      } else {
        this.fetchInitApi();
      }
    }
  },
  beforeDestroy() {
    this.clearAutoRefresh();
  },
  methods: {
    clearAutoRefresh() {
      if (this.interval && this.intervalFetcher) {
        clearInterval(this.intervalFetcher);
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
    handleIntervalFetch() {
      this.intervalFetcher = setInterval(() => {
        this.fetchInitApi();
      }, this.interval);
    },
    fetchInitApi() {
      const { method, url, params } = this.initApi;
      const compiledUrl = this.$getCompiledUrl(url, this.data);
      const compiledParams = this.$getCompiledParams(params, this.data);
      let fetchBody;
      if (method === 'get') {
        fetchBody = {
          params: {
            pageIndex: this.iPageIndex,
            pageSize: this.iPageSize,
            ...compiledParams,
          },
        };
      } else {
        fetchBody = {
          pageIndex: this.iPageIndex,
          pageSize: this.iPageSize,
          ...compiledParams,
        };
      }
      this.iLoading = true;
      this.$api
        .slientApi()
        [method](compiledUrl, fetchBody)
        .then(res => {
          const data = res.data;
          if (data.hasOwnProperty('rows')) {
            const { total, rows, hasMore } = data;
            this.iTotal = total;
            this.iHasMore = hasMore;
            this.rows = rows;
          } else {
            this.data = data;
          }
        })
        .finally(() => {
          this.iLoading = false;
        });
    },
    upSchema(data) {
      if (this.iSchemaUpdate) {
        this.iSchema = data;
        window.UMIS = { schema: data };
      }
    },
    handlePageChanged(pageIndex) {
      this.iPageIndex = pageIndex;
      this.fetchInitApi();
    },
  },
};
