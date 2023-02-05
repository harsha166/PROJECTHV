import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import EmployeeList from "/EmployeeList"

const EmployeeListCard = (employee) => {
  const [employees, setemployees] = useState([]);

  const retrieveAllemployees = async () => {
    const response = await axios.get("http://localhost:8100/api/employee-details/all");
    return response.data;
  };

  useEffect(() => {
    const getAllemployees = async () => {
      const allemployeeses = await retrieveAllemployees();
      if (allemployees) {
        setemployees(allemployeess);
      }
    };

    getAllemployees();
  }, []);

  return (
    <div class="list-group form-card border-color">
      <Link
        to="/employee-details/employees"
        class="list-group-item list-group-item-action bg-color custom-bg-text"
      >
        <b>Employee Details</b>
      </Link>

      {employees.map((employees) => {
        return (
          <Link
            to={`/employee-details/employee/${employee.id}/${employee.name}`}
            class="list-group-item list-group-item-action text-color custom-bg"
          >
            <b>{employee.name}</b>
          </Link>
        );
      })}
    </div>
  );
};

export default GetAllemployees;


