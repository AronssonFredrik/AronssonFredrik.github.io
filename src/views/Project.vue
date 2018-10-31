<template>
    <main>
        <div v-for="(client, index) in client" v-if="index === $route.params.client" :key="index">
            <div v-for="(project, index) in client.projects" v-if="index === $route.params.project" :key="index">
                <Jumbotron :content="project.jumbotron"></Jumbotron>
                <Slideshow :content="project.slideshow" />
                <Section :content="project.sections"></Section>
            </div>
            <!-- if project doesn't exist -->
        </div>
    </main>
</template>
<script lang="ts">
import Vue from 'vue';
import Jumbotron from '@/components/shared/Jumbotron.vue';
import Section from '@/components/shared/Section.vue';
<<<<<<< HEAD
=======
import Slideshow from '@/components/shared/Slideshow.vue';
import Error from '@/views/404.vue';
>>>>>>> 23dcc6791dd8fe0bd73ab8d1b985c28e58b201be
export default Vue.extend({
  name: 'Project',
  components: {
    Jumbotron,
<<<<<<< HEAD
    Section
=======
    Section,
    Error,
    Slideshow
>>>>>>> 23dcc6791dd8fe0bd73ab8d1b985c28e58b201be
  },
  props: {
    client: Object
  },
  beforeMount () {
    if (this.client[this.$route.params.client] === undefined ||
        this.client[this.$route.params.client].projects[this.$route.params.project] === undefined) {
        this.$router.push('/')
    }
  },
  mounted () {
    if (this.$route.params.client !== 'error' && this.$route.params.project !== 'page-not-found'){
        var meta = this.client[this.$route.params.client].projects[this.$route.params.project].meta
        var desc = document.querySelector('meta[name="description"]')
        document.title = meta.title + this.$route.meta.siteName
        desc !== null 
        ? desc.setAttribute("content", meta.description)
        : document.createElement('meta').setAttribute("content", meta.description)
    }
  }
});
</script>