import vueConfirmationButton from 'vue-confirmation-button';
import VueSticker from 'vue-sticker'
import { Carousel3d } from 'vue-carousel-3d';
import { Slide } from 'vue-carousel-3d';

export default ({
    Vue, // the version of Vue being used in the VuePress app
    options, // the options for the root Vue instance
    router, // the router instance for the app
    siteData // site metadata
  }) => {
    Vue.component('vue-confirmation-button', vueConfirmationButton);
    Vue.component('VueSticker', VueSticker);
    Vue.component('carousel3d', Carousel3d);
    Vue.component('slide', Slide);
}