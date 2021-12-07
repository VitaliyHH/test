<template lang="pug">
 #news.news 
  .news__primary
    h2.news__main-title Новости
    .news__main-wrapper   
      img.news__image(src="@/assets/images/png/news-intro.png" alt='news-intro')
      .news__content
        .news__seo-wrapper
          span.news__seo SEO
          img.news__button-line(src="@/assets/images/svg/line.svg" alt='line')
          span.news__read 5 мин чтения
        .news__title {{ firstNews.NAME }}
        p.news__text(v-html="firstNews.PREVIEW_TEXT") 
        a.news__button(:href='firstNews.CODE' target='_blank') Читать дальше
          .news__button-arrow
  .news__carousel-wrapper(v-if="$_getNews.length")
    Swiper.news__carousel(
      :options="swiperOptionh"
    )
      SwiperSlide(
        v-for='(news, index) in $_getNews'
        :key='`news-item-${index}`'
      ) 
        a(:href='news.CODE' target='_blank')
          img.news__carousel-image(:src='require(`@/assets/images/png/${news.ID}.png`)')
        .news__carousel-content
          .news__carousel-seo-wrapper
            span.news__carousel-seo SEO
            img.news__carousel-line(src="@/assets/images/svg/line.svg" alt='line')
            span.news__carousel-read 5 мин чтения
          .news__title {{ news.NAME }}
      .news__carousel-button-circle.swiper-button-next(slot="button-next")
        .news__carousel-button-arrow

</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'News',

  components: {
    Swiper,
    SwiperSlide,
  },

  data: () => ({
    windowWidth: 0,
  }),

  computed: {
    ...mapGetters('news', {
      $_getNews: 'getNews',
      $_firstNews: 'firstNews',
    }),

    firstNews() {
      return this.$_getNews.length ? this.$_getNews[0] : ''
    },

    isMobile() {
      return this.windowWidth <= 474
    },

    isTablet() {
      return !this.isMobile && this.windowWidth <= 768
    },

    isLaptop() {
      return !(this.isMobile || this.isTablet) && this.windowWidth <= 1365
    },

    spaceBetween() {
      return this.isMobile ? 20 : 30
    },

    swiperOptionh() {
      return {
        slidesPerView: this.slidesPerViewMobileAndDesktop(),
        spaceBetween: this.spaceBetween,
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
        },
      }
    },
  },

  created() {
    this.$_fetchNews()
  },

  mounted() {
    window.addEventListener('resize', this.resizeHandler)
    this.resizeHandler()
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.resizeHandler)
  },

  methods: {
    ...mapActions('news', {
      $_fetchNews: 'fetchNews',
    }),

    slidesPerViewMobileAndDesktop() {
      let slidesPerView = 0
      if (this.isMobile) {
        slidesPerView = 1.5
      } else if (this.Tablet) {
        slidesPerView = 2.5
      } else if (this.Laptop) {
        slidesPerView = 3.5
      } else {
        slidesPerView = 4
      }
      return slidesPerView
    },

    resizeHandler() {
      this.windowWidth = window.innerWidth
    },
  },
}
</script>

<style lang="scss">
.news {
  &__primary {
    margin-top: 120px;
    padding: 0 20px 0;

    @include tablet {
      padding: 0px 60px 0px;
    }

    @include laptop {
      padding: 0px 100px 0px;
    }

    @include desktop {
      margin-top: 150px;
      padding: 0px 165px 0px;
    }
  }

  &__main-title {
    margin-bottom: 48px;
  }

  &__main-wrapper {
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    @include laptop {
      flex-wrap: nowrap;
    }
  }

  &__image {
    width: 100%;
    height: 320px;

    @include tablet {
      height: 100%;
      margin-right: 30px;
    }
  }

  &__seo-wrapper {
    display: flex;
    align-items: center;
    margin: 24px 0 16px;

    @include laptop {
      margin: 0 0 16px;
    }
  }

  &__carousel-seo-wrapper {
    display: flex;
    align-items: center;
    margin: 24px 0 16px;
  }

  &__title {
    font-weight: 600;
    font-size: 24px;
    line-height: 130%;
    margin-bottom: 16px;
  }

  &__seo,
  &__carousel-seo {
    font-weight: 500;
    font-size: 14px;
    line-height: 12px;
    color: #8c30f5;
    letter-spacing: 1;
  }

  &__button-line,
  &__carousel-line {
    margin: 0 10px 0;
  }

  &__read,
  &__carousel-read {
    font-size: 14px;
    line-height: 12px;
    letter-spacing: 0.5px;
    opacity: 0.3;
  }

  &__text {
    font-size: 16px;
    line-height: 160%;
    max-height: 200px;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  &__button {
    display: flex;
    align-items: center;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: #8c30f5;
    background-color: transparent;
    margin-top: 24px;
  }

  &__button-arrow {
    background-color: #8c30f5;
    width: 16px;
    height: 16px;
    margin-left: 8px;

    mask: {
      image: url('@/assets/images/svg/arrow-right.svg');
      size: contain;
      repeat: no-repeat;
      position: center;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;

    @include laptop {
      max-width: 350px;
    }
  }

  &__carousel-wrapper {
    position: relative;
    margin-top: 90px;
    padding: 0 0 0 20px;

    @include tablet {
      margin-top: 60px;
    }

    @include laptop {
      padding: 0 0 0 40px;
    }

    @include desktop {
      padding: 0 0 0 165px;
    }
  }

  &__carousel-image {
    width: 100%;
    height: 100%;
    width: 235px;
    height: 235px;

    @include tablet {
      height: 320px;
      width: 320px;
    }
  }

  &__carousel-button-circle {
    border-radius: 50%;
    border: 2px solid #747579;
    width: 50px;
    height: 50px;
    position: absolute;
    top: 40%;
    right: 42px;

    @include tablet {
      top: 42%;
    }
  }

  &__carousel-button-arrow {
    background-color: #747579;
    width: 25px;
    height: 25px;
    position: absolute;

    mask: {
      image: url('@/assets/images/svg/arrow-right.svg');
      size: contain;
      repeat: no-repeat;
      position: center;
    }
  }
}

.swiper-slide {
  width: 235px !important;
  height: 355px !important;

  @include tablet {
    height: 440px !important;
    width: 320px !important;
  }
}

.swiper-button-next {
  width: 50px !important;
  height: 50px !important;
  color: transparent !important;
  top: 35% !important;

  @include tablet {
    top: 40% !important;
  }
}
</style>
