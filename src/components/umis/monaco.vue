<template>
  <div class="umis-editor-container">
    <div ref="editor" class="monaco-editor" />
    <div class="umis-editor-tools">
      <template v-if="Array.isArray(footer)">
        <template v-for="(item, index) in footer">
          <component
            :is="item.renderer"
            :key="index"
            :after-action="afterAction"
            :action="onSave"
            v-bind="item"
          />
        </template>
      </template>
      <template v-else>
        <component
          :is="footer.renderer"
          :after-action="afterAction"
          :action="onSave"
          v-bind="footer"
        />
      </template>
    </div>
  </div>
</template>
<script>
import * as monaco from 'monaco-editor';
import ElButton from 'element-ui/lib/button';

export default {
  name: 'MisMonaco',
  components: {
    ElButton,
  },
  props: {
    afterAction: {
      type: Function,
      required: false,
    },
    footer: {
      type: [Array, Object],
      required: false,
    },
    visible: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      schema: {},
    };
  },
  watch: {
    visible: {
      handler(val) {
        if (val) {
          this.onFormatSchema();
        }
      },
      immediate: true,
    },
  },
  mounted() {
    this.$eventHub.$on('mis-schema:change', this.upSchema);
    this.$eventHub.$on('mis-schema:init', this.upSchema);
    this.schema = {
      schema: 'https://github.com/songshuzhong/umis/v1/schemas/page.json',
      ...window.UMIS.schema,
    };
    this.editor = monaco.editor.create(this.$refs.editor, {
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

    window.editorer = this.editor;
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
        window.editorer.getAction(['editor.action.formatDocument']).run();
        clearTimeout(timer);
      }, 100);
    },
    onSave() {
      try {
        const json = this.editor.getValue();
        this.$eventHub.$emit('mis-schema:change', JSON.parse(json));
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
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
</style>
