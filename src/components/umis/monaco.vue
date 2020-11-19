<template>
  <div class="umis-editor-container">
    <transition name="el-zoom-in-center">
      <el-alert
        v-if="showErrorBoundary"
        class="monaco-editor__error-info"
        title="错误"
        type="error"
        show-icon
        :description="errorInfo"
        @close="closeErrorInfo"
      />
    </transition>
    <div ref="editor" class="monaco-editor" />
    <div class="umis-editor-tools">
      <el-button type="primary" plain @click="onSave">保存</el-button>
    </div>
  </div>
</template>
<script>
import ElButton from 'element-ui/lib/button';
import ElAlert from 'element-ui/lib/alert';

export default {
  name: 'MisMonaco',
  components: {
    ElButton,
    ElAlert,
  },
  data() {
    return {
      errorInfo: '',
      schema: {},
      showErrorBoundary: false,
    };
  },
  created() {
    this.onFormatSchema();
  },
  mounted() {
    this.$eventHub.$on('mis-schema:change', this.upSchema);
    this.$eventHub.$on('mis-schema:init', this.upSchema);
    this.schema = {
      schema: 'https://github.com/songshuzhong/umis/v1/schemas/page.json',
      ...window.UMIS.schema,
    };
    this.editor = window.monaco.editor.create(this.$refs.editor, {
      fontSize: '14px',
      language: 'json',
      autoIndent: true,
      formatOnType: true,
      formatOnPaste: true,
      selectOnLineNumbers: true,
      scrollBeyondLastLine: false,
      folding: true,
      theme: 'vs-dark',
      automaticLayout: true,
      minimap: {
        enabled: false,
      },
    });

    this.editor.setValue(JSON.stringify(this.schema));
    this.onFormatSchema();
  },
  methods: {
    upSchema(data) {
      this.schema = {
        schema: 'https://github.com/songshuzhong/umis/v1/schemas/page.json',
        ...data,
      };
      this.editor.setValue(JSON.stringify(this.schema));
    },
    onFormatSchema() {
      const timer = setTimeout(() => {
        this.editor.getAction(['editor.action.formatDocument']).run();
        clearTimeout(timer);
      }, 100);
    },
    onSave() {
      try {
        const json = this.editor.getValue();
        this.$eventHub.$emit('mis-schema:change', JSON.parse(json));
        this.onFormatSchema();
      } catch (e) {
        this.errorInfo = e;
        this.showErrorBoundary = true;
        this.errorInfoTimer = setTimeout(() => {
          this.closeErrorInfo();
          clearTimeout(this.errorInfoTimer);
        }, 3500);
      }
    },
    closeErrorInfo() {
      this.showErrorBoundary = false;
    },
  },
};
</script>
<style lang="scss">
.monaco-editor {
  width: 100%;
  height: calc(100vh - 110px);
  margin: 0;
  padding: 0;
  overflow: hidden;
  text-align: left;
}

.umis-editor-container {
  width: 100%;
  margin: 0 auto;
  background-color: #282a36 !important;
}
.umis-editor-tools {
  height: 50px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.monaco-editor__error-info {
  line-height: 12px;
  text-align: left;
}
</style>
