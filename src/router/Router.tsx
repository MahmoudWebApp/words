import { Route, Routes, useNavigate } from "react-router-dom";
import { About, Assessments, Books, Contact, Home, Library, Packages } from "../scenes/websitePages";
import { AssessmentTest, CreatePassword, CreateSchool, Login, Register, ResetPassword } from "../scenes/anonymousPages";
import AnonymousRoute from "./anonymousRoute";
import { WebsiteLayout } from "../layout";
import { AnimatePresence } from "framer-motion";
import AssessmentsRoute from "./assessmentsRoute";
// import { ProtectedAdminRoute } from "./ProtactRoute";
import AdminLayout from "../layout/adminLayout/AdminLayout";
import { Button, Result } from "antd";
import { t } from "i18next";
import { AssessmentAdmin, SchoolAdmin, StartPage, StudentAdmin ,ActivitiesAdmin, UsersAdmin} from "../scenes/admin";


const Router = () => {
  const navigate = useNavigate();
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
          <Route element={<AssessmentsRoute>
            <AssessmentTest />
          </AssessmentsRoute>} path="/assessments-test" />

          <Route
            element={
              // <ProtectedAdminRoute>
              <AdminLayout />
              // </ProtectedAdminRoute>
            }
          >
            <Route path="/admin/access-denied" element={<Result
              status="403"
              title="403"
              subTitle={`${t("Sorry, you are not authorized to access this page.")}`}
              extra={<Button type="primary" onClick={() => { navigate("/admin") }}>{`${t("Back Home")}`}</Button>}
            />} />
            <Route path="/admin" element={<StartPage />} />
            <Route path="/admin/users" element={<UsersAdmin />} />
            <Route path="/admin/students" element={<StudentAdmin />} />
            <Route path="/admin/schools" element={<SchoolAdmin />} />
            <Route path="/admin/activities" element={<ActivitiesAdmin />} />
            <Route path="/admin/assessments" element={<AssessmentAdmin />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  )
}

export default Router

