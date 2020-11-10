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
    padding: 40px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
}


a {
  width: 300px;
  margin: 20px 0;
  padding: 20px;
  background: $purple;
  color: $gold;
  border: 5px solid $gold;
  text-align: center;
  font-weight: 900;
  font-size: 2em;
  text-transform: uppercase;
  text-decoration: none;

  &:hover {
    background: $gold;
    color: $purple;
    cursor: pointer;
  }
}
</style>