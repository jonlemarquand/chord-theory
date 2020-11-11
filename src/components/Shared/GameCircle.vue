<template>
    <router-link :to="`/${this.toLink}`">
    <div class="gameCircleWrapper" tabindex="1">
    <div class="gameCircle" :class="{ notYet: !this.gameActive }">
        <p v-if="!this.gameActive">Coming Soon</p>
    </div>
        <div class="circleLabel">
            <slot></slot>
        </div>
    </div>
    </router-link>
</template>

<script>
export default {
    props: {
        isGameActive: Boolean,
        gameLink: String
    },
    data() {
        return {
            gameActive: this.isGameActive,
        }
    },
    computed: {
        toLink() {
            if (this.gameLink) {
                return this.gameLink
            } else {
                return "games"
            }
        }
    }
}
</script>

<style lang="scss" scoped>

.gameCircleWrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 30px;
}

.gameCircle {
    border: 8px solid $purple;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
        color: $grey;
        text-transform: uppercase;
        font-size: 1.25em;
        font-weight: 900;
        text-align: center;
    }

    &:hover {
        border: 8px solid $gold;
        cursor: pointer;
        + .circleLabel {
            color: $gold;
        }
    }
}

.notYet {
    border: 8px solid $grey;
    &:hover {
        border-color: $grey;
        cursor: auto;
        + .circleLabel {
        color: $grey;
        }
    }
    + .circleLabel {
        color: $grey;
    }
}

a {
    text-decoration: none;
}

.circleLabel {
    margin-top: 20px;
    font-size: 1.1em;
    font-weight: 700;
    color: $purple;
}


</style>