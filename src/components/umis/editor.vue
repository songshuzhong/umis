<template>
  <div class="umis-editor-container">
    <textarea ref="editor" />
    <div class="umis-editor-tools">
      <el-button @click="onSave" type="primary" plain size="small">
        保存
      </el-button>
    </div>
  </div>
</template>
<script>
import ElButton from 'element-ui/lib/button';
import CodeMirror from 'codemirror';
import 'codemirror/addon/fold/brace-fold';
import 'codemirror/addon/fold/comment-fold';
import 'codemirror/addon/fold/foldcode';
import 'codemirror/addon/fold/foldgutter';
import 'codemirror/addon/fold/indent-fold';
import 'codemirror/addon/fold/foldgutter.css';
import 'codemirror/addon/fold/foldcode';
import 'codemirror/addon/edit/matchbrackets';
import 'codemirror/addon/hint/anyword-hint';
import 'codemirror/addon/hint/show-hint';
import 'codemirror/addon/hint/css-hint';
import 'codemirror/addon/hint/show-hint.css';
import 'codemirror/addon/comment/comment';
import 'codemirror/addon/lint/json-lint';
import 'codemirror/addon/lint/javascript-lint';
import 'codemirror/addon/lint/lint';
import 'codemirror/addon/lint/lint.css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/htmlmixed/htmlmixed';
import 'codemirror/mode/css/css';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/dracula.css';
import 'codemirror/theme/eclipse.css';
import 'codemirror/theme/ambiance.css';
import 'codemirror-formatting/formatting';

export default {
  name: 'MisEditor',
  components: {
    ElButton,
  },
  data() {
    return {
      schema: [],
    };
  },
  mounted() {
    this.schema = window.UMIS.schema;

    this.editor = CodeMirror.fromTextArea(this.$refs.editor, {
      mode: 'application/json',
      theme: 'dracula',
      lineNumbers: true,
      lineWrapping: true,
      foldGutter: true,
      indentWithTabs: true,
      smartIndent: true,
      matchBrackets: true,
      gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
      extraKeys: {
        "'<'": this.completeAfter,
        "'/'": this.completeIfAfterLt,
        "' '": this.completeIfInTag,
        "'='": this.completeIfInTag,
        'Ctrl-Space': 'autocomplete',
      },
    });
    this.editor.setSize('100%', '640px');
    this.editor.setValue(JSON.stringify(this.schema));

    CodeMirror.commands['selectAll'](this.editor);

    this.editor.autoFormatRange(
      this.editor.getCursor(true),
      this.editor.getCursor(false)
    );
    this.editor.setCursor(0, 0);
  },
  methods: {
    completeAfter(cm, pred) {
      const cur = cm.getCursor();
      if (!pred || pred())
        setTimeout(function() {
          if (!cm.state.completionActive)
            cm.showHint({ completeSingle: false });
        }, 100);
      return CodeMirror.Pass;
    },

    completeIfAfterLt(cm) {
      return this.completeAfter(cm, function() {
        const cur = cm.getCursor();
        return cm.getRange(CodeMirror.Pos(cur.line, cur.ch - 1), cur) === '<';
      });
    },

    completeIfInTag(cm) {
      return this.completeAfter(cm, function() {
        const tok = cm.getTokenAt(cm.getCursor());
        if (
          tok.type === 'string' &&
          (!/['"]/.test(tok.string.charAt(tok.string.length - 1)) ||
            tok.string.length === 1)
        )
          return false;
        const inner = CodeMirror.innerMode(cm.getMode(), tok.state).state;
        return inner.tagName;
      });
    },
    onSave() {
      try {
        const json = this.editor.getValue();
        this.$eventHub.$emit('mis-schema:change', JSON.parse(json));
      } catch (e) {
        this.$notice({
          type: 'error',
          title: '警告',
          message: e.toString(),
        });
        console.log(e);
      }
    },
  },
};
</script>
<style lang="scss">
.CodeMirror {
  text-align: left !important;
  line-height: 20px;
  font-size: 13px;
}

.umis-editor-container {
  width: 100%;
  height: 640px;
  margin: 0 auto;
  padding: 5px;
  background-color: #282a36 !important;
}
.umis-editor-tools {
  height: 80px;
  padding: 2px 10px;
  border-top: 1px solid white;
  line-height: 80px;
}
</style>
