import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import App from './App.vue'

//Import components here
import GamesList from './components/GamesList/GamesList';
import Homescreen from './components/Homescreen/Homescreen';
import ThreeNoteChords from './components/Games/ThreeNoteChords/ThreeNoteChords';

import TheFooter from './components/Shared/TheFooter/TheFooter';
import TheNavBar from './components/Shared/TheNavBar/TheNavBar';

const app = createApp(App);

library.add(faCheck)

app.component('font-awesome-icon', FontAwesomeIcon)

app.component('the-footer', TheFooter);
app.component('nav-bar', TheNavBar);

const router = createRouter({
    history: createWebHistory(),
    routes: [
    {
        path: '/',
        component: Homescreen,
        meta: {
            title: 'Chord Theory'
        }
    },
    {
        path: '/games',
        component: GamesList,
        meta: {
            title: 'Games | Chord Theory'
        }
    },
    {
        path: '/three-note-chords',
        component: ThreeNoteChords,
        meta: {
            title: 'Three Note Chords | Chord Theory'
        }
    },
    ],
    linkActiveClass: 'active'
  });
  
  app.use(router);

app.mount('#app')
