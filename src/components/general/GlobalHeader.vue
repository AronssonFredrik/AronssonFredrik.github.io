<template>
    <header id="header" itemscope="" itemtype="http://schema.org/Person">
        <div class="container">
            <router-link to="/" itemprop="url">
                <h1 itemprop="name">{{$label.siteName}}</h1>
            </router-link>
        </div>
    </header>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    name: 'GlobalHeader'
});
</script>
<style lang="sass">
@import '../../assets/css/variables'
header
    width: 100%
    @include box-shadow(0,0,($baseSize/4), $baseColor)
    z-index: 101
    position: fixed
    background: $white
    .container
        padding: $baseSize
        min-height: auto
        a
            display: inline-block
            color: $baseColor
</style>