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

export default function BabDelapan(): ReactElement {
  const searchParams = useSearchParams()
  const [hash, setHash] = React.useState<string | null>(null)

  // State to track which accordion item should be open
  const [openItem, setOpenItem] = React.useState<string | undefined>(undefined)

  // Refs for each pasal
  const pasal31Ref = useRef<HTMLDivElement>(null)
  const pasal32Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setHash(searchParams.get("hash") || window.location.hash.replace("#", ""))
  }, [searchParams])

  useEffect(() => {
    // Function to scroll to the specific pasal and open its accordion
    const scrollToElement = () => {
      if (!hash) return

      // Map hash to accordion value
      const valueMap: Record<string, string> = {
        "pasal-31": "pasal-31",
        "pasal-32": "pasal-32",
      }

      // Map hash to ref
      const refMap: Record<string, React.RefObject<HTMLDivElement | null  >> = {
        "pasal-31": pasal31Ref,
        "pasal-32": pasal32Ref,
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
            <BreadcrumbLink href="/peraturan/bab-8">BAB VIII: JAMINAN SOSIAL DAN KESEJAHTERAAN KARYAWAN</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-3/4">
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter">
                BAB VIII: JAMINAN SOSIAL DAN KESEJAHTERAAN KARYAWAN
              </h1>
              <p className="text-muted-foreground">
                Ketentuan mengenai BPJS Ketenagakerjaan dan bantuan kematian bagi karyawan.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full" value={openItem} onValueChange={setOpenItem}>
              <div ref={pasal31Ref}>
                <AccordionItem value="pasal-31" id="pasal-31">
                  <AccordionTrigger className="text-lg md:text-xl text-left font-semibold">PASAL 31: BPJS Ketenagakerjaan</AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-4">
                    <ol className="list-decimal pl-6 sm:pl-8 md:pl-10 space-y-2">
                      <li className="ml-1">
                        Sesuai Ketentuan peraturan perundang-undangan yang berlaku, Perusahaan mengikutsertakan Karyawan
                        dalam program BPJS (Badan Penyelenggara Jaminan Sosial).
                      </li>
                      <li className="ml-1">
                        Perusahaan wajib mengikutsertakan Karyawan dalam program BPJS Ketenagakerjaan pada penyelenggara
                        Jaminan Sosial ketenagakerjaan (BPJS Ketenagakerjaan) dan BPJS Kesehatan.
                      </li>
                      <li className="ml-1">
                        Program BPJS meliputi:
                        <ol className="list-lower-alpha pl-5 space-y-1 mt-2">
                          <li className="ml-1">a. Jaminan Kecelakaan Kerja (JKK);</li>
                          <li className="ml-1">b. Jaminan Kematian (JK);</li>
                          <li className="ml-1">c. Jaminan Hari Tua (JHT);</li>
                          <li className="ml-1">d. Jaminan Pemeliharaan Kesehatan (JPK);</li>
                          <li className="ml-1">f. Jaminan Pensiun: dan</li>
                          <li className="ml-1">g. Jaminan Kehilangan Pekerjaan (JKP).</li>
                        </ol>
                      </li>
                      <li className="ml-1">
                        Karyawan wajib membayar Sebagian iuran program JHT dan JP yang diselenggarakan oleh BPJS
                        Ketenagakerjaan dan program jaminan Kesehatan yang diselenggarakan oleh BPJS Kesehatan sesuai
                        dengan peraturan perundang-undangan yang berlaku. Perusahaan akan memotong besaran iuran ke BPJS
                        Ketenagakerjaan atas Namanya. Perusahaan juga akan memotong besaran iuran program jaminan
                        kesehatan dari gaji Karyawan untuk disahkan menjadi BPJS Kesehatan atas Namanya.
                      </li>
                      <li className="ml-1">
                        Apabila terjadi kecelakaan kerja atau kematian atau karyawan berhenti setelah mencapai usia 57
                        (lima puluh tujuh) tahun, maka segala sesuatunya akan diurus menurut peraturan dan ketentuan
                        yang berlaku dalam Program BPJS Ketenagakerjaan.
                      </li>
                      <li className="ml-1">
                        Jika ada perubahan kebijakan pembayaran, maka Iuran dibayarkan oleh Perusahaan dan Karyawan
                        dengan pengurangan langsung dari Gaji Pokok.
                      </li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>
              </div>

              <div ref={pasal32Ref}>
                <AccordionItem value="pasal-32" id="pasal-32">
                  <AccordionTrigger className="text-lg md:text-xl text-left font-semibold">PASAL 32: Bantuan Kematian</AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-4">
                    <ol className="list-decimal pl-6 sm:pl-8 md:pl-10 space-y-2">
                      <li className="ml-1">
                        Tunjangan Kematian diberikan oleh Perusahaan kepada karyawan tetap dan karyawan kontrak yang
                        sudah bekerja selama 6 (enam) bulan bekerja.
                      </li>
                      <li className="ml-1">
                        Tunjangan kematian diberikan kepada Karyawan yang tidak dalam masa pengunduran diri atau dalam
                        periode surat peringatan.
                      </li>
                      <li className="ml-1">
                        Dalam hal Karyawan yang menjadi peserta dana pensiun program BPJS Ketenagakerjaan, maka ahli
                        warisnya akan memperoleh pembayaran manfaat pensiun sebagaimana ditetapkan oleh Perusahaan.
                      </li>
                      <li className="ml-1">
                        Mekanisme pemberian bantuan kematian, dan besarannya akan ditetapkan oleh Pimpinan Perusahaan
                        dalam ketentuan tersendiri dan akan dituangkan dalam Perangkat Peraturan (sebagaimana relevan).
                      </li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>
              </div>
            </Accordion>
          </div>

          <div className="flex justify-between mt-8">
            <Button variant="outline" asChild className="bg-black text-white hover:bg-gray-700 hover:text-white p-2">
              <Link href="/peraturan/bab-7">
                <ArrowLeft className="mr-2 h-4 w-4" /> BAB VII
              </Link>
            </Button>
            <Button asChild className="bg-black text-white hover:bg-gray-700 hover:text-white p-2">
              <Link href="/peraturan/bab-9">
               BAB IX <ArrowRight className="ml-2 h-4 w-4" /> 
              </Link>
            </Button>
          </div>
        </div>

        {/* <div className="md:w-1/4">
          <div className="sticky top-20">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Heart className="mr-2 h-5 w-5" />
                  Daftar Pasal
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>
                    <Link href="#pasal-31" className="text-sm hover:underline">
                      PASAL 31: BPJS Ketenagakerjaan
                    </Link>
                  </li>
                  <li>
                    <Link href="#pasal-32" className="text-sm hover:underline">
                      PASAL 32: Bantuan Kematian
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
