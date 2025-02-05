<template>
    <PGView :srcs="pgData.images" :pgInfo="pgData.pgInfo" :map-url="pgData.location" />
</template>

<script setup>
import PGView from '@/components/pgview/PGView.vue';
const pgData = {
    title: 'Nest Vanitha',
    pgInfo: {
        name: 'NEST VANITHA',
        caption: 'Home away from home',
        type: "Women's",
        roomTypes: ['Single share', 'Double Share', 'Triple Share'],
        ammenities: [
            '24/7 CCTV Surveillance & Lift',
            'Free Wi-Fi (Separate Routers for each floor)',
            'Drinking water dispensers and refrigerators for each floor',
            'Three times homely food (South Indian and North Indian)',
            'Common Laundry area',
            'Daily room cleaning'
        ]
    },
    images: ['https://cdn.vuetifyjs.com/images/cards/hotel.jpg', 'https://cdn.vuetifyjs.com/images/cards/docks.jpg'],
    location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.2907779589873!2d78.38509297581189!3d17.445791301118717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91e18b35c4e3%3A0x9b64ef3a8856b759!2sNest%20Vanitha!5e0!3m2!1sen!2sin!4v1710004629479!5m2!1sen!2sin" width="400" height="300" style="border:0;'
};
</script>
