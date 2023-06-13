<template>
    <header>
        <div class="container-fluid header-size d-flex justify-content-between align-items-center">
            <div class="logo">
                <img src="../assets/styles/img/my-portfolio-logo.png" alt="">
            </div>
            <!-- <div class="social-icons d-flex align-items-center">
                <a href="#"><i class="fa-solid fa-magnifying-glass"></i></a>
            </div> -->
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

    .social-icons {

        width: 250px;
        margin-right: 10px;
        margin-left: 10px;

        i {
            padding: 5px 15px;
            border-right: 1px solid $grey-bg ;
            padding-right: 20px;
            color: $grey-bg;
            margin-right: 10px;
            font-size: 1.2rem;

        }

        img {
            width: 15px;
            height: 15px;
            margin: 0 10px;
            object-fit: contain;
        }
    }





}
</style>