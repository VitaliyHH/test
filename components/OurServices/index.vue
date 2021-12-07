<template lang="pug">
 #services.our-services
    h2.our-services__title Наши услуги
    ul.our-services__list
      li.our-services__item(
        v-for='(item, index) in $_getServices'
        :key='item.id'
        @click='onClick(index)'
      )
        transition(appear name="flip"  mode="out-in")
          .our-services__card(
            v-if="!isFlipped[index]"
            key="notFlipped" 
            :style='!isFlipped[index] ? { backgroundImage : `url(${require(`@/assets/images/png/${item.ID}.png`)})`} : null'
          )
            .our-services__card-title {{ item.NAME }}
          .our-services__card-flipped( v-else key="flipped")
            .our-services__card-flipped-title {{ item.NAME }}
            p.our-services__card-flipped-content(v-html="item.PREVIEW_TEXT") 
            a(:href='item.CODE' target="_blank").our-services__button-more Подробнее
              .our-services__button-more-arrow(src="@/assets/images/svg/arrow-right.svg" alt='arrow')
    button.our-services__button Связаться с нами
      img.our-services__button-image(src="@/assets/images/svg/arrow-right.svg" alt='arrow')

</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'OurServices',

  data: () => ({
    isFlipped: [],
  }),

  computed: {
    ...mapGetters('services', {
      $_getServices: 'getServices',
    }),
  },

  created() {
    this.$_fetchServices()
  },

  methods: {
    ...mapActions('services', {
      $_fetchServices: 'fetchServices',
    }),

    onClick(index) {
      this.$set(this.isFlipped, index, !this.isFlipped[index])
    },
  },
}
</script>

<style lang="scss" scoped>
.our-services {
  width: 100%;
  overflow-x: auto;

  &__title {
    text-align: center;
  }

  &__list {
    display: grid;
    align-items: center;
    margin-top: 66px;

    grid-row-gap: 48px;
    grid-column-gap: 20px;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;

    @include tablet {
      margin-top: 48px;
      grid-row-gap: 76px;
      grid-column-gap: 30px;
    }
  }

  &__item {
    font-size: 24px;
    font-weight: 600;
    display: flex;
    justify-content: center;
    border-radius: 8px;

    background-color: white;
  }

  &__card,
  &__card-flipped {
    width: 235px;
    height: 235px;

    padding: 0 20px 0;
    border-radius: 8px;

    background: {
      size: cover;
      repeat: no-repeat;
      position: center;
    }

    @include tablet {
      padding: 0 32px 0;
      width: 350px;
      height: 350px;
    }
  }

  &__card {
    display: flex;
    align-items: flex-end;
  }

  &__card-flipped {
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
  }

  &__card-flipped-title {
    margin-bottom: 4px;
    text-align: left;
    font-size: 18px;
    line-height: 32px;

    @include tablet {
      margin-bottom: 12px;
      line-height: 32px;
      font-size: 24px;
    }
  }

  &__card-title {
    margin-bottom: 20px;
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
    text-align: left;

    @include tablet {
      margin-bottom: 40px;
    }
  }

  &__card-flipped-content {
    margin-bottom: 20px;
    font-size: 12px;
    line-height: 18px;
    text-align: left;
    font-weight: 400;

    @include tablet {
      margin-bottom: 40px;
      line-height: 26px;
      font-size: 16px;
    }
  }

  &__button-more {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    background-color: transparent;
    color: #8c30f5;
    margin-right: auto;

    @include tablet {
      margin-bottom: 40px;
    }
  }

  &__button-more-arrow {
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

  &__button {
    margin: 0 auto;
    display: flex;
    align-items: center;
    max-width: 221px;
    margin-top: 48px;
    padding: 12px 20px;
    font-size: 16px;
    border-radius: 6px;
    background-color: transparent;
    color: #18191f;
    border: 1px solid #18191f;
    margin-bottom: 176px;
  }

  &__button-image {
    margin-left: 16px;
  }
}

.flip-enter-active {
  transition: all 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53); //ease-in-quad
}

.flip-leave-active {
  transition: all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94); //ease-out-quad
}

.flip-enter,
.flip-leave-to {
  transform: scaleY(0) translateZ(0);
  opacity: 0;
}
</style>
