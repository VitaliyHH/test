<template lang="pug">
  .sidebar(:class="{'sidebar_open': isOpen}" @mousedown='toggleSidebar')
    .sidebar__container(ref='sidebarContainer' @mousedown.stop)
      nav.sidebar__nav
        .sidebar__phone-wrapper
          .sidebar__phone
          a.sidebar__link-phone(
            :href='`tg://resolve?domain=${phone}`' 
            target="_blank" 
          ) {{ phone }}
        ul.sidebar__list
          li.sidebar__item(
              v-for='(item, index) in links'
              :key='`links-item-${index}`'
          )
            a.sidebar__link(
              :href="item.scroll"
              @click="toggleSidebar"
            ) {{ item.text }}
            
</template>

<script>
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'TheSidebar',

  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
  },

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

  updated() {
    if (this.isOpen) {
      this.disableBodyScroll()
    } else {
      this.enableBodyScroll()
    }
  },

  methods: {
    ...mapActions('sidebar', {
      $_closeSidebar: 'closeSidebar',
      $_toggleSidebar: 'toggleSidebar',
    }),

    disableBodyScroll() {
      disableBodyScroll(this.$refs.sidebarContainer)
    },

    enableBodyScroll() {
      clearAllBodyScrollLocks()
    },

    toggleSidebar() {
      if (this.$_isSidebarOpen) this.$_toggleSidebar()
    },
  },
}
</script>

<style lang="scss" scoped>
.sidebar {
  width: 100%;
  visibility: hidden;
  transition: 0.6s;
  z-index: 1000;
  position: fixed;
  top: 0px;
  bottom: 0;
  width: 100%;

  @include desktop {
    display: none;
  }

  &_open {
    background: transparent;

    visibility: visible;

    .sidebar__container {
      margin-top: 504px;
      height: 100%;
    }
  }

  &__container {
    background: #ffffff;
    position: absolute;
    top: -450px;
    bottom: 0;
    overflow: hidden;
    overflow-y: auto;
    height: 420px;
    z-index: 12000;
    width: 100%;
    opacity: 1;
    transition: ease-in-out 0.8s;
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  &__nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 32px;
  }

  &__phone-wrapper {
    display: flex;
    align-items: center;
  }

  &__phone {
    width: 20px;
    height: 20px;
    margin-right: 8px;
    background-color: #8c30f5;

    mask: {
      image: url('@/assets/images/svg/phone.svg');
      size: contain;
      repeat: no-repeat;
      position: center;
    }
  }

  &__link-phone {
    font-weight: 500;
    font-size: 24px;
    line-height: 20px;
    color: #8c30f5;
  }

  &__link {
    text-decoration: none;
    font-weight: 500;
    font-size: 24px;
    line-height: 20px;
    white-space: nowrap;
  }

  &__item {
    width: 100%;
    margin: 32px 0;
  }
}
</style>
