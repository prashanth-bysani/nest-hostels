<template>
    <PGView :srcs="pgData.images" :pgInfo="pgData.pgInfo"
    :map-url="pgData.location" />
</template>

<script setup>
import PGView from '@/components/pgview/PGView.vue';
const pgData = {
    title: 'Nest Co Space',
    images: ['https://cdn.vuetifyjs.com/images/cards/docks.jpg', 'https://cdn.vuetifyjs.com/images/cards/hotel.jpg'],
    pgInfo: {
        name: 'NEST CO-SPACE',
        caption: 'Home away from home',
        type: "CoLive",
        roomTypes: ['Single share', 'Double Share', 'Triple Share'],
        ammenities: [
            '24/7 CCTV Surveillance & Lift',
            'Free Wi-Fi (Separate Routers for each floor)',
            'Drinking water dispensers and refrigerators for each floor',
            'Three times homely food (South Indian and North Indian)',
            'Common Laundery area',
            'Daily room cleaning'
        ]
    },
    location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.53229875661!2d78.30933447535732!3d17.434218801453927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93bd1667d709%3A0x20aae2b9a39a730a!2sNest%20Co-Spaces!5e0!3m2!1sen!2sin!4v1737210633216!5m2!1sen!2sin" width="400" height="300" style="border:0;'
};
</script>
