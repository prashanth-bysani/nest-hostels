<template>
  <v-container class="transparent-container">
    <v-row justify="center">
      <h1 style="text-align:center;">{{ pgInfo.name }}</h1>
    </v-row>
    <v-row justify="center">
      <p style="text-align:center;">{{ pgInfo.caption }}</p>
    </v-row>

    <v-row class="mt-8">
      <v-col cols="12" sm="12" md="6" class="pl-16">
        <h4>Accommodation Type</h4>
        <p>{{ pgInfo.type }}</p>
        <br />
        <h4>Types of Rooms Available</h4>
        <p v-for="roomType in pgInfo.roomTypes" :key="roomType">{{ roomType }}</p>
      </v-col>

      <v-col sm="12" md="6" class="pl-16">
        <h4>Ammenities</h4>
        <ul>
          <li v-for="ammenite in pgInfo.ammenities" :key="ammenite"><span class="ck-list-bogus-paragraph">{{ ammenite
              }}</span></li>
        </ul>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="12" sm="12" md="6">
        <v-carousel show-arrows="hover" hide-delimiters>
          <v-carousel-item v-for="src in srcs" :src="src" :key="src"></v-carousel-item>
        </v-carousel>
      </v-col>
      <v-col cols="12" sm="12" md="6" align-self="center">
        <iframe width="100%" height="400" frameborder="0" style="border:0" :src="mapUrl" allowfullscreen></iframe>
      </v-col>
    </v-row>

  </v-container>
</template>

<script setup>
const props = defineProps({ srcs: Array, pgInfo: Object, mapUrl: String })
</script>

<style scoped>
.pginfo-card {
  margin-top: 20px;
  width: 100%;
}
</style>
