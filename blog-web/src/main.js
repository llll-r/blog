import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import dateformat from "dateformat"
import CKEditor from "@ckeditor/ckeditor5-vue/dist/ckeditor";

import {
  Button, Layout, Card, message, Menu, Icon,
  Row, Col, Divider,Timeline,
  List, Anchor, Skeleton, Input, Pagination, Tag
} from 'ant-design-vue';
Vue.component(Button.name, Button)
Vue.use(Input)
// Vue.component( Input.Search,"a-input-search")

Vue.use(Card)
Vue.use(message)
Vue.use(Layout)
Vue.use(Menu)
Vue.use(Icon)
Vue.use(Divider)
Vue.use(List)
Vue.use(Anchor)
Vue.use(Skeleton) 
Vue.use(Pagination)
Vue.use(Tag)
Vue.use(Row)
Vue.use(Col)
Vue.use(Timeline)


Vue.use(CKEditor);
Vue.config.productionTip = false
Vue.prototype.date = dateformat
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
