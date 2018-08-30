<template>
    <section class="subHeader" :class="[content.classes]">
        <div class="subHeaderContent">
            <div class="container">
                <div class="intro">
                    <h2>{{ content.teaser.heading }}</h2>
                    <h4>{{ content.teaser.subHeading }}</h4>
                </div>
                <a 
                    component="Experience"
                    class="subHeadingScroll" 
                    v-if="content.scroll"
                    v-on:click="goTo('Experience')"
                    >Scroll  to learn more</a>
            </div>
        </div>
        <div class="subHeaderOverlay" v-if="content.overlay"></div>
    </section>
</template>

<script lang="ts">
import Vue from 'vue';
import { setInterval, setTimeout } from 'timers';
import { error } from 'util';

function frame(toGo: any) {
    if (toGo != undefined){
        if (document.documentElement.scrollTop != toGo) {
            console.log(toGo)
            document.documentElement.scrollTop+=1
        }
    }
}


export default Vue.extend({
  name: 'Jumbotron',
  props: {
    content: Object,
  },
    created() {
    },
    methods: {
        goTo: function(toSection: String) {
            var scrollOffset = 93               // document.getElementById('header')
            var something = []
            for (var num in this.$parent.$children) {
                something.push({
                    component: this.$parent.$children[num].$options.name,
                    topOffset: this.$parent.$children[num].$el.offsetTop
                })
            }

            window.scroll({
                top: something[0].topOffset - scrollOffset,
                left: 0,
                behavior: 'smooth'
            })
        }
    }

});
</script>
<style lang="sass">
@import '../../assets/css/variables'
main
    section
        overflow: hidden
        &.frontpage
            background: $blue
        &.case
            background: $purple
        &.subHeader
            position: relative
            height: 100vh
            min-height: auto
            display: flex
            flex-basis: auto
            align-items: center
            background-repeat: no-repeat !important
            background-size: cover !important
            .subHeaderContent
                text-align: center
                color: $white
                margin: auto
                z-index: 4
                a
                    font-size: 0
                    height: $baseSize * 4
                    width: $baseSize * 4
                    line-height: $baseSize * 4
                    color: $white
                    border: 1px solid $white
                    display: inline-block
                    margin: $baseSize
                    animation: bounceTime 2s infinite
                    &:hover, &:active
                        color: darken($white, 10%)
                    &:after
                        transition: all .2s ease-in-out
                        -webkit-transition: all .2s ease-in-out
                        content: "↓"
                        font-size: $baseSize * 2
                        line-height: $baseSize * 3
                        display: inline-block
            .subHeaderOverlay
                background: -webkit-linear-gradient(-25deg, $red 0%, $purple 50%, $white 100%)
                @include overlay
                opacity: .3
                z-index: 0
            svg
                position: absolute
                bottom: 0
        .section-title
            text-align: center
            padding: $baseSize 0
            &:after
                content: ""
                height: $baseSize / 8
                width: $baseSize * 2
                background: $blue
                display: block
                margin: $baseSize auto 0
</style>