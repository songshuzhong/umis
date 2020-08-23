<template>
  <el-dialog
    :title="title"
    :width="width"
    :fullscreen="fullscreen"
    :modal="modal"
    :lock-scroll="lockScroll"
    :close-on-click-modal="closeOnModal"
    :show-close="showClose"
    :destroy-on-close="destroyOnClose"
  >
  </el-dialog>
</template>
<script>
import ElDialog from 'element-ui/lib/dialog'

export default {
  name: 'MisDialog',
  components: {
    ElDialog,
  },
  props: {
    visible: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
      required: false,
      default: 'Dialog',
    },
    width: {
      type: String,
      required: false,
    },
    fullscreen: {
      type: String,
      required: false,
    },
    modal: {
      type: Boolean,
      required: false,
      default: true,
    },
    lockScroll: {
      type: Boolean,
      required: false,
      default: false,
    },
    closeOnModal: {
      type: Boolean,
      required: false,
      default: true,
    },
    showClose: {
      type: Boolean,
      required: false,
      default: true,
    },
    destroyOnClose: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
}
</script>
