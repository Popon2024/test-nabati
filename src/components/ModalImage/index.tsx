import Image from "next/image";

const ModalImage = ({ onClose, data }: any) => {
  const { image, name } = data;
  return (
    <div className="transition duration-700 ease-in-out flex top-0 bottom-0 left-0 right-0 justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-30">
      <div
        onClick={onClose}
        className="absolute top-0 bottom-0 left-0 right-0 z-40 bg-black opacity-20"
      ></div>
      <div className="fixed z-50 w-30 bg-white shadow-lg rounded-lg border border-gray-300">
        <div className="flex justify-between p-2">
          <div className="font-medium">{name}</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            onClick={onClose}
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 cursor-pointer"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </div>
        <Image className="mt-1" alt="modal-image-product" src={image} width={500} height={100} />
      </div>
    </div>
  );
};

export default ModalImage;
