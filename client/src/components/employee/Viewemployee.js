import React, { useState, useEffect } from "react";
import "./emp.css";
import { Link } from "react-router-dom";
// import Addemployee from "./Addemployee";

export const Viewemployee = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    let response = await fetch("https://github.com/misjyo/controlf5.git/emp/view-emp", {
      method: "GET",
      headers: { token: localStorage.getItem("token") },
    });
    let data = await response.json();
    setData(data.response);
    // console.log(data.results);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className="table-main">
        <p className="links">
          <Link
            to="/addemployee"
            style={{
              textDecoration: "none",
              color: "blue",
              backgroundColor: "transparent",
              fontSize: "22px",
            }}
          >
            Employee Register
          </Link>
        </p>
        {/* <Routes>
      <Route path="/addemployee" element={<Addemployee />} />
      </Routes> */}
        <table className=" container table mt-5">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Techskills</th>
              <th scope="col">Experience</th>
              <th scope="col">Communication</th>

              <th scope="col">Company</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return (
                <tr key={index}>
                  <td> {item.name} </td>
                  <td> {item.techskills} </td>

                  <td> {item.experience} </td>
                  <td> {item.communication}</td>

                  <td> {item.company}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
