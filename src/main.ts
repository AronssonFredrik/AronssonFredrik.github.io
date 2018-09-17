import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

const siteConfig = {
  name: "Fredrik Aronsson"
}

Vue.prototype.$siteName = 'Fredrik Aronsson'
Vue.prototype.$label = {
  footer: [
    "Vat liable since October 2014",
    "Website developed with vueJS, Sass, etc",
    "Sent from App.vue"
  ],
  siteName: 'Fredrik Aronsson',
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
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')