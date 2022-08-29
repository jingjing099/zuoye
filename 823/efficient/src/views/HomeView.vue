<template>
  <div class="index">
    <div class="top">
      <div class="topl">
        <p class="topt"><span>待办事项</span> <span>查看更多</span></p>
        <ul>
          <li>
            <span>[待办事项] 您申请的报销还未审批，请及时查看，放置过期</span>
            <span>2022年8月</span>
          </li>
          <li>
            <span>[待办事项] 小红的请假申请还未审批，请及时查看</span>
            <span>2022年8月</span>
          </li>
          <li>
            <span>[待办事项] 小明的爆笑还未审批，请及时查看</span>
            <span>2022年8月</span>
          </li>
          <li>暂无待办事</li>
        </ul>
      </div>
      <el-date-picker v-model="value1" type="date" placeholder="选择日期">
      </el-date-picker>
    </div>
    <div class="main">
      <div class="ml">
        <h3>员工数据</h3>
        <ul>
          <li>
            <p>员工总人数</p>
            <p>2000人</p>
          </li>
          <li>
            <p>正式员工</p>
            <p>1000人</p>
          </li>
          <li>
            <p>实习生</p>
            <p>15人</p>
          </li>
          <li>
            <p>本月待入职</p>
            <p>15人</p>
          </li>
          <li>
            <p>本月待离职</p>
            <p>13人</p>
          </li>
          <li>
            <p>本月待转正</p>
            <p>3人</p>
          </li>
        </ul>
      </div>
      <div class="mr">
        <h3>员工地区分布</h3>
        <div id="main"></div>
      </div>
    </div>
    <div class="bot">
      <h3>员工生日</h3>
      <div id="footer"></div>
    </div>
  </div>
</template>
<script>
import * as echarts from "echarts"
export default {
  data() {
    return {
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now()
        }
      },
      value1: ""
    }
  },
  methods: {
    getData() {
      var chartDom = document.getElementById("footer")
      var myChart = echarts.init(chartDom)
      var option

      option = {
        xAxis: {
          type: "category",
          data: [
            "1月",
            "2月",
            "3月",
            "4月",
            "5月",
            "6月",
            "7月",
            "8月",
            "9月",
            "10月",
            "11月",
            "12月"
          ]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: [100, 140, 230, 150, 130, 230, 150, 160, 200, 210, 210, 130],
            type: "bar",
            itemStyle: {
              color: "#b886f8"
            }
          }
        ]
      }

      option && myChart.setOption(option)
    },
    getbing() {
      var chartDom = document.getElementById("main")
      var myChart = echarts.init(chartDom)
      var option

      option = {
        tooltip: {
          trigger: "item"
        },
        legend: {
          orient: "vertical",
          left: "right"
        },
        series: [
          {
            name: "Access From",
            type: "pie",
            radius: "50%",
            data: [
              { value: 100, name: "东北" },
              { value: 150, name: "内蒙" },
              { value: 200, name: "河北" },
              { value: 100, name: "山西" },
              { value: 114, name: "河南" }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      }

      option && myChart.setOption(option)
    }
  },
  mounted() {
    this.getbing()
    this.getData()
  }
}
</script>
<style lang="scss" scoped>
.bot {
  margin-left: 11px;
  margin-top: 25px;
  margin-bottom: 25px;
  border: 1px solid #d6d6d6;
  width: 1330px;
  height: 300px;
  > h3 {
    // border-bottom: 1px solid #d6d6d6;
    line-height: 40px;
    box-sizing: border-box;
    padding-left: 90px;
  }
  #footer {
    width: 100%;
    height: 259px;
  }
}
.mr {
  width: 650px;
  height: 240px;
  border: 1px solid #d6d6d6;
  margin-left: 30px;
  > h3 {
    border-bottom: 1px solid #d6d6d6;
    line-height: 40px;
    box-sizing: border-box;
    padding-left: 25px;
  }
  #main {
    width: 100%;
    height: 199px;
  }
}
.ml {
  width: 650px;
  height: 240px;
  border: 1px solid #d6d6d6;
  margin-left: 11px;
  > h3 {
    border-bottom: 1px solid #d6d6d6;
    line-height: 40px;
    box-sizing: border-box;
    padding-left: 25px;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    li {
      // line-height: 50px;
      padding: 20px 0px;
      width: 33%;
      text-align: center;
      margin-top: 10px;
      border-right: 1px solid #d6d6d6;
      &:nth-of-type(3),
      &:nth-of-type(6) {
        border: none;
      }
    }
  }
}
.main {
  width: 100%;
  display: flex;
  justify-content: left;
}
.topl {
  width: 800px;
  height: 235px;
  border: 1px solid #d6d6d6;
  margin: 21px 14px 22px 11px;
  .topt {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 46px;
    border-bottom: 1px solid #d6d6d6;
    span {
      &:nth-of-type(1) {
        font-weight: 700;
        font-size: 18px;
        width: 70%;
        margin-left: 10px;
      }
      &:last-of-type {
        color: #6ca3f5;
        margin-right: 10px;
      }
    }
  }
  ul {
    width: 100%;
    li {
      box-sizing: border-box;
      border-bottom: 1px solid #ccc;
      height: 46px;
      line-height: 46px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 10px;
      &:last-of-type {
        border-bottom: none;
      }
    }
  }
}
::v-deep .el-input__prefix {
  height: 0;
  margin-top: 21px;
}
::v-deep .el-input__inner {
  width: 310px;
  margin-top: 21px;
}
.top {
  display: flex;
  align-items: top;
}
// .index {
// display: flex;
// flex-wrap: wrap;
// }
</style>
