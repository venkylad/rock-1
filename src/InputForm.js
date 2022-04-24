import { Input } from "./Input";

const Form = ({ data, handleChange, handleSubmit, error }) => {
  return (
    <>
      <form
        className="row g-3 needs-validation"
        noValidate
        onSubmit={handleSubmit}
      >
        <Input
          label="First Name"
          type="text"
          name="firstName"
          value={data.firstName}
          onChange={handleChange}
          error={error}
          placeholder={"Jhon"}
        />
        <Input
          label="Last Name"
          type="text"
          name="lastName"
          value={data.lastName}
          onChange={handleChange}
          error={error}
          placeholder="Doe"
        />

        <Input
          label="Email"
          type="email"
          name="email"
          value={data.email}
          onChange={handleChange}
          error={error}
          placeholder="jhondoe@example.com"
        />

        <div className="col-12">
          <label for="validationCustom04" className="form-label">
            Gender
          </label>
          <select
            className="form-select"
            id="validationCustom04"
            required
            name="gender"
            value={data.gender}
            onChange={handleChange}
          >
            <option selected value="">
              Choose...
            </option>
            <option selected value="Male">
              Male
            </option>
            <option selected value="Female">
              Female
            </option>
            <option selected value="Other">
              Other
            </option>
          </select>
          {error && data.gender === "" && (
            <div className="text-danger">Choose Gender</div>
          )}
        </div>
        <Input
          label="Age"
          type="number"
          name="age"
          value={data.age}
          onChange={handleChange}
          error={error}
          placeholder="18"
        />

        <div className="col-12">
          <label for="validationCustom04" className="form-label">
            Martial Status
          </label>
          <div className="d-flex flex-wrap justify-space-around">
            <div className="form-check">
              <input
                className="mx-2"
                type="radio"
                id="validationFormCheck2"
                name="married"
                value="Married"
                onChange={handleChange}
                checked={data.married === "Married"}
                required
              />
              <label className="form-check-label" for="validationFormCheck2">
                Married
              </label>
            </div>
            <div className="form-check">
              <input
                className="mx-2"
                type="radio"
                id="validationFormCheck3"
                name="married"
                value="Divorced"
                onChange={handleChange}
                checked={data.married === "Divorced"}
                required
              />
              <label className="form-check-label" for="validationFormCheck3">
                Divorced
              </label>
            </div>
            <div className="form-check">
              <input
                className="mx-2"
                type="radio"
                id="validationFormCheck3"
                name="married"
                value="Single"
                onChange={handleChange}
                checked={data.married === "Single"}
                required
              />
              <label className="form-check-label" for="validationFormCheck3">
                Single
              </label>
            </div>
          </div>
          {error && data.married === "" && (
            <div className="text-danger">Select Martial Status</div>
          )}
        </div>

        <div className="col-12">
          <label className="form-check-label" for="validationFormCheck2">
            Education
          </label>
          <div className="d-flex flex-wrap justify-space-around">
            <div className="form-check">
              <input
                className="mx-2"
                type="checkbox"
                name="school"
                value="10th"
                onChange={handleChange}
                checked={data.school === "10th"}
                id="invalidCheck"
                required
              />
              <label className="form-check-label" for="invalidCheck">
                10
              </label>
            </div>
            <div className="form-check">
              <input
                className="mx-2"
                type="checkbox"
                name="inter"
                value="12th"
                onChange={handleChange}
                checked={data.inter === "12th"}
                id="invalidCheck"
                required
              />
              <label className="form-check-label" for="invalidCheck">
                12
              </label>
            </div>
            <div className="form-check">
              <input
                className="mx-2"
                type="checkbox"
                name="bTech"
                value="B.Tech"
                onChange={handleChange}
                checked={data.bTech === "B.Tech"}
                id="invalidCheck"
                required
              />
              <label className="form-check-label" for="invalidCheck">
                B.Tech
              </label>
            </div>
          </div>
        </div>
        <div className="col-12">
          <button className="btn btn-outline-primary" type="submit">
            Submit Details
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
