<template>
        <nav-bar></nav-bar>
        <div id="threeNoteChords">
            <transition mode="out-in">
            <div class="howToPlay" v-if="playMode === 'howTo'">
                <h1>Three Note Chords</h1>
                <h2>How to Play</h2>
                <p>Once you click start, we'll generate a new chord. You then have 5 seconds to play the correct chord on your instrument.</p>
                <p>It's self-scoring, so you only cheat yourself!</p>
                <button @click="readyUp">Start</button>
            </div>
            <div class="theGame" v-else-if="playMode === 'play'">
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
            <div class="theAnswers" v-else-if="playMode === 'answer'">
                <h1>Three Note Chords</h1>
                <h2>Results</h2>
                <p class="chord">You got {{rightScore}}/40</p>
                <p>Here's how you answered:</p>
                <ul class="results-grid">
                    <li v-for="answer in this.answerList" :key="answer.answerNo">
                        {{answer.answerNo}}. {{answer.answerChord}} - {{answer.answerNotes}}
                    </li>
                </ul>
                <button @click="readyUp">Play Again?</button>
            </div>
            </transition>
        </div>
        <the-footer></the-footer>
</template>

<script>
export default {
    data() {
        return {
            playMode: "howTo",
            currentChord: "Eb7",
            currentAnswer: "Eb Db G",
            answerActive: false,
            countdown: 5,
            rightScore: 0,
            wrongScore: 0,
            questionNumber: 1,
            chords: [
                { 
                    name: "Dm7", 
                    chord: "D F C"
                },
                {
                    name: "Ebm7",
                    chord: "Eb Gb Db"
                },
                {
                    name: "D#m7",
                    chord: "D# F# C#"
                },
                {
                    name: "Em7",
                    chord: "E G D"
                },
                {
                    name: "Fm7",
                    chord: "F Ab Eb"
                },
                {
                    name: "F#m7",
                    chord: "F# A E"
                },
                {
                    name: "Gm7",
                    chord: "G Bb F"
                },
                {
                    name: "G#m7",
                    chord: "G# B F#"
                },
                {
                    name: "Abm7",
                    chord: "Ab B Gb"
                },
                {
                    name: "Am7",
                    chord: "A C G"
                },
                {
                    name: "A#m7",
                    chord: "A# C# G#"
                },
                {
                    name: "Bbm7",
                    chord: "Bb Db Ab"
                },
                {
                    name: "Bm7",
                    chord: "B D A"
                },
                {
                    name: "Cm7",
                    chord: "C Eb Bb"
                },
                {
                    name: "C#m7",
                    chord: "C# E B"
                },
                {
                    name: "G7",
                    chord: "G F B"
                },
                {
                    name: "G#7",
                    chord: "G# F# C"
                },
                {
                    name: "Ab7",
                    chord: "Ab Gb C"
                },
                {
                    name: "A7",
                    chord: "A G C#"
                },
                {
                    name: "Bb7",
                    chord: "Bb Ab D"
                },
                {
                    name: "B7",
                    chord: "B A Eb"
                },
                {
                    name: "C7",
                    chord: "C Bb E"
                },
                {
                    name: "C#7",
                    chord: "C# B F"
                },
                {
                    name: "Db7",
                    chord: "Db B F"
                },
                {
                    name: "D7",
                    chord: "D C F#"
                },
                {
                    name: "D#7",
                    chord: "D# C# G"
                },
                {
                    name: "Eb7",
                    chord: "Eb Db G"
                },
                {
                    name: "E7",
                    chord: "E D Ab"
                },
                {
                    name: "F7",
                    chord: "F Eb A"
                },
                {
                    name: "F#7",
                    chord: "F# E Bb"
                },
                {
                    name: "CMaj7",
                    chord: "C E B"
                },
                {
                    name: "C#Maj7",
                    chord: "C# F C"
                },
                {
                    name: "DbMaj7",
                    chord: "Db F C"
                },
                {
                    name: "DMaj7",
                    chord: "D F# C#"
                },
                {
                    name: "EbMaj7",
                    chord: "Eb G D"
                },
                {
                    name: "EMaj7",
                    chord: "E G# Eb"
                },
                {
                    name: "FMaj7",
                    chord: "F A E"
                },
                {
                    name: "F#Maj7",
                    chord: "F# Bb F"
                },
                {
                    name: "GbMaj7",
                    chord: "Gb Bb F"
                },
                {
                    name: "GMaj7",
                    chord: "G B F#"
                },
                {
                    name: "G#Maj7",
                    chord: "G# C G"
                },
                {
                    name: "AbMaj7",
                    chord: "Ab C G"
                },
                {
                    name: "AMaj7",
                    chord: "A C# Ab"
                },
                {
                    name: "BbMaj7",
                    chord: "Bb D A"
                },
                {
                    name: "BMaj7",
                    chord: "B Eb Bb"
                }
            ],
            answerList: [],
        }
    },
    methods: {
        addAnswertoList(theAnswer) {
            const newAnswer = {
                answerNo: this.questionNumber,
                answerChord: this.currentChord,
                answerNotes: this.currentAnswer,
                answerAnswer: theAnswer
            }
            console.log(newAnswer)
            this.answerList.push(newAnswer)
        },
        readyUp() {
            this.playMode = "play";
            setTimeout(() => {
                this.countdown--;
            }, 2000);
        },
        rightAnswer() {
            this.addAnswertoList(true)
            this.rightScore ++
            this.questionNumber ++
        },
        wrongAnswer() {
            this.addAnswertoList(false)
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
                if (value > 2) {
                    this.playMode = "answer"
                }
                if (value <= 2) {
                    const randQuestion = Math.floor(Math.random() * (36 - 1) + 1);
                    this.countdown = 6;
                    this.currentChord = this.chords[randQuestion]["name"];
                    this.currentAnswer = this.chords[randQuestion]["chord"];
                    this.answerActive = false;
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

.howToPlay, .theAnswers {
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
.score {
    font-family: $primaryFont;
    font-weight: 700;
    font-size: 36px;
}
}
.chord {
    font-family: $primaryFont;
    font-weight: 900;
    font-size: 64px;
}


.theAnswers {
    display: flex;
    flex-direction: column;
    align-items: center;
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