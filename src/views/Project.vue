<template>
    <main>
        <div v-for="(client, index) in client" v-if="index === $route.params.client" :key="index">
            <div v-for="(project, index) in client.projects" v-if="index === $route.params.project" :key="index">
                <Jumbotron :content="project.jumbotron"></Jumbotron>
                <Slideshow :content="project.slideshow" />
                <Section :content="project.sections"></Section>
            </div>
            <!-- if project doesn't exist -->
            <Error v-else></Error>
        </div>
        <!-- if client doesn't exist -->
        <Error v-else></Error>
    </main>
</template>
<script lang="ts">
import Vue from 'vue';
import Jumbotron from '@/components/shared/Jumbotron.vue';
import Section from '@/components/shared/Section.vue';
import Slideshow from '@/components/shared/Slideshow.vue';
import Error from '@/views/404.vue';
export default Vue.extend({
  name: 'Client',
  components: {
    Jumbotron,
    Section,
    Error,
    Slideshow
  },
  props: {
    client: Object
  },
  mounted () {
    var meta = this.client[this.$route.params.client].projects[this.$route.params.project].meta
    document.title = meta.title + this.$route.meta.siteName;
    document.querySelector('meta[name="description"]').setAttribute("content", meta.description)
  }
});
</script>