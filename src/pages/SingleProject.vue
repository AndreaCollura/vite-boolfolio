<template>
    <div class="container text-capitalize">

        <div v-if="project">
            <h1>{{ project.title }}</h1>
            <p>GIT link : <a :href="project.git"> {{ project.git }}</a></p>
            <p>created : {{ project.date }}</p>
            <p>Framework : {{ project.type ? project.type.name : 'No Type' }}</p>
            <div v-if="(project.categories)">
                <p>categories :</p>
                <div v-for="(category, index) in project.categories">
                    <p class="badge rounded-pill text-bg-info"> {{ category.name }}</p>
                </div>
            </div>






        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { store } from '../data/store'
export default {
    name: 'SingleProject',
    data() {
        return {
            store,
            project: null,

        }
    },
    methods: {
        getProject() {
            axios.get(`${store.apiUrl}/projects/${this.$route.params.slug}`).then((res) => {
                if (res.data.success) {
                    this.project = res.data.results;
                } else {
                    this.$router.push({ name: 'not-found' });
                }
            })
        }
    },
    mounted() {
        this.getProject();
    }


}
</script>

<style lang="scss" scoped></style>