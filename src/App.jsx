// import React from 'react'
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
// import { useState } from 'react';
// import Home from './Pages/Home/Home';
// import Blog from './Pages/Blog/Blog';
// import Services from './Pages/Services/Services';
// import AuthRoutes from './Pages/Landlord/AuthRoutes/AuthRoutes.jsx';
// import Contact_us from './Pages/Contact_us/Contact_us'
// import Login from './Components/Auth/Login';
// import Signup from './Components/Auth/Signup';
// import ResetPassword from './Components/Auth/ResetPassword';
// import ForgotPassword from './Components/Auth/ForgotPassword';
// import Tenant from "./Pages/Tenant/TenantHome.jsx"
// import TenantPrivate from './Pages/Tenant/TenantPrivate.jsx';
// import Landlord from "./Pages/Landlord/Landlord.jsx"
// import Admin from "./Pages/Admin/Admin.jsx"
// import AdminPrivate from './Pages/Admin/AdminPrivate.jsx';
// import TenantHome from './Pages/Tenant/TenantHome.jsx';
// import TenantSettings from './Pages/Tenant/TenantSettings.jsx';
// import TenantPayment from './Pages/Tenant/TenantPayment.jsx';
// import TenantSub from './Pages/Tenant/TenantSub.jsx';
// import TenMain from './Pages/Tenant/TenMain.jsx';
// import TenantPayLayout from './Pages/Tenant/TenantPayLayout.jsx';
// import TenantPayHero from './Pages/Tenant/TenantPayHero.jsx';
// import TenantCards from './Pages/Tenant/TenantCards.jsx';
// import MainRequest from './Pages/Tenant/MainRequest.jsx';

// const router = createBrowserRouter([

//       {
//         path: "/",
//         element: <Home/>
//       },
//       {
//         path:"/Login",
//         element:<Login/>
//       },
//       {
//         path:"/Signup",
//         element:<Signup/>
//       },
//       {
//         path:"/ResetPassword",
//         element:<ResetPassword/>
//       },{
//         path:"/ForgotPassWord",
//         element:<ForgotPassword/>
//       },
//       {
//         path: "/About_Us",
//         element: <Contact_us/>
//       },
//       {
//         path: "/Services",
//         element: <Services/>
//       },
//       {
//         path: "/Blog",
//         element: <Blog/>
//       },
//       {
            
//         path:"/Landlord",
//         element:<Landlord/>
//        },
//       {
//         element:<AdminPrivate/>,
//         children:[
//           { path:"/Admin",
//             element:<Admin/>
//            },
//         ],
//       },
//       {
//         element:<AuthRoutes/>,
//         children:[
//           // {
            
//           //     path:"/Landlord",
//           //     element:<Landlord/>
//           //    },
          
//         ]
//       },
//      {
//       element:<TenantPrivate showLogoutPopup={showLogoutPopup} setShowLogoutPopup={setShowLogoutPopup}/>,
//       children:[
//         {
//           path:"/TenantHome",
//           element:<TenantHome/>
//         },
//         {
//           path:"/TenantSettings",
//           element:<TenantSettings/>
//         },{
//           path:"/MaintainReq",
//           element:<MainRequest/>
//         },
//         {
//           element:<TenantPayLayout/>,
//           children:[
//             {
//               path:"/TenantCards",
//               element:<TenantCards/>
//             },
//             {
//               path:"/TenantPayment",
//               element:<TenantPayment/>

//             },
           
//           ]
//         },
//         {
//           path:"/TenantSub",
//           element:<TenantSub/>
//         },
//         {
//           path:"/TenantMain",
//           element:<TenMain/>
//         },
//       ]
//      }
//     ],
  
  
  
// );

// const App = () => {
//   const [showLogoutPopup, setShowLogoutPopup] = useState(false);
//   return(
//     <RouterProvider router={router} />
//   )
// }

// export default App
import React, { useState } from 'react';
import { createHashRouter, RouterProvider } from "react-router-dom";
import Home from './Pages/Home/Home';
import AuthRoutes from './Pages/Landlord/AuthRoutes/AuthRoutes.jsx';
import Contact_us from './Pages/Contact_us/Contact_us';
import Login from './Components/Auth/Login';
import Signup from './Components/Auth/Signup';
import ResetPassword from './Components/Auth/ResetPassword';
import ForgotPassword from './Components/Auth/ForgotPassword';
import  ResetMessage from './Components/Auth/ResetMesssage.jsx'
import TenantPrivate from './Pages/Tenant/TenantPrivate.jsx';
// import Landlord from "./Pages/Landlord/Landlord.jsx";
// import Admin from "./Pages/Admin/Admin.jsx";
import AdminPrivate from './Pages/Admin/AdminPrivate.jsx';
import AdminPayment from './Pages/Admin/AdminPayment.jsx'
import AdminHome from './Pages/Admin/AdminHome.jsx';
import AdminLandlord from './Pages/Admin/AdminLandlord.jsx';
import AdminTenant from './Pages/Admin/AdminTenant.jsx';
import AdminProfileTenant from './Pages/Admin/AdminProfile-Landlord/AdminProfile-Landlord.jsx';
import AdminProfileLandlord from './Pages/Admin/AdminProfile-tenant/AdminProfile-Tenant.jsx'
import AdminPaymentView1 from './Pages/Admin/AdminPaymentView1.jsx'
import TenantHome from './Pages/Tenant/TenantHome.jsx';
import TenantSettings from './Pages/Tenant/TenantSettings.jsx';
import TenantPayment from './Pages/Tenant/TenantPayment.jsx';
import TenantSub from './Pages/Tenant/TenantSub.jsx';
import TenMain from './Pages/Tenant/TenMain.jsx';
import TenantProfile from './Pages/Tenant/TenantProfile.jsx'
// import TenantPayLayout from './Pages/Tenant/TenantPayLayout.jsx';
// import TenantCards from './Pages/Tenant/TenantCards.jsx';
import MainRequest from './Pages/Tenant/MainRequest.jsx';
import LandLordHome from './Pages/Landlord/LandLordHome.jsx';
import Propertics from './Pages/Landlord/Propertics.jsx'
import Transaction from './Pages/Landlord/Transaction.jsx';
import Tenantspage from './Pages/Landlord/Tenantspage.jsx';
import Maintenance from './Pages/Landlord/Maintenance.jsx';
import LandlordProfile from './Pages/Landlord/LandlordProfile.jsx';
import LandlordProfilepage from './Pages/Landlord/LandlordProfilepage.jsx';
import TenantProfileVeiw1 from './Pages/Landlord/TenantProfileView1.jsx';
import TransactionVeiw1 from './Pages/Landlord/TransactionVeiw1.jsx'
import PropertyView1  from './Pages/Landlord/PropertyVeiw1.jsx'

const App = () => {
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const closePopup = () => {
    setShowPopup(false);
  };
  const router = createHashRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/Login",
      element: <Login />
    },
    {
      path: "/Signup",
      element: <Signup />
    },
    {
      path: "/ResetPassword",
      element: <ResetPassword />
    },
    {
      path: "/ForgotPassWord",
      element: <ForgotPassword />
    },
    {
      path:"/ResetMessage",
      element:<ResetMessage/>
    },
    {
      path: "/About_Us",
      element: <Contact_us />
    },
    {
      element: <AdminPrivate showLogoutPopup={showLogoutPopup} setShowLogoutPopup={setShowLogoutPopup} />,
      children: [
        {
          path: "/AdminHome",
          element: <AdminHome />
        },
        {
          path: "/AdminLandlord",
          element: <AdminLandlord/>
        },
        {
          path: "/AdminTenant",
          element: <AdminTenant/>,
        },
            {
              path:"/AdminTenantProfile",
              element: <AdminProfileTenant />
            },
            {
              path:"/AdminLandlordProfile",
              element: <AdminProfileLandlord />
            },
        
       
        {
          path: "/AdminPayment",
          element: <AdminPayment/>
        },
        {
          path:"/AdminPaymentView1",
          element:<AdminPaymentView1/>
        }
  
          ]
        },
    {
      element: <AuthRoutes />,
      children: [
        {
          path: "/Landlord",
          element: <LandLordHome />
        },
        {
          path: '/propertics',
          element: <Propertics />
        },
        {
          path: '/Transactions',
          element: <Transaction />
        },
        {
          path: '/View-Tenant',
          element: <Tenantspage />
        },
        {
          path: '/maintenance',
          element: <Maintenance />
        },
        {
          path: '/settings',
          element: <LandlordProfile />
        },
        {
          path: '/profile',
          element: <LandlordProfilepage />
        },
        {
          path:'/TenantProfileView1',
          element:<TenantProfileVeiw1 />
        },
        {
          path:'/TransactionVeiw1',
          element:<TransactionVeiw1 />
        },
        {
          path:'/PropertyView1',
          element:<PropertyView1 />
        }
      ]
    },
    {
      element: <TenantPrivate  />,
      children: [
        {
          path: "/TenantHome",
          element: <TenantHome />
        },

     
        {
          path: "/TenantSettings",
          element: <TenantSettings />
        },
        {
          path: "/MaintainReq",
          element: <MainRequest showPopup={showPopup}  setShowPopup={ setShowPopup}closePopup={closePopup}/>
        },
        // {
        //   element: <TenantPayLayout />,
        //   children: [
        //     {
        //       path: "/TenantCards",
        //       element: <TenantCards />
        //     },
        //     {
        //       path: "/TenantPayment",
        //       element: <TenantPayment />
        //     },
        //   ]
        // },
      {
          path: "/TenantPayment",
             element: <TenantPayment showPopup={showPopup}  setShowPopup={ setShowPopup} closePopup={closePopup}/>
      },
        {
          path: "/TenantSub",
          element: <TenantSub />
        },
        {
          path: "/TenantMain",
          element: <TenMain showPopup={showPopup}  setShowPopup={setShowPopup}/>
        },
        {
          path:"/TenantProfile",
          element:<TenantProfile showPopup={showPopup}  setShowPopup={ setShowPopup} closePopup={closePopup}/>
        }
      ]
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
