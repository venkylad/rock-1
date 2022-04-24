export const Input = ({
  name,
  type,
  value,
  onChange,
  error,
  label,
  placeholder
}) => {
  return (
    <>
      <div className="col-12">
        <label className="form-label">
          <strong>{label}</strong>
        </label>
        <input
          type={type}
          className="form-control"
          name={name}
          value={value}
          required
          onChange={onChange}
          placeholder={placeholder}
        />
        {error && value === "" && (
          <div className="text-danger">Need {label}</div>
        )}
      </div>
    </>
  );
};
