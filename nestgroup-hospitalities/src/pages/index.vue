<template>
  <v-app-bar app>
    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    <v-toolbar-title class="d-flex align-center">

      <div class="d-flex">
        <v-img src="../../public/nest-group.png" class="pr-8" :width="54" cover></v-img> 
        <p class="pl-4 text-h4 font-weight-medium">Nest Hostels</p>
      </div>
    </v-toolbar-title>

  </v-app-bar>
  <v-navigation-drawer v-model="drawer" app>
    <v-list>
      <v-list-item prepend-icon="mdi-home" title="Our Hospitalities" @click="selectedPage = 'home'"></v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list density="compact">
      <v-list-item v-for="key in Object.keys(pgData)" :title="pgData[key].title" :value="key"
        @click="selectedPage = key"></v-list-item>
    </v-list>
    <template v-slot:append>
      <div class="pa-2">
        <v-list>
          <v-list-item prepend-icon="mdi-information" title="About Us" @click="selectedPage = 'about'"></v-list-item>
          <v-list-item prepend-icon="mdi-phone" title="Contact Us" @click="selectedPage = 'contact'"></v-list-item>
        </v-list>
      </div>
    </template>
  </v-navigation-drawer>
  <Home v-if="selectedPage == 'home'"></Home>
  <Womens v-else-if="selectedPage === 'nest-womens'" />
  <CoHome v-else-if="selectedPage === 'nest-cohome'" />
  <CoLife v-else-if="selectedPage === 'nest-colife'" />
  <CoSpace v-else-if="selectedPage === 'nest-cospace'" />
  <Vanitha v-else-if="selectedPage === 'nest-vanitha'" />

  <About v-else-if="selectedPage === 'about'" />
</template>

<script setup>
import CoHome from './hostels/CoHome.vue';
import Womens from './hostels/Womens.vue';
import Home from './Home.vue';
import { ref } from 'vue';
import Vanitha from './hostels/Vanitha.vue';
import About from './About.vue';
import CoLife from './hostels/CoLife.vue';
import CoSpace from './hostels/CoSpace.vue';
let selectedPage = ref('home');
let drawer = ref(false);
const pgData = {
  'nest-womens': {
    title: "Nest Women's Hostel"
  },
  'nest-cohome': {
    title: 'Nest Co Home',
  },
  'nest-colife': {
    title: 'Nest Co Life',
  },
  'nest-cospace': {
    title: 'Nest Co Space',
  },
  'nest-vanitha': {
    title: 'Nest Vanitha',
  }
};
</script>
