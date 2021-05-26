import React, { useState } from "react";
import { useParams } from "react-router";
import Input from "../layout/Input";

const StudentForm = () => {
  const { id } = useParams();
  const [student, setStudent] = useState({
    name: "",
    email: "",
    phone: "",
    standard: "",
    address1: "",
    address2: "",
  });

  const onInputChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };
  const submitForm = (e) => {
    e.preventDefault();

    if (id) {
      alert("updated");
    } else {
      alert("added");
    }
  };

  return (
    <div className="container">
      <div className="py-4">
        <div className="row">
          <div className="col-md-10 mx-auto">
            <div className="card card-body shadow">
              <form onSubmit={submitForm}>
                <div className="form-row form-group mb-4">
                  <Input
                    placeholder="Enter Student Name"
                    name="name"
                    value={student.name}
                    onChange={onInputChange}
                  />
                  <Input
                    placeholder="Enter Student E-mail"
                    type="email"
                    name="email"
                    value={student.email}
                    onChange={onInputChange}
                  />
                </div>
                <div className="form-row form-group mb-4">
                  <Input
                    placeholder="Enter Student Phone"
                    name="phone"
                    type="number"
                    value={student.phone}
                    onChange={onInputChange}
                  />
                  <Input
                    placeholder="Enter Student Class"
                    name="standard"
                    type="number"
                    value={student.standard}
                    onChange={onInputChange}
                  />
                </div>
                <div className="form-row form-group">
                  <Input
                    placeholder="Enter Student Address Line 1"
                    name="address1"
                    value={student.address1}
                    onChange={onInputChange}
                  />
                  <Input
                    placeholder="Enter Student Address Line 2"
                    name="address2"
                    value={student.address2}
                    onChange={onInputChange}
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  {id ? "Update Student" : "Add Student"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentForm;
