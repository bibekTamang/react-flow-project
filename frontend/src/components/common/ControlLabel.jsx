export const ControlLabel = ({ label, controlType }) => {
  return (
    <div className="flex justify-between mb-1">
      {label && (
        <label className="text-xs font-semibold text-brand-dark mb-1">
          {label}
        </label>
      )}
      {controlType && (
        <div className="bg-brand-primary text-white rounded-md text-xs flex items-center px-1">
          {controlType}
        </div>
      )}
    </div>
  );
};
