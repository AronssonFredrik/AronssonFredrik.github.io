<template>
    <section class="experience">
        <h2 class="section-title">{{content.sectionTitle}}</h2>
        <div class="container flex-of-m">
            <div 
                v-for="(exp, idx) in content.bundle" :key="idx"
                itemscope="" itemtype="https://schema.org/Person"
                >
                <h4 itemprop="jobTitle">{{exp.title}}</h4>
                <p>
                    <i class="lnr lnr-apartment" aria-hidden="true"></i>
                        <span itemprop="worksFor">{{exp.worksFor}}</span>
                        <br> 
                    <i class="lnr lnr-earth" aria-hidden="true"></i>
                        <span itemprop="workLocation">{{exp.workLocation}}</span>
                        <br>
                    <i class="lnr lnr-calendar-full" aria-hidden="true"></i>
                        {{exp.timeRange}}
                </p>
                <p itemprop="description">{{exp.desc}}</p>
                    <Cta :button="exp.button" v-if="exp.button"/>
            </div>
        </div>
    </section> 
</template>
<script lang="ts">
import Vue from "vue";
import Cta from "@/components/item/Cta.vue";

export default Vue.extend({
  name: "Experience",
  components: {
      Cta
  },
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
        &.flex-of-m
            align-items: inherit
        div
            width: 33%
            @media screen and (max-width: $breakpoint-medium)
                width: 100%
</style>
