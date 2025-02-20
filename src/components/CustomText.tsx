interface CustomTextProps {
  text: string;
  setText: (value: string) => void;
}

const CustomText = ({ text, setText }: CustomTextProps) => {
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const buttonHandler = () => {
    setText("Hello");
  };

  return (
    <>
      <h1 className="text-3xl text-center font-bold underline text-blue bg-emerald-200">
        Hello From TailwindCSS!
      </h1>
      <input
        className="border-2 border-black rounded-lg p-2"
        type="text"
        value={text}
        onChange={inputHandler}
      />
      {text}
      <button
        className="bg-blue-500 hover:bg-blue-700
         text-white font-bold py-2 px-4 rounded"
        onClick={buttonHandler}
      >
        Set to Hello
      </button>
    </>
  );
};

export default CustomText;
