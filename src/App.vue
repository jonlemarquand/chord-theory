<template>
  <main>
    <router-view></router-view>
  </main>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap');

body {
  margin: 0;
  padding: 0;
  font-family: $primaryFont;
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