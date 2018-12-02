<template>
    <footer>
        <div class="container">
            <p >{{ $label.footer.text }}</p>
            <ul>
                <li v-for="(connection, index) in $label.footer.connect" :key="index">
                    <a :href="connection.url" target="_blank"  itemprop="sameAs">
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
    p
        display: inline-block
        vertical-align: bottom
    ul
        display: inline-block
        list-style: none
        li
            display: inline-block
            a
                transition: all .3s ease
                i
                    font-size: $baseSize * 1.5
                    color: white
                    margin: 0 ($baseSize / 2)
                    padding: $baseSize / 2
                    &.fa-linkedin
                        background: #0077b5
                    &.fa-github-alt
                        background: #24292e

</style>