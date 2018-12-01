<template>
    <footer>
        <div class="container">
            <p >{{ $label.footer.text }}</p>
            <ul>
                <li v-for="(connection, index) in $label.footer.connect" :key="index">
                    <a :href="connection.url" target="_blank">
                        <i :class="'fab fa-'+connection.class"></i>
                    </a>
                </li>
            </ul>

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