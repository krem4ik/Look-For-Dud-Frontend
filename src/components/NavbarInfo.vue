<template>
  <div class="info">
    <div class="info__title">
      <h2 class="info__name">102 Mikorayon</h2>
      <span class="info__score">2.3</span>
    </div>
    <div class="info__city-weather">
      <span class="info__city-weather-span">14.2</span>
      <span class="info__city-weather-span">7.9 t</span>
      <span class="info__city-weather-span">56</span>
    </div>
    <div class="info__text">Combustion of an organic fuel in air is always exothermic because the double bond in O2
    </div>
    <div class="info__smro">
      <div class="info__smro-title">Status SMRo</div>
      <div class="info__smro-data">7994 FG / Chloride</div>
    </div>
    <div class="info__population">
      <div class="info__population-item">
        <div class="info__population-item-title">Polyas</div>
        <div class="info__population-item-data">2M</div>
      </div>
      <div class="info__population-item">
        <div class="info__population-item-title">Polyas</div>
        <div class="info__population-item-data">2M</div>
      </div>
      <div class="info__population-item">
        <div class="info__population-item-title">Polyas</div>
        <div class="info__population-item-data">2M</div>
      </div>
    </div>
    <div class="info__text">Combustion of an organic fuel in air is always
    </div>
    <div class="info__gallery">
      <div class="info__gallery-title">Photos</div>
      <div class="info__gallery-list">
        <div class="info__gallery-item" :key="`gallery-img-${i}`" v-for="i in 4">
          <img class="info__gallery-item-img" :src="getImage(i)" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavbarInfo",
  methods: {
    getImage(id) {
      return require(`@/assets/gallery/${id}.jpg`);
    }
  }
}
</script>

<style scoped lang="scss">
.info__title {
  display: flex;
  height: 27px;
  justify-content: space-between;
  margin-bottom: 52px;
}

.info__name {
  font-weight: 500;
  font-size: 27px;
  line-height: 100%;
  margin: 0;
}

.info__score {
  width: 39px;
  height: 30px;
  color: #fff;
  background: #F4761A;
  border-radius: 6px;
  font-weight: 500;
  font-size: 18px;
  line-height: 30px;
  text-align: center;
}

.info__city-weather {
  display: flex;
  margin-bottom: 18px;
}

.info__city-weather-span {
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  margin-right: 22px;
  position: relative;
  padding-left: 26px;

  &:nth-child(1) {
    &:before {
      background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M17.5487 8.0001C16.7829 6.74175 15.1271 4.67011 12.5637 1.75476C12.2645 1.41448 11.7342 1.41518 11.4359 1.75625C8.88065 4.67783 7.22597 6.74805 6.45489 7.99571C3.91532 12.1049 3.72409 15.9389 6.56528 18.751C9.63862 21.793 14.3621 21.792 17.4355 18.7512C20.2743 15.9425 20.0858 12.169 17.5487 8.0001ZM7.73087 8.78429C8.39019 7.71747 9.8183 5.91206 12.0019 3.39071C14.1889 5.90415 15.6153 7.70851 16.2673 8.77991C18.4829 12.4205 18.6344 15.4548 16.3805 17.6849C13.8915 20.1475 10.1092 20.1483 7.62047 17.685C5.36463 15.4522 5.51867 12.3638 7.73087 8.78429Z' fill='%23A3A3A3'/%3E%3Cpath d='M12.7366 17.2967C14.3588 16.7579 15.4749 15.2362 15.4749 13.5C15.4749 13.0858 15.1391 12.75 14.7249 12.75C14.3107 12.75 13.9749 13.0858 13.9749 13.5C13.9749 14.5852 13.277 15.5366 12.2638 15.8732C11.8707 16.0038 11.6579 16.4283 11.7884 16.8214C11.919 17.2145 12.3436 17.4273 12.7366 17.2967Z' fill='%23A3A3A3'/%3E%3C/svg%3E%0A");
    }
  }

  &:nth-child(2) {
    &:before {
      background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6.00001 11.5H11.688C12.2668 11.4998 12.8376 11.3656 13.3559 11.108C13.8741 10.8503 14.3257 10.4763 14.6753 10.015C15.0248 9.55374 15.2629 9.01783 15.3708 8.44923C15.4787 7.88063 15.4536 7.29476 15.2973 6.7375C15.141 6.18024 14.8579 5.66672 14.4701 5.23712C14.0823 4.80753 13.6003 4.47354 13.0618 4.26129C12.5234 4.04903 11.9432 3.96429 11.3665 4.01368C10.7899 4.06308 10.2325 4.24527 9.73801 4.546C9.57401 4.65224 9.45795 4.8183 9.41454 5.00882C9.37112 5.19935 9.40378 5.39929 9.50556 5.5661C9.60734 5.73291 9.7702 5.85341 9.95948 5.90195C10.1488 5.95049 10.3495 5.92324 10.519 5.826C10.8158 5.64607 11.1501 5.53724 11.496 5.508C11.8418 5.47876 12.1897 5.52992 12.5124 5.65747C12.8352 5.78502 13.1241 5.98551 13.3565 6.24325C13.5889 6.50099 13.7585 6.80901 13.8521 7.1432C13.9457 7.47739 13.9608 7.82871 13.896 8.16967C13.8313 8.51063 13.6886 8.832 13.479 9.10864C13.2694 9.38527 12.9987 9.60968 12.688 9.76432C12.3773 9.91895 12.0351 9.99961 11.688 10L6.00001 10.001C5.8011 10.001 5.61033 10.08 5.46968 10.2207C5.32903 10.3613 5.25001 10.5521 5.25001 10.751C5.25001 10.9499 5.32903 11.1407 5.46968 11.2813C5.61033 11.422 5.8011 11.501 6.00001 11.501V11.5ZM2.00001 15H11.966C12.1975 15 12.4258 15.0536 12.6331 15.1566C12.8405 15.2596 13.0211 15.4092 13.161 15.5936C13.3009 15.7781 13.3961 15.9924 13.4394 16.2198C13.4826 16.4472 13.4726 16.6816 13.4102 16.9045C13.3478 17.1274 13.2346 17.3328 13.0796 17.5047C12.9245 17.6766 12.7318 17.8103 12.5165 17.8952C12.3012 17.9802 12.0691 18.0142 11.8385 17.9946C11.6078 17.9749 11.3849 17.9022 11.187 17.782C11.0173 17.6825 10.8153 17.6537 10.6245 17.7018C10.4338 17.7499 10.2695 17.871 10.1672 18.039C10.0649 18.207 10.0327 18.4085 10.0776 18.6001C10.1224 18.7916 10.2407 18.9579 10.407 19.063C10.8026 19.3037 11.2485 19.4495 11.7099 19.489C12.1712 19.5286 12.6354 19.4608 13.0662 19.291C13.497 19.1213 13.8826 18.8541 14.1929 18.5104C14.5032 18.1667 14.7297 17.7559 14.8548 17.31C14.9798 16.8642 14.9999 16.3955 14.9136 15.9406C14.8272 15.4856 14.6367 15.0569 14.3571 14.6879C14.0774 14.3189 13.7161 14.0196 13.3014 13.8135C12.8868 13.6074 12.43 13.5001 11.967 13.5H1.99901C1.90052 13.5001 1.80301 13.5195 1.71204 13.5573C1.62107 13.595 1.53843 13.6503 1.46883 13.72C1.39923 13.7897 1.34404 13.8724 1.30641 13.9635C1.26878 14.0545 1.24945 14.152 1.24951 14.2505C1.24958 14.349 1.26904 14.4465 1.30679 14.5375C1.34455 14.6284 1.39984 14.7111 1.46954 14.7807C1.53923 14.8503 1.62194 14.9055 1.71296 14.9431C1.80398 14.9807 1.90152 15.0001 2.00001 15ZM16.667 13H18.918C19.381 12.9999 19.8378 12.8926 20.2524 12.6865C20.6671 12.4804 21.0284 12.1811 21.3081 11.8121C21.5877 11.4431 21.7782 11.0144 21.8646 10.5594C21.9509 10.1045 21.9308 9.63581 21.8058 9.18997C21.6807 8.74414 21.4542 8.3333 21.1439 7.98961C20.8336 7.64593 20.448 7.37874 20.0172 7.20895C19.5864 7.03917 19.1222 6.97141 18.6609 7.01097C18.1995 7.05054 17.7536 7.19635 17.358 7.437C17.194 7.54324 17.078 7.7093 17.0345 7.89982C16.9911 8.09035 17.0238 8.29029 17.1256 8.4571C17.2273 8.62391 17.3902 8.74441 17.5795 8.79295C17.7688 8.84149 17.9695 8.81424 18.139 8.717C18.3369 8.59682 18.5598 8.52406 18.7905 8.50441C19.0211 8.48477 19.2532 8.51877 19.4685 8.60376C19.6838 8.68875 19.8765 8.82242 20.0316 8.9943C20.1866 9.16619 20.2998 9.37163 20.3622 9.59454C20.4246 9.81745 20.4346 10.0518 20.3914 10.2792C20.3481 10.5066 20.2529 10.7209 20.113 10.9054C19.9731 11.0898 19.7925 11.2394 19.5851 11.3424C19.3778 11.4454 19.1495 11.499 18.918 11.499L16.667 11.5C16.4681 11.5 16.2773 11.579 16.1367 11.7197C15.996 11.8603 15.917 12.0511 15.917 12.25C15.917 12.4489 15.996 12.6397 16.1367 12.7803C16.2773 12.921 16.4681 13 16.667 13Z' fill='%23A3A3A3'/%3E%3C/svg%3E%0A");
    }
  }

  &:nth-child(3) {
    &:before {
      background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13.524 9.41509L15.47 7.47009C15.6122 7.33761 15.8002 7.26549 15.9945 7.26892C16.1888 7.27234 16.3742 7.35106 16.5116 7.48847C16.6491 7.62588 16.7278 7.81127 16.7312 8.00557C16.7346 8.19987 16.6625 8.38791 16.53 8.53009L14.585 10.4761C14.956 11.1051 15.0848 11.8477 14.9473 12.5649C14.8099 13.2821 14.4155 13.9245 13.8383 14.3717C13.261 14.8189 12.5405 15.0402 11.8117 14.9942C11.0829 14.9481 10.396 14.6378 9.87966 14.1215C9.36332 13.6051 9.05302 12.9182 9.00696 12.1894C8.96089 11.4606 9.18221 10.7401 9.62942 10.1628C10.0766 9.58557 10.719 9.19125 11.4362 9.05378C12.1534 8.91631 12.896 9.04513 13.525 9.41609H13.524V9.41509ZM12 13.5001C12.3978 13.5001 12.7794 13.3421 13.0607 13.0607C13.342 12.7794 13.5 12.3979 13.5 12.0001C13.5 11.6023 13.342 11.2207 13.0607 10.9394C12.7794 10.6581 12.3978 10.5001 12 10.5001C11.6022 10.5001 11.2207 10.6581 10.9394 10.9394C10.6581 11.2207 10.5 11.6023 10.5 12.0001C10.5 12.3979 10.6581 12.7794 10.9394 13.0607C11.2207 13.3421 11.6022 13.5001 12 13.5001Z' fill='%23A3A3A3'/%3E%3Cpath d='M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM11.25 3.533C9.30556 3.70557 7.4797 4.54192 6.07904 5.90161C4.67837 7.26131 3.7882 9.06154 3.558 11H5V12.5H3.514C3.63849 14.6663 4.58678 16.7031 6.16455 18.1928C7.74232 19.6825 9.83008 20.5124 12 20.5124C14.1699 20.5124 16.2577 19.6825 17.8355 18.1928C19.4132 16.7031 20.3615 14.6663 20.486 12.5H19V11H20.442C20.2118 9.06154 19.3216 7.26131 17.921 5.90161C16.5203 4.54192 14.6944 3.70557 12.75 3.533V5H11.25V3.533Z' fill='%23A3A3A3'/%3E%3C/svg%3E%0A");
    }
  }

  &:before {
    content: '';
    width: 24px;
    height: 24px;
    position: absolute;
    left: 0;
    top: 0;
  }
}

.info__text {
  font-weight: normal;
  font-size: 16px;
  line-height: 100%;
  color: #9E9E9E;
  margin-bottom: 40px;
}

.info__smro-title {
  font-weight: 500;
  font-size: 15px;
  line-height: 100%;
  text-transform: uppercase;
  opacity: 0.5;
  margin-bottom: 8px;
}

.info__smro-data {
  font-weight: 500;
  font-size: 27px;
  line-height: 100%;
  color: #222222;
  margin-bottom: 40px;
}

.info__population {
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
}

.info__population-item-title {
  font-weight: 500;
  font-size: 15px;
  line-height: 100%;
  text-transform: uppercase;
  color: #222222;
  opacity: 0.5;
  margin-bottom: 8px;
}

.info__population-item-data {
  font-weight: 500;
  font-size: 27px;
  line-height: 100%;
  color: #222222;
}

.info__gallery-title {
  font-weight: 500;
  font-size: 15px;
  line-height: 100%;
  text-transform: uppercase;
  color: #222222;
  opacity: 0.5;
  margin-bottom: 13px;
}

.info__gallery-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.info__gallery-item {
  width: calc(50% - 6px);
  overflow: hidden;
  margin-bottom: 12px;
  border-radius: 8px;
  position: relative;

  &:after {
    content: '';
    padding-bottom: 100%;
    display: block;
  }
}

.info__gallery-item-img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
