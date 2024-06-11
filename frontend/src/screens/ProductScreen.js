import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { Badge, Button, Card, Col, ListGroup, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Rating from '../components/Rating';
import { Store } from '../Store';

function ProductScreen() {
  const params = useParams();
  const { slug } = params;

  const [product, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`/api/products/slug/${slug}`);
      setProducts(result.data);
    };
    fetchData();
  }, [slug]);
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart } = state;
  const addtoCartHandler = async () => {
    const existItem = cart.cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${product._id}`);
    if (data.countInstock < quantity) {
      window.alert('Sorry, Product is out of stock');
      return;
    }
    ctxDispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...product, quantity },
    });
  };
  return (
    <div>
      <Row>
        <Col md={6}>
          <img
            className="img-large"
            src={product.image}
            alt={product.name}
          ></img>
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h1>{product.name}</h1>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                rating={product.rating}
                numReviews={product.numReviews}
              ></Rating>
            </ListGroup.Item>
            <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
            <ListGroup.Item>
              Description:
              <p>{product.description}</p>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col>${product.price}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>
                      {product.countInstock > 0 ? (
                        <Badge bg="success">In stock</Badge>
                      ) : (
                        <Badge bg="danger">Not in stock</Badge>
                      )}
                    </Col>
                  </Row>
                </ListGroup.Item>
                {product.countInstock > 0 && (
                  <ListGroup.Item>
                    <div className="d-grid">
                      <Button onClick={addtoCartHandler} variant="primary">
                        Add to Cart
                      </Button>
                    </div>
                  </ListGroup.Item>
                )}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
export default ProductScreen;
