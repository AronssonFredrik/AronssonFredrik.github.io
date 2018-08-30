<template>
    <section id="skills">
        <h2 class="section-title">{{content.sectionTitle}}</h2>
        <div class="row" v-for="(skill, idx) in content.bundle" :key="idx">
            <div class="container ">
                <h4>{{skill.title}}</h4>
                <div class="flex-of-m">
                    <div v-for="(type, idx) in skill.type" :key="idx">
                        <p>{{type.name}}</p>
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
