import { Box, SimpleGrid, Image, Text, VStack } from "@chakra-ui/react";

const products = [
  {
    id: 1,
    name: "Smartphone",
    image: "/images/smartphone.jpg",
    description: "Latest model with all the new features.",
  },
  {
    id: 2,
    name: "Laptop",
    image: "/images/laptop.jpg",
    description: "High performance laptop for all your needs.",
  },
  {
    id: 3,
    name: "Headphones",
    image: "/images/headphones.jpg",
    description: "Noise-cancelling headphones for immersive sound.",
  },
];

const Products = () => (
  <Box p={4}>
    <SimpleGrid columns={[1, null, 3]} spacing="40px">
      {products.map((product) => (
        <VStack key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
          <Image src={product.image} alt={product.name} boxSize="200px" objectFit="cover" />
          <Text fontSize="xl" fontWeight="bold">
            {product.name}
          </Text>
          <Text>{product.description}</Text>
        </VStack>
      ))}
    </SimpleGrid>
  </Box>
);

export default Products;