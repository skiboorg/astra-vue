<template>

  <div id="catalog" class="sorted-list container">
    <div class="filters">
      <span class="filter" v-for="filter in filters" v-bind:class="{ active: currentFilter === filter.id }" v-on:click="setFilter(filter.id)">{{filter.name}}</span>
    </div>
    <div class="filters-mobile">
        <el-select v-model="selectedType" placeholder="ВСЕ КАТЕГОРИИ" @change="setFilter(selectedType)">
    <el-option
      v-for="filter in filters"
      :key="filter.id"
      :label="filter.name"
      :value="filter.id">

    </el-option>
  </el-select>
    </div>




    <transition-group class="projects" name="projects" >
      <div class="project" v-if="currentFilter === project.category || currentFilter === 'vse'" v-bind:key="project.title" v-for="project in templates">

        <img class="project-image" v-bind:src="img_host+project.image">


        <p class="project-name">{{project.title}}</p>
        <div class="project-price">
          <p>{{project.price}} руб</p>
          <span class="btn" @click="previewPage(project.uuid)" >Просмотр</span>

        </div>


      </div>
    </transition-group>


  </div>

</template>
<script>

  export default {


    data:function(){
      return{
        selectedType:'',
        currentFilter: 'vse',
        img_host:'http://site.astralid1.ru:8000'
      }
    },
      computed:{
          filters(){
              return this.$store.getters['filters/filters']
          },
          templates(){
              return this.$store.getters['templates/templates']
          }
      },

    methods: {
      setFilter: function(filter) {
        this.currentFilter = filter;
        window.scrollTo(0, 700)
      },
      onChange:function(event){
       console.log(event);
    },
      previewPage(url){
        this.$router.push('/preview/' + url)
      }
    },
  }
</script>

<style lang="sass">
  .el-select
    width: 100%
    &-dropdown__item
      span
        text-transform: uppercase
        font: 14px 'Gotham Pro',sans-serif
  .el-input__inner
    text-transform: uppercase
    font: 14px 'Gotham Pro',sans-serif
  .sorted-list
    margin-bottom: 110px !important
  .filters-mobile
    display: none
  .filters
    position: sticky
    top: 0
    background: #fff
    padding-top: 20px
    z-index: 100
    &::after
      position: absolute
      content: none
      width: 200%
      height: 1px
      box-shadow: 0 4px 6px 1px #0000002e
      bottom: 0
      left: -50%

  .filter
    font: 16px 'Gotham Pro',sans-serif
    text-transform: uppercase
    cursor: pointer
    display: inline-block
    padding: 20px
    border-radius: 10px
    transition: all 0.2s
    margin-right: 30px
    margin-bottom: 10px
    user-select: none
    &.active
      box-shadow: 0px 1px 3px 0px #00000026
      background: #522EE3
      color: #fff
    &:hover
      background: #522EE3
      color: #fff

  .projects
    text-align: center
    margin-top: 60px
    display: grid
    grid-template-columns: repeat(auto-fill,minmax(290px, 1fr))
    grid-row-gap: 70px
    grid-column-gap: 20px
    &-enter
      transform: scale(0.5) translatey(80px)
      opacity: 0
    &-leave-to
      transform: translatey(30px)
      opacity: 0
    &-leave-active
      position: absolute
      z-index: -1

  .project
    transition: all .5s ease-in-out
    max-width: 305px
    justify-self: center
    &-name
      text-align: left
      font: 16px 'Gotham Pro Bold',sans-serif
      margin-bottom: 35px
    &-price
      display: flex
      justify-content: space-between
      align-items: center

      p
        font: 24px 'Gotham Pro Bold',sans-serif
        margin-right: 20px

  @media (max-width: 520px)
    .sorted-list
      margin-bottom: 50px
    .filters-mobile
      display: block
      position: sticky
      top: 0
      padding: 20px
      background: #fff
      z-index: 1000

    .filters
      display: none
    .projects
      margin-top: 20px
      grid-row-gap: 30px





</style>
