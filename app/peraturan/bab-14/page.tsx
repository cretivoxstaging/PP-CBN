"use client";

import { useRef, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function BabXIV() {
  const searchParams = useSearchParams();
  const [hash, setHash] = useState<string | null>(null);
  const [openItem, setOpenItem] = useState<string | undefined>(undefined);

  const pasal54Ref = useRef<HTMLDivElement>(null);
  const pasal55Ref = useRef<HTMLDivElement>(null);
  const pasal56Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setHash(searchParams.get("hash") || window.location.hash.replace("#", ""));
  }, [searchParams]);

  useEffect(() => {
    if (!hash) return;

    const valueMap: Record<string, string> = {
      "pasal-54": "pasal-54",
      "pasal-55": "pasal-55",
      "pasal-56": "pasal-56",
    };

    const refMap: Record<string, React.RefObject<HTMLDivElement | null>> = {
      "pasal-54": pasal54Ref,
      "pasal-55": pasal55Ref,
      "pasal-56": pasal56Ref,
    };

    const accordionValue = valueMap[hash];
    if (accordionValue) {
      setOpenItem(accordionValue);
    }

    const targetRef = refMap[hash];
    if (targetRef?.current) {
      setTimeout(() => {
        targetRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [hash]);

  return (
    <div className="container py-5 p-5 md:p-7">
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Beranda</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/peraturan">Peraturan</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/peraturan/bab-14">BAB XIV: PENUTUP</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-3/4">
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter">BAB XIV: PENUTUP</h1>
              <p className="text-muted-foreground">
                Ketentuan mengenai interpretasi, amandemen, penyelesaian sengketa, dan ketentuan penutup peraturan perusahaan.
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4" value={openItem} onValueChange={setOpenItem}>
              <div ref={pasal54Ref}>
                <AccordionItem value="pasal-54" id="pasal-54">
                  <AccordionTrigger className="text-lg md:text-xl text-left font-semibold">
                    PASAL 54: Interpretasi Dan Amandemen
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-4">
                    <ol className="list-decimal pl-6 space-y-4">
                      <li>
                        Perusahaan berhak untuk menafsirkan semua ketentuan-ketentuan yang termuat di dalam pasal-pasal
                        maupun ayat-ayat dari Peraturan Perusahaan ini sesuai dengan makna, arti, dan maksud tujuannya
                        dalam pembinaan Hubungan Industrial.
                      </li>
                      <li>
                        Peraturan Pelaksanaan yang sekiranya diperlukan sehubungan dengan Peraturan Perusahaan ini akan
                        ditetapkan dengan Surat Keputusan Direksi.
                      </li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>
              </div>

              <div ref={pasal55Ref}>
                <AccordionItem value="pasal-55" id="pasal-55">
                  <AccordionTrigger className="text-lg md:text-xl text-left font-semibold">
                    PASAL 55: Penyelesaian Sengketa
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-4">
                    <ol className="list-decimal pl-6 space-y-4">
                      <li>
                        Setiap perbedaan yang dapat menimbulkan perselisihan antara Perusahaan dan RA Karyawan sehubungan dengan pelaksanaan Peraturan Perusahaan ini, pada tahap awal harus segera dibicarakan dan diselesaikan di lingkungan Perusahaan melalui musyawarah untuk mufakat dengan atasan langsung atau pihak terkait.
                      </li>
                      <li>
                        Apabila pada tahap awal tidak dapat diselesaikan, maka keduanya atau salah satunya dapat mengupayakan penyelesaian perselisihan melalui Lembaga penyelesaian perselisihan hubungan industrial sesuai dengan peraturan perundang-undangan yang berlaku.
                      </li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>
              </div>

              <div ref={pasal56Ref}>
                <AccordionItem value="pasal-56" id="pasal-56">
                  <AccordionTrigger className="text-lg md:text-xl text-left font-semibold">
                    PASAL 56: Penutup
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-4">
                    <ol className="list-decimal pl-6 space-y-4">
                      <li>
                        Hal-hal yang belum tercantum atau diatur dalam Peraturan Perusahaan ini akan diatur lebih lanjut dalam peraturan pelaksanaan/teknis yang menjadi Kebijakan Perusahaan dengan memperhatikan peraturan perundang-undangan yang berlaku khususnya tentang ketenagakerjaan.
                      </li>
                      <li>
                        Masa berlaku Peraturan Perusahaan ini adalah 2 (dua) tahun dan mulai berlaku setelah mendapat pengesahan dari Dinas Tenaga Kerja, Transmigrasi dan Energi Provinsi DKI Jakarta.
                      </li>
                      <li>
                        Peraturan Perusahaan ini dapat diubah, ditambah, atau disesuaikan dengan keadaan, suasana, kebutuhan dan masalah yang mungkin timbul di kemudian hari dengan tidak mengurangi hak-hak yang ditetapkan oleh Pekerja dan dengan memperoleh pengesahan dari Dinas Tenaga Kerja, Transmigrasi, dan Energi Provinsi DKI Jakarta.
                      </li>
                      <li>
                        Peraturan Perusahaan ini dituangkan dalam bentuk buku dan/atau media elektronik dan dibagikan kepada seluruh Karyawan.
                      </li>
                      <li>
                        Perubahan dilakukan oleh Perusahaan dengan memperhatikan aspirasi yang ada di lingkungan Karyawan, kondisi Perusahaan serta ketentuan peraturan perundangan yang berlaku.
                      </li>
                      <li>
                        Peraturan Perusahaan ini tetap berlaku sampai dengan disahkannya peraturan perusahaan yang baru.
                      </li>
                      <li>
                        Peraturan Perusahaan ini wajib untuk diketahui, dijalankan dan dipatuhi oleh seluruh Karyawan.
                      </li>
                      <li>
                        Peraturan Perusahaan ini akan diumumkan kepada seluruh Karyawan untuk diketahui dan dilaksanakan sebagaimana mestinya.
                      </li>
                      <li>
                        Demikian Peraturan Perusahaan ini ditetapkan, apabila dikemudian hari terdapat perubahan maka akan ditetapkan berdasarkan Surat Keputusan tersendiri yang menjadi bagian yang tidak terpisahkan dari Peraturan Perusahaan ini.
                      </li>
                      <li>
                        Demikian Peraturan Perusahaan ini ditetapkan, apabila dikemudian hari terdapat perubahan maka akan ditetapkan berdasarkan Surat Keputusan tersendiri yang menjadi bagian yang tidak terpisahkan dari Peraturan Perusahaan ini.
                      </li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>
              </div>
            </Accordion>

            <div className="flex justify-between mt-6">
              <Button
                variant="outline"
                asChild
                className="bg-black text-white hover:bg-gray-700 hover:text-white p-2"
              >
                <Link href="/peraturan/bab-13">
                  <ArrowLeft className="mr-2 h-4 w-4" /> BAB XIII
                </Link>
              </Button>
              <Button
                asChild
                className="bg-black text-white hover:bg-gray-700 hover:text-white p-2"
              >
                <Link href="/peraturan">
                  Daftar BAB <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
