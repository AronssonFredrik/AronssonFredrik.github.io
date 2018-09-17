<template>
    <div class="container flex-of-m" :class="{reverse: val % 2 === 0}">
        <div class="figure">
            <img :src="content.img" :alt="content.alt" itemprop="image">
        </div>
        <div>
            <h2 itemprop="name">{{ content.title }}</h2>
            <p itemprop="description"> {{content.desc }}…</p>
            <Cta :button="content.button" v-if="content.button"/>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Cta from '@/components/item/Cta.vue';
export default Vue.extend({
  name: 'Showcase',
  components: {
    Cta,
  },
  props: {
    content: Object,
    val: Number
  },
});
</script>
