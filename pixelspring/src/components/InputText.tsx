interface InputTextProps {
  id?: string;
  style?: string;
  label?: string;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  type?: string;
}

export const InputText: React.FC<InputTextProps> = ({
  style,
  type = "text",
  ...outrasProps
}) => {
  return (
    <input
      type={type}
      {...outrasProps}
      className={`${style} border px-3 py-2 rounded-lg text-gray-900 w-full sm:w-[300px] md:w-[500px]`}
    />
  );
};
