import HomePage from '../../HomePage.vue'
import CategoryPage from '../../components/administration/Category.vue'
import ItemPage from '../../components/items/Item.vue'
import CartPage from '../../components/orderAndCart/Cart.vue'
import itemsList from '../../components/items/itemsList.vue'

export default [
	{ path: '/', component: HomePage},
	{ path: '/category', component: CategoryPage },
	{ path: '/category/:categoryId', component: itemsList },
	{ path: '/cart', component: CartPage },
	{ path: '/items/:id', component: ItemPage },
]