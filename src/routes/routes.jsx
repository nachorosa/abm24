import { Route, Routes, useLocation } from 'react-router-dom'
import { lazy } from 'react';
import { paths } from './paths';
 
const Home = lazy(() => import('../pages/Home'))
const Project = lazy(() => import('../pages/Project'))
const Service = lazy(() => import('../pages/Service'))
const Contact = lazy(() => import('../pages/Contact'))

const AppRoutes = () => {
    const location = useLocation()

    return (
        <>
            <Routes location={location} key={location.pathname}>
                <Route path={"/*"} element={<Home />} />
                <Route path={paths.home} element={<Home />} />
                <Route path={paths.proyectos} element={<Project />} />
                <Route path={paths.servicios} element={<Service />} />
                <Route path={paths.contacto} element={<Contact />} />
            </Routes>
        </>
    )
}

export default AppRoutes