import { useState } from "react";

const RegisterAdminForm = () => {
  const initialUserState = {
    firstName: "",
    lastName: "",
    emailId: "",
    password: "",
    phoneNo: "",
    street: "",
    city: "",
    pincode: "",
  };

  const [user, setUser] = useState(initialUserState);

  const handleUserInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const saveUser = () => {
    fetch("http://localhost:8080/api/user/admin/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((result) => {
      console.warn("result", result);
      result.json().then((res) => {
        console.log("response", res);
      });
    });
  };

  const resetForm = () => {
    setUser(initialUserState);
  };

  return (
    <div>
      <div className="mt-2 d-flex aligns-items-center justify-content-center ms-2 me-2 mb-2">
        <div className="card form-card border-color" style={{ width: "25rem" }}>
          <div className="card-header bg-color">
            <h5 className="card-title">Add Admin</h5>
          </div>
          <div className="card-body">
            <form>
              {/* ... (your existing form fields) ... */}
              <button
  type="submit"
  style={{ backgroundColor: 'blue', color: 'white' }}
  className="me-2"
  onClick={saveUser}
>
  Register
</button>

              <button
                type="button"
                className="btn btn-secondary"
                onClick={resetForm}
              >
                Reset
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterAdminForm;
