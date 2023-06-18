import { Outlet } from 'react-router-dom'
import { Footer, MainHeader } from '..'

function WebsiteLayout() {

    return (
        <>
            <MainHeader />
            <Outlet />
            <Footer />
        </>
    )
}

export default WebsiteLayout