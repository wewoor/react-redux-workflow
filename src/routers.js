/**
 * routers
 */
import App from './containers/App'
import Login from './components/Login'
import NotFound from './components/NotFound'

const routers = {
    path: '/',
    component: App,
    indexRoute: { component: Login },
    childRoutes: [
        {
            path: 'login',
            component: Login,
        },
        {
            path: '*',
            component: NotFound,
        }

    ],
}

export default routers