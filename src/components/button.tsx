export interface ButtonProps {
  text?: string;
  type?: string;
  onClick?: () => void;
  isActive?: boolean;
  imgSrc?: string;
}

const Button = ({ text, type, onClick, isActive, imgSrc }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`${type} flex items-center justify-center cursor-pointer whitespace-nowrap${isActive ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'} `}
    >
      {imgSrc && <img src={imgSrc} alt="" className="inline-block mr-2" />}
      {text}
    </button>
  );
};

export default Button;
