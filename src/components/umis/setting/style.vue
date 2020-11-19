<template>
  <el-card class="umis-setting__card-margin">
    <div slot="header" class="umis-setting__header">
      <span>全局样式</span>
      <el-button plain size="mini" type="primary" @click="onSave">
        应用
      </el-button>
    </div>
    <div ref="umisStyleEditor" class="umis-setting__style-editor" />
  </el-card>
</template>
<script>
import ElCard from 'element-ui/lib/card';
import ElButton from 'element-ui/lib/button';

export default {
  name: 'SettingStyle',
  components: {
    ElCard,
    ElButton,
  },
  data() {
    const initStyle = this.$umisConfig.style;
    return {
      schema: initStyle,
    };
  },
  mounted() {
    window.requestIdleCallback(this.createMonacoEditor);
  },
  methods: {
    createMonacoEditor() {
      this.editor = window.monaco.editor.create(this.$refs.umisStyleEditor, {
        fontSize: '14px',
        language: 'css',
        autoIndent: true,
        formatOnType: true,
        formatOnPaste: true,
        selectOnLineNumbers: true,
        scrollBeyondLastLine: false,
        folding: true,
        theme: 'vs',
        automaticLayout: true,
        minimap: {
          enabled: false,
        },
      });

      this.editor.setValue(this.schema);
      this.onFormatSchema();
    },
    onFormatSchema() {
      const self = this;
      const timer = setTimeout(() => {
        self.editor.getAction(['editor.action.formatDocument']).run();
        clearTimeout(timer);
      }, 100);
    },
    onSave() {
      const json = this.editor.getValue();
      this.$saveInitStyle(this, json);
    },
  },
};
</script>
<style lang="scss">
.umis-setting__style-editor {
  height: 300px;
  margin: 0;
  padding: 0;
  overflow: hidden;
  text-align: left;
  .monaco-editor {
    width: 100% !important;
  }
}
</style>
