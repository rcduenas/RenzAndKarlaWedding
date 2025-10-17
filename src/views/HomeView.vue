<template>
    <div class="pa-0">
        <!-- 🌸 Hero Section -->
        <div class="hero-container">
            <v-img src="/images/Home.jpg" height="80vh" cover class="d-flex align-end justify-center">
                <div class="text-center text-white">
                    <div class="font-weight-bold"
                        style="font-family: 'Great Vibes', cursive; font-size: 8rem; text-shadow: 1px 1px 3px rgba(0,0,0,0.5);">
                        Renz & Karla
                    </div>
                    <p class="text-h5 mb-6"
                        style="font-family: 'Playfair Display', serif; color: white; text-shadow: 1px 1px 3px rgba(0,0,0,0.5);">
                        December 12, 2025 • Tagaytay
                    </p>
                    <v-btn color="secondary" size="large" to="/rsvp" elevation="2">RSVP Now</v-btn>
                </div>
                <v-row class="justify-center mt-8" dense>
                    <v-col v-for="(value, key, i) in countdown" :key="key" cols="6" sm="1"
                        class="d-flex flex-column align-center">
                        <v-card class="count-box d-flex align-center justify-center pa-2 bg-primary">
                            <span class="text-h4 font-weight-bold">{{ value.toString().padStart(2, '0') }}</span>
                        </v-card>
                        <div class="text-body-2 mt-2 font-weight-medium">{{ key }}</div>
                        <div v-if="i < Object.keys(countdown).length - 1" class="divider-dot">:</div>
                    </v-col>
                </v-row>
            </v-img>
        </div>

        <!-- 🌿 Countdown Section -->
        <v-container class="text-center py-16">
        </v-container>

        <!-- 🌸 Quote Section -->
        <v-container class="py-16 text-center bg-light">
            <p class="text-h6 font-italic mb-4">
                “Once in a while, right in the middle of an ordinary life, love gives us a fairy tale.”
            </p>
            <v-divider class="my-6" />
            <v-btn color="primary" variant="outlined" to="/our-story">Read Our Story</v-btn>
        </v-container>
    </div>
    <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap" rel="stylesheet">
    </link>
</template>
<script setup>
import { ref, onMounted } from 'vue'

const weddingDate = new Date('2025-12-12T00:00:00')
const countdown = ref({ Days: 0, Hours: 0, Minutes: 0, Seconds: 0 })

const updateCountdown = () => {
    const now = new Date()
    const diff = weddingDate - now

    if (diff <= 0) {
        countdown.value = { Days: 0, Hours: 0, Minutes: 0, Seconds: 0 }
        return
    }

    countdown.value = {
        Days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        Hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        Minutes: Math.floor((diff / (1000 * 60)) % 60),
        Seconds: Math.floor((diff / 1000) % 60),
    }
}

onMounted(() => {
    updateCountdown()
    setInterval(updateCountdown, 1000)
})
</script>

<style scoped>
.hero-container {
    position: relative;
}

.overlay::after {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
}

.bg-light {
    background-color: #faf9f7;
}
</style>
