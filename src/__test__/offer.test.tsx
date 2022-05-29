import { screen, render } from "@testing-library/react";
import Offer from "../components/Offer";
import "@testing-library/jest-dom/extend-expect"



let offer = {
    id: '1',
    carGroupInfo: {
      modelExample: {
        name: 'Test Model FireFly',
        imageUrl: 'https://i.imgur.com/q8q3xYQ.png'
      }
    },
    prices: {
      basePrice: {
        amount: {
          value: '330',
          currency: 'Euro',
        }
      }
    }
}


it("Offer component renders without crashing", () => {
   render(
    <Offer offer={offer} />
  );
  expect(screen.getByText("Test Model FireFly")).toBeInTheDocument();
});

it("Offer component has an image", () => {

  const { getByTestId } = render(
    <Offer offer={offer} />
  );

  expect(getByTestId('card'));
});