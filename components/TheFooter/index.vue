<template lang="pug">
  footer.footer
    .footer__wrapper
      a.footer__logo(href="/") 
      ul.footer__list
          li.footer__item(
            v-for='(item, index) in links'
            :key='`links-item-${index}`'
          )
            a.footer__link(
              :href="item.scroll" 
            ) {{ item.text }} 
    .footer__divider
    .footer__secondary
      span.footer__rights © {{ copyrightDate }}
      .footer__social-media
        a.footer__social-media-link(
            href='https://www.instagram.com' 
            target="_blank" 
          )
          img.carousel__social-media-instagram(
            src="@/assets/images/svg/instagram.svg" 
            alt='instagram'
          )
        a.footer__social-media-link(
            href='#' 
            target="_blank" 
          ) 
          img.carousel__social-media-basketball(
            src="@/assets/images/svg/basketball.svg" 
            alt='basketball'
          )
        a.footer__social-media-link(
            href='https://www.twitter.com'
            target="_blank" 
          )
          img.carousel__social-media-twitter(
            src="@/assets/images/svg/twitter.svg" 
            alt='twitter'
          )
        a.footer__social-media-link(
            href='https://www.youtube.com'
            target="_blank" 
          )
          img.carousel__social-media-youtube(
            src="@/assets/images/svg/youtube.svg" 
            alt='youtube'
          )
              
</template>
<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'TheFooter',

  data: () => ({
    links: [
      {
        text: 'О нас',
        scroll: '#about-us',
      },
      {
        text: 'Почему мы',
        scroll: '#why',
      },
      {
        text: 'Наши услуги',
        scroll: '#services',
      },
      {
        text: 'Новости',
        scroll: '#news',
      },
    ],
    copyrightDate: `${new Date().getFullYear()} Wabbit. All rights reserved`,
  }),

  computed: {
    ...mapGetters('sidebar', {
      $_isSidebarOpen: 'isSidebarOpen',
    }),
  },

  methods: {
    ...mapActions('sidebar', {
      $_toggleSidebar: 'toggleSidebar',
    }),

    toggleSidebar() {
      this.$_toggleSidebar()
    },
  },
}
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  background-color: #0b0d17;
  margin-top: 240px;

  padding: 80px 20px 60px;

  @include tablet {
    padding: 80px 60px 80px;
  }

  @include laptop {
    margin-top: 270px;
    padding: 80px 100px 0px;
  }

  @include desktop {
    padding: 80px 165px 50px;
  }

  &__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
  }

  &__logo {
    width: 105px;
    height: 28px;
    background-repeat: no-repeat;
    background-size: contain;
    cursor: pointer;
    background-image: url('~assets/images/svg/logo.svg');

    @include tablet {
      flex-direction: row;
      margin-right: 32px;
    }
  }

  &__list {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 17px;
    font-weight: 600;
    margin-top: 32px;

    @include tablet {
      flex-direction: row;
      margin-top: 16px;
    }
  }

  &__item:not(:last-child) {
    margin-bottom: 16px;

    @include tablet {
      margin: 0 16px 0;
    }

    @include laptop {
      margin: 0 24px 0 0;
    }
  }

  &__link {
    font-size: 16px;
    color: #ffffff;
  }

  &__divider {
    width: 100%;
    height: 1px;
    background-color: #ffffff;
    opacity: 0.2;
    margin-top: 32px;

    @include tablet {
      margin-top: 76px;
    }
  }

  &__secondary {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: space-between;
    margin-top: 32px;

    @include tablet {
      flex-direction: row;
      margin-top: 76px;
    }
  }

  &__rights {
    color: #d9dbe1;
    font-size: 14px;
    margin-top: 70px;

    @include tablet {
      margin: 0;
    }
  }

  &__social-media {
    display: flex;
    align-items: center;
  }

  &__social-media-link {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #23252e;
    height: 24px;
    width: 24px;
    border-radius: 50%;

    &:not(:last-child) {
      margin-right: 16px;
    }
  }
}
</style>
