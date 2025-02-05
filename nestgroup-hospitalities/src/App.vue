<template>
  <v-app class="home-container">
    <v-app-bar app class="transparent-bg" flat>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="d-flex align-center">
        <div class="d-flex" @click="navigateTo('home')">
          <v-img
            src="./../public/nest-groups-bg.png"
            class="pr-8 cursor"
            :width="54"
            cover
            rounded=""
          ></v-img>
          <p class="pl-4 text-h4 font-weight-medium">NEST GROUPS</p>
        </div>
      </v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" :temporary="!display.mdAndUp.value" :width="drawerWidth" temporary class="transparent-bg override-bg">
      <!-- Close Button -->
      <div class="d-flex justify-end pa-2">
        <v-btn size="12" icon @click="drawer = false">
          <v-icon size="12">mdi-close</v-icon>
        </v-btn>
      </div>

      <!-- Navigation List -->
      <v-list>
        <v-list-item
          prepend-icon="mdi-home"
          title="Our Hospitalities"
          @click="navigateTo('home')"
        ></v-list-item>
      </v-list>

      <v-list density="compact">
        <v-list-item
          v-for="key in Object.keys(pgData)"
          :key="key"
          :title="pgData[key].title"
          :value="key"
          @click="navigateTo(key)"
        ></v-list-item>
      </v-list>

      <!-- Footer Items -->
      <template v-slot:append>
        <v-list>
          <v-list-item
            prepend-icon="mdi-information"
            title="About Us"
            @click="navigateTo('aboutus')"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-phone"
            title="Contact Us"
            @click="navigateTo('contact')"
          ></v-list-item>
        </v-list>
      </template>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from "vue";
import router from "@/router";
import { useDisplay } from "vuetify"; // Vuetify's responsive helper

let drawer = ref(false);
const display = useDisplay(); // Vuetify's built-in display object

// Compute dynamic width based on screen size
const drawerWidth = computed(() => {
  return display.mdAndUp.value ? 300 : "100vw"; // Full screen on mobile, 300px width on desktop
});

const pgData = {
  womens: {
    title: "Nest Women's Hostel",
  },
  cohome: {
    title: "Nest Co Home",
  },
  colife: {
    title: "Nest Co Life",
  },
  cospace: {
    title: "Nest Co Space",
  },
  vanitha: {
    title: "Nest Vanitha",
  },
};

const navigateTo = (pageName) => {
  router.push({ name: pageName });
};
</script>
<style scoped>
.transparent-bg {
  background-color: transparent !important;
  color: white !important;
}

.override-bg {
  background-color: #00000070 !important;
  border-radius: 6px;
}

@media (max-width: 960px) {
  .override-bg {
    width: 100vw !important; /* Force full screen on smaller screens */
  }
}

.home-container {
  background: url("@/assets/background.png") no-repeat center center fixed;
  background-size: cover;
  color: white;
}
</style>
<style>
.transparent-container {
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black */
  border-radius: 10px;
  padding: 20px;
}
</style>
