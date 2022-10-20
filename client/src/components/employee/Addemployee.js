import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../mix.css";

export default function Addemployee() {
  const [inpval, setInpval] = useState({
    name: "",
    techskills: "",
    experience: "",
    communication: "",
    company: "",
  });

  const setVal = (e) => {
    const { name, value } = e.target;

    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };
  const addUserdata = async (e) => {
    e.preventDefault();

    const { name, techskills, experience, communication, company } = inpval;

    const data = await fetch("http://localhost:3001/emp/add-emp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        name,
        techskills,
        experience,
        communication,

        company,
      }),
    });

    const res = await data.json();
    // console.log(res.status);

    if (res.status === 201) {
      toast.success("Registration Successfully done 😃!", {
        position: "top-center",
      });
      setInpval({
        ...inpval,
        name,
        techskills,
        experience,
        communication,
        company,
      });
    }
  };

  return (
    <div>
      <section>
        <div className="form_data">
          <div className="form_heading">
            <h1>Employee Register</h1>
          </div>

          <form>
            <div className="form_input">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                onChange={setVal}
                value={inpval.name}
                name="name"
                id="name"
                placeholder=""
              />
            </div>
            <div className="form_input">
              <label htmlFor="techskills">Technical skills</label>
              <input
                type="text"
                onChange={setVal}
                value={inpval.techskills}
                name="techskills"
                id="techskills"
                placeholder=""
              />
            </div>
            <div className="form_input">
              <label htmlFor="experience">Experience</label>
              <div className="two">
                <input
                  type="trext"
                  value={inpval.experience}
                  onChange={setVal}
                  name="experience"
                  id="experience"
                  placeholder=""
                />
              </div>
            </div>

            <div className="form_input">
              <label htmlFor="communication">Communication</label>
              <div className="two">
                <input
                  type="text"
                  value={inpval.cpassword}
                  onChange={setVal}
                  name="communication"
                  id="communication"
                  placeholder=""
                />
              </div>
            </div>
            {/* <div className="form_input">
              <label htmlFor="technicalrating">Technicalrating</label>
              <div className="two">
                <input
                  type="text"
                  value={inpval.technicalrating}
                  onChange={setVal}
                  name="technicalrating"
                  id="technicalrating"
                  placeholder=""
                />
              </div>
            </div> */}
            <div className="form_input">
              <label htmlFor="company">Company</label>
              <div className="two">
                <input
                  type="text"
                  value={inpval.company}
                  onChange={setVal}
                  name="company"
                  id="company"
                  placeholder=""
                />
              </div>
            </div>

            <button className="btn" onClick={addUserdata}>
              <Link to="/dash" style={{ textDecoration: "none" }}>
                Submit
              </Link>
            </button>
            <button className="btn">
              <Link to="/dash" style={{ textDecoration: "none" }}>
                {" "}
                Go Back
              </Link>
            </button>
          </form>
          <ToastContainer />
        </div>
      </section>
    </div>
  );
}
