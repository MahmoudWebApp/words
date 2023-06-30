import { Route, Routes } from "react-router-dom";
import { About, Assessments, Books, Contact, Home, Library, Packages } from "../scenes/websitePages";
import { CreatePassword, CreateSchool, Login, Register, ResetPassword } from "../scenes/anonymousPages";
import AnonymousRoute from "./anonymousRoute";
import { WebsiteLayout } from "../layout";
import { AnimatePresence, motion } from "framer-motion";








const Router = () => {
  return (
    <>
      <AnimatePresence>
        <Routes>
          <Route element={
            <AnonymousRoute>
              <WebsiteLayout />
            </AnonymousRoute>
          }>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/assessments" element={<Assessments />} />
            <Route path="/books" element={<Books />} />
            <Route path="/library" element={<Library />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/create-password" element={<CreatePassword />} />
            <Route path="/school-create-account" element={<CreateSchool />} />
            <Route path="*" element={<div className="pt-44"><h1 className=" text-center text-word-green-dark text-2xl">Page Not Found</h1></div>} />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  )
}

export default Router

