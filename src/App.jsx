import { useState } from "react";
import "./App.css";
import Input from "./components/Input/Input";
import tryConvert from "./lib/tryConvert";

function App() {
  const [values, setValues] = useState({ celsius: 0, fahrenheit: 0 });

  const handleChange = (event) => {
    // TODO: Refactor this to be more DRY
    if (event.target.id === "celsius") {
      setValues({
        celsius: event.target.value,
        fahrenheit: tryConvert(event.target.value, "toFahrenheit"),
      });
    } else {
      setValues({
        celsius: tryConvert(event.target.value, "toCelsius"),
        fahrenheit: event.target.value,
      });
    }
  };

  return (
    <>
      <h1 className="my-4 text-center text-2xl font-bold">
        Temperature Converter
      </h1>

      <form className="mx-auto mt-8 flex w-1/3 justify-between">
        <Input
          label="Celsius"
          value={values.celsius}
          changeHandler={handleChange}
        />
        <Input
          label="Fahrenheit"
          value={values.fahrenheit}
          changeHandler={handleChange}
        />
      </form>
    </>
  );
}

export default App;
