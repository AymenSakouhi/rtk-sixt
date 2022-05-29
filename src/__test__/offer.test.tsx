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
const setup = async () => await render(<Offer offer={offer}/>);


it("Offer component renders without crashing", () => {
  setup();
  expect(screen.getByText("Test Model FireFly")).toBeInTheDocument();
});

it("Offer card is available", () => {
  setup();
  expect(screen.getByTestId('card')).toBeTruthy();
});

it("Offer card has a title", () => {
  setup();
  expect(screen.getByTestId('title')).toBeDefined();;
});



it("Offer component has an image source", () => {
   setup();
   const displayedImage = document.querySelector("img") as HTMLImageElement;
   expect(displayedImage.src).not.toBe("");
  });

  it("Offer card has a button", () => {
    setup();
    expect(screen.getByTestId('card')).toBeDefined();
  });