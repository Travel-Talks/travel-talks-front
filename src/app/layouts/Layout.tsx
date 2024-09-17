import { Outlet } from 'react-router-dom'

export const Layout = () => {
    return (
        <>
            <section>header</section>
            <main>
                <Outlet />
            </main>
            <section>footer</section>
        </>
    )
}
