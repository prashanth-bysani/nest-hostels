<template>
    <div class="hostel-page">
      <div class="hostel-header">
        <h1>{{ hostel.name }}</h1>
        <p>{{ hostel.tagline }}</p>
        <p><strong>Location:</strong> {{ hostel.location }}</p>
      </div>
      <section class="about">
        <h2>About {{ hostel.name }}</h2>
        <p>{{ hostel.about }}</p>
      </section>
      <section class="accommodation">
        <h2>Accommodation</h2>
        <ul>
          <li v-for="room in hostel.accommodation" :key="room.type">
            <h3>{{ room.type }}</h3>
            <p>{{ room.description }}</p>
            <p><strong>Price:</strong> {{ room.price }}</p>
          </li>
        </ul>
      </section>
      <section class="amenities">
        <h2>Amenities & Services</h2>
        <ul>
          <li v-for="amenity in hostel.amenities" :key="amenity">{{ amenity }}</li>
        </ul>
      </section>
      <section class="social">
        <h2>Social & Common Spaces</h2>
        <p>{{ hostel.socialSpaceDescription }}</p>
      </section>
      <section class="location">
        <h2>Location & Nearby Attractions</h2>
        <p>{{ hostel.locationDescription }}</p>
      </section>
      <!-- <section class="reviews">
        <h2>Guest Reviews</h2>
        <Reviews :reviews="hostel.reviews" />
      </section> -->
      <section class="booking">
        <h2>Book Your Stay</h2>
        <p><strong>Check-in:</strong> {{ hostel.checkIn }} <strong>Check-out:</strong> {{ hostel.checkOut }}</p>
        <a :href="hostel.bookingLink" class="booking-link">Book Now</a>
      </section>
      <!-- <PhotoGallery :images="hostel.photos" /> -->
    </div>
  </template>
  <script>
//   import Reviews from '@/components/Reviews.vue';
//   import PhotoGallery from '@/components/PhotoGallery.vue';
  export default {
    name: 'HostelPage',
    // components: { Reviews, PhotoGallery },
    data() {
      return {
        hostel: {
          name: 'Backpacker’s Haven',
          tagline: 'Your home away from home.',
          location: 'Central City, Downtown',
          about: 'A welcoming space for backpackers and travelers looking for adventure.',
          accommodation: [
            { type: 'Dormitory', description: 'Shared rooms with comfortable bunks.', price: '$20/night' },
            { type: 'Private Room', description: 'Private rooms for solo travelers or couples.', price: '$50/night' }
          ],
          amenities: ['Free Wi-Fi', 'Laundry', '24/7 Reception', 'Free Breakfast'],
          socialSpaceDescription: 'A lively common room with a bar, games, and a cozy lounge area.',
          locationDescription: 'Located in the heart of downtown, within walking distance of shops, restaurants, and major attractions.',
          reviews: [
            { name: 'John Doe', comment: 'Fantastic place with a great vibe!', rating: 5 },
            { name: 'Jane Smith', comment: 'Friendly staff and clean rooms.', rating: 4 }
          ],
          checkIn: '2:00 PM',
          checkOut: '11:00 AM',
          bookingLink: 'https://www.examplebookinglink.com',
          photos: [
            'https://www.example.com/photo1.jpg',
            'https://www.example.com/photo2.jpg',
            'https://www.example.com/photo3.jpg'
          ]
        }
      };
    }
  };
  </script>
  <style scoped>
  /* Styling for the hostel page */
  .hostel-header {
    text-align: center;
    margin-bottom: 20px;
  }
  .about,
  .accommodation,
  .amenities,
  .social,
  .location,
  .reviews,
  .booking {
    margin: 20px 0;
  }
  h2 {
    font-size: 1.8em;
    margin-bottom: 10px;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  li {
    margin-bottom: 10px;
  }
  .booking-link {
    display: inline-block;
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    text-decoration: none;
    border-radius: 5px;
  }
  .booking-link:hover {
    background-color: #0056b3;
  }
  </style>