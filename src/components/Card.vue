<template>
  <router-link to="/lesson/3" class="card">
    <div class="card-img">
      <img
        :src="course.img"
        alt="Курс"
      >
    </div>
    <div class="card-body">
      <span class="card-category">{{ course.category }}</span>
      <h1 class="card-title">{{ course.title }}</h1>
      <div class="card-meta">
        <span class="card-author">{{ course.author }}</span>
        <span class="divider-line">|</span>
        <span class="card-rating"><i><star /></i>5.0</span>
      </div>
      <footer class="card-footer">
        <div class="card-price">
          <span class="card-price-old">{{ course.oldPrice }}</span>
          <span class="card-price-current">{{ course.currentPrice }}</span>
        </div>
        <a class="card-btn">Сатып алу</a>
      </footer>
    </div>
  </router-link>
</template>

<script>
import Star from '@/icons/Star'
export default {
  props: {
    course: {
      type: Object,
      default: () => {}
    }
  },
  components: { Star }
}
</script>

<style lang="scss" scoped>
  @import 'src/style/variables';
  .card {
    /*width: calc(100% / 3);*/
    margin: 20px 10px;
    width: 260px;
    min-width: 260px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    -webkit-filter: drop-shadow(0px 32px 40px rgba(0,0,0,0.08));
    filter: drop-shadow(0px 32px 40px rgba(0,0,0,0.08));
    background-color: $white;
    border-radius: 8px;
    transition: box-shadow .2s ease;
    &-img {
      width: 100%;
      height: 140px;
      overflow: hidden;
      & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    &-body {
      padding: 15px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    &-category {
      margin-bottom: 8px;
      display: block;
      font-size: 13px;
      color: map_get($gray, 600);
    }
    &-title {
      margin-bottom: 8px;
      font-size: 15px;
      font-weight: 500;
      display: -webkit-box;
      -webkit-line-clamp: 1; // количество строк
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    &-meta {
      display: flex;
      align-items: center;
      & .divider-line {
        margin: 0 10px;
      }
    }
    &-author {
      margin-right: 8px;
    }
    &-rating i {
      vertical-align: center;
      margin-right: 5px;
    }
    &-footer {
      margin-top: 24px;
      display: flex;
      justify-content: space-between;
      flex-wrap: nowrap;
    }
    &-price {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      color: $primary;
      font-size: 16px;
      font-weight: 500;
      &-old {
        margin-left: 5px;
        color: map-get($gray, 600);
        font-weight: 400;
        font-size: 14px;
        text-decoration: line-through;
      }
    }
    &-btn {
      border: 2px solid map-get($gray, 200);
      border-radius: 4px;
      padding: 8px 16px;
      font-weight: 600;
      color: $primary;
      font-size: 15px;
      cursor: pointer;
      outline: none;
      transition: all .2s ease;
      &:hover {
        background-color: $primary;
        color: $white;
      }
    }
  }
  @media screen and (max-width: $layout-m) {
    .card {
      width: 100%;
      &-btn {
        background-color: $primary;
        color: $white;
      }
    }
  }
</style>
