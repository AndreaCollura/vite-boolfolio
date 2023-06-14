<template>
    <div id="loading">
        <img class="img" src="../assets/styles/img/giphy.gif" alt="loading..." width="200" />
    </div>
</template>

<script>
export default {
    name: 'LoadingComp'

}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

#loading {
    position: absolute;
    z-index: 1000;
    background-color: $dark-grey;
    height: 100vh;
    width: 100%;
    text-align: center;
    line-height: 100vh;
}

.img {
    position: relative;
    margin: auto;
}
</style>