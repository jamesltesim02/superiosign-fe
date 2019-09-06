import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import VeeValidate from 'vee-validate'
import Vue2Toast from 'vue2-toast'

import 'vue2-toast/lib/toast.css'

Vue.use(Vuetify, {customProperties: true})
Vue.use(VeeValidate)
Vue.use(Vue2Toast, {
  type: 'center',
  duration: 2500,
  wordWrap: true
})
