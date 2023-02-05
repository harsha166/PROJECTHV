import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
// im port PopUp from "../../components/PopUp/PopUp";
import classes from "./EmployeeList.module.css";

const EmployeeList = () => {
  const token = localStorage.getItem("jwt");
  const [empList, setEmpList] = useState([]);
  // const [trigger, setTrigger] = useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:8100/employees", {
        headers: {
          // 'Host': '<calculated when request is sent>',
          Authorization: `${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setEmpList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setEmpList]);
  return (
    <div>
      <table className={classes.empTable}>
        <caption>Employee Details</caption>
        <tr>
          <th>Name</th>
          <th>Designation</th>
          <th>Email ID</th>
          <th>mobileNumber</th>
        </tr>
        {empList?.map((emp, key) => {
          return (
            <>
              <tr
                id={key}
                className={classes.empRow}
                // onClick={() => {
                //   setTrigger(true);
                // }}
              >
                <td>{`${emp.firstName} ${emp.middleName} ${emp.lastName}`}</td>
                <td>{emp.designation}</td>
                <td>{emp.emailId}</td>
                <td>{emp.mobileNumber}</td>
              </tr>
            </>
          );
        })}
      </table>
    </div>
  );
};

export default EmployeeList;
