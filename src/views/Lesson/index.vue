<template>
  <div class="lesson">
    <header class="lesson-header">
      <p class="lesson-header-category">Реклама</p>
      <h1 class="lesson-header-title">Инстаграмдағы рекрутинг</h1>
      <span class="lesson-header-meta">28 сабақ | 14 сағат 15 мин. видеолекция</span>
      <div class="lesson-header-actions">
        <button class="lesson-header-btn">Сатып алу</button>
        <p class="lesson-header-price">49 000 тг</p>
      </div>
    </header>
    <div class="lesson-content">
      <div class="lesson-content-figure">
        <img
          class="lesson-content-img"
          src="https://image.shutterstock.com/image-illustration/lettering-lesson-1-on-green-260nw-1780698029.jpg"
          alt="/"
        >
      </div>
      <p class="lesson-content-caption">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Adipisci amet blanditiis, deleniti deserunt ea eius illum molestiae non sed sequi.
        Ad amet aut autem ex laboriosam maiores non numquam, possimus.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque debitis doloremque earum
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque debitis doloremque earum
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque debitis doloremque earum
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque debitis doloremque earum
        nulla, officiis praesentium! Amet aspernatur deleniti ea minima nobis nulla porro, quae quo rem
        sint sunt temporibus velit?
      </p>
      <div class="lesson-content-author">
        <p class="lesson-content-author-text">Курстың авторы</p>
        <p class="lesson-content-author-name">Алмат Жанузаков</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import 'src/style/variables';

.lesson {
  padding: 20px;
  display: flex;
  flex-direction: column;
  &-header {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    &-category {
      font-weight: 600;
      font-size: 13px;
      line-height: 18px;
      text-transform: uppercase;
      color: $primary;
      margin-bottom: 15px;
    }
    &-title {
      font-size: 32px;
      margin-top: 8px;
      margin-bottom: 20px;
    }
    &-meta {
      font-size: 14px;
      color: map_get($gray, 600);
      margin-bottom: 30px;
    }
    &-actions {
      display: flex;
      align-items: center;
    }
    &-btn {
      margin-right: 25px;
      background: $primary;
      font-weight: 600;
      font-size: 17px;
      line-height: 22px;
      color: $white;
      padding: 13px 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 4px;
      border: none;
      cursor: pointer;
    }
    &-price {
      font-size: 22px;
      font-weight: 700;
    }
  }
  &-content {
    display: flex;
    flex-direction: column;
    &-figure {
      width: 100%;
      max-height: 330px;
      border-radius: 8px;
      overflow: hidden;
      margin: 25px 0;
    }
    &-img {
      width: 100%;
      height: 100%;
    }
    &-caption {
      margin-bottom: 30px;
      display: block;
      font-size: 16px;
      line-height: 22px;
      width: 100%;
      max-height: 60px;
      overflow: hidden;
      text-overflow: ellipsis; /* Добавляем многоточие */
      padding: 5px;
      display: -webkit-box;
      -webkit-line-clamp: 4; /* количество строк */
      -webkit-box-orient: vertical;
    }
    &-author {
      display: flex;
      flex-direction: column;
      &-text {
        margin-bottom: 10px;
        font-size: 20px;
        font-weight: 700;
      }
      &-name {
        font-size: 16px;
      }
    }
  }
}
</style>
