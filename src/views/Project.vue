<template>
    <main>
        <div 
        v-for="(client, index) in client"
        v-if="index === $route.params.client"
        :key="index"
        >
            <div v-for="(project, index) in client.projects"
                v-if="index === $route.params.project"
                :key="index">
                <Jumbotron :content="project.jumbotron"></Jumbotron>
                <Section :content="project.sections"></Section>
            </div>

            
        </div>
    </main>
</template>

<script lang="ts">
import Vue from 'vue';
import Jumbotron from '@/components/shared/Jumbotron.vue';
import Section from '@/components/shared/Section.vue';

export default Vue.extend({
  name: 'Client',
  components: {
    Jumbotron,
    Section
  },
  props: {
    client: Object
  }
});
</script>