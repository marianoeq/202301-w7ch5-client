/* eslint-disable testing-library/prefer-screen-queries */

import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../store/store.js";
import App from "./App.js";

test("renders learn react link", () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(getByText(/learn/i)).toBeInTheDocument();
});
