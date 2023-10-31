import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashbord from "./component/dashbord/navrbar/dashbord/Dashbord";
import Appoinment from "./component/Appointment/Appoinment";
import Employe from "./component/employelogin/Employe";
import Employeregister from "./component/employeregister/Employeregister";
import Doctor from "./component/doctor/Doctor";
import AdminPage from "./component/admin/AdminPage";
import Leave from "./component/Leave/Leave";
import Editemploye from "./component/employeregister/Editemploye";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashbord />}></Route>
          <Route path="/appoinment" element={<Appoinment />}></Route>
          <Route path="/employelogin" element={<Employe />}></Route>
          <Route path="/employeregister" element={<Employeregister />}></Route>
          <Route path="/doctor" element={<Doctor />}></Route>
          <Route path="/admin" element={<AdminPage />}></Route>
          <Route path="/leave" element={<Leave />}></Route>
          <Route path="/editemploye" element={<Editemploye />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
