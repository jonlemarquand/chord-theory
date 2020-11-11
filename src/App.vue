<template>
  <main>
    <router-view></router-view>
  </main>
</template>

<script>
export default {
  watch: {
    '$route':{
      handler: (to) => {
        document.title = to.meta.title || 'Chord Theory'
      },
      immediate: true
    }
  },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap');

body {
  margin: 0;
  padding: 0;
  font-family: $primaryFont;
}

main {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;

}

h1 {
  font-weight: 900;
  text-transform: uppercase;
  font-size: 3em;
  margin-top: 0;
}
</style>