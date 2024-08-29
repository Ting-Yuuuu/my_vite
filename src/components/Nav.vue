<template>
    <nav class="nav">
      <ul class="nav_list">
        <li><a href="./" :class="{'-on': activeLink=='index.html'}">待辦事項</a></li>
        <li><a href="./about_us.html" :class="{'-on': activeLink=='about_us.html'}">關於我們</a></li>
      </ul>
    </nav>
</template>
  
<!-- <script>

  export default {
    data(){
        return {
            activeLink:""
        }
    },
    beforeMount(){
        console.log(location);
        if(location.pathname.includes("about_us.html")){
            this.activeLink = "about_us.html";
        }else if(location.pathname.includes("index.html")){
            this.activeLink = "index.html";
        }else{
            this.activeLink = "index.html";
        }
    }
  }
</script> -->

<script setup>
    import { ref,onBeforeMount } from "vue";

    const activeLink =ref("");  //{value:""}

    onBeforeMount(()=>{
      if(location.pathname.includes("about_us.html")){
          activeLink.value = "about_us.html";
        }else if(location.pathname.includes("index.html")){
          activeLink.value = "index.html";
        }else{
          activeLink.value = "index.html";
        }
    });
</script>
  
<style lang="sass" scoped>
  nav.nav
    // border: 1px solid red
    margin-top: 30px
    ul.nav_list
      // border: 1px solid orange
      list-style: none
      margin: 0
      padding: 0
      display: flex
      > li
        // border: 1px solid blue
        margin-right: 20px
        > a
          font-size: 1.6rem
          color: gray
          display: inline-block
          text-decoration: none
          padding: 3px 0px 2px
          &:hover, &.-on
            color: blue
</style>