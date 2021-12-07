<template lang="pug">
 #about-us.intro
    img.intro__img(src="@/assets/images/svg/intro.svg" alt='intro')
    .intro__content
        h1.intro__title Делаем больше чем просто SEO
        p.intro__text Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        | Nunc odio in et, lectus sit lorem id integer.
        button.intro__button Связаться с нами
    
</template>

<script>
export default {
  name: 'Intro',
}
</script>

<style lang="scss" scoped>
.intro {
  @include phone {
    background: {
      image: url('@/assets/images/svg/intro.svg');
      size: cover;
      position: center;
      repeat: no-repeat;
    }
  }

  &__img {
    max-height: 480px;
    position: relative;
    top: 0;
    right: 155%;

    @include phone {
      display: none;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 635px;

    @include phone {
      margin-right: 40px;
    }
  }

  &__title {
    display: flex;
    flex-wrap: wrap;
    margin-top: 32px;

    @include phone {
      margin-top: 64px;
    }

    @include tablet {
      margin-top: 176px;
    }
  }

  &__text {
    max-width: 540px;
    margin-top: 16px;
    font-weight: 400;
    font-size: 18px;
    line-height: 32px;
    color: #18191f;
  }

  &__button {
    max-width: 205px;
    margin-top: 44px;
    padding: 12px 32px;
    font-size: 16px;
    border-radius: 6px;
    background-color: #8c30f5;
    color: #ffffff;
    border: none;
    margin-bottom: 100px;

    @include phone {
      margin-bottom: 176px;
    }
  }
}
</style>
