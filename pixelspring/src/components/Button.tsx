interface ButtonProps {
  style?: string;
  label?: string;
  onClick?: (event: any) => void;
  type?: "submit" | "button" | "reset" | undefined;
  loading?: boolean;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  style,
  label,
  type,
  loading = false,
  disabled = false,
}) => {
  return (
    <button
      onClick={onClick}
      className={`${style} text-white px-4 py-2 rounded-lg`}
      type={type}
      disabled={disabled || loading}
    >
      {label}
    </button>
  );
};
