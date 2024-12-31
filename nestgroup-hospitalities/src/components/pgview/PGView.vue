<template>
  <v-container class="fill-height">
    <v-carousel show-arrows="hover" hide-delimiters progress="primary">
      <v-carousel-item v-for="src in srcs" :src="src" :key="src"></v-carousel-item>
    </v-carousel>

    <v-card class="address-card" outlined>
      <v-card-title>Address</v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12" sm="6" md="4">
            <div v-html="address"></div>
          </v-col>
          <v-col cols="12" sm="6" md="8">
            <iframe width="100%" height="300" frameborder="0" style="border:0" :src="mapUrl" allowfullscreen></iframe>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup>
const props = defineProps({ srcs: Array, address: String, mapUrl: String })
</script>

<style scoped>
.address-card {
  margin-top: 20px;
  width: 100%;
}
</style>
