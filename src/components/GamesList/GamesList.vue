<template>
    <nav-bar></nav-bar>
    <div id="gamesList">
        <h1>Games</h1>
        <h2>At Your Instrument</h2>
        <div class="games-row">
            <GameCircle :isGameActive="true">Play that Chord</GameCircle>
            <GameCircle :isGameActive="false">Play that Scale</GameCircle>
        </div>
        <h2>Multiple Choice</h2>
        <div class="games-row">
            <GameCircle :isGameActive="false">Name that Chord</GameCircle>
            <GameCircle :isGameActive="false">Name that Scale</GameCircle>
            <GameCircle :isGameActive="false">Follow the Leader</GameCircle>
        </div>
    </div>
    <the-footer></the-footer>
</template>

<script>

import GameCircle from '../Shared/GameCircle';

export default {
    components: {
        GameCircle
    }
}
</script>

<style lang="scss" scoped>
#gamesList {
    color: $purple;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.games-row {
    display: flex;
    justify-content: space-evenly;
}
</style>