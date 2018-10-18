<template>
    <main>
        {{this.jumbotron}}
    </main>
</template>
<script lang="ts">
import Vue from 'vue';
import Jumbotron from '@/components/shared/Jumbotron.vue';
export default Vue.extend({
  name: '404',
  components: {
    Jumbotron
  },
  data() {
    return {
      jumbotron: {
          scroll: false,
          overlay: true,
          classes: 'frontpage',
          teaser: {
              heading: "Page not found"
          }
      }
    }
  }
})