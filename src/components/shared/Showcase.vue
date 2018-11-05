<template>
    <div>
        <div v-for="(showcase, index) in content" :key="index">
            <section v-if="index === 'projects'" v-for="(teaser, idx, val) in showcase" :class="{reverse: val % 2 === 0}" :key="val" class="showcase">
                <Teaser :content="teaser.teaser" :val="val"></Teaser>
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
