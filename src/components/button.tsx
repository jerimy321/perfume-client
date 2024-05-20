export interface ButtonProps {
  text?: string;
  type?: string;
  onClick?: () => void;
  isActive?: boolean;
}

const Button = ({ text, type, onClick, isActive }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`cursor-pointer border-none rounded-lg px-5 py-2.5 text-lg whitespace-nowrap bg-slate-400 hover:bg-slate-300${isActive ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'} ${type}`}
    >
      {text}
    </button>
  );
};

export default Button;
