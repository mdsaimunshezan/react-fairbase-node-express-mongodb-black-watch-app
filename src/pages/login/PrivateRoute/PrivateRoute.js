import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'

const PrivateRoute = ({ children, ...rest }) => {
    const {user,loding} = useAuth()
    if(loding){
      return <h3 className="text-white">Loding...</h3>
    }
    return (
        <Route
        {...rest}
        render={({ location }) =>
        user.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    )
}

export default PrivateRoute
