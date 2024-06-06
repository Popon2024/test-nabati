"use client";
import ServiceImage from "@/services/image";
import ServiceProduct from "@/services/product";
import { useEffect, useMemo, useState } from "react";
import NavbarLanguange from "@/components/NavbarLanguange";
import Image from "next/image";
import Company from "@/components/Company";

interface DataProductInterface {
  id: string;
  name: string;
  image: string;
}

export type LangInterface = "id" | "en";

export default function Home() {
  const [loading, setLoading] = useState<boolean>(false);
  const [languange, setLanguage] = useState<LangInterface>("id");
  const [dataProduct, setDataProduct] = useState<DataProductInterface[]>([]);

  const changeLanguange = (e: LangInterface) => {
    setLanguage(e);
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
          {dataProduct.map(({ id, name, image }) => (
            <div className="shadow-lg p-2 border border-gray-300 rounded-lg" key={id}>
              <div className="overflow-hidden rounded-lg">
                <Image alt="image-product" src={image} width={500} height={100} />
              </div>
              <div className="mt-2">{name}</div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
