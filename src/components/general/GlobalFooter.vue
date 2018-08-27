<template>
    <footer>
        <div class="container">
            <p v-for="msg in message">{{msg}}</p>
        </div>
    </footer>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    name: 'GlobalFooter',
    props: {
        message: {
            type: Array,
            required: true
        }
    }
});
</script>
<style lang="sass">
@import '../../assets/css/variables'
footer
    color: $white
    background: $baseColor
    text-align: center
</style>