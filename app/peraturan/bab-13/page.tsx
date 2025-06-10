"use client"

import { useEffect } from "react"
import { useRef } from "react"
import { useSearchParams } from "next/navigation"
import React from "react"
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

export default function Bab13() {
  const searchParams = useSearchParams()
  const [hash, setHash] = React.useState<string | null>(null)

  // State to track which accordion item should be open
  const [openItem, setOpenItem] = React.useState<string | undefined>(undefined)

  // Refs for each pasal
  const pasal53Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setHash(searchParams.get("hash") || window.location.hash.replace("#", ""))
  }, [searchParams])

  useEffect(() => {
    // Function to scroll to the specific pasal and open its accordion
    const scrollToElement = () => {
      if (!hash) return

      // Map hash to accordion value
      const valueMap: Record<string, string> = {
        "pasal-53": "pasal-53",
      }

      // Map hash to ref
      const refMap: Record<string, React.RefObject<HTMLDivElement | null>> = {
        "pasal-53": pasal53Ref,
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
            <BreadcrumbLink href="/peraturan/bab-13">BAB XIII: PENYELESAIAN KELUH KESAH</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-3/4">
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter">BAB XIII: PENYELESAIAN KELUH KESAH</h1>
              <p className="text-muted-foreground">
                Ketentuan mengenai tata cara penyelesaian keluhan dan pengaduan karyawan di perusahaan.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full" value={openItem} onValueChange={setOpenItem}>
              <div ref={pasal53Ref}>
                <AccordionItem value="pasal-53" id="pasal-53">
                  <AccordionTrigger className="text-lg md:text-xl text-left font-semibold">
                    PASAL 53: Tata Cara Penyelesaian Keluh Kesah
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-4">
                    <ol className="list-decimal pl-6 space-y-4">
                      <li>
                        Jika seorang Karyawan menganggap bahwa perlakuan terhadapnya bertentangan dengan Peraturan
                        Perusahaan, Karyawan yang bersangkutan dapat menyampaikan keluhan atau pengaduannya kepada
                        atasannya secara langsung untuk diselesaikan secara musyawarah.
                      </li>
                      <li>
                        Jika penyelesaian belum memuaskan baginya, maka karyawan tersebut dengan sepengetahuan atasannya
                        dapat meneruskan keluhan/pengaduannya kepada atasan yang lebih tinggi dan apabila penyelesaian
                        belum memuaskan baginya, maka Karyawan tersebut dapat meneruskan keluhan/pengaduannya kepada tim
                        HRD yang dalam hal ini mewakili Pimpinan Perusahaan.
                      </li>
                      <li>
                        Bila upaya penyelesaian di Perusahaan belum juga dapat tercapai, dimintakan bantuan ke
                        Kementrian Tenaga Kerja untuk penyelesaian lebih lanjut.
                      </li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>
              </div>
            </Accordion>
          </div>

          <div className="flex justify-between mt-8">
            <Button variant="outline" asChild className="bg-black text-white hover:bg-gray-700 hover:text-white p-2">
              <Link href="/peraturan/bab-11">
                <ArrowLeft className="mr-2 h-4 w-4" /> BAB XII
              </Link>
            </Button>
            <Button asChild className="bg-black text-white hover:bg-gray-700 hover:text-white p-2">
              <Link href="/peraturan/bab-14">
               BAB XIV <ArrowRight className="ml-2 h-4 w-4" /> 
              </Link>
            </Button>
          </div>
        </div>

        {/* <div className="md:w-1/4">
          <div className="sticky top-20">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Daftar Pasal
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>
                    <Link href="#pasal-53" className="text-sm hover:underline">
                      PASAL 53: Tata Cara Penyelesaian Keluh Kesah
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
