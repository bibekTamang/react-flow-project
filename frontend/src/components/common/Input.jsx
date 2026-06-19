import { ControlLabel } from "./ControlLabel";

export const Input = ({ label, type, placeholder }) => {
  return (
    <div className="mt-2">
      <ControlLabel label={label} controlType={type} />
      <input
        type="text"
        placeholder={placeholder}
        className="nodrag px-3 py-2 border border-gray-300 rounded-md outline-none w-full text-xs"
      />
    </div>
  );
};
