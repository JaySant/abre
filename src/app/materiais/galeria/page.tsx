import { getContentByContentType } from "@/lib/contentful";
import { Gallery, ResolvedGallery } from "@/types/contentful.types";
import resolveResponse from "contentful-resolve-response";
import { AlbumList } from "./components/album-list";
import styles from "./styles.module.css";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galeria",
  description: "Acompanhe nossos eventos",
};

export default async function GaleriaPage() {
  const data = await getContentByContentType<Gallery>({
    contentType: "gallery",
    order: "sys.createdAt",
  });

  const albums: ResolvedGallery = resolveResponse(data) || [];

  return (
    <section className={styles.album_container}>
      <AlbumList albums={albums} />
    </section>
  );
}
