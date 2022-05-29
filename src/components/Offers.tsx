import { Row, Container, Col } from "react-bootstrap";
import Offer from "./Offer";
import { apiData } from "../models/offers.model";

type Props = {
  data: apiData;
};

const Offers: React.FC<Props> = ({ data }) => {
  return (
      <Container>
        <Row>
          {data.offers?.map((offer: any) => (
              <Col key={offer.id} md={4} sm={12} className="mb-2">
                <Offer offer={offer} />
              </Col>
          ))}
        </Row>
      </Container>
  );
};

export default Offers;
