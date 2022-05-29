import { Card, Button } from "react-bootstrap";
import { offer } from "../models/offer.model";
import carReplacementImage from "../images/car-replacement.jpeg"

type Props = {
offer: offer
};

const Offer: React.FC<Props> = ({ offer }) => {
  return (
    <div data-testid='card'>
      <Card>
        <Card.Img data-testid='image'
          variant="top"
          src={offer.carGroupInfo.modelExample.imageUrl} // Change the value to "" empty string for a demonstration
          onError={({ currentTarget }) => {
            currentTarget.onerror = null; // prevents looping
            currentTarget.src = carReplacementImage;
          }}
        />
        <Card.Body>
          <Card.Title data-testid='title'>{offer.carGroupInfo.modelExample.name}</Card.Title>
          <Card.Text>
            {`Rent price per day: ${offer.prices.basePrice.amount.value} ${offer.prices.basePrice.amount.currency}`}
          </Card.Text>
          <Button
            data-testid='button'
            href={`https://www.google.com/search?q=Sixt+Munich+${offer.carGroupInfo.modelExample.name}`}
            variant="primary"
            target="_blank"
          >
            More infos
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Offer;
