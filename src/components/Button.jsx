const Button = ({ content, onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className="bg-black text-white text-md font-semibold p-2 px-4 rounded-lg"
      >
        {content}
      </button>
    </div>
  );
};

export default Button;
