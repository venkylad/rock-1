import Form from "./InputForm";
import "./styles.css";
import { useState } from "react";
import ListCard from "./ListCard";

export default function App() {
  const initData = {
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    age: 18,
    married: "",
    school: "",
    inter: "",
    bTech: ""
  };

  const [users, setUsers] = useState([]);
  const [data, setData] = useState(initData);
  const [checkError, setCheckError] = useState(false);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const { firstName, lastName, email, gender, age, married } = data;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      firstName !== "" &&
      lastName !== "" &&
      email !== "" &&
      gender !== "" &&
      age !== "" &&
      married !== ""
    ) {
      setUsers([data, ...users]);
      setData(initData);
      setCheckError(false);
    } else {
      setCheckError(true);
    }
  };

  return (
    <div className="row m-4">
      <div className="col-6 mx-auto border border-secondary p-4 rounded-3">
        <Form
          data={data}
          error={checkError}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </div>
      <div className="col-6 mx-auto">
        {users?.map((user, i) => (
          <div key={i}>
            <ListCard user={user} />
          </div>
        ))}
      </div>
    </div>
  );
}
