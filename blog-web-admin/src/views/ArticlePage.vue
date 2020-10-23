<template>
  <div>
    <a-button type="primary" class="new-article" @click="addArticle"
      >添加新文章</a-button
    >
    <a-table :columns="columns" :data-source="data">
      <a slot="name" slot-scope="record">{{ record.key }}</a>
      <span slot="customTitle"><a-icon type="smile-o" /></span>
      <span slot="tags" slot-scope="tags">
        <a-tag
          v-for="tag in tags"
          :key="tag"
          :color="tag.length > 3 ? 'geekblue' : 'green'"
        >
          {{ tag.toUpperCase() }}
        </a-tag>
      </span>
      <span slot="action" slot-scope="text, record">
        <a @click="editArticle(record.key)">Edit</a>
        <a-divider type="vertical" />
        <a @click="delArticle(record.key)">Delete</a>
       
      </span>

    </a-table>
            <a-modal
      title="删除对话框"
      :visible="visible"
      @ok="handleOk()"
      @cancel="handleCancel"
    >
     <p>您确定要删除吗?</p>
     </a-modal>
     
   
  </div>
</template>
<script>
import axios from "axios";
const columns = [
  {
    title: "id",
    dataIndex: "name",
    key: "name",
    // slots: { title: "customTitle" },
    // scopedSlots: { customRender: "name" },
  },
  {
    title: "文章标题",
    key: "title",
    dataIndex: "title",
  },
  {
    title: "发布时间",
    key: "date",
    dataIndex: "publishDate",
  },
  {
    title: "分类",
    dataIndex: "category",
    key: "category",
  },
  {
    title: "标签",
    key: "tags",
    dataIndex: "tags",
    scopedSlots: { customRender: "tags" },
  },

  {
    title: "操作",
    key: "action",
    scopedSlots: { customRender: "action" },
  },
];

export default {
  data() {
    return {
      delIndex:"",
      visible:false,
      data: [],
      columns,
      
    };
  },
  created() {
    axios.get("http://localhost:3000/admin/article").then((res) => {
      console.log(res);
      res.data.forEach((element, index) => {
        this.data.push({
          key: index,
          name: element._id,
          title: element.title,
          // content: element.content.subStr(20),
          category: element.category,
          publishDate: this.GMTToStr(element.publishDate),
          tags: element.tag,
        });
      });
    });
  },
  methods: {
    delArticle(key){
      this.visible = true
      this.delIdndex = key
    },
   handleOk(){
      const delItem = this.data.filter((item) => item.key == this.delIndex);
      let id = delItem[0].name;
       this.visible = false
      axios.get("http://localhost:3000/admin/delArticle?id="+id).then(res=>{
      })
       location.reload()
    },
    handleCancel(){
      this.visible = false
    },    
    GMTToStr(time) {
      let date = new Date(time);
      let Str =
        date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
      return Str;
    },
    editArticle(key) {
      console.log(key);
      const target = this.data.filter((item) => item.key == key);
      let id = target[0].name;
      this.$router.push("/NewArticle?id="+id);
    },
    addArticle() {
      this.$router.push("/newArticle");
    },
  },
};
</script>
<style scoped>
.new-article {
  /* float:right; */
  margin-bottom: 20px;
}
</style>