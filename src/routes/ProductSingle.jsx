import { Button, Card } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useDispatch } from "react-redux";
import { addToCart } from '../store/cartSlice';

const ProductSingle = (props) =>{

    const {title, price, description, image, rating} = props;
    const product = props;
const dispatch = useDispatch();

const handleAddToCart = () => {
    dispatch(addToCart(product))
}
    return (
        <Row xs={1} md={4} className="g-2">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col key={idx}>
    <Card style={{width: '18rem', padding: "1rem"}}>
        <Card.Img variant='top' src={image} />
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
                Price: ${price}
                <br />
                Rating: {rating.rate}
                <br />
                {description}
            </Card.Text>
            <Button variant="primary" onClick = {handleAddToCart}>Add Product to Cart</Button> 
        </Card.Body>
    </Card>
    </Col>
    ))}
    </Row>
    )
      }
export default ProductSingle;

// if it is in a function we do not need iinside the button