<template>
    <div>
        <section v-for="(section, index, val) in content" class="showcase" :class="section.class" :key="val">
            <div class="container flex-of-m" :class="{reverse: index % 2 === 0}">
                <div class="figure" v-if="section.img">
                    <img :src="section.img.path" :alt="section.img.alt">
                </div>
                <div class="content">
                    <h2 itemprop="name">{{ section.title }}</h2>
                    <div> 
                        <p v-for="(p, i) in section.paragraph" v-html="p" :key="i" itemprop="description"> </p>
                        <ul v-if="section.list">
                            <li v-for="(list, i) in section.list" v-html="list" :key="i"></li>
                        </ul>
                    </div>
                    <Cta :button="section.button" v-if="section.button"/>
                </div>
            </div>
        </section>
    </div>
</template>
<script lang="ts">
import Cta from "@/components/item/Cta.vue";
import Vue from "vue";
export default Vue.extend({
  name: "Section",
  components: {
    Cta
  },
  props: {
    content: Array
  }
});
</script>