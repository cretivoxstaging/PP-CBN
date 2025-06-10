"use client";

import type React from "react";

import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function BabSatu() {
  const searchParams = useSearchParams();
  const [hash, setHash] = useState<string | null>(null);

  // State to track which accordion item should be open
  const [openItem, setOpenItem] = useState<string | undefined>(undefined);

  // Refs for each pasal
  const point1Ref = useRef<HTMLDivElement>(null);
  const point2Ref = useRef<HTMLDivElement>(null);
  const point3Ref = useRef<HTMLDivElement>(null);
  const point4Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hanya jalankan di sisi klien
    setHash(searchParams.get("hash") || window.location.hash.replace("#", ""));
  }, [searchParams]);

  useEffect(() => {
    // Function to scroll to the specific pasal and open its accordion
    const scrollToElement = () => {
      if (!hash) return;

      // Map hash to accordion value
      const valueMap: Record<string, string> = {
        "point-1": "point-1",
        "point-2": "point-2",
        "point-3": "point-3",
        "point-4": "point-4",
      };

      // Map hash to ref
      const refMap: Record<string, React.RefObject<HTMLDivElement | null>> = {
        "point-1": point1Ref,
        "point-2": point2Ref,
        "point-3": point3Ref,
        "point-4": point4Ref,
      };

      // Set the open accordion item
      const accordionValue = valueMap[hash];
      if (accordionValue) {
        setOpenItem(accordionValue);
      }

      // Scroll to the element
      const targetRef = refMap[hash];
      if (targetRef && targetRef.current) {
        // Add a small delay to ensure the accordion has time to render
        setTimeout(() => {
          targetRef.current?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    };

    // Call the function when the component mounts or hash changes
    scrollToElement();
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
            <BreadcrumbLink href="/peraturan">
              Peraturan Perusahaan
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/peraturan/bab-1">
              KEBIJAKAN KHUSUS PERUSAHAAN
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-3/4">
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter">
                KEBIJAKAN KHUSUS PERUSAHAAN
              </h1>
              <p className="text-muted-foreground">
                Sebelum memasuki seluruh isi peraturan internal ini, Cretivox
                menetapkan beberapa kebijakan khusus yang bersifat fundamental
                dan wajib ditaati oleh seluruh karyawan dan intern sebagai
                bagian dari budaya profesional perusahaan.
              </p>
            </div>

            <Accordion
              type="single"
              collapsible
              className="w-full"
              value={openItem}
              onValueChange={setOpenItem}
            >
              <div ref={point1Ref}>
                <AccordionItem value="point-1" id="point-1">
                  <AccordionTrigger className="text-lg md:text-xl text-left font-semibold">
                    1. Larangan Hubungan Romantis (Pacaran) di Lingkungan Kerja
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-4">
                    <ol className="list-decimal pl-6 sm:pl-8 md:pl-10 space-y-4">
                      <li className="ml-1">
                        <p className="font-medium">
                          CBN melarang keras hubungan romantis <span className="font-bold">(Pacaran) </span>
                          antara:
                        </p>
                        <ol className="list-lower-alpha pl-5 space-y-2 mt-2 font-medium">
                          <li>a. Sesama karyawan.</li>
                          <li>b. Karyawan dengan intern.</li>
                          <li>c. Sesama intern.</li>
                        </ol>
                      </li>
                      <li className="ml-1">
                        <p className="font-medium">
                          Tujuannya adalah menjaga objektivitas kerja, mencegah
                          konflik kepentingan, dan menciptakan lingkungan yang
                          sehat dan profesional.
                        </p>
                      </li>
                      <li className="ml-1">
                        <p className="font-medium">
                          Pelanggaran atas kebijakan ini dapat dikenakan sanksi
                          mulai dari teguran tertulis hingga pemutusan hubungan
                          kerja/magang.
                        </p>
                      </li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>
              </div>

              <div ref={point2Ref}>
                <AccordionItem value="point-2" id="point-2">
                  <AccordionTrigger className="text-lg md:text-xl text-left font-semibold">
                    2: Budaya 3S: Senyum, Sapa, Salam
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-4">
                    <ol className="list-decimal pl-6 sm:pl-8 md:pl-10 space-y-4">
                      <li className="ml-1">
                        <p className="font-medium">
                          Seluruh karyawan dan intern diwajibkan menerapkan
                          budaya 3S dalam interaksi sehari-hari:
                        </p>
                        <ol className="list-lower-alpha pl-5 space-y-2 mt-2">
                          <li>
                            a. Senyum: Menunjukkan sikap terbuka dan bersahabat.
                          </li>
                          <li>b. Sapa: Menyapa rekan kerja dengan ramah.</li>
                          <li>
                            c. Salam: Memberi salam sebagai bentuk penghormatan.
                          </li>
                        </ol>
                      </li>
                      <li className="ml-1">
                        <p className="font-medium">
                          3S mencerminkan semangat kolaboratif dan rasa hormat
                          antar anggota tim.
                        </p>
                      </li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>
              </div>

              <div ref={point3Ref}>
                <AccordionItem value="point-3" id="point-3">
                  <AccordionTrigger className="text-lg md:text-xl text-left font-semibold">
                    3. Ketuk Pintu Sebelum Masuk
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-4">
                    <ol className="list-decimal pl-6 sm:pl-8 md:pl-10 space-y-4">
                      <li className="ml-1">
                        <p className="font-medium">
                          Setiap karyawan dan intern wajib mengetuk pintu atau
                          memberi pemberitahuan terlebih dahulu sebelum memasuki
                          ruangan kerja orang lain, baik atasan maupun sesama
                          rekan kerja.
                        </p>
                      </li>
                      <li className="ml-1">
                        <p className="font-medium">
                          Ini adalah bentuk penghormatan atas ruang pribadi dan profesionalisme dalam lingkungan kerja.
                        </p>
                      </li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>
              </div>

              <div ref={point4Ref}>
                <AccordionItem value="point-4" id="point-4">
                  <AccordionTrigger className="text-lg md:text-xl text-left font-semibold">
                   4. Penekanan Nilai Kerja
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-4">
                    <ol className="list-decimal pl-6 sm:pl-8 md:pl-10 space-y-4">
                      <li className="ml-1">
                        <p className="font-medium">
                         Semua kebijakan di atas adalah cerminan dari nilai dasar CBN: Tanggung Jawab, Etika, dan Kolaborasi.
                        </p>
                      </li>
                      <li className="ml-1">
                        <p className="font-medium">
                          Kebijakan ini tidak dapat dinegosiasikan dan berlaku untuk seluruh unit kerja, termasuk anak perusahaan atau project-based team di bawah naungan CBN.
                        </p>
                      </li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>
              </div>
            </Accordion>
          </div>

          <div className="flex justify-between mt-8">
            <Button
              variant="outline"
              asChild
              className="bg-black text-white hover:bg-gray-700 hover:text-white p-2"
            >
              <Link href="/peraturan">
                <ArrowLeft className="mr-2 h-4 w-4" /> Daftar BAB
              </Link>
            </Button>
            <Button
              asChild
              className="bg-black text-white hover:bg-gray-700 hover:text-white p-2"
            >
              <Link href="/peraturan/bab-1">
                BAB I <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
