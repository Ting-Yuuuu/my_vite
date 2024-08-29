<template>
    <li v-for="(task, index) in tasks" :key="task.id">
        <div class="item_flex">
            <div class="left_block">
                <div class="btn_flex">
                    <button type="button" class="btn_up" @click="$emit('taskSwap',$event,index,'up')">往上</button>
                    <button type="button" class="btn_down" @click="$emit('taskSwap',$event,index,'down')">往下</button>
                </div>
            </div>
            <div class="middle_block">
                <div class="star_block">
                    <span class="star" :class="{'-on' :task.star >= 1}" @click="$emit('taskStar',$event,index,1)"><i class="fas fa-star"></i></span>
                    <span class="star" :class="{'-on' :task.star >= 2}" @click="$emit('taskStar',$event,index,2)"><i class="fas fa-star"></i></span>
                    <span class="star" :class="{'-on' :task.star >= 3}" @click="$emit('taskStar',$event,index,3)"><i class="fas fa-star"></i></span>
                    <span class="star" :class="{'-on' :task.star >= 4}" @click="$emit('taskStar',$event,index,4)"><i class="fas fa-star"></i></span>
                    <span class="star" :class="{'-on' :task.star >= 5}" @click="$emit('taskStar',$event,index,5)"><i class="fas fa-star"></i></span>
                </div>
                <p class="para" :class="{ '-none': task.editable }">{{ task.name }}</p>
                <input type="text" class="task_name_update" :class="{ '-none': !task.editable }" placeholder="更新待辦事項…"
                    v-model.trim="task.name">
            </div>
            <div class="right_block">
                <div class="btn_flex">
                    <button type="button" class="btn_update" @click="$emit('taskEdit', $event, index)">更新</button>
                    <button type="button" class="btn_delete" @click="$emit('taskRemove',$event,index)">移除</button>
                </div> 
            </div>
        </div>
    </li>
</template>

<script>
export default {
    props: ["tasks"],
    emits: ["taskEdit","taskStar","taskSwap","taskRemove"]
}
</script>

<!-- Composition API 寫法 -->
<!-- <script setup>
  defineProps(["tasks"]);
  defineEmits(["taskEdit","taskStar","taskSwap","taskRemove"]);
</script> -->

<style lang="sass" scoped>
// 一大片的 li 的 css
li
  margin-bottom: 20px
  border-bottom: 1px solid gray
  padding-bottom: 20px
  opacity: 1
  transition: opacity 1s

  &.fade_out
    opacity: 0

  &:first-child
    border-top: 1px solid black
    padding-top: 20px

    button.btn_up
      background-color: lightgray !important
      cursor: not-allowed !important
      color: gray

  &:last-child
    margin-bottom: 0
    border-bottom: 0

    button.btn_down
      background-color: lightgray !important
      cursor: not-allowed !important
      color: gray

  > div.item_flex
    display: flex

    /* border: 1px solid black; */

    > div
      /* border: 1px solid blue; */

      &.left_block
        width: 100px
        flex-shrink: 0

        div.btn_flex
          display: flex

          > button
            flex-grow: 1
            outline: none
            height: 40px
            font-size: 1.6rem
            padding: 0
            margin: 0
            background: none
            background-color: white
            border: 0
            cursor: pointer
            border: 1px solid #eee

      &.middle_block
        font-size: 1.8rem
        flex-grow: 1
        padding-left: 10px
        padding-right: 10px

        p.para
          margin: 0
        /* ===== 重要性的星號 ===== */
        div.star_block
          display: inline-block

          > span.star
            cursor: pointer
            display: inline-block
            margin-right: 3px

            &.-on
              color: yellow
        
        input.task_name_update
          width: 100%
          border: 1px solid lightgray
          border-radius: 3px 0 0 3px
          height: 40px
          font-size: 2rem
          padding: 5px 10px
          outline: none

          &::placeholder
            color: lightgray

      &.right_block
        width: 100px
        flex-shrink: 0

        div.btn_flex
          display: flex

          > button
            flex-grow: 1
            outline: none
            height: 40px
            font-size: 1.6rem
            padding: 0
            margin: 0
            background: none
            background-color: white
            border: 0
            cursor: pointer
            border: 1px solid #eee
</style>