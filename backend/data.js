import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Rajitha',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],

  products: [
    {
      // _id: '1',
      name: 'Nike Slim Shirt',
      slug: 'nike-slim-shirt',
      category: 'Shirts',
      image: '/images/P1.jpg',
      price: 70,
      countInstock: 4,
      brand: 'Nike',
      rating: 4.6,
      numReviews: 10,
      description: 'high quality shirt',
    },
    {
      // _id: '2',
      name: 'Jordan Sneaker',
      slug: 'jordan-sneaker',
      category: 'Shoess',
      image: '/images/P7.jpg',
      price: 200,
      countInstock: 20,
      brand: 'Jordan',
      rating: 4.0,
      numReviews: 15,
      description: 'high quality shoes',
    },
    {
      // _id: '3',
      name: 'Adidas Fit Pant',
      slug: 'adidas-fit-pant',
      category: 'Pants',
      image: '/images/P3.jpg',
      price: 90,
      countInstock: 5,
      brand: 'Puma',
      rating: 4.3,
      numReviews: 10,
      description: 'high quality pant',
    },
    {
      // _id: '4',
      name: 'Tissot Watch',
      slug: 'tissot-watch',
      category: 'Watch',
      image: '/images/P6.jpg',
      price: 150,
      countInstock: 15,
      brand: 'Tissot',
      rating: 3.5,
      numReviews: 14,
      description: 'high quality watch for men',
    },
  ],
};
export default data;
