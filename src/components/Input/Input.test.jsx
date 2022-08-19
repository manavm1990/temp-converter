import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderer from "react-test-renderer";
import Input from "./Input";

it("renders correctly", () => {
  const tree = renderer.create(
    <Input label="" value={0} changeHandler={() => {}} />
  );

  expect(tree).toMatchSnapshot();
});

it("calls changeHandler whenever input is changed", () => {
  const label = "celsius";
  const txtInput = "1000";

  // Arrange - create a mock for the changeHandler function
  const changeHandler = jest.fn();

  // Act - render the component
  // Avoid using an empty string for the label
  render(<Input label={label} value={0} changeHandler={changeHandler} />);

  // As per accessibility standards, the input element is labelled with the label prop
  const input = screen.getByLabelText(label);

  // Each key that is typed into the input should result in the changeHandler mock being called
  userEvent.type(input, txtInput);

  // Assert - check that the changeHandler was called
  expect(changeHandler).toHaveBeenCalledTimes(txtInput.length);
});
