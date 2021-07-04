<template>
  <div class="courses">
    <span class="page-title">Барлық курстар</span>
    <div class="card-list">
      <card
        v-for="course in courses"
        :course="course"
        :key="course.id"
      />
    </div>
  </div>
</template>

<script>
import Card from '../../components/Card'
import courses from '../../db'

export default {
  components: { Card },
  data: () => ({
    courses: courses.courses
  })
}
</script>

<style lang="scss" scoped>
  @import "src/style/variables";
  .courses {
    display: flex;
    flex-direction: column;
  }
  .card-list {
    display: flex;
    flex-wrap: wrap;
    @media screen and (max-width: $layout-s){
    }
  }
</style>
