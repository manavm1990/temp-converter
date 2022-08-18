import React from "react";
import "./App.css";
import Input from "./components/Input/Input";
import tryConvert from "./lib/tryConvert";

function App() {
  const [values] = React.useState({ celsius: 0, fahrenheit: 0 });

  const handleChange = (event) => {
    console.log(event.target.value);

    if (event.target.id === "celsius") {
      console.log(tryConvert(event.target.value, "toFahrenheit"));
    } else {
      console.log(tryConvert(event.target.value, "toCelsius"));
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
