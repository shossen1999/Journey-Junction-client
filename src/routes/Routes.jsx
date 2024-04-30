import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AllTouristsSpot from "../pages/AllTouristsSpot/AllTouristsSpot";
import AddTouristsSpot from "../pages/AddTouristsSpot/AddTouristsSpot";
import MyList from "../pages/MyList/MyList";
import SpotDetails from "../pages/SpotDetails/SpotDetails";
import UpdateSpotDetails from "../pages/UpdateSpotDetails/UpdateSpotDetails";
import CountrySpots from "../pages/Country/CountrySpots";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import PrivateRoute from './PrivateRoute';
import UpdateProfile from "../pages/UpdateProfile/UpdateProfile";
import UserProfile from "../pages/UserProfile/UserProfile";
import FaqDetails from "../pages/Home/FaqDetails";
import ReviewDetails from "../pages/Home/ReviewDetails";
// import FaqQuestion from "../pages/Home/FaqQuestion";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:"/",
            element:<Home></Home>,
            loader:()=>fetch('https://journey-junction-server-gamma.vercel.app/tourSpot')
        },
        {
          path:"/login",
          element:<Login></Login>
        },
        {
          path:"/register",
          element:<Register></Register>
        },
        {
          path:"/allTouristsSpot",
          element:<AllTouristsSpot></AllTouristsSpot>,
          loader:()=>fetch('https://journey-junction-server-gamma.vercel.app/tourSpot')
        },
        {
          path:"/addTouristsSpot",
          element:<PrivateRoute><AddTouristsSpot></AddTouristsSpot></PrivateRoute>
        },
        {
          path:"/myList/:email",
          element:<PrivateRoute><MyList></MyList></PrivateRoute>,
          loader:({params})=>fetch(`https://journey-junction-server-gamma.vercel.app/tourSpot/user/${params.email}`)
        },
        {
          path:"/spotDetails/:id",
          element:<PrivateRoute><SpotDetails></SpotDetails></PrivateRoute>,
          loader:({params})=>fetch(`https://journey-junction-server-gamma.vercel.app/tourSpot/${params.id}`)
        },
        {
          path:"/updateSpot/:id",
          element:<PrivateRoute><UpdateSpotDetails></UpdateSpotDetails></PrivateRoute>

        },
        {
          path:"/countrySpot/:country_name",
          element:<CountrySpots></CountrySpots>
        },
        {
          path:"/updateProfile",
          element:<PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
        },
        {
          path:"/userProfile",
          element:<PrivateRoute><UserProfile></UserProfile></PrivateRoute>
        },
        {
          path:"/faq",
          element:<FaqDetails></FaqDetails>

        },
        
        {
          path: "/review/:id",
          element: <ReviewDetails></ReviewDetails>
        }
      ]
    },
  ]);

  export default router;