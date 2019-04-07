<template>
    <section class="slideshow" v-if="content">
        <div
            v-for="(slideshow, index, val) in content" 
            itemtype="https://schema.org/WebPage" itemscope
            :class="{reverse: index % 2 === 0, active: index == currentTab}" 
            :key="val"
        >
            <div class="container flex-of-m">
                <div class="figure" v-if="slideshow.img">
                    <img :src="slideshow.img.path" :alt="slideshow.img.alt" itemprop="image">
                </div>
                <div class="content">
                    <h2 itemprop="name">{{ slideshow.title }}</h2>
                    <div itemprop="description"> 
                        <p v-for="p in slideshow.paragraph" v-html="p" :key="p"/>
                    </div>
                    <Cta :button="slideshow.button" v-if="slideshow.button"/>
                </div>
            </div>
        </div>
        <nav>
            <ul>
                <li @click="diveTo('descend')" class="prev">
                    <span>←</span>
                </li>
                <li  
                    v-for="(nav, index, val) in content" 
                    :class="{active: index == currentTab}" 
                    :key="val"
                    @click="goTo(index)"
                    >
                    <span v-html="index"/>
                </li>
                <li @click="diveTo('ascend')" class="next">
                    <span>→</span>
                </li>
            </ul>
        </nav>

    </section>
</template>
<script lang="ts">
import Cta from "@/components/item/Cta.vue";
import Vue from "vue";
export default Vue.extend({
  name: "Slideshow",
  components: {
    Cta
  },
  props: {
    content: Array
  },
  data: function() {
    return {
      currentTab: 0,
      postFontSize: 2
    };
  },
  methods: {
    goTo: function(idx: Number) {
      this.$data.currentTab = idx;
    },
    diveTo: function(orientation: String) {
      let val = this.$data.currentTab + 1;
      if (orientation == "ascend")
        val < this.$props.content.length
          ? this.$data.currentTab++
          : (this.$data.currentTab = 0);
      else if (orientation == "descend")
        val > 1
          ? this.$data.currentTab--
          : (this.$data.currentTab = this.$props.content.length - 1);
    }
  }
});
</script>
<style lang="sass">
@import '../../assets/css/variables'
.slideshow
    min-height: 70vh
    position: relative
    > div
        display: none
        padding-bottom: 6vh
        &.active
            display: block
    .container 
        > div
            width: 50%
            @media screen and (max-width: $breakpoint-medium)
                width: 100%
                &.content
                    text-align: center
                &.figure 
                    img 
                        float: none
                        max-width: 100%
    nav
        text-align: center
        position: absolute
        bottom: $baseSize
        width: 100%
        li
            display: inline-block
            cursor: pointer
            padding: $baseSize / 2
            margin: 0 $baseSize / 2
            color: $red
            border: none
            border-bottom: 1px solid $red
            background: none
            &.active
                background: $red
                color: $white
            &.next, &.prev
                border: 1px solid $red
                padding: ($baseSize / 2) $baseSize
</style>
