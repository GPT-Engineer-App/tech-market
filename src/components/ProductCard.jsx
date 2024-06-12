import { Box, Image, Text, Button } from "@chakra-ui/react";

const ProductCard = ({ product }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
      <Image src={product.image} alt={product.name} />
      <Text mt={2} fontSize="xl" fontWeight="semibold">
        {product.name}
      </Text>
      <Text mt={2}>${product.price}</Text>
      <Button mt={4} colorScheme="teal">
        Add to Cart
      </Button>
    </Box>
  );
};

export default ProductCard;