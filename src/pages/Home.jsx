import { Box, SimpleGrid, Heading } from "@chakra-ui/react";
import ProductCard from "../components/ProductCard";

const sampleProducts = [
  {
    id: 1,
    name: "Smartphone",
    price: 699,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Laptop",
    price: 999,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Headphones",
    price: 199,
    image: "https://via.placeholder.com/150",
  },
];

const Home = () => {
  return (
    <Box p={4}>
      <Heading mb={6}>Our Products</Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        {sampleProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Home;