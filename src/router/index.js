import About from "../pages/About";
import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";
import Login from "../pages/Login";
import Error from "../pages/Error";

export const privateRoutes = [
    {path: '/about', component: <About/>, index: true},
    {path: '/posts', component: <Posts/>, index: true},
    {path: '/posts/:id', component: <PostIdPage/>, index: true},
    {path: '/error', component: <Error/>, index: true},
]

export const publicRoutes = [
    {path: '/login', component: <Login/>, index: true},
]