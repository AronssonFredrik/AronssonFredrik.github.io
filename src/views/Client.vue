<template>
    <main>
        <div 
        v-for="(client, index) in client"
        v-if="index === $route.params.client"
        :key="index"
        >
            <Jumbotron :content="client.jumbotron"></Jumbotron>
            <Section :content="client.sections"></Section>
            <Showcase :content="client"></Showcase>
        </div>
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
  }
});
</script>