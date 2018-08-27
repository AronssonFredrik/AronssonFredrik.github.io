<template>
  <main>
    <Jumbotron :content="jumbotron"></Jumbotron>
    <Experience :content="experience"></Experience>
    <Skill :content="skill"></skill>
    <Showcase :content="client"></Showcase>
  </main>
</template>

<script lang="ts">
import Vue from 'vue';
import Jumbotron from '@/components/shared/Jumbotron.vue'; 
import Experience from '@/components/homepage/Experience.vue'; 
import Skill from '@/components/homepage/Skill.vue'; 
import Showcase from '@/components/Showcase.vue'; 
export default Vue.extend({
  name: 'home',
  components: {
    Jumbotron,
    Experience,
    Skill,
    Showcase
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
  }
});
</script>