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

export default function BabDua(): ReactElement {
  const searchParams = useSearchParams()
  const [hash, setHash] = React.useState<string | null>(null)

  // State to track which accordion item should be open
  const [openItem, setOpenItem] = React.useState<string | undefined>(undefined)

  // Refs for each pasal
  const pasal3Ref = useRef<HTMLDivElement>(null)
  const pasal4Ref = useRef<HTMLDivElement>(null)
  const pasal5Ref = useRef<HTMLDivElement>(null)
  const pasal6Ref = useRef<HTMLDivElement>(null)
  const pasal7Ref = useRef<HTMLDivElement>(null)
  const pasal8Ref = useRef<HTMLDivElement>(null)
  const pasal9Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setHash(searchParams.get("hash") || window.location.hash.replace("#", ""))
  }, [searchParams])

  useEffect(() => {
    // Function to scroll to the specific pasal and open its accordion
    const scrollToElement = () => {
      if (!hash) return

      // Map hash to accordion value
      const valueMap: Record<string, string> = {
        "pasal-3": "pasal-3",
        "pasal-4": "pasal-4",
        "pasal-5": "pasal-5",
        "pasal-6": "pasal-6",
        "pasal-7": "pasal-7",
        "pasal-8": "pasal-8",
        "pasal-9": "pasal-9",
      }

      // Map hash to ref
      const refMap: Record<string, React.RefObject<HTMLDivElement | null>> = {
        "pasal-3": pasal3Ref,
        "pasal-4": pasal4Ref,
        "pasal-5": pasal5Ref,
        "pasal-6": pasal6Ref,
        "pasal-7": pasal7Ref,
        "pasal-8": pasal8Ref,
        "pasal-9": pasal9Ref,
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
            <BreadcrumbLink href="/peraturan/bab-2">BAB II: HUBUNGAN KERJA</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-3/4">
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter">BAB II: HUBUNGAN KERJA</h1>
              <p className="text-muted-foreground">
                Ketentuan mengenai hubungan kerja antara perusahaan dan karyawan, termasuk penerimaan, masa percobaan,
                dan pengangkatan karyawan.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full" value={openItem} onValueChange={setOpenItem}>
              <div ref={pasal3Ref}>
                <AccordionItem value="pasal-3" id="pasal-3">
                  <AccordionTrigger className="text-lg md:text-xl text-left font-semibold">PASAL 3: Penerimaan Karyawan</AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-4">
                    <ol className="list-decimal pl-6 sm:pl-8 md:pl-10 space-y-2">
                      <li className="ml-1">
                        Penerimaan karyawan dilakukan sesuai dengan kebutuhan, yang syarat dan prosedurnya ditetapkan
                        oleh Perusahaan.
                      </li>
                      <li className="ml-1">
                        Persyaratan umum penerimaan Karyawan adalah:
                        <ol className="list-lower-alpha pl-5 space-y-1 mt-2">
                          <li className="ml-1">a. Warga Negara Indonesia.</li>
                          <li className="ml-1">
                            b. Warga Negara Asing yang telah mendapat izin tinggal dan memiliki izin kerja resmi dapat
                            bekerja di Indonesia.
                          </li>
                          <li className="ml-1">
                            c. Berusia sekurang-kurangnya 18 (delapan belas) tahun sesuai Akta Kelahiran atau Tanda Kenal
                            Lahir.
                          </li>
                          <li className="ml-1">d. Mempunyai Kartu Tanda Penduduk (KTP) ketika melamar.</li>
                          <li className="ml-1">e. Berbadan sehat dan berjiwa sehat.</li>
                          <li className="ml-1">f. Berkelakuan baik.</li>
                          <li className="ml-1">g. Lulus tes yang diadakan/disyaratkan oleh Perusahaan.</li>
                          <li className="ml-1">
                            h. Bersedia menandatangani surat penerimaan Karyawan yang dibuat/dikeluarkan oleh Perusahaan.
                          </li>
                        </ol>
                      </li>
                      <li className="ml-1">
                        Berdasarkan jenis pekerjaan, Perusahaan dapat mempekerjakan Karyawan sebagai:
                        <ol className="list-lower-alpha pl-5 space-y-1 mt-2">
                          <li className="ml-1">a. Karyawan tetap;</li>
                          <li className="ml-1">b. Karyawan tidak tetap;</li>
                          <li className="ml-1">c. Karyawan lepas (freelance); atau</li>
                          <li className="ml-1">d. Karyawan magang (intern).</li>
                        </ol>
                      </li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>
              </div>

              <div ref={pasal4Ref}>
                <AccordionItem value="pasal-4" id="pasal-4">
                  <AccordionTrigger className="text-lg md:text-xl text-left font-semibold">PASAL 4: Masa Percobaan</AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-4">
                    <ol className="list-decimal pl-6 sm:pl-8 md:pl-10 space-y-2">
                      <li className="ml-1">Masa percobaan ditetapkan untuk paling lama 3 (tiga) bulan.</li>
                      <li className="ml-1">
                        Karyawan yang menjalani masa percobaan wajib diberi tahu kapan mulai dan berakhirnya masa
                        percobaan tersebut.
                      </li>
                      <li className="ml-1">
                        Pengawasan dan penilaian pada masa percobaan dilakukan oleh atasannya langsung.
                      </li>
                      <li className="ml-1">
                        Mekanisme pengawasan dan penilaian masa percobaan akan diatur kemudian pada Perangkat Peraturan
                        tersendiri yang tidak terpisahkan dari Peraturan Perusahaan ini.
                      </li>
                      <li className="ml-1">
                        Dalam masa percobaan, baik Perusahaan maupun Karyawan dapat melakukan pemutusan hubungan kerja
                        secara sepihak dengan pemberitahuan selambat-lambatnya 14 (empat belas) hari kerja sebelum
                        efektif pemutusan hubungan kerja, tanpa ada tuntutan ganti rugi dalam bentuk apapun.
                      </li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>
              </div>

              <div ref={pasal5Ref}>
                <AccordionItem value="pasal-5" id="pasal-5">
                  <AccordionTrigger className="text-lg md:text-xl text-left font-semibold">PASAL 5: Karyawan Tidak Tetap</AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-4">
                    <ol className="list-decimal pl-6 sm:pl-8 md:pl-10 space-y-2">
                      <li className="ml-1">
                        Sesuai dengan kebutuhan, Perusahaan dapat menerima karyawan Tidak Tetap dengan Perjanjian Kerja
                        Waktu Tertentu (PKWT) dengan berpedoman pada Peraturan Perundang-undangan yang berlaku.
                      </li>
                      <li className="ml-1">
                        Ketentuan atau syarat secara khusus dapat diatur dalam Perjanjian Kerja dan berpedoman pada
                        Peraturan Perundang-undangan yang berlaku.
                      </li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>
              </div>

              <div ref={pasal6Ref}>
                <AccordionItem value="pasal-6" id="pasal-6">
                  <AccordionTrigger className="text-lg md:text-xl text-left font-semibold">
                    PASAL 6: Pengangkatan, dan Pemindahan Karyawan
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-4">
                    <ol className="list-decimal pl-6 sm:pl-8 md:pl-10 space-y-2">
                      <li className="ml-1">
                        Pengangkatan Karyawan
                        <ol className="list-lower-alpha pl-5 space-y-1 mt-2">
                          <li className="ml-1">
                            a. Karyawan yang menjalani masa percobaan dengan hasil baik akan diangkat menjadi karyawan
                            tetap dengan Surat Keputusan Pengangkatan yang ditandatangani Pimpinan Perusahaan.
                          </li>
                          <li className="ml-1">
                            b. Karyawan yang diangkat akan ditempatkan pada jabatan/pekerjaan berdasarkan persyaratan
                            jabatan serta kemampuan yang dimilikinya dan kebutuhan Perusahaan.
                          </li>
                          <li className="ml-1">
                            c. Dengan diangkatnya karyawan tersebut menjadi karyawan tetap, maka yang bersangkutan dapat
                            memperoleh secara penuh hak dan kewajiban sebagaimana yang telah diatur di dalam Peraturan
                            Perusahaan.
                          </li>
                        </ol>
                      </li>
                      <li className="ml-1">
                        Pengalihan Kerja (Mutasi)
                        <ol className="list-lower-alpha pl-5 space-y-1 mt-2">
                          <li className="ml-1">
                            a. Berdasarkan kebutuhan organisasi, efisiensi, dan produktivitas kerja, Perusahaan berwenang
                            memindahkan karyawan dari suatu jabatan ke jabatan lainnya atau dari satu jenis pekerjaan ke
                            jenis pekerjaan lainnya atau dari satu lokasi ke lokasi lainnya.
                          </li>
                          <li className="ml-1">
                            b. Ketentuan mengenai pemindahan ini diatur oleh Pimpinan Perusahaan dan akan dituangkan dalam
                            Perangkat Peraturan (sebagaimana relevan).
                          </li>
                        </ol>
                      </li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>
              </div>

              <div ref={pasal7Ref}>
                <AccordionItem value="pasal-7" id="pasal-7">
                  <AccordionTrigger className="text-lg md:text-xl text-left font-semibold">
                    PASAL 7: Evaluasi dan Penilaian Kinerja
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-4">
                    <ol className="list-decimal pl-6 sm:pl-8 md:pl-10 space-y-2">
                      <li className="ml-1">
                        Evaluasi Kinerja Karyawan yaitu evaluasi terhadap kinerja karyawan dalam jangka waktu tertentu
                        dan dilaksanakan secara berkala setiap 1 (satu) tahun sekali.
                      </li>
                      <li className="ml-1">
                        Penilaian Kinerja yaitu penilaian terhadap hasil prestasi kerja karyawan dalam jangka waktu
                        tertentu dan dilaksanakan 1 (satu) kali dalam setahun, dalam periode bulan Januari atau Juli.
                      </li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>
              </div>

              <div ref={pasal8Ref}>
                <AccordionItem value="pasal-8" id="pasal-8">
                  <AccordionTrigger className="text-lg md:text-xl text-left font-semibold">PASAL 8: Promosi</AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-4">
                    <ol className="list-decimal pl-6 sm:pl-8 md:pl-10 space-y-2">
                      <li className="ml-1">
                        Perusahaan akan memberikan kesempatan kepada karyawan yang memenuhi persyaratan untuk kenaikan
                        pangkat dan/atau jabatan lebih tinggi berdasarkan kepada:
                        <ol className="list-lower-alpha pl-5 space-y-1 mt-2">
                          <li className="ml-1">a. Kebutuhan Organisasi.</li>
                          <li className="ml-1">b. Kompetensi Karyawan.</li>
                          <li className="ml-1">c. Penilaian Kinerja.</li>
                          <li className="ml-1">d. Syarat Administrasi</li>
                        </ol>
                      </li>
                      <li className="ml-1">
                        Ketentuan tentang promosi diatur dalam ketentuan tersendiri sesuai dengan kebijakan Perusahaan
                        dan akan dituangkan dalam Perangkat Peraturan (sebagaimana relevan).
                      </li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>
              </div>

              <div ref={pasal9Ref}>
                <AccordionItem value="pasal-9" id="pasal-9">
                  <AccordionTrigger className="text-lg md:text-xl text-left font-semibold">PASAL 9: Demosi</AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-4">
                    <ol className="list-decimal pl-6 sm:pl-8 md:pl-10 space-y-2">
                      <li className="ml-1">
                        Perusahaan dapat mengambil tindakan berupa pencabutan atau penurunan pangkat dan/atau jabatan
                        dari karyawan yang melakukan perbuatan yang melanggar peraturan tata tertib kerja, aturan
                        kedisiplinan, tidak memenuhi standar kerja, atau tidak berprestasi.
                      </li>
                      <li className="ml-1">
                        Bagi karyawan yang dikenakan demosi, tunjangan/fasilitas akan disesuaikan dengan pangkat
                        dan/atau jabatan barunya.
                      </li>
                      <li className="ml-1">
                        Ketentuan tentang demosi diatur dalam ketentuan tersendiri sesuai dengan kebijakan perusahaan
                        dan akan dituangkan dalam Perangkat Peraturan (sebagaimana relevan).
                      </li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>
              </div>
            </Accordion>
          </div>

          <div className="flex justify-between mt-8">
            <Button variant="outline" asChild className="bg-black text-white hover:bg-gray-700 hover:text-white p-2">
              <Link href="/peraturan/bab-1">
                <ArrowLeft className="mr-2 h-4 w-4" /> BAB I
              </Link>
            </Button>
            <Button asChild className="bg-black text-white hover:bg-gray-700 hover:text-white p-2">
              <Link href="/peraturan/bab-3">
               BAB III <ArrowRight className="ml-2 h-4 w-4" /> 
              </Link>
            </Button>
          </div>
        </div>

        {/* <div className="md:w-1/4">
          <div className="sticky top-20">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Daftar Pasal
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>
                    <Link href="#pasal-3" className="text-sm hover:underline">
                      PASAL 3: Penerimaan Karyawan
                    </Link>
                  </li>
                  <li>
                    <Link href="#pasal-4" className="text-sm hover:underline">
                      PASAL 4: Masa Percobaan
                    </Link>
                  </li>
                  <li>
                    <Link href="#pasal-5" className="text-sm hover:underline">
                      PASAL 5: Karyawan Tidak Tetap
                    </Link>
                  </li>
                  <li>
                    <Link href="#pasal-6" className="text-sm hover:underline">
                      PASAL 6: Pengangkatan, dan Pemindahan Karyawan
                    </Link>
                  </li>
                  <li>
                    <Link href="#pasal-7" className="text-sm hover:underline">
                      PASAL 7: Evaluasi dan Penilaian Kinerja
                    </Link>
                  </li>
                  <li>
                    <Link href="#pasal-8" className="text-sm hover:underline">
                      PASAL 8: Promosi
                    </Link>
                  </li>
                  <li>
                    <Link href="#pasal-9" className="text-sm hover:underline">
                      PASAL 9: Demosi
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
