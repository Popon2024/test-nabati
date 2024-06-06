const ServiceProduct = async () => {
  const result = await fetch(process.env.NEXT_PUBLIC_DB_HOST + "product.json")
    .then((response) => response.json())
    .then((data) => data?.data);
  return result;
};

export default ServiceProduct;
