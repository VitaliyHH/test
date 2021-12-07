<template lang="pug">
  header.header
    .header__wrapper
      a.header__logo(href="/") 
      nav.header__nav
        ul.header__list
          li.header__item(
            v-for='(item, index) in links'
            :key='`links-item-${index}`'
          )
            a.header__link(
              :href="item.scroll" 
            ) {{ item.text }} 
      .header__secondary
        .header__phone-wrapper
          .header__phone
          a.header__phone-link(
            :href='`tg://resolve?domain=${phone}`' 
            target="_blank" 
          ) {{ phone }}
        button.header__contact-us Связаться с нами
      button.header__sidebar(
        @click="toggleSidebar" 
        :class="$_isSidebarOpen ? 'header__sidebar_close' : 'header__sidebar'"
      )
            
</template>
<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'TheHeader',

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
    phone: '067-777-00-00',
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
.header {
  width: 100%;
  box-shadow: 0px 1px 0px #e5e9f2;

  //custom padding for header
  padding: 16px 20px 10px;

  @include tablet {
    padding: 16px 80px 16px;
  }

  @include laptop {
    padding: 16px 100px 16px;
  }

  @include desktop {
    padding: 16px 165px 16px;
  }

  &__wrapper {
    display: flex;
    align-items: center;
  }

  &__logo {
    width: 105px;
    height: 28px;
    background-repeat: no-repeat;
    background-size: contain;
    cursor: pointer;
    background-image: url('~assets/images/svg/logo.svg');
    margin-right: 32px;
  }

  &__nav {
    display: none;

    @include desktop {
      display: block;
    }
  }

  &__list {
    display: flex;
    align-items: center;
    font-size: 17px;
    font-weight: 600;
  }

  &__item:not(:last-child) {
    margin-right: 32px;
  }

  &__secondary {
    display: none;

    @include desktop {
      margin-left: auto;
      display: flex;
      align-items: center;
    }
  }

  &__phone-wrapper {
    display: flex;
    align-items: center;
    margin-right: 32px;
  }

  &__phone {
    width: 16px;
    height: 16px;
    margin-right: 8px;
    background-color: #8c30f5;

    mask: {
      image: url('@/assets/images/svg/phone.svg');
      size: contain;
      repeat: no-repeat;
      position: center;
    }
  }

  &__phone-link {
    color: #8c30f5;
  }

  &__contact-us {
    width: 100%;
    padding: 10px 20px;
    font-size: 14px;
    border-radius: 6px;
    background-color: #8c30f5;
    color: #ffffff;
    border: none;
  }

  &__sidebar {
    width: 24px;
    height: 24px;
    margin-left: auto;

    background: transparent {
      image: url('~assets/images/svg/burger-menu.svg');
      repeat: no-repeat;
      size: contain;
      position: center;
    }

    @include desktop {
      display: none;
    }

    &_close {
      width: 14px;
      height: 14px;
      background: {
        image: url('~assets/images/svg/close.svg');
      }
    }
  }
}
</style>
