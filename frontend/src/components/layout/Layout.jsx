import Navbar from '../navbar/Navbar'
import SideBar from '../sidebar/Sidebar'

function Layout({ children }) {
    return (
        <div>

            {/* Mobile Navbar hidden on desktop  */}
            <div className=" md:hidden">
                <Navbar />
            </div>
            
            <div class="max-h-screen flex ">

                {/* Sidebar hidden on mobile  */}
                <nav class=" w-72 max-[1000px]:w-64 flex-none ... hidden md:block">
                    <SideBar />
                </nav>

                {/* main content  */}
                <main class="flex-1 min-w-0 overflow-auto ...">
                    <div className=" flex  justify-center">
                        {children}
                    </div>
                </main>

            </div>
        </div>
    )
}

export default Layout