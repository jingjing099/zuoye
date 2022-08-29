<template>
    <div class="top">
        <div class="header">
            <p></p>
            <h3>{{title}}</h3>
        </div>
    </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
    computed:{
        ...mapState('tab',['title'])
    }
}
</script>
<style lang="scss" scoped>
.top{
    width: 90%;
    height: 100px;
    box-shadow: 1 1 1 #ccc;
    .header{
        display: flex;
        align-items: center;
        p{
            width: 2px;
            height: 30px;
            background: #31c17b;
            margin-right: 10px;
        }
        h3{
            color:black;
        }
    }
}
</style>