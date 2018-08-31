<template>
    <section class="experience">
        <h2 class="section-title">{{content.sectionTitle}}</h2>
        <div class="container flex-of-m">
            <div 
                v-for="(exp, idx) in content.bundle" :key="idx">
                <h4>{{exp.title}}</h4>
                <p>
                    <i class="lnr lnr-apartment" aria-hidden="true"></i>
                    {{exp.worksFor}}
                <br>
                <i class="lnr lnr-earth" aria-hidden="true"></i>
                    {{exp.workLocation}}
                <br>
                    <i class="lnr lnr-calendar-full" aria-hidden="true"></i>
                    {{exp.timeRange}}
                </p>
                <p>{{exp.desc}}</p>
            </div>
        </div>
    </section> 
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Experience',
  props: {
    content: Object,
  },
});
</script>