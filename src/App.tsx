
import { useEffect, useState } from "react";
import CustomText from "./components/CustomText";
const App = () => {

  const [text, setText] = useState("Hello");
  
  useEffect(() => {
    console.log("Hello from useEffect");
  }, [text]);

  return (
    <div className="mx-auto max-w-2xl p-4 flex flex-col items-center space-y-4">
      <CustomText text={text} setText={setText} />
    </div>
  );
}

export default App;
