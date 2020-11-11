<template>
        <nav-bar></nav-bar>
        <div id="threeNoteChords">
            <h1>Three Note Chords</h1>
            <div class="howToPlay" v-if="!playMode">
                <h2>How to Play</h2>
                <p>Once you click start, we'll generate a new chord. You then have 5 seconds to play the correct chord on your instrument.</p>
                <p>It's self-scoring, so you only cheat yourself!</p>
                <button @click="readyUp">Start</button>
            </div>
        </div>
        <the-footer></the-footer>
</template>

<script>
export default {
    data() {
        return {
            playMode: false,
        }
    },
    methods: {
        readyUp() {
            this.playMode = true;
        }
    }
}
</script>

<style lang="scss" scoped>
#threeNoteChords {
    color: $purple;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    flex-grow: 1;
    margin-top: 40px;
}

.howToPlay {
    display: flex;
    flex-direction: column;
    align-items: center;

    button {
        color: $white;
        background: $purple;
        padding: 10px 20px;
        font-family: $primaryFont;
        font-weight: 700;
        font-size: 1.2em;
        border: 3px solid $gold;

        &:hover {
            background: $gold;
            color: $purple;
        }
    }

}

p {
    color: black;
}
</style>