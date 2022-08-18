import PropTypes from "prop-types";

export default function Input({ label }) {
  return (
    <div className="flex flex-col gap-y-1">
      <label htmlFor={label.toLowerCase()}>{label}</label>
      <input
        type="number"
        id={label.toLowerCase()}
        className="w-36 rounded border"
      />
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
};
