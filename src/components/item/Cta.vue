<template>
    <p>
        <a class="CTA" :href="button.href" :target="button.target" v-if="button.target == '_blank'" itemprop="url">
            {{button.text || $label.preview}}
        </a>
        <router-link class="CTA" :to="button.href" v-else itemprop="url">
            {{button.text || $label.readMore}}
        </router-link>
    </p>
</template>


<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'CTA',
  props: {
    button: Object
  }
});
</script>