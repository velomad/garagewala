import React from 'react'
import { Footer, Navbar } from './components'

function LandingPageLayout({ children, withFooter }) {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div>
                {children}
            </div>
            {/* <div>
                <Footer />
            </div> */}
        </div>
    )
}

export default LandingPageLayout
