import { Suspense, useEffect, useState } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router'
import PropTypes from 'prop-types'
import PUBLIC_ROUTER from './router/PUBLIC_ROUTER.JSX'
import { useDispatch, useSelector } from 'react-redux'
import { checkAuth } from './redux/action/Auth/authenticationAction'
import PRIVATE_ROUTER from './router/PRIVATE_ROUTER'
import LayoutPage from './components/Layout/LayoutPage'
import Loading from './components/Loading/Loading'

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkAuth())
  }, [dispatch])

  const { authed, loading, } = useSelector((state) => state.authReducer)

  const PrivateRoute = ({ authed, children }) => {
    const location = useLocation();

    if (authed === null || authed === undefined) {
      return <Loading />
    }

  return authed ? children : <Navigate to="/signin" state={{ from: location }} replace />;
  }

  PrivateRoute.propTypes = {
    authed: PropTypes.bool,
    children: PropTypes.element,
  }

  if (loading) return <Loading />

  if (!authed) {
    // Condition if is not authed
    return (
      <div>
        <Routes>
          {PUBLIC_ROUTER.map((item) => (
            <Route
              key={item?.key}
              path={item?.path}
              element={
                <Suspense fallback={<Loading />}>
                  {item?.element}
                </Suspense>
              }>
            </Route>
          ))}
        </Routes>
      </div>
    )
  } else {
    return (
      <>
        <Routes>
          {PRIVATE_ROUTER.map((item) => {
            return (
              <Route
                key={item?.key}
                path={item?.path}
                element={
                  <Suspense fallback={<Loading />}>
                    <PrivateRoute authed={authed}>
                      <LayoutPage item={item}>
                        {item?.element}
                      </LayoutPage>
                    </PrivateRoute>
                  </Suspense>
                }>
              </Route>
            )
          })}
        </Routes>
      </>
    )
  }
}

export default App
