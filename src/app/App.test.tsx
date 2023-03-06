/* eslint-disable testing-library/prefer-screen-queries */

import { render } from "@testing-library/react";

import App from "./App.js";

test("renders learn react link", () => {
  const { getByText } = render(<App />);

  expect(getByText(/learn/i)).toBeInTheDocument();
});
