import HomePage from '../../HomePage.vue'
import LoginPage from '../../components/administration/Login.vue'
import TablesPage from '../../components/tables/Tables.vue'
import MenuPage from '../../components/menu/Menu.vue'

export default [
	{ path: '/', component: HomePage},
	{ path: '/login', component: LoginPage },
	{ path: '/tables', component: TablesPage },
	{ path: '/menu', component: MenuPage },
]