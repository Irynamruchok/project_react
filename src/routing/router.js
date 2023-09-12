import {createBrowserRouter, Navigate} from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import MoviesPage from "../pages/MoviesPage/MoviesPage";
import MoviePage from "../pages/MoviePage/MoviePage";
import GenresPage from "../pages/GenresPage/GenresPage";
import Search from "../components/Search/Search";


const router = createBrowserRouter([
    {
        path:'',
        element:<MainLayout/>,
        children:[
            {
                index: true,
                element: <Navigate to={'/movies'}/>
            },

            {
                path:'/movies',
                element:<MoviesPage/>
            },
            {
                path:'/movie/:movieId',
                element:<MoviePage/>
            },
            {
                path:'/genres',
                element:<GenresPage/>
            },
            {
                path:'/search',
                element:<Search/>
            }
        ]
    }
])

export {router}