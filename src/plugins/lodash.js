import Vue from 'vue'
import VueLodash from 'vue-lodash'
// lodash想要tree shking必须要这样使用路径单独引入
import cloneDeep from 'lodash/cloneDeep'
import isEqual from 'lodash/isEqual'

Vue.use(VueLodash, {
  name: 'lo',
  lodash: {
    cloneDeep,
    isEqual
  }
})
