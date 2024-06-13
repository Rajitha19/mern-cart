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
      price: 120,
      countInstock: 2,
      brand: 'Nike',
      rating: 4.6,
      numReviews: 10,
      description: 'high quality shirt',
    },
    {
      // _id: '2',
      name: 'Nike Fit Shirt',
      slug: 'nike-fit-shirt',
      category: 'Shirts',
      image: '/images/P2.png',
      price: 250,
      countInstock: 20,
      brand: 'Adidas',
      rating: 4.0,
      numReviews: 15,
      description: 'high quality shirt',
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
      description: 'high quality shirt',
    },
    {
      // _id: '4',
      name: 'Nike Slim Pant',
      slug: 'nike-slim-pant',
      category: 'Pants',
      image: '/images/P4.jpg',
      price: 100,
      countInstock: 15,
      brand: 'Nike',
      rating: 4.2,
      numReviews: 14,
      description: 'high quality shirt',
    },
  ],
};
export default data;
