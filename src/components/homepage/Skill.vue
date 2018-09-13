<template>
    <section id="skills">
        <h2 class="section-title">{{content.sectionTitle}}</h2>
        <div class="row" v-for="(skill, idx) in content.bundle" :key="idx">
            <div class="container ">
                <h4>{{skill.title}}</h4>
                <div class="flex-of-m">
                    <div v-for="(type, idx) in skill.type" :key="idx">
                        <h5>{{type.name}}</h5>
                        <div v-for="(level, idx) in type.level" :key="idx" class="level">
                            <p>{{$label.translation.experience[idx]}}</p>
                            <div class="experience" v-bind:class="['repeat-' + level, idx]">
                                <div class="tool-tip">
                                    {{$label.translation.experience[idx] + ': ' + $label.translation.level[level]}}
                                </div>
                                <span v-for="eachLevel in $label.translation.level" :key="eachLevel"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    name: 'Skill',
    props: {
        content: Object,
    }
});
</script>
<style lang="sass">
@import '../../assets/css/variables'
#skills
    h4
        padding: $baseSize
    .level
        p
            padding: ($baseSize / 2) 0 0
        > div
            @for $i from 1 through 5 
                &.repeat-#{$i} 
                    span:nth-child(-n+#{$i})
                        border: $blue 1px solid
                        background: $blue
            span
                width: $baseSize
                height: $baseSize * .5
                margin: ($baseSize / 6) ($baseSize / 4)
                display: inline-block
                border: $blue 1px solid
                border-radius: 2px
        .experience
            position: relative
            .tool-tip
                display: none
                font-size: ($baseSize * .75)
                background: $blue
                position: absolute
                top: -($baseSize * 3)
                left: 0
                padding: ($baseSize / 4) ($baseSize / 2)
                border-radius: $baseSize
                color: $lightBlue
                &:after
                    content: ""
                    position: absolute
                    top: 100%
                    left: 50%
                    margin-left: -5px
                    border-width: 5px
                    border-style: solid
                    border-color: $blue transparent transparent transparent
        &:hover
            .experience
                .tool-tip 
                    display: inline-block



</style>