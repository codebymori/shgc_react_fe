const Button = ({ label, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`transition-all duration-300 ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
