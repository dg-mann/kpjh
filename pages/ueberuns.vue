<template>
    <DefaultView titel="Das sind wir">
        <head>
            <title>Über uns</title>
        </head>
        <AboutUs />
        <Values />
        <div class="text-center">
                <h3>Downloade hier unsere Satzung</h3>
            </div>
        <Downloads :downloads="downloads" />
        <!-- <ImageSlider
            class="sponsorSlider"
            :items="sponsors"
        >
            <template #item="{ item }">
                <nuxt-img
                    :src="item.logo.url"
                    class="slider-img"
                />
            </template>
        </ImageSlider> -->
    </DefaultView>
</template>
<script>
import satzung from '~/assets/Satzung-KPJH.pdf';

export default {
    data() {
        return {
            downloads: [
                { title: 'Satzung - KjG Pfarrjugend Hüls', pdf: { url: satzung } }
            ]
        };
    }
};
</script>