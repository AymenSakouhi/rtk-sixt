import { screen, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../store";
import App from "../App";



it("at least a button should be displayed in the app", () => {

   render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(screen.getByText("Below are the list of offers")).toBeInTheDocument();
});
