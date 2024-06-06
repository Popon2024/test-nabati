import Image from "next/image";

const ListProduct = ({ onOpenModal, data }: any) => {
  const { id, image, name } = data;
  return (
    <div className="shadow-lg p-2 border border-gray-300 rounded-lg" key={id}>
      <div
        className="transition duration-500 overflow-hidden rounded-lg cursor-pointer brightness-100 hover:brightness-50"
        onClick={() => onOpenModal(data)}
      >
        <Image alt="image-product" src={image} width={500} height={100} />
      </div>
      <div className="mt-2">
        ID: {id} - {name}
      </div>
    </div>
  );
};

export default ListProduct;
