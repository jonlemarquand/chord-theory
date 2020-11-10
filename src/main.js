import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

//Import components here
import GamesList from './components/GamesList/GamesList';
import Homescreen from './components/Homescreen/Homescreen';
import ThreeNoteChords from './components/Games/ThreeNoteChords/ThreeNoteChords';


const app = createApp(App);

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
