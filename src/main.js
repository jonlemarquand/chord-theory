import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

//Import components here
import GamesList from './components/GamesList/GamesList';
import Homescreen from './components/Homescreen/Homescreen';
import ThreeNoteChords from './components/Games/ThreeNoteChords/ThreeNoteChords';

import TheFooter from './components/Shared/TheFooter/TheFooter';
import TheNavBar from './components/Shared/TheNavBar/TheNavBar';

const app = createApp(App);

app.component('the-footer', TheFooter);
app.component('nav-bar', TheNavBar);

const router = createRouter({
    history: createWebHistory(),
    routes: [
    {
        path: '/',
        component: Homescreen
    },
    {
        path: '/games',
        component: GamesList
    },
    {
        path: '/three-note-chords',
        component: ThreeNoteChords
    },
    ],
    linkActiveClass: 'active'
  });
  
  app.use(router);

app.mount('#app')
