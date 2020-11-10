<template>
    <nav>
        <router-link to="/games">
            <img :src="require(`../../../assets/chordtheory-small.png`)" alt="Chord Theory Logo"/>
        </router-link>
    </nav>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
nav {
    background: $purple;
    height: 80px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>