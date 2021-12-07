<template lang="pug">
.contact-us
  .contact-us__background
    img.contact-us__image(src="@/assets/images/svg/message.svg" alt='message')
    .contact-us__content-wrapper
      h1.contact-us__title Более 569 клиентов уже написали нам
      .contact-us__input-wrapper
        input.contact-us__input(
          type="text"
          placeholder="Напишите ваш email"
        )
        button.contact-us__button Отправить
    
</template>

<script>
export default {
  name: 'ContactUs',
}
</script>

<style lang="scss" scoped>
.contact-us {
  &__background {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    border-radius: 16px;
    background: {
      size: cover;
      repeat: no-repeat;
      position: center center;
    }

    height: 715px;
    padding: 0 20px 0;
    background-image: url('~assets/images/png/contact-us-mobile.png');

    @include tablet {
      flex-direction: row;
      align-items: center;
      justify-content: center;
      height: auto;
      padding: 48px 20px 48px;
      background-image: url('~assets/images/png/contact-us-bg.png');
    }
  }

  &__image {
    width: 175px;
    height: 160px;

    @include tablet {
      margin-right: 40px;
    }

    @include laptop {
      margin-right: 80px;
    }

    @include desktop {
      margin-right: 120px;
    }
  }

  &__title {
    font-weight: 800;
    font-size: 38px;
    line-height: 54px;
    color: #ffffff;
    margin: 48px 0 48px;
    text-align: center;

    @include tablet {
      font-size: 40px;
      margin: 0 0 32px;
      text-align: left;
      justify-content: initial;
    }
  }

  &__content-wrapper {
    display: flex;
    flex-direction: column;
    max-width: 445px;
  }

  &__input-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @include tablet {
      flex-direction: row;
      justify-content: initial;
    }
  }

  &__input {
    height: 52px;
    height: 100%;
    width: 100%;
    padding: 14px 16px;
    font-size: 14px;
    line-height: 24px;
    border-radius: 5px;

    @include tablet {
      border-radius: 5px 0px 0px 5px;
    }
  }

  &__button {
    height: 52px;
    padding: 14px 24px;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    background: #18191f;
    color: #ffffff;
    margin-top: 16px;
    border-radius: 5px;

    @include tablet {
      margin: 0;
      border-radius: 0px 5px 5px 0px;
    }
  }
}
</style>
