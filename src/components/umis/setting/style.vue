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
    return {
      schema:
        '.umis-setting__style-editor {width: 100%;height: 300px;margin: 0;padding: 0;overflow: hidden;text-align: left;}',
    };
  },
  mounted() {
    this.editor = window.monaco.editor.create(this.$refs.umisStyleEditor, {
      fontSize: '14px',
      language: 'css',
      autoIndent: true,
      formatOnType: true,
      formatOnPaste: true,
      selectOnLineNumbers: true,
      scrollBeyondLastLine: false,
      folding: true,
      automaticLayout: true,
      minimap: {
        enabled: false,
      },
    });

    this.editor.setValue(this.schema);
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
        console.log(json);
      } catch (e) {
        console.error(e);
        this.$notice({
          type: 'error',
          title: '警告',
          message: e.toString(),
        });
      }
    },
  },
};
</script>
<style lang="scss">
.umis-setting__style-editor {
  width: 100%;
  height: 300px;
  margin: 0;
  padding: 0;
  overflow: hidden;
  text-align: left;
}
</style>
