<template>
    <div class="container ">
        <div class="row">
            <div class="col" v-for="(project, index) in projects" :key="project.id">
                <div class="card">
                    <div class="card-title">
                        <h1>{{ project.title }}</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'IndexComp',
    components: {

    },
    data() {
        return {
            title: 'ciao',
            projects: [],
            apiUrl: 'http://127.0.0.1:8000/api',
            currentPage: 1,
            lastPage: null,
        }
    },
    methods: {
        getData(numPage) {
            axios.get(`${this.apiUrl}/projects`, {
                params: {
                    'page': numPage
                }
            }).then((res) => {
                /* console.log(res); */
                this.projects = res.data.results.data;
                /* console.log(this.projects); */
            })
        }
    },
    mounted() {
        this.getData()
    }

}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
</style>