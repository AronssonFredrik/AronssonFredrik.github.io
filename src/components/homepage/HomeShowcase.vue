<template>
    <div class="showcase">
        <!-- for each client -->
        <div v-for="(client, index) in content" :key="index">
            <!-- for each showcase -->
            <section v-for="(showcase, index) in client" :key="index">
                <div v-for="(teaser, index, val) in showcase" v-if="teaser.homepage" :key="val">
                    <Teaser :content="teaser.teaser" :val="val"></teaser>
                </div>
            </section>
        </div>
    </div>
</template>
<script lang="ts">
import Vue from "vue";
import Teaser from "@/components/shared/Teaser.vue";
export default Vue.extend({
  name: "Showcase",
  components: {
    Teaser
  },
  props: {
    content: Object
  }
});
</script>
<style lang="sass">
@import '../../assets/css/variables'
.showcase
    .container
        .figure
            margin-left: calc(-960px/2)
            max-width: 100%
            img
                @media screen and (max-width: $breakpoint-medium)
                  width: calc(100% + 120px)
                  margin-left: calc(-120px/2)
                  max-width: none
        .content
            width: 50%
        &.reverse
            .figure
                margin-right: calc(-960px/2)
                margin-left: auto
        .figure, .content, &.reverse .figure, &.reverse .content
            @media screen and (max-width: $breakpoint-medium)
                margin-left: 0
                margin-right: 0
                width: 100%
</style>