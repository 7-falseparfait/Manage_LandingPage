export function Button({
  children,
  variant = "primary",
  className = "",
  ...rest
}) {
  const baseStyles = "px-8 py-[0.8rem] font-bold rounded-3xl";
  const variants = {
    primary: "bg-primary text-very-light-gray",
    secondary: "bg-very-light-gray text-primary",
  };
  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
