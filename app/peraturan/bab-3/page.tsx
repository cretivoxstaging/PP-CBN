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

export default function BabTiga(): ReactElement {
  const searchParams = useSearchParams()
  const [hash, setHash] = React.useState<string | null>(null)

  // State to track which accordion item should be open
  const [openItem, setOpenItem] = React.useState<string | undefined>(undefined)

  // Refs for each pasal
  const pasal10Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setHash(searchParams.get("hash") || window.location.hash.replace("#", ""))
  }, [searchParams])

  useEffect(() => {
    // Function to scroll to the specific pasal and open its accordion
    const scrollToElement = () => {
      if (!hash) return

      // Map hash to accordion value
      const valueMap: Record<string, string> = {
        "pasal-10": "pasal-10",
      }

      // Map hash to ref
      const refMap: Record<string, React.RefObject<HTMLDivElement | null>> = {
        "pasal-10": pasal10Ref,
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
            <BreadcrumbLink href="/peraturan/bab-3">BAB III: WAKTU KERJA</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-3/4">
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter">BAB III: WAKTU KERJA</h1>
              <p className="text-muted-foreground">
                Ketentuan mengenai hari kerja, jam kerja, dan pengaturan waktu kerja di perusahaan.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full" value={openItem} onValueChange={setOpenItem}>
              <div ref={pasal10Ref}>
                <AccordionItem value="pasal-10" id="pasal-10">
                  <AccordionTrigger className="text-lg md:text-xl text-left font-semibold">PASAL 10: Hari dan Jam Kerja</AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-4">
                    <ol className="list-decimal pl-6 sm:pl-8 md:pl-10 space-y-4">
                      <li className="ml-1">
                        <p className="font-medium">Hari Kerja</p>
                        <p>Hari Kerja di Perusahaan adalah 5 (Lima) hari dalam seminggu.</p>
                      </li>
                      <li className="ml-1">
                        <p className="font-medium">Jam Kerja</p>
                        <p>Jam Kerja di Perusahaan adalah:</p>
                        <ol className="list-lower-alpha pl-5 space-y-2 mt-2">
                          <li className="ml-1">
                            8 (Delapan) jam 1 (satu) hari dan 40 (empat puluh) jam 1 (satu) minggu untuk 5 (Lima) hari
                            dalam 1 (satu) minggu.
                          </li>
                        </ol>
                        <div className="mt-4">
                          <table className="w-full border-collapse border border-border">
                            <thead>
                              <tr className="bg-muted">
                                <th className="border border-border p-2 text-left">Hari</th>
                                <th className="border border-border p-2 text-left">Jam Kerja</th>
                                <th className="border border-border p-2 text-left">Istirahat</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="border border-border p-2">Senin s/d Kamis</td>
                                <td className="border border-border p-2">08.30 s/d 17.30</td>
                                <td className="border border-border p-2">12.00 s/d 13.00</td>
                              </tr>
                              <tr>
                                <td className="border border-border p-2">Jum'at</td>
                                <td className="border border-border p-2">08.30 s/d 17.30</td>
                                <td className="border border-border p-2">11.30 s/d 13.30</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </li>
                      <li className="ml-1">
                        <p>
                          Bila dipandang perlu untuk kepentingan peningkatan produktivitas kerja, jam kerja dan hari
                          kerja oleh Perusahaan dapat diubah dengan ketentuan jumlah dan jam kerjanya tetap berdasarkan
                          kepada Peraturan Perundang-undangan yang berlaku.
                        </p>
                      </li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>
              </div>
            </Accordion>
          </div>

          <div className="flex justify-between mt-8">
            <Button variant="outline" asChild className="bg-black text-white hover:bg-gray-700 hover:text-white p-2">
              <Link href="/peraturan/bab-2">
                <ArrowLeft className="mr-2 h-4 w-4" /> BAB II
              </Link>
            </Button>
            <Button asChild className="bg-black text-white hover:bg-gray-700 hover:text-white p-2">
              <Link href="/peraturan/bab-4">
               BAB IV <ArrowRight className="ml-2 h-4 w-4" /> 
              </Link>
            </Button>
          </div>
        </div>

        {/* <div className="md:w-1/4">
          <div className="sticky top-20">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="mr-2 h-5 w-5" />
                  Daftar Pasal
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>
                    <Link href="#pasal-10" className="text-sm hover:underline">
                      PASAL 10: Hari dan Jam Kerja
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
