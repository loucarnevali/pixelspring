"use client";

import {
  Template,
  ImageCard,
  Button,
  InputText,
  useNotification,
  AuthenticatedPage,
} from "@/components";
import { Image } from "@/resources/image/image.resource";
import { useImageService } from "@/resources";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function GaleriaPage() {
  const useService = useImageService();
  const notification = useNotification();
  const [images, setImages] = useState<Image[]>([]);
  const [query, setQuery] = useState<string>("");
  const [extension, setExtension] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  // Função para buscar as imagens
  async function fetchImages() {
    setLoading(true);
    const result = await useService.search(query, extension);
    setImages(result);
    setLoading(false);

    // Notificação se não houver resultados
    if (!result.length) {
      notification.notify("No result found", "warning");
    }
  }

  // Chama a busca de imagens ao montar o componente
  useEffect(() => {
    fetchImages(); // Carrega todas as imagens ao montar
  }, []); // O array vazio significa que isso só será executado uma vez

  // Função para buscar imagens com base na pesquisa
  async function searchImage() {
    await fetchImages(); // Chama a mesma função para pesquisar
  }

  //renderiza o card
  function renderImageCard(image: Image) {
    return (
      <ImageCard
        key={image.url}
        nome={image.name}
        src={image.url}
        tamanho={image.size}
        extension={image.extension}
        dataUpload={image.uploadDate}
      />
    );
  }

  // mapeia e apresenta todos os cards
  function renderAllImageCards() {
    return images.map(renderImageCard);
  }

  return (
    <AuthenticatedPage>
      <Template loading={loading}>
        <section className="flex flex-col items-center justify-center my-5">
          <div className="flex space-x-4">
            <InputText
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Type name or tags"
            />

            <select
              onChange={(event) => setExtension(event.target.value)}
              className="border px-4 py-2 rounded-lg text-gray-900"
            >
              <option value=""> All formats</option>
              <option value="PNG">PNG</option>
              <option value="JPEG">JPEG</option>
              <option value="GIF">GIF</option>
            </select>

            <Button
              style="bg-indigo-500 hover:bg-indigo-400"
              label="Search"
              onClick={searchImage}
            />

            <Link href="/formulario">
              <Button
                style="bg-yellow-500 hover:bg-yellow-400"
                label="Add New"
              />
            </Link>
          </div>
        </section>

        <section className="grid grid-cols-4 gap-8">
          {renderAllImageCards()}
        </section>
      </Template>
    </AuthenticatedPage>
  );
}
