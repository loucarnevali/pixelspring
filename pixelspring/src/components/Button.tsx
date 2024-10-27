interface ButtonProps {
  style?: string;
  label?: string;
  onClick?: (event: any) => void;
  type?: "submit" | "button" | "reset" | undefined;
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  style,
  label,
  type,
}) => {
  return (
    <button
      onClick={onClick}
      className={`${style} text-white px-4 py-2 rounded-lg`}
      type={type}
    >
      {label}
    </button>
  );
};
