<template>
    <header>
        <div class="container-fluid header-size d-flex justify-content-between align-items-center">
            <div class="logo">
                <img src="../assets/styles/img/my-portfolio-logo.png" alt="">
            </div>
            <div>
                <ul class="d-flex my-0">
                    <li class="nav-item" v-for="(link, index) in store.navbar">
                        <router-link :to="{ name: link.routeName }" class="nav-link me-5" active-class="active">{{
                            link.label
                        }}</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>

<script>
import { store } from '../data/store'
export default {
    name: 'HeaderComp',
    components: {

    },
    data() {
        return {
            store
        }
    },
    methods: {

    }
}
</script>
    

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

.container-fluid {
    height: 100px;
    background-color: $light-grey;
    margin-bottom: 30px;
    opacity: 0.7;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    ;




    .logo {
        width: 160px;
        height: 60px;

        img {
            width: 100%;
            height: 100%;
            margin-left: 5px;
        }
    }

    ul {
        list-style: none;



    }
}
</style>