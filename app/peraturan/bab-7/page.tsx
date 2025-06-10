"use client"

import React from "react"
import type { ReactElement } from "react"
import { useEffect, useRef } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ArrowLeft, ArrowRight } from "lucide-react"

export default function BabTujuh(): ReactElement {
  const searchParams = useSearchParams()
  const [hash, setHash] = React.useState<string | null>(null)

  // State to track which accordion item should be open
  const [openItem, setOpenItem] = React.useState<string | undefined>(undefined)

  // Refs for each pasal
  const pasal28Ref = useRef<HTMLDivElement>(null)
  const pasal29Ref = useRef<HTMLDivElement>(null)
  const pasal30Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setHash(searchParams.get("hash") || window.location.hash.replace("#", ""))
  }, [searchParams])

  useEffect(() => {
    // Function to scroll to the specific pasal and open its accordion
    const scrollToElement = () => {
      if (!hash) return

      // Map hash to accordion value
      const valueMap: Record<string, string> = {
        "pasal-28": "pasal-28",
        "pasal-29": "pasal-29",
        "pasal-30": "pasal-30",
      }

      // Map hash to ref
      const refMap: Record<string, React.RefObject<HTMLDivElement | null>> = {
        "pasal-28": pasal28Ref,
        "pasal-29": pasal29Ref,
        "pasal-30": pasal30Ref,
      }

      // Set the open accordion item
      const accordionValue = valueMap[hash]
      if (accordionValue) {
        setOpenItem(accordionValue)
      }

      // Scroll to the element
      const targetRef = refMap[hash]
      if (targetRef && targetRef.current) {
        // Add a small delay to ensure the accordion has time to render
        setTimeout(() => {
          targetRef.current?.scrollIntoView({ behavior: "smooth" })
        }, 100)
      }
    }

    // Call the function when the component mounts or hash changes
    scrollToElement()
  }, [hash])

  return (
    <div className="container py-5 p-5 md:p-7">
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Beranda</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/peraturan">Peraturan Perusahaan</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/peraturan/bab-7">BAB VII: FASILITAS KERJA</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-3/4">
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter">BAB VII: FASILITAS KERJA</h1>
              <p className="text-muted-foreground">
                Ketentuan mengenai peralatan kerja, pakaian kerja, dan perjalanan dinas dalam dan luar negeri.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full" value={openItem} onValueChange={setOpenItem}>
              <div ref={pasal28Ref}>
                <AccordionItem value="pasal-28" id="pasal-28">
                  <AccordionTrigger className="text-lg md:text-xl text-left font-semibold">PASAL 28: Peralatan Kerja</AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-4">
                    <ol className="list-decimal pl-6 sm:pl-8 md:pl-10 space-y-2">
                      <li className="ml-1">
                        Perusahaan menyediakan peralatan kerja yang sesuai untuk digunakan Karyawan dalam melaksanakan
                        tugasnya.
                      </li>
                      <li className="ml-1">
                        Peralatan kerja adalah barang inventaris Perusahaan untuk dipakai pada saat bekerja dan untuk
                        keperluan dinas.
                      </li>
                      <li className="ml-1">
                        Seluruh peralatan kerja yang diberikan kepada Karyawan wajib digunakan dan dipelihara dengan
                        baik.
                      </li>
                      <li className="ml-1">
                        Kerusakan atas peralatan kerja harus ditanggung oleh Karyawan atau dapat ditentukan kembali oleh
                        Pimpinan Perusahaan.
                      </li>
                      <li className="ml-1">
                        Pelanggaran terhadap ketentuan ini merupakan tindakan pelanggaran disiplin kerja.
                      </li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>
              </div>

              <div ref={pasal29Ref}>
                <AccordionItem value="pasal-29" id="pasal-29">
                  <AccordionTrigger className="text-lg md:text-xl text-left font-semibold">PASAL 29: Pakaian Kerja</AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-4 ml-2">
                    <p>
                      Pakaian kerja untuk karyawan akan diatur tersendiri didalam Perangkat Peraturan (sebagaimana
                      relevan) dan pengaturannya disesuaikan dengan fungsi tugas karyawan serta kemampuan perusahaan.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </div>

              <div ref={pasal30Ref}>
                <AccordionItem value="pasal-30" id="pasal-30">
                  <AccordionTrigger className="text-lg md:text-xl text-left font-semibold">
                    PASAL 30: Perjalanan Dinas Dalam Dan Luar Negeri
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-4">
                    <ol className="list-decimal pl-6 sm:pl-8 md:pl-10 space-y-2">
                      <li className="ml-1">
                        Perjalanan Dinas adalah setiap perjalanan dalam rangka kepentingan pekerjaan dan ditugaskan oleh
                        Pimpinan Perusahaan berdasarkan Surat Perintah Perjalanan Dinas (SPPD).
                      </li>
                      <li className="ml-1">
                        Perjalanan Dinas terdiri atas perjalanan dinas di dalam negeri dan perjalanan dinas di luar
                        negeri.
                      </li>
                      <li className="ml-1">
                        Perjalanan Dinas bagi seorang karyawan harus dilandaskan dengan perintah atau persetujuan dari
                        atasan dan Direksi.
                      </li>
                      <li className="ml-1">
                        Ketentuan mengenai Perjalanan Dinas akan diatur tersendiri melalui Surat Keputusan Direksi.
                      </li>
                      <li className="ml-1">
                        Karyawan yang ditunjuk oleh Perusahaan untuk melakukan Perjalanan Dinas, selama dibuktikan mampu
                        dan tidak dalam keadaan darurat, wajib untuk mematuhi perintah Perusahaan.
                      </li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>
              </div>
            </Accordion>
          </div>

          <div className="flex justify-between mt-8">
            <Button variant="outline" asChild className="bg-black text-white hover:bg-gray-700 hover:text-white p-2">
              <Link href="/peraturan/bab-6">
                <ArrowLeft className="mr-2 h-4 w-4" /> BAB VI
              </Link>
            </Button>
            <Button asChild className="bg-black text-white hover:bg-gray-700 hover:text-white p-2">
              <Link href="/peraturan/bab-8">
               BAB VIII <ArrowRight className="ml-2 h-4 w-4" /> 
              </Link>
            </Button>
          </div>
        </div>

        {/* <div className="md:w-1/4">
          <div className="sticky top-20">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Briefcase className="mr-2 h-5 w-5" />
                  Daftar Pasal
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>
                    <Link href="#pasal-28" className="text-sm hover:underline">
                      PASAL 28: Peralatan Kerja
                    </Link>
                  </li>
                  <li>
                    <Link href="#pasal-29" className="text-sm hover:underline">
                      PASAL 29: Pakaian Kerja
                    </Link>
                  </li>
                  <li>
                    <Link href="#pasal-30" className="text-sm hover:underline">
                      PASAL 30: Perjalanan Dinas Dalam Dan Luar Negeri
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div> */}
      </div>
    </div>
  )
}
