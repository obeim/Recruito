interface Props {
  text: string;
  rootClassName?: string;
}
const Button = ({ text, rootClassName }: Props) => {
  return (
    <button className={`relative ${rootClassName}`}>
      <div className="bg-secondary/10 rounded-full p-1">
        <div className="bg-primary text-white rounded-full bg-gradient-to-r from-primary to-secondary w-full h-full flex justify-center items-center px-4 py-2 border-white/80 border font-semibold">
          {text}
        </div>
      </div>
    </button>
  );
};

export default Button;
