<template>
    <header>
        <div class="container-fluid header-size d-flex justify-content-between align-items-center">
            <div class="logo">
                <img src="../assets/styles/img/my-portfolio-logo.png" alt="">
            </div>
            <div>
                <ul class="d-flex ">
                    <li v-for="(link, index) in navbar">
                        <router-link :to="{ name: link.routeName }" active-class="active" class="nav-link me-5">{{
                            link.label
                        }}</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>

<script>

export default {
    name: 'HeaderComp',
    components: {


    },
    data() {
        return {

            navbar: [
                {
                    label: 'Home',
                    routeName: 'home'
                },
                {
                    label: 'Projects',
                    routeName: 'projects'
                },
                {
                    label: 'About Us',
                    routeName: 'aboutus'
                },
                {
                    label: 'Contact Us',
                    routeName: 'contactus'
                }
            ]



        }
    },
    methods: {

    }
}
</script>
    

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

.container-fluid {
    height: 90px;
    background-color: $light-grey;
    margin-bottom: 30px;


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