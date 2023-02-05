import { Link } from "react-router-dom";
import { isLogin, logOut } from "../../utils/CheckLogin";
import classes from "./NavBar.module.css";

const Navbar = () => {
  const handleClick = () => {
    logOut();

    window.reload("/");
  };

  return (
    <header className={classes.header}>
      <div>
        <nav>
          <ul>
            <li>
              <Link to={"/"} className={classes.logo}>
                Axis Bank
              </Link>
            </li>
            <li>
              <Link to={"/employee-list"}>Employees</Link>
            </li>
            <li>
              <Link to={"/policy-documents"}>Policy Documents</Link>
            </li>
            <li>
              <Link to={"/my-documents"}>My Documents</Link>
            </li>
            <li>
              <Link to={""}>Projects</Link>
            </li>
            <li>
              <Link to={""}>Our Services</Link>
            </li>
            <li>
              {isLogin ? (
                <Link
                  to={""}
                  onClick={() => {
                    handleClick();
                  }}
                >
                  Log Out
                </Link>
              ) : (
                <Link to="log-in">Log in</Link>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
