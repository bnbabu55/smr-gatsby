import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import ContactForm from "./ContactForm"

const Layout = ({ isHomePage, children }) => {
  return (
    <div data-is-root-path={isHomePage} className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 relative">
        {children}

        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
