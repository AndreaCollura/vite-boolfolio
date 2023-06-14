<template>
    <div class="container ">
        <div class="row">
            <div class="col-3 mt-3" v-for="(project, index) in projects" :key="project.id">
                <div class="card">
                    <div class="card-title text-center text-capitalize">
                        <h3>{{ project.title }}</h3>
                    </div>
                    <div class="card-body">
                        <p>{{ project.date }}</p>
                    </div>
                    <div class="card-text">
                        <router-link :to="{ name: 'singleproject', params: { slug: project.slug } }"
                            class="btn btn-secondary">view
                            details</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div>
        <ul class="pagination">
            <li class="page-item" v-if="currentPage == 1"><a class="page-link" href="#">Previous</a></li>
            <li v-else class="page-item"><a class="page-link" @click="getData(currentPage - 1)" href="#">Previous</a></li>
            <li class="page-item" v-for="n in lastPage"><a class="page-link" @click="getData(n)" href="#">{{ n }}</a></li>

            <li class="page-item" v-if="currentPage == lastPage"><a class="page-link" href="#">Next</a></li>
            <li class="page-item" v-else><a class="page-link" @click="getData(currentPage + 1)" href="#">Next</a></li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'ProjectList',
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
                this.currentPage = res.data.results.current_page;
                this.lastPage = res.data.results.last_page;
                /* console.log(this.projects); */
            })
        }
    },
    mounted() {
        this.getData(1)
    }

}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;


.pagination {

    position: fixed;
    bottom: 0;
    right: 0;
    margin-right: 30px;


    a {
        color: black;
    }
}
</style>