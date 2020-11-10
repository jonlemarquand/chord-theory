<template>
    <div id="homescreen">
        <img :src="require(`../../assets/chordtheory.png`)" alt="Chord Theory Logo"/>
        <router-link to="/games">Begin</router-link>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
#homescreen {
    background: $purple;
    height: calc(100vh - 80px);
    margin: 0 auto;
    padding: 40px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
}
</style>