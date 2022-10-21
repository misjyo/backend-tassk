import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "./ContextProvider/Context";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Addemployee from "./employee/Addemployee";
import { Viewemployee } from "./employee/Viewemployee";
import { Button } from "@mui/material";
// import Addemployee from "./employee/Addemployee";

const Dashboard = () => {
  const { logindata, setLoginData } = useContext(LoginContext);
  console.log(logindata);

  const [data, setData] = useState(false);

  const history = useNavigate();

  const DashboardValid = async () => {
    let token = localStorage.getItem("usersdatatoken");

    const res = await fetch("/validuser", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });

    const data = await res.json();
    // console.log(data);

    if (data.status === 401 || !data) {
      history("*");
      // console.log("error page")
    } else {
      // console.log("user verify");
      setLoginData(data);
      history("/dash");
    }
  };

  useEffect(() => {
    setTimeout(() => {
      DashboardValid();
      setData(true);
    }, 2000);
  }, []);

  return (
    <div>
      <div>
        {/* <Button>Add Employee </Button> */}
      </div>
      {data ? (
        <div>
          {/* <h5 style={{ textAlign: "center" }}>
            User Email:{logindata ? logindata.ValidUserOne : ""}
          </h5> */}
          <Viewemployee />
        </div>
      ) : (
        <div>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}
          >
            Loading... &nbsp;
            <CircularProgress />
          </Box>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
