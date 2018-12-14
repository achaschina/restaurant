import HomePage from '../../HomePage.vue'
import CategoryPage from '../../components/administration/Category.vue'
import ItemPage from '../../components/tables/Item.vue'
import CartPage from '../../components/menu/Cart.vue'

export default [
	{ path: '/', component: HomePage},
	{ path: '/category', component: CategoryPage },
	{ path: '/item', component: ItemPage },
	{ path: '/cart', component: CartPage },
]