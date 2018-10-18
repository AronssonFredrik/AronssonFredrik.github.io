<template>
    <div>
        <section class="slideshow"
            v-for="(slideshow, index, val) in content" 
            :class="{reverse: index % 2 === 0}" 
            :key="val"
        >
            <div class="container flex-of-m">
                <div class="figure" v-if="slideshow.img">
                    <img :src="slideshow.img.path" :alt="slideshow.img.alt" itemprop="image">
                </div>
                <div>
                    <h2 itemprop="name">{{ slideshow.title }}</h2>
                    <div itemprop="description"> 
                        <p v-for="p in slideshow.paragraph" v-html="p" :key="p"/>
                    </div>
                    <Cta :button="slideshow.button" v-if="slideshow.button"/>
                </div>
            </div>
        </section>
        <nav>
            <ul>
                <li  
                    v-for="(nav, index, val) in content" 
                    :class="{reverse: index % 2 === 0}" 
                    :key="val"
                    v-html="index"
                />
            </ul>
        </nav>

    </div>
</template>
<script lang="ts">
import Cta from '@/components/item/Cta.vue';
import Vue from 'vue';
export default Vue.extend({
  name: 'Slideshow',
  components: {
    Cta,
  },
  props: {
    content: Array
  }
});
</script>