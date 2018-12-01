<template>
    <main>
        <div v-for="(client, index) in client" v-if="index === $route.params.client" :key="index">
            <Jumbotron :content="client.jumbotron"></Jumbotron>
            <Section :content="client.sections"></Section>
            <Showcase :content="client"></Showcase>
        </div>
        <!-- if client doesn't exist -->
    </main>
</template>
<script lang="ts">
import Vue from 'vue';
import Jumbotron from '@/components/shared/Jumbotron.vue';
import Showcase from '@/components/shared/Showcase.vue'; 
import Section from '@/components/shared/Section.vue';
export default Vue.extend({
  name: 'Client',
  components: {
    Jumbotron,
    Showcase,
    Section
  },
  props: {
    client: Object
  },
  beforeMount() {
    if (this.client[this.$route.params.client] === undefined) {
        this.$router.push('/')
    }
  },
  mounted() {
    console.log(this.client[this.$route.params.client].meta)
    if (this.$route.params.client !== "error") {
    var meta = this.client[this.$route.params.client].meta
      var desc = document.querySelector('meta[name="description"]');
      document.title = meta.title + this.$route.meta.siteName;
      desc !== null
        ? desc.setAttribute("content", meta.description)
        : document
            .createElement("meta")
            .setAttribute("content", meta.description);
    }
  }
});
</script>