<template>
    <div class="container text-capitalize">
        <div class="row">
            <div class="col-3 mt-3" v-for="(project, index) in projects" :key="project.id">
                <div class="card">
                    <div class="card-title text-center text-capitalize">
                        <h5 class="mt-3">{{ project.title }}</h5>
                    </div>
                    <div class="card-body">
                        <p>created : {{ project.date }}</p>
                        <p>Framework : {{ project.type ? project.type.name : 'No Type' }}</p>
                    </div>
                    <div class="card-text">
                        <router-link :to="{ name: 'singleproject', params: { slug: project.slug } }"
                            class="button d-flex justify-content-center align-items-center">
                            View details
                        </router-link>
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
import { store } from '../data/store'
export default {
    name: 'ProjectList',
    components: {

    },
    data() {
        return {
            store,
            projects: [],
            currentPage: 1,
            lastPage: null,
        }
    },
    methods: {
        getData(numPage) {
            axios.get(`${store.apiUrl}/projects`, {
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


.button {
    margin: 0 auto;
    width: 130px;
    height: 30px;
    font-size: .8rem;
    background-color: $light-grey;
    font-weight: bold;
    text-align: center;
    border: 1px solid $grey-bg;
    text-transform: uppercase;
    margin-top: 20px;
    margin-bottom: 10px;
    text-decoration: none;
    color: $dark-grey;


    a {
        margin-top: 0;
    }


}

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