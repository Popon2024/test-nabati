const ServiceImage = async () => {
  const result = await fetch(process.env.NEXT_PUBLIC_DB_HOST + "image.json")
    .then((response) => response.json())
    .then((data) => data?.data);
  return result;
};

export default ServiceImage;
