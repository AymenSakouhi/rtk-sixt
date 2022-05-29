import { screen, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../store";
import App from "../App";



it("The App does work with fetching data correctly", () => {

   render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(screen.getByText("Below are the list of offers")).toBeInTheDocument();
});
