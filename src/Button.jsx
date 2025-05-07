export function Button({
  children,
  variant = "primary",
  className = "",
  ...rest
}) {
  const baseStyles = `
      px-8 py-[0.8rem] font-bold rounded-3xl cursor-pointer 
      transition duration-300 
      hover:opacity-70 
      focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 
      active:opacity-100
    `;

  const variants = {
    primary:
      "bg-primary text-very-light-gray shadow-[0_4px_6px_-2px_hsl(12,88%,62%,0.4)]",
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
