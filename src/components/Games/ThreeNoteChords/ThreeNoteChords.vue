<template>
        <nav-bar></nav-bar>
        <div id="threeNoteChords">
            <transition mode="out-in">
            <div class="howToPlay" v-if="!playMode">
                <h1>Three Note Chords</h1>
                <h2>How to Play</h2>
                <p>Once you click start, we'll generate a new chord. You then have 5 seconds to play the correct chord on your instrument.</p>
                <p>It's self-scoring, so you only cheat yourself!</p>
                <button @click="readyUp">Start</button>
            </div>
            <div class="theGame" v-else>
                <div class="chordSection">
                    <p>Chord {{ questionNumber }}/40</p>
                    <div class="chord">{{ currentChord }}</div>
                </div>
                <transition mode="out-in">
                    <div class="countdown" v-if="!answerActive">
                        <p>Answer In:</p>
                        <div class="chord">{{ countdown }}</div>
                    </div>
                    <div class="answer" v-else>
                        <div class="chord">{{ currentAnswer }}</div>
                        <div class="nextButtons">
                            <button class="rightAnswer" @click="rightAnswer"><font-awesome-icon :icon="['fas', 'check']" /></button>
                            <button class="wrongAnswer" @click="wrongAnswer">&times;</button>
                        </div>
                    </div>
                </transition>
                <div class="scoreSection">
                    <p>Current Score:</p>
                    <div class="score">{{ rightScore }} - {{ wrongScore }}</div>
                </div>
            </div>
            </transition>
        </div>
        <the-footer></the-footer>
</template>

<script>
export default {
    data() {
        return {
            playMode: false,
            currentChord: "Eb7",
            currentAnswer: "Eb Db G",
            answerActive: false,
            countdown: 5,
            rightScore: 0,
            wrongScore: 0,
            questionNumber: 1,
        }
    },
    methods: {
        readyUp() {
            this.playMode = true;
            setTimeout(() => {
                this.countdown--;
            }, 2000);
        },
        rightAnswer() {
            this.rightScore ++
            this.questionNumber ++
        },
        wrongAnswer() {
            this.wrongScore ++
            this.questionNumber ++
        }
    },
    watch: {
        countdown: {
            handler(value) {
                    if (value > 0) {
                        setTimeout(() => {
                            this.countdown--;
                        }, 1000);
                    } else {
                        this.answerActive = true;
                    }
            },
        },
        questionNumber: {
            handler(value) {
                if (value < 40) {
                    this.answerActive = false;
                    this.countdown = 6;
                    console.log(this.activeAnswer);
                }
            }
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
    margin: 40px auto;
}

.howToPlay, .countdown, .scoreSection, .answer, .chordSection {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.howToPlay {
    button {
        color: $gold;
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

.theGame {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    flex-grow: 1;

    p {
        font-weight: 700;
        font-size: 1.17em;
    }

.chord {
    font-family: $primaryFont;
    font-weight: 900;
    font-size: 64px;
}

.score {
    font-family: $primaryFont;
    font-weight: 700;
    font-size: 36px;
}

}

.v-enter-from, .v-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
.v-enter-active, .v-leave-active {
  transition: all 0.3s ease-out;
}
.v-enter-to, .v-leave-from {
  opacity: 1;
  transform: translateY(0);  
}

p {
    color: black;
}

.nextButtons {
    margin-top: 40px;
    width: 300px;
    display: flex;
    justify-content: space-between;
}

.rightAnswer, .wrongAnswer {
    border-radius: 50%;
    border: 0;
    background: $purple;
    color: $white;
    height: 100px;
    width: 100px;
    font-weight: 900;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        color: $purple;
        background: $gold;
        cursor: pointer;
    }
}

.rightAnswer {
    font-size: 48px;
}

.wrongAnswer {
    font-size: 72px;
}
</style>