<template lang="pug">
div.main
  Intro.pages-intro(ref='intro')
  OurServices.our-services(ref='services')
  ContactUs.pages-contact-us
  News.news
  
</template>

<script>
import ContactUs from '@/components/ContactUs'
import OurServices from '@/components/OurServices'
import Intro from '@/components/Intro'
import News from '@/components/News'

export default {
  components: {
    ContactUs,
    OurServices,
    Intro,
    News,
  },
}
</script>

<style lang="scss" scoped>
.pages-intro {
  //custom for background
  padding: 0 20px 0;

  @include tablet {
    padding: 0px 60px 0px;
  }

  @include laptop {
    padding: 0 100px 0;
  }

  @include desktop {
    padding: 0px 165px 0px;
  }
}

.our-services {
  //custom for background
  padding: 120px 20px 120px 20px;
  background-image: url('~assets/images/png/services-background.png');

  @include laptop {
    padding: 150px 165px 150px 165px;
  }
}

.pages-contact-us {
  margin-top: 120px;
  padding: 0px 20px 0px;

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
</style>
