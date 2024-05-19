export interface ButtonProps {
  text?: string;
  type?: string;
  onClick?: () => void;
}

const Button = ({ text, type, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`cursor-pointer border-none rounded-lg px-5 py-2.5 text-lg whitespace-nowrap bg-slate-400 hover:bg-slate-300 ${type}`}
    >
      {text}
    </button>
  );
};

export default Button;
