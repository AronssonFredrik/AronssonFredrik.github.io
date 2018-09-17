<template>
    <div>
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
import Vue from 'vue';
import Teaser from '@/components/shared/Teaser.vue';
export default Vue.extend({
  name: 'Showcase',
  components: {
    Teaser
  },
  props: {
    content: Object
  },
});
</script>
