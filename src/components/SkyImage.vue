<template>
    <div>
      <ul class="image_list">
        <li v-for="item in imgList">
          <div>
            <img :src="item.picUrl">
          </div>
          <div>
            {{ item.picTitle }}
          </div>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
    export default {
      data(){
        return {
          imgList: [
            {
              picTitle: "sky 1",
              picUrl: new URL("@/assets/images/sky1.jpg", import.meta.url).href
            },
            {
              picTitle: "sky 2",
              picUrl: new URL("@/assets/images/sky2.jpg", import.meta.url).href
            }
          ]
        };
      }
    }
  </script>
  
  <style lang="sass" scoped>
    ul.image_list
      list-style: none
      margin: 0
      padding: 0
      display: flex
      gap: 10px
      > li
        flex-basis: 150px
        font-size: 1.8rem
        img
          width: 100%
  </style>