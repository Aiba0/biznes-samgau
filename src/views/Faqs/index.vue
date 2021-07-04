<template>
  <div class="faqs">
    <h1 class="page-title">Сұрақ-жауап</h1>
    <accordion />
    <accordion>Сабақты кім өтеді?</accordion>
    <accordion>Видеолар ашылмай жатыр?</accordion>
    <accordion>Инстаграм парақшаға жазылу үшін не керек?</accordion>
    <accordion>Курс сақтала ма?</accordion>
    <accordion>Қорқынышты қалай жеңуге болады?</accordion>
    <accordion>Бизнесті қалай бастаймын?</accordion>
<!--    <accordion>Айына қанша қаражат табамын?</accordion>-->
<!--    <accordion>Сертификат жайлы</accordion>-->
<!--    <accordion>Өз командама адамдарды қалай жинауға болады?</accordion>-->
<!--    <accordion>Курстың қандай пайдасы бар?</accordion>-->
<!--    <accordion>Бөліп төлеуге болады ма?</accordion>-->
  </div>
</template>

<script>
import Accordion from '../../components/Accordion'
export default {
  components: { Accordion }
}
</script>

<style lang="scss" scoped>
  @import 'src/style/variables';

  .faqs {
    max-width: 900px;
    padding: 20px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    & h1 {
      margin-bottom: 20px;
    }
  }
  @media screen and (max-width: $layout-s){
  }
</style>
