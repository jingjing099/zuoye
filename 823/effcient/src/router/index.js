import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'main',
		component: () => import('../components/MyMain.vue'),
		reactive: '/login',
		children: [
			{
				path: '/home',
				name: 'home',
				component: HomeView
			},
			{
				path: '/about',
				name: 'about',
				component: () => import('../views/AboutView.vue')
			},
			{
				path: '/user',
				name: 'user',
				component: () => import('../views/base/user/UserView.vue')
			},
			{
				path: '/role',
				name: 'role',
				component: () => import('../views/base/role/RoleView.vue')
			},
			{
				path: '/menus',
				name: 'menus',
				component: () => import('../views/base/menus/MenusView.vue')
			},
			{
				path: '/rank',
				name: 'rank',
				component: () => import('../views/base/rank/RanksView.vue')
			},
			{
				path: '/job',
				name: 'job',
				component: () => import('../views/base/job/JobsView.vue')
			},
			{
				path: '/divisional',
				name: 'divisional',
				component: () => import('../views/base/divisional/DivisionalView.vue')
			},
			{
				path: '/login-oper',
				name: 'login-oper',
				component: () => import('../views/base/login-oper/LoginOperView.vue')
			},
			{
				path: '/oper',
				name: 'oper',
				component: () => import('../views/base/oper/OperView.vue')
			},
			{
				path: '/approval',
				name: 'approval',
				component: () => import('../views/ConfigureWorkflow/approval/ApprovalView.vue')
			},
			{
				path: '/approval-types',
				name: 'approval-types',
				component: () => import('../views/ConfigureWorkflow/approval-types/ApprovalTypes.vue')
			},
			{
				path: '/material-ment',
				name: 'material-ment',
				component: () => import('../views/material-ment/MaterialMent.vue')
			},
			{
				path: '/started',
				name: 'started',
				component: () => import('../views/OAApproval/started/StartedView.vue')
			},
			{
				path: '/finished',
				name: 'finished',
				component: () => import('../views/OAApproval/finished/FinishedView.vue')
			},
			{
				path: '/backlog',
				name: 'backlog',
				component: () => import('../views/OAApproval/backlog/BacklogView.vue')
			},
			{
				path: '/salary-sheet',
				name: 'salary-sheet',
				component: () => import('../views/EnterpriseCommunications/Payslip/SalarySheetView.vue')
			},
			{
				path: '/firm-comm',
				name: 'firm-comm',
				component: () => import('../views/EnterpriseCommunications/firmComm/MailView.vue')
			}
		]
	},

	{
		path: '/login',
		name: 'login',
		component: () => import('../views/login/LoginView.vue')
	}
]

const router = new VueRouter({
	routes
})

export default router
