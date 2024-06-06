"use client";
import ServiceImage from "@/services/image";
import ServiceProduct from "@/services/product";
import { useEffect, useMemo, useState } from "react";
import NavbarLanguange from "@/components/NavbarLanguange";
import Company from "@/components/Company";
import ModalImage from "@/components/ModalImage";
import ListProduct from "@/components/ListProduct";

interface DataProductInterface {
  id: string;
  name: string;
  image: string;
}

export type LangTYpe = "id" | "en";

export type SelectImageType = string | null;

export default function Home() {
  const [loading, setLoading] = useState<boolean>(false);
  const [languange, setLanguage] = useState<LangTYpe>("id");
  const [dataProduct, setDataProduct] = useState<DataProductInterface[]>([]);
  const [selectImage, setSelectImage] = useState<SelectImageType>();

  const changeLanguange = (e: LangTYpe) => {
    setLanguage(e);
  };

  const onCloseModal = () => {
    document.body.style.overflow = "auto";
    setSelectImage(null);
  };

  const onOpenModal = (data: any) => {
    document.body.style.overflow = "hidden";
    setSelectImage(data);
  };

  const getData = async () => {
    setLoading(true);
    const images = await ServiceImage();
    const products = await ServiceProduct();
    const result: DataProductInterface[] = products.map((e: any) => {
      const { id: id_product, name } = e;
      const image =
        images.find(({ id }: any) => id.indexOf(id_product) >= 0)?.image ??
        "https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg";
      return { ...e, image, name: name || "N/A" };
    });

    setDataProduct(result);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <main className="min-h-screen p-4">
      <NavbarLanguange onChange={changeLanguange} />
      <div>
        <Company language={languange} />
      </div>
      {loading && <div>Loading...</div>}
      {!loading && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {dataProduct.map((data, i) => (
            <ListProduct key={i} onOpenModal={onOpenModal} data={data} />
          ))}
        </div>
      )}

      {selectImage && <ModalImage onClose={onCloseModal} data={selectImage} />}
    </main>
  );
}
