import React from 'react'
import { Route } from 'react-router-dom';
import MyRoutes from './Routes';

function RouteGuard() {

    function hasJWT(){
        let tokenFlag = false;

        // check user has JWT token
        localStorage.getItem("jwtToken") ? tokenFlag = true : tokenFlag= false

        return tokenFlag
    }

  return (
    <Route {...rest}
            render={props =>{
                hasJWT()? <MyRoutes {...props}/> : <Redirect to={{pathname: '/login'}} />
            }}
            />
  )
}

export default RouteGuard