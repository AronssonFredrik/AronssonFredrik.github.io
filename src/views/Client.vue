<template>
    <main>
        <div v-for="(client, index) in client" v-if="index === $route.params.client" :key="index">
            <Jumbotron :content="client.jumbotron"></Jumbotron>
            <Section :content="client.sections"></Section>
            <Showcase :content="client"></Showcase>
        </div>
        <!-- if client doesn't exist -->
        <Error v-else></Error>
    </main>
</template>
<script lang="ts">
import Vue from 'vue';
import Jumbotron from '@/components/shared/Jumbotron.vue';
import Showcase from '@/components/shared/Showcase.vue'; 
import Section from '@/components/shared/Section.vue';
import Error from '@/views/404.vue';
export default Vue.extend({
  name: 'Client',
  components: {
    Jumbotron,
    Showcase,
    Section,
    Error
  },
  props: {
    client: Object
  },
  created() {
    var meta = this.client[this.$route.params.client].meta
    document.title = 
      meta.title  
      + this.$route.meta.siteName;
    document.querySelector('meta[name="description"]').setAttribute("content", meta.description)
  }
});
</script>