<template>
  <div class="home">
    <span class="page-title">Менің курстарым</span>
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
import courses from '../../db'
import Card from '../../components/Card'
export default {
  components: { Card },
  data: () => ({
    courses: courses.myCourse
  })
}
</script>

<style lang="scss" scoped>
  @import "src/style/variables";
  .home {
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
