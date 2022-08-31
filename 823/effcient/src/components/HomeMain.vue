<template>
	<div>
		<!-- 待办事项 -->
		<div class="home-top">
			<ul>
				<li>
					<p>待办事项</p>
					<p style="color: #458bf3">查看更多</p>
				</li>
				<li>
					<p>[待办事项] 您申请的报销还未审批，请及时查看，防止过期</p>
					<p>2022年8月</p>
				</li>
				<li>
					<p>[待办事项] 您申请的报销还未审批，请及时查看，防止过期</p>
					<p>2022年8月</p>
				</li>
				<li>
					<p>[待办事项] 您申请的报销还未审批，请及时查看，防止过期</p>
					<p>2022年8月</p>
				</li>
				<li>
					<p>[待办事项] 您申请的报销还未审批，请及时查看，防止过期</p>
					<p>2022年8月</p>
				</li>
				<li class="home-top-bottom">
					<p>待办事项</p>
				</li>
			</ul>
			<div class="block">
				<!-- <span class="demonstration"></span> -->
				<el-date-picker v-model="value1" type="week" format="yyyy 第 WW 周" placeholder="选择周"> </el-date-picker>
			</div>
		</div>
		<!-- 员工数据  地区分布 -->
		<div class="home-content">
			<!-- 员工数据 -->
			<div class="content-left">
				<div class="content-left-top">员工数据</div>
				<ul>
					<li>
						<div>
							<p>员工总人数</p>
							<p>2000人</p>
						</div>
						<div>
							<p>员工总人数</p>
							<p>1000人</p>
						</div>
						<div class="serry">
							<p>员工总人数</p>
							<p>15人</p>
						</div>
					</li>
					<li>
						<div>
							<p>员工总人数</p>
							<p>15人</p>
						</div>
						<div>
							<p>员工总人数</p>
							<p>13人</p>
						</div>
						<div class="serry">
							<p>员工总人数</p>
							<p>3人</p>
						</div>
					</li>
				</ul>
			</div>
			<!-- 地区分布 -->
			<div class="content-right">
				<div class="content-right-top">员工地区分布</div>
				<div id="region"></div>
			</div>
		</div>
		<!-- 员工生日 -->
		<div class="home-bottom">
			<div class="home-bottom-top">员工生日</div>
			<div id="birthday"></div>
		</div>
	</div>
</template>

<script>
import * as echarts from 'echarts'
export default {
	name: 'homeMain',
	components: {},
	data() {
		return {
			value1: ''
		}
	},
	methods: {},
	computed: {},
	created() {},
	mounted() {
		// 基于准备好的dom，初始化echarts实例
		var myChart = echarts.init(document.getElementById('region'))
		var myCharts = echarts.init(document.getElementById('birthday'))
		// 绘制图表
		myCharts.setOption({
			xAxis: {
				type: 'category',
				data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
			},
			tooltip: {
				trigger: 'axis',
				axisPointer: {
					type: 'shadow'
				}
			},
			yAxis: [
				{
					type: 'value'
				}
			],
			series: [
				{
					data: [120, 200, 150, 80, 70, 110, 200, 158, 237, 222, 167, 150],
					type: 'bar',
					// showBackground: true,
					itemStyle: {
						color: '#b886f8'
					}
				}
			]
		})
		myChart.setOption({
			tooltip: {
				trigger: 'item'
			},
			legend: {
				orient: 'vertical',
				right: 30,
				top: 40
			},
			series: [
				{
					// name: 'Access From',
					// left: 'left',
					type: 'pie',
					radius: '60%',
					center: ['30%', '50%'],
					data: [
						{ value: 114, name: '河南' },
						{ value: 100, name: '东北' },
						{ value: 150, name: '内蒙' },
						{ value: 200, name: '河北' },
						{ value: 100, name: '山西' }
					],
					itemStyle: {
						borderRadius: 2,
						// borderColor: '#fff',
						borderWidth: 1
					},
					emphasis: {
						itemStyle: {
							shadowBlur: 10,
							shadowOffsetX: 0,
							shadowColor: 'rgba(0, 0, 0, 0.5)'
						}
					}
				}
			]
		})
	}
}
</script>
<style scoped lang="scss">
.home-top {
	display: flex;
	justify-content: space-between;
	ul {
		width: 70%;
		border: 1px solid #bbb;
		border-bottom: none;
		li {
			height: 50px;
			line-height: 50px;
			display: flex;
			justify-content: space-between;
			border-bottom: 1px solid #bbb;
			padding: 0 30px;
		}
		.home-top-bottom {
			justify-content: center;
		}
	}
	.block {
		width: 28%;
		text-align: left;
	}
}
// 员工数据  员工地区分布
.home-content {
	margin: 20px 0;
	display: flex;
	justify-content: space-between;
	// 员工数据
	.content-left {
		width: 49%;
		height: 250px;
		border: 1px solid #bbb;
		.content-left-top {
			border-bottom: 1px solid #bbb;
			height: 40px;
			text-align: left;
			line-height: 40px;
			padding: 0 30px;
		}
		ul {
			li {
				display: flex;
				justify-content: space-around;
				align-items: center;
				padding: 30px;
				div {
					flex: 1;
					border-right: 1px solid #bbb;
					// margin-right: 20px;
				}
				.serry {
					border: none;
				}
			}
		}
	}
	// 员工地区分布
	.content-right {
		width: 49%;
		border: 1px solid #bbb;
		#region {
			width: 100%;
			height: 210px;
		}
		.content-right-top {
			border-bottom: 1px solid #bbb;
			height: 40px;
			text-align: left;
			line-height: 40px;
			padding: 0 30px;
		}
	}
}
// 员工生日
.home-bottom {
	height: 270px;
	width: 100%;
	border: 1px solid #bbb;
	.home-bottom-top {
		text-align: left;
		margin-left: 130px;
		margin-top: 30px;
		font-size: 20px;
	}
	#birthday {
		width: 1200px;
		height: 260px;
		margin: 0 auto;
	}
}
</style>
