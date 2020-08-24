<template>
    <div id="editor_holder"/>
</template>
<script>
    export default {
        name: 'MisEditor',
        mounted() {
            const holder = document.getElementById('editor_holder');
            const editor = new window.JSONEditor(holder)
            editor.setValue({name: 'umis'})
        }
    }
</script>