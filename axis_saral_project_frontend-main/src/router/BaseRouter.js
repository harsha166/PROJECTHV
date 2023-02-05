import { Route, Routes } from "react-router-dom";
import EmployeeList from "../pages/EmployeeList/EmployeeList";
import HomePage from "../pages/HomePage/HomePage";
import AdminLogin from "../pages/LoginPages/AdminLogin";
import EmployeeLogin from "../pages/LoginPages/EmployeeLogin";
import NewsFeed from "../pages/NewsFeed";
import PolicyDocuments from "../pages/PolicyDocuments";
import ProjectDetails from "../pages/ProjectDetails";
import SalaryDetails from "../pages/SalaryDetails";

const BaseRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/employee-login" element={<EmployeeLogin />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/news-feed" element={<NewsFeed />} />
        <Route path="/project-details" element={<ProjectDetails />} />
        <Route path="/salary-details" element={<SalaryDetails />} />
        <Route path="/policy-documents" element={<PolicyDocuments />} />
        <Route path="/employee-list" element={<EmployeeList />} />
      </Routes>
    </>
  );
};

export default BaseRouter;
