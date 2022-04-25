import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css";
import Home from "./pages/home/Home";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/Login";
import { useSelector } from "react-redux";

function App() {
	const admin = useSelector((state) => state.user.currentUser);
	console.log(admin);
	
	return (
		<Router>
			<Switch>
				<Route path='/login' exact>
					{admin?.isAdmin == true ? <Redirect to='/' /> : <Login />}
				</Route>
				{admin?.isAdmin == true  && (
					<>
						<Topbar />
						<div className='container'>
							<Sidebar />
							<Route exact path='/'>
								<Home />
							</Route>
							<Route exact path='/users'>
								<UserList />
							</Route>
							<Route exact path='/user/:userId'>
								<User />
							</Route>
							<Route path='/newUser'>
								<NewUser />
							</Route>
							<Route exact path='/products'>
								<ProductList />
							</Route>
							<Route exact path='/product/:productId'>
								<Product />
							</Route>
							<Route exact path='/newproduct'>
								<NewProduct />
							</Route>
						</div>
					</>
				)}
			</Switch>
		</Router>
	);
}

export default App;
