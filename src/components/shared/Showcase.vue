<template>
    <div>
        <div v-for="(showcase, index) in content" :key="index">
            <section v-if="index === 'projects'" v-for="(teaser, idx, val) in showcase" :class="{reverse: val % 2 === 0}" :key="val">
                <div  class="container flex-of-m">
                    <div class="figure">
                        <img :src="teaser.teaser.img" :alt="teaser.teaser.alt" itemprop="image">
                    </div>
                    <div>
                        <h2 itemprop="name">{{ teaser.teaser.title }}</h2>
                        <p itemprop="description"> {{teaser.teaser.desc }}…</p>
                        <p>
                            <router-link class="CTA" :to="teaser.teaser.button.href">{{teaser.teaser.button.text || $label.readMore}}</router-link>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Showcase',
  props: {
    content: Object
  },
});
</script>
