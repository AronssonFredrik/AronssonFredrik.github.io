import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

const siteConfig = {
  name: "Fredrik Aronsson"
}

Vue.prototype.$siteName = 'Fredrik Aronsson'
Vue.prototype.$label = {
  footer: {
    text: "Let's connect:",
    connect: [
      {
        url: "https://www.linkedin.com/in/fredrik-aronsson",
        class: "linkedin"
      },
      {
        url: "https://github.com/AronssonFredrik",
        class: "github-alt"
      }
    ]
  },
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