<template>
    <div class="bg-primary">
        <div>
            <v-img :src="$vuetify.display.mdAndUp ? homeImage1 : homeImage" width="100wh"
                :cover="$vuetify.display.mdAndUp ? true : false" class="d-flex align-end justify-center">
                <v-img :src="monogram" width="100wh" class="mb-auto" />
                <!-- <div class="text-center text-white">
                    <v-btn color="secondary" size="large" to="/rsvp" elevation="2">RSVP Now</v-btn>
                </div>
                <v-row class="justify-center mt-8" dense>
                    <v-col v-for="(value, key, i) in countdown" :key="key" cols="3" sm="1"
                        class="d-flex flex-column align-center">
                        <v-card class="count-box d-flex align-center justify-center pa-2 bg-primary">
                            <span class="text-h4 font-weight-bold">{{ value.toString().padStart(2, '0') }}</span>
                        </v-card>
                        <div class="text-body-2 mt-2 font-weight-medium">{{ key }}</div>
                        <div v-if="i < Object.keys(countdown).length - 1" class="divider-dot">:</div>
                    </v-col>
                </v-row> -->
            </v-img>
        </div>

        <!-- 🌿 Countdown Section -->
        <div class="pa-10 text-center">
            <div class="py-3">WELCOME TO OUR WEDDING WEBSITE</div>
            <div class="py-3">We can’t wait to celebrate our special day with you. Feel free to have fun to take a look
                around. Thank
                you for the love and support. We are so excited to share this day with you!</div>
            <div class="py-3">As much as we love to invite everyone, we are only inviting you. We have chosen the people
                close to our
                hearts. We would not want anyone to lose a seat and want everyone to be able to enjoy a sumptuous meal.
            </div>
        </div>

        <v-carousel>
            <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" cover></v-carousel-item>
            <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg" cover></v-carousel-item>
            <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" cover></v-carousel-item>
        </v-carousel>

        <!-- 🌸 Quote Section -->
        <div class="mt-10 px-10 text-center">
            <v-card class="bg-white text-justify">
                <div class="pa-3">Our Love Story</div>
                <div class="pa-3">A Love That Crossed Boundaries In the heart of 2018, in the bustling digital landscape
                    of a dating app, two souls connected amidst the sea of profiles and messages. He was a Tarlaqueño,
                    juggling the roles of a security personnel and financial advisor in Parañaque. She was a Batangueña,
                    on the cusp of graduating college and navigating her internship in Manila. Their encounter was
                    serendipitous—a spark in the vast expanse of online dating.</div>
                <div class="pa-3">Their initial interactions were casual, filled with playful banter and shared
                    interests. He, with his goofy humor, quickly drew out her shy smile. She, in turn, brought a calming
                    presence to their conversations. They discovered a rhythm in their exchanges, a sense of comfort
                    that made their budding friendship feel effortless. </div>
                <div class="pa-3">Determined to see if their online connection could translate into real-life chemistry,
                    they decided to meet in person. The first meeting was filled with nervous laughter and tentative
                    glances, but their ease with each other was undeniable. Their relationship blossomed quickly, with
                    shared moments that turned into memories, laughter that grew into affection.</div>
                <div class="pa-3">As her birthday approached later that year, he decided it was the perfect moment to
                    take their relationship to the next level. With a heart full of hope and a touch of nervousness, he
                    asked her to be his girlfriend. The proposal was simple but sincere, marked by a heartfelt promise
                    of his commitment and love.</div>
                <div class="pa-3">Their journey together was filled with dreams and challenges. He pursued a career with
                    the Coast Guard, undergoing months of rigorous training. The physical and emotional distance was
                    tough, but she stood by him, a steadfast source of support. Knowing about the scarcity of supplies
                    at the training center, she found ways to send him food and essentials, bridging the gap between
                    their worlds with each package and letter—what they referred to as “take life”. </div>
                <div class="pa-3">Her patience during this period was a testament to her love and dedication. Meanwhile,
                    she was also on her own path, trying to carve out a future in a career that would fulfill her
                    ambitions. His support was unwavering, as he encouraged her through the uncertainties and decisions
                    that shaped her journey.</div>
                <div class="pa-3">Their love story was marked by these trials and triumphs, each phase strengthening
                    their bond. As he completed his training and graduated, they celebrated not only his achievement but
                    their resilience as a couple. They worked together towards their dreams and the shared vision of a
                    future built on mutual love and respect, and supported by their fur babies— Coastal, Sinigang, Milky
                    and Tingku.
                    When he decided it was time to propose, he wanted to make it a moment that would honor their shared
                    journey and the support they received from their families. With this in his mind, he approached her
                    family to ask for their blessing, revealing his plans and the love he held for their daughter.
                </div>
            </v-card>
        </div>
        <div>
            <div>Sponsors</div>
            <v-img :src="entourage" width="100wh" rounded="lg" class="ma-10" />
            <v-img :src="entourage" width="100wh" rounded="lg" class="ma-10" />
        </div>
        <div>
            <div>Dress Code</div>
            <v-img :src="dressCode" width="100wh" rounded="lg" class="ma-10" />
            <v-img :src="dressCode" width="100wh" rounded="lg" class="ma-10" />
        </div>
        <div>
            <div>Venue</div>
            <v-carousel>
                <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" cover></v-carousel-item>
                <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg" cover></v-carousel-item>
                <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" cover></v-carousel-item>
            </v-carousel>
        </div>
        <div>
            <div>Timeline</div>
            <v-img :src="timeline" width="100wh" rounded="lg" class="ma-10" />
        </div>
        <div>
            <div>Your Questions, Answered</div>
            <v-expansion-panels>
                <v-expansion-panel title="Bakit ang pogi ni Renz?" text="Baka Renz na yan">
                </v-expansion-panel>
                <v-expansion-panel title="Bakit ang pogi ni Renz?" text="Baka Renz na yan">
                </v-expansion-panel>
                <v-expansion-panel title="Bakit ang pogi ni Renz?" text="Baka Renz na yan">
                </v-expansion-panel>
                <v-expansion-panel title="Bakit ang pogi ni Renz?" text="Baka Renz na yan">
                </v-expansion-panel>
                <v-expansion-panel title="Bakit ang pogi ni Renz?" text="Baka Renz na yan">
                </v-expansion-panel>
                <v-expansion-panel title="Bakit ang pogi ni Renz?" text="Baka Renz na yan">
                </v-expansion-panel>
                <v-expansion-panel title="Bakit ang pogi ni Renz?" text="Baka Renz na yan">
                </v-expansion-panel>
                <v-expansion-panel title="Bakit ang pogi ni Renz?" text="Baka Renz na yan">
                </v-expansion-panel>
                <v-expansion-panel title="Bakit ang pogi ni Renz?" text="Baka Renz na yan">
                </v-expansion-panel>
            </v-expansion-panels>
        </div>
    </div>
    <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap" rel="stylesheet">
    </link>
</template>
<script setup>
import homeImage from '../assets/images/Home.jpg'
import homeImage1 from '../assets/images/Home1.jpg'
import monogram from '../assets/images/Monogram.png'
import entourage from '../assets/images/Entourage1.webp'
import dressCode from '../assets/images/Dress Code.jpg'
import timeline from '../assets/images/Timeline.webp'
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
