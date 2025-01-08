<template>
  <v-app class="home-container">
    <v-app-bar app class="transparent-bg" flat>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="d-flex align-center">
        <div class="d-flex">
          <v-img src="../../nest-groups.png" class="pr-8" :width="54" cover></v-img>
          <p class="pl-4 text-h4 font-weight-medium">NEST GROUPS</p>
        </div>
      </v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" floating class="transparent-bg">
      <v-list>
        <v-list-item prepend-icon="mdi-home" title="Our Hospitalities"
          @click="router.push({ name: 'home' })"></v-list-item>
      </v-list>

      <v-list density="compact">
        <v-list-item v-for="key in Object.keys(pgData)" :title="pgData[key].title" :value="key"
          @click="router.push({ name: key })"></v-list-item>
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
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>

import { ref } from 'vue';
import router from '@/router';
let drawer = ref(false);
const pgData = {
  'womens': {
    title: "Nest Women's Hostel"
  },
  'cohome': {
    title: 'Nest Co Home',
  },
  'colife': {
    title: 'Nest Co Life',
  },
  'cospace': {
    title: 'Nest Co Space',
  },
  'vanitha': {
    title: 'Nest Vanitha',
  }
};
</script>
<style scoped>
.transparent-bg {
  background-color: transparent !important;
  color: white !important;
}

.home-container {
  background: url('@/assets/background.png') no-repeat center center fixed;
  background-size: cover;
  color: white;
}
</style>