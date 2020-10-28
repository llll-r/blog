<template>
  <div>
    <a-form-model :model="form" :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-form-model-item label="文章id" hidden>
        <a-input v-model="id" />
      </a-form-model-item>
      <a-form-model-item label="文章标题">
        <a-input v-model="form.title" />
      </a-form-model-item>
      <a-form-model-item label="文章封面">
        <a-upload
          :v-model="form.cover"
          v-decorator="['upload']"
          name="logo"
          list-type="picture"
        :before-upload="beforeUpload"
        >
          <a-button> <a-icon type="upload" /> Select File </a-button>
        </a-upload>
      </a-form-model-item>
      <a-form-model-item label="文章分类">
        <a-select v-model="form.category">
          <a-select-option value="学习"> 学习 </a-select-option>
          <a-select-option value="记录盲点"> 记录盲点 </a-select-option>
          <a-select-option value="个人"> 个人 </a-select-option>
        </a-select>
      </a-form-model-item>

      <a-form-model-item label="发布时间">
        <a-date-picker :format="dateFormat" v-model="form.publishDate" />
      </a-form-model-item>

      <a-form-model-item label="文章标签">
        <a-checkbox-group v-model="form.tag" placeholder="请选择文章标签">
          <a-checkbox value="vue" name="type"> Vue</a-checkbox>
          <a-checkbox value="node" name="type"> Node</a-checkbox>
          <a-checkbox value="javascript" name="type"> JavaScript</a-checkbox>
          <a-checkbox value="html" name="type">HTML</a-checkbox>
          <a-checkbox value="css" name="type">CSS</a-checkbox>
          <a-checkbox value="git" name="type">Git</a-checkbox>
          <a-checkbox value="机器学习" name="type">机器学习</a-checkbox>
          <a-checkbox value="环境配置" name="type">环境配置</a-checkbox>
          <a-checkbox value="写心情" name="type">写心情</a-checkbox>
          <a-checkbox value="python" name="type">python</a-checkbox>
        </a-checkbox-group>
      </a-form-model-item>
      <a-form-model-item :wrapper-col="{ span: 24, offset: 0 }">
        <ckeditor
          :editor="editor"
          v-model="form.content"
          :config="editorConfig"
        ></ckeditor>
      </a-form-model-item>
      <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
        <a-button type="primary" @click="onSubmit">{{ isCreate }} </a-button>
        <a-button style="margin-left: 10px"  @click="cancel"> Cancel </a-button>
      </a-form-model-item>
    </a-form-model>
  </div>
</template>

<script>
import moment from "moment";
import "moment/locale/zh-cn";
import axios from "axios";
// ⚠️ NOTE: We don't use @ckeditor/ckeditor5-build-classic any more!
// Since we're building CKEditor from source, we use the source version of ClassicEditor.
import ClassicEditor from "@ckeditor/ckeditor5-editor-classic/src/classiceditor";

import EssentialsPlugin from "@ckeditor/ckeditor5-essentials/src/essentials";
import BoldPlugin from "@ckeditor/ckeditor5-basic-styles/src/bold";
import ItalicPlugin from "@ckeditor/ckeditor5-basic-styles/src/italic";
import LinkPlugin from "@ckeditor/ckeditor5-link/src/link";
import ParagraphPlugin from "@ckeditor/ckeditor5-paragraph/src/paragraph";
import CodePligin from "@ckeditor/ckeditor5-basic-styles/src/code";
import codeBlock from "@ckeditor/ckeditor5-code-block/src/codeblock";
import Highlight from "@ckeditor/ckeditor5-highlight/src/highlight";
import Indent from "@ckeditor/ckeditor5-indent/src/indent";
import IndentBlock from "@ckeditor/ckeditor5-indent/src/indentblock";
import Underline from "@ckeditor/ckeditor5-basic-styles/src/underline";
import Strikethrough from "@ckeditor/ckeditor5-basic-styles/src/strikethrough";
import Heading from "@ckeditor/ckeditor5-heading/src/heading";
import Image from "@ckeditor/ckeditor5-image/src/image";
import ImageResize from "@ckeditor/ckeditor5-image/src/imageresize";
import ImageInsert from "@ckeditor/ckeditor5-image/src/imageinsert";
import CKFinder from "@ckeditor/ckeditor5-ckfinder/src/ckfinder";
import Base64UploadAdapter from "@ckeditor/ckeditor5-upload/src/adapters/base64uploadadapter";
export default {
  name: "home",
  data() {
    return {
      id: "",
      result: [],
      dateFormat: "YYYY/MM/DD",
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      form: {
        title: "",
        category: undefined,
        publishDate: "",
        tag: [],
        content: null,
        cover: "",
      },
      editor: ClassicEditor,
      editorData: "<p>Content of the editor.</p>",
      editorConfig: {
        plugins: [
          EssentialsPlugin,
          BoldPlugin,
          ItalicPlugin,
          LinkPlugin,
          ParagraphPlugin,
          CodePligin,
          codeBlock,
          Highlight,
          Indent,
          IndentBlock,
          Underline,
          Strikethrough,
          Image,
          ImageResize,
          ImageInsert,
          CKFinder,
          Base64UploadAdapter,
          Heading,
        ],
        codeBlock: {
          languages: [
            { language: "plaintext", label: "Plain text" }, // The default language.
            { language: "c", label: "C" },
            { language: "cs", label: "C#" },
            { language: "cpp", label: "C++" },
            { language: "css", label: "CSS" },
            { language: "diff", label: "Diff" },
            { language: "html", label: "HTML" },
            { language: "java", label: "Java" },
            { language: "javascript", label: "JavaScript" },
            { language: "php", label: "PHP" },
            { language: "python", label: "Python" },
            { language: "ruby", label: "Ruby" },
            { language: "typescript", label: "TypeScript" },
            { language: "xml", label: "XML" },
          ],
        },
        ckfinder: {
          options: {
            resourceType: "Images",
          },
        },
        toolbar: {
          items: [
            "heading",
            "|",
            "bold",
            "italic",
            "link",
            "undo",
            "redo",
            "code",
            "codeBlock",
            "highlight",
            "indent",
            "outdent",
            "underline",
            "strikethrough",
            "image",
            "imageInsert",
            "ckfinder",
          ],
        },
      },
    };
  },
  methods: {
    GMTToStr(time) {
      let date = new Date(time);
      let Str =
        date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
      return Str;
    },
    onSubmit() {
      this.form.publishDate = this.GMTToStr(this.form.publishDate);
      if (this.id != null) {
        this.form.id = this.id;
      }
      const data = this.form;
      console.log(data);
      axios
        .post("http://lr.ideabeat.cn:8080/admin/article-edit", data)
        .then(this.$router.push("/articlePage"))
        .catch((e) => {
          console.log(e);
        });
    },
    cancel(){
      this.$router.push("/articlePage")
    }
  ,beforeUpload(file){
  this.form.cover = file
  //   const reader = new FileReader()
  //   reader.onload = (evt)=>{
  //   this.form.cover = evt.target.result
  //   }
  // const result = reader.readAsDataURL(file)
    return false
  }

  },
  created() {
    this.id = this.$route.query.id;
    axios
      .get("http://lr.ideabeat.cn:8080/admin/article-edit?id=" + this.id)
      .then((res) => {
        for (const key in res.data) {
          if (this.form.hasOwnProperty(key)) {
            this.form[key] = res.data[key];
          }
        }
        console.log(this.form);
      });
  },
  
  computed: {
    isCreate() {
      if (this.$route.query.id) {
        return "确认修改";
      } else {
        return "添加";
      }
    },
  },
};
</script>