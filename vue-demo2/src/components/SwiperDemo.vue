<template>
    <div>
        <swiper-container :pagination="{clickable: true}">
            <swiper-slide>
                <img src="../assets/logo.svg" alt="">
            </swiper-slide>
            <swiper-slide>
                <img src="../assets/logo.svg" alt="">
            </swiper-slide>
            <swiper-slide>
                <img src="../assets/logo.svg" alt="">
            </swiper-slide>
        </swiper-container>
    </div>
</template>

<script>

import { register } from 'swiper/element/bundle';
register();


export default {
    name: 'HelloWorld',
    data() {
        return {
        }
    }
}

</script>

<style scoped>
img {
    width: 100%;
}
</style>