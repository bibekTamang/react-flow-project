export const Button = ({ label, icon, className }) => {
  return (
    <button
      className={`${className} text-xs flex items-center justify-center gap-1 rounded-md font-bold shadow`}
    >
      <span>{icon}</span>
      <span>{label}</span>
    </button>
  );
};
