<template>
  <main>
    <Jumbotron :content="jumbotron"></Jumbotron>
    <Experience :content="experience"></Experience>
    <Skill :content="skill"></skill>
    <HomeShowcase :content="client"></HomeShowcase>
  </main>
</template>

<script lang="ts">
import Vue from 'vue';
import Jumbotron from '@/components/shared/Jumbotron.vue'; 
import Experience from '@/components/homepage/Experience.vue'; 
import Skill from '@/components/homepage/Skill.vue'; 
import HomeShowcase from '@/components/homepage/HomeShowcase.vue'; 
export default Vue.extend({
  name: 'home',
  components: {
    Jumbotron,
    Experience,
    Skill,
    HomeShowcase
  },
  props: {
    client: Object,
    skill: Object,
    experience: Object
  },
  data() {
    return {
      jumbotron: {
          scroll: true,
          overlay: true,
          classes: 'frontpage',
          teaser: {
              heading: "Freelance Web Developer",
              subHeading: "Based in Gothenburg"
          }
      }
    }
  },
  mounted () {
    document.title = 
      this.$route.meta.title 
      + this.$route.meta.siteName;
  }
});
</script>