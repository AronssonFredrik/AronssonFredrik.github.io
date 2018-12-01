<template>
    <div>
        <section v-for="(section, index, val) in content" class="showcase" :class="{reverse: index % 2 === 0}" :key="val">
            <div class="container flex-of-m"
            :class="section.class">
                <div class="figure" v-if="section.img">
                    <img :src="section.img.path" :alt="section.img.alt" itemprop="image">
                </div>
                <div class="content">
                    <h2 itemprop="name">{{ section.title }}</h2>
                    <div itemprop="description"> 
                        <p v-for="p in section.paragraph" v-html="p" :key="p"> </p>
                        <ul v-if="section.list">
                            <li v-for="list in section.list" v-html="list" :key="list"></li>
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