<template>
    <div>
        <!-- for each client -->
        <div v-for="(client, index) in content">
            <!-- for each showcase -->
            <section v-for="(showcase, index) in client">
                <div 
                class="container flex-of-m"
                v-for="(teaser, index, val) in showcase"
                v-if="teaser.homepage"
                :class="{reverse: val % 2 === 0}"
                >
                    <div class="figure">
                        <img :src="teaser.teaser.img" :alt="teaser.teaser.alt" itemprop="image">
                    </div>
                    <div>
                        <h2 itemprop="name">{{ teaser.teaser.title }}</h2>
                        <p itemprop="description"> {{teaser.teaser.desc }}…</p>
                        <p>
                            <router-link class="CTA" :to="teaser.teaser.button.url">{{teaser.teaser.button.text}}</router-link>
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
