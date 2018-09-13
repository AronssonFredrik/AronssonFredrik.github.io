<template>
    <footer>
        <div class="container">
            <p v-for="text in $label.footer" :key="text">{{ text }}</p>
        </div>
    </footer>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    name: 'GlobalFooter'
});
</script>
<style lang="sass">
@import '../../assets/css/variables'
footer
    color: $white
    background: $baseColor
    text-align: center
</style>