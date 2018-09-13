import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

Vue.prototype.$label = {
  readMore: 'Read more →',
  preview: 'Preview now ↝',
  translation: {
    "experience": {
        "personalExp": "Personal Experience",
        "interest": "Personal Interest",
        "workExp": "Work-related Experience"
    },
    "level": {
        1: 'Beginner',
        2: 'Intermediate',
        3: 'Advanced',
        4: 'Expert'
    }
  }
}