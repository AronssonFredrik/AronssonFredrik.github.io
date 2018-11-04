<template>
    <section class="experience">
        <h2 class="section-title">{{content.sectionTitle}}</h2>
        <div class="container flex-of-m">
            <div 
                v-for="(exp, idx) in content.bundle" :key="idx">
                <h4>
                    <i class="lnr lnr-apartment" aria-hidden="true"></i>
                    {{exp.worksFor}}
                </h4>
                <p>
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
import Vue from "vue";

export default Vue.extend({
  name: "Experience",
  props: {
    content: Object
  }
});
</script>
<style lang="sass">
@import '../../assets/css/variables'

.experience
    .container
        text-align: center
        div
            width: 33%
            @media screen and (max-width: $breakpoint-medium)
                width: 100%
</style>
