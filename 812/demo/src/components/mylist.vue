<template>
  <div class="mylist">
    <ul>
      <li
        v-for="(item, index) in str"
        :key="index"
        @click="strchange(index)"
        :class="{ act: strIndex == index }"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
    props:['str','strIndex'],
    methods: {
        strchange(i){
            this.$emit('strchange',i)
        }
    }
}
</script>
<style lang="scss" scoped>
.mylist {
  ul {
    li {
      line-height: 60px;
    }
    li:hover {
      color: #92b8e7;
    }
  }
}
.act{
  color:#92b8e7;
}
</style>