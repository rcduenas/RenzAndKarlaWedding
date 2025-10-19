<template>
    <div class="bg-primary">
        <div>
            <v-img :src="$vuetify.display.mdAndUp ? homeImage1 : homeImage" width="100wh"
                :cover="$vuetify.display.mdAndUp ? true : false" class="d-flex align-end justify-center">
                <v-img :src="monogram" width="100wh" />
                <div class="text-center text-white">
                    <v-btn color="secondary" size="large" to="/rsvp" elevation="2">RSVP Now</v-btn>
                </div>
                <v-row class="justify-center mt-4" dense>
                    <v-col v-for="(value, key, i) in countdown" :key="key" cols="2" sm="1"
                        class="d-flex flex-column align-center">
                        <v-card class="count-box d-flex align-center justify-center pa-2 bg-secondary">
                            <span class="text-h4 font-weight-bold">{{ value.toString().padStart(2, '0') }}</span>
                        </v-card>
                        <div class="text-body-2 mt-2 font-weight-meduim"
                            style="color: black; text-shadow: -1px -1px 0 white, 1px -1px 0 white, -1px  1px 0 white, 1px  1px 0 white;">
                            {{ key }}
                        </div>
                        <div v-if="i < Object.keys(countdown).length - 1" class="divider-dot">:</div>
                    </v-col>
                </v-row>
            </v-img>
        </div>

        <!-- 🌿 Countdown Section -->
        <div class="pa-4 text-center">
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
        <div class="mt-4 px-4 text-center">
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
        <div class="text-center ma-4">
            <div style="font-family: 'Great Vibes', cursive; font-size: 2rem;">
                Sponsors</div>
            <v-img :src="entourage" width="100wh" rounded="lg" class="my-4" />
            <v-img :src="entourage" width="100wh" rounded="lg" />
        </div>
        <div class="text-center ma-4">
            <div style="font-family: 'Great Vibes', cursive; font-size: 2rem;">Dress Code</div>
            <v-img :src="dressCode" width="100wh" rounded="lg" class="my-4" />
            <v-img :src="dressCode" width="100wh" rounded="lg" />
        </div>
        <div class="text-center ma-4">
            <div style="font-family: 'Great Vibes', cursive; font-size: 2rem;">Venue</div>
            <v-carousel>
                <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" cover></v-carousel-item>
                <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg" cover></v-carousel-item>
                <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" cover></v-carousel-item>
            </v-carousel>
        </div>
        <div class="text-center ma-4">
            <div style="font-family: 'Great Vibes', cursive; font-size: 2rem;">Timeline</div>
            <v-img :src="timeline" width="100wh" rounded="lg" class="my-4" />
        </div>
        <div class="ma-4">
            <div class="text-center" style="font-family: 'Great Vibes', cursive; font-size: 2rem;">Your Questions,
                Answered</div>
            <v-expansion-panels>
                <v-expansion-panel class="my-1" title="RSVP"
                    text="As much as we would love to accommodate all our friends and family, we have a limited number of guests. Please understand that this event is strictly by invitation only. Guests not found on the guest list provided will not be allowed to enter. \nThe favor of a reply is required on or before November 20, 2025." />
                <v-expansion-panel class="my-1" title="Is there parking space available for my car?"
                    text="Yes, there is parking available for everyone at the venue. However, please take note that it is first come, first served basis, so you might not want to be late." />
                <v-expansion-panel class="my-1"
                    title='I said "NO" to the RSVP but I had a change of plans-I can attend now! What should I do?'>
                    <template #text>
                        <ul class="pl-4">
                            <li>Please check with us first. Unfortunately, we have a strict guest list.</li>
                            <li>Kindly inform us if your schedule clears up, so we can try to accommodate you.</li>
                            <li>If seats become available, we will let you know as soon as possible.</li>
                            <li>Please do not attend unannounced, as we may not have any available seats for you.</li>
                        </ul>
                    </template>
                </v-expansion-panel>
                <v-expansion-panel class="my-1" title="When is the appropriate time to leave?"
                    text="This event took us months to plan, and we want to celebrate it with the people that are very dear to our hearts. We want you to have fun! Celebrate with us until the end of the program!" />
                <v-expansion-panel class="my-1"
                    title="How can I help the couple have a great time during their wedding?">
                    <template #text>
                        <ul class="pl-4">
                            <li>Pray with us for favorable weather and the continuous blessings of our Lord as we enter
                                this new chapter of our lives as husband and wife.</li>
                            <li>RSVP as soon as your schedule is cleared.</li>
                            <li>Dress appropriately and follow our wedding motif.</li>
                            <li>Be on time.</li>
                            <li>Follow the seating arrangement in the reception.</li>
                            <li>Stay until the end of the program.</li>
                            <li>Join the activities and enjoy!</li>
                        </ul>
                    </template>
                </v-expansion-panel>
                <v-expansion-panel class="my-1" title='May I invite a "PLUS ONE" to the event?'
                    text="As much as we would love to accommodate all our friends and family, we have a limited number of guests.\nPlease understand that this event is strictly by invitation only. Kindly check our invitation to know the number of seats allotted for you. Guests not found on the guestlist provided will not be allowed to enter." />
                <v-expansion-panel class="my-1" title="What if I RSVP'd but cannot attend?"
                    text="We would love to have you at our wedding, but we understand that there are circumstances beyond our control. However, please let us know as soon as possible so we can reallocate your seat/s." />
                <v-expansion-panel class="my-1" title="Can I sit anywhere at the reception?"
                    text="Please don't. It took us a lot of effort and discussion to finish the seating arrangement, which is planned for everyone's convenience and preference, but there is no need to worry! You'll surely be seated with your friends or people that you have same interest with.\nOur coordinators will gladly assist you in finding your designated seat after registration. Feel free to ask them for assistance and they will gladly help you." />
                <v-expansion-panel class="my-1" title="Am I allowed to take pictures and/or videos during the ceremony?"
                    text="We request everyone to keep the ceremony camera-free. While our I Do’s are unplugged, our reception is not and definitely as a couple who loves pictures, you’ll get tons of options to take your pictures. We prepared for this event wholeheartedly." />
                <v-expansion-panel class="my-1" title='Do we really need to RSVP? We already said "YES" to the couple?'
                    text="Yes, please. We will be needing your formal RSVP to consolidate guest details and finalize the headcount for catering and seating purposes." />
            </v-expansion-panels>
        </div>
        <div class="text-center ma-4">
            <div style="font-family: 'Great Vibes', cursive; font-size: 2rem;">Prenup Photos</div>
            <v-img :src="monogram" width="100wh" class="mb-auto" />
            <v-img :src="monogram" width="100wh" class="mb-auto" />
            <v-img :src="monogram" width="100wh" class="mb-auto" />
        </div>
        <div class="text-center ma-4">
            <div style="font-family: 'Great Vibes', cursive; font-size: 2rem;">RSVP</div>
            <v-card class="bg-white text-justify pa-4">
                <v-form @submit.prevent="submitRSVP" ref="form">
                    <v-text-field v-model="form.name" label="Your Name" required></v-text-field>
                    <v-select v-model="form.attendance" :items="['Yes', 'No']" label="Will you attend?"
                        required></v-select>
                    <v-text-field v-model="form.guests" label="Number of Guests" type="number"></v-text-field>
                    <v-textarea v-model="form.message" label="Message (optional)"></v-textarea>
                    <v-btn color="primary" type="submit" class="mt-4">Send RSVP</v-btn>
                </v-form>
            </v-card>
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
const form = ref({ name: '', attendance: '', guests: 0, message: '' })

const submitRSVP = () => {
    console.log('RSVP:', form.value)
    alert(`Thank you, ${form.value.name}! Your RSVP has been recorded.`)
}
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
