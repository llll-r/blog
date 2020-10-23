<template>
    <div>
        <ckeditor :editor="editor" :config="editorConfig"></ckeditor>
    </div>
</template>

<script>
    import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

    export default {
        name: 'app',
        data() {
            return {
                editor: ClassicEditor,
                editorConfig: {
                    // toolbar: [ 'bold', 'italic', '|', 'link]
                }
            };
        }
    }
</script>