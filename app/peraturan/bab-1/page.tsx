"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
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

export default function BabSatu() {
  const searchParams = useSearchParams()
  const [hash, setHash] = useState<string | null>(null)

  // State to track which accordion item should be open
  const [openItem, setOpenItem] = useState<string | undefined>(undefined)

  // Refs for each pasal
  const pasal1Ref = useRef<HTMLDivElement>(null)
  const pasal2Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setHash(searchParams.get("hash") || window.location.hash.replace("#", ""))
  }, [searchParams])

  useEffect(() => {
    // Function to scroll to the specific pasal and open its accordion
    const scrollToElement = () => {
      if (!hash) return

      // Map hash to accordion value
      const valueMap: Record<string, string> = {
        "pasal-1": "pasal-1",
        "pasal-2": "pasal-2",
      }

      // Map hash to ref
      const refMap: Record<string, React.RefObject<HTMLDivElement | null>> = {
        "pasal-1": pasal1Ref,
        "pasal-2": pasal2Ref,
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
            <BreadcrumbLink href="/peraturan/bab-1">BAB I: KETENTUAN UMUM</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-3/4">
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter">BAB I: KETENTUAN UMUM</h1>
              <p className="text-muted-foreground">
                Ketentuan umum dan definisi yang digunakan dalam peraturan perusahaan.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full" value={openItem} onValueChange={setOpenItem}>

              <div ref={pasal1Ref}>
                <AccordionItem value="pasal-1" id="pasal-1">
                  <AccordionTrigger className="text-lg md:text-xl text-left font-semibold">PASAL 1: KETENTUAN UMUM</AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-4">
                    <p className="font-medium">Dalam Peraturan Perusahaan yang dimaksud dengan:</p>
                    <ol className="list-decimal pl-6 sm:pl-8 md:pl-10 space-y-3">
                      <li className="ml-1">
                        <span className="font-bold ">Perusahaan</span> adalah PT Suara Kreatif Muda, suatu perseroan
                        terbatas yang didirikan berdasarkan hukum Negara Republik Indonesia yang Bernama PT SUARA
                        KREATIF MUDA, yang berkedudukan di Jalan Balap Sepeda No.6, RT.15/RW.1, Kelurahan Jati,
                        Kecamatan Pulo Gadung, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13220, yang didirikan
                        berdasarkan Akta Pendirian No. 71 tanggal 26 bulan 11 tahun 2019, dibuat di hadapan Meissie
                        Pholuan selaku Notaris.
                      </li>
                      <li className="ml-1">
                        <span className="font-bold">Tempat Kerja</span> adalah setiap Gedung/ruangan kantor dan lokasi
                        lainnya, termasuk halaman yang digunakan sebagai tempat kegiatan usaha Perseroan. tempat kerja
                        juga mencangkup tempat yang berada di bawah penguasaan Perseroan yang digunakan untuk menunjang
                        kegiatan operasional Perusahaan dan juga kantor pelanggan/klien tempat Karyawan ditugaskan untuk
                        bekerja.
                      </li>
                      <li className="ml-1">
                        <span className="font-bold">Pimpinan Perusahaan</span> adalah Karyawan Perusahaan yang karena
                        jabatannya mempunyai tugas memimpin Perusahaan atau bagian dari Perusahaan dan mempunyai
                        wewenang mewakili Perusahaan baik ke dalam maupun ke luar.
                      </li>
                      <li className="ml-1">
                        <span className="font-bold">Direksi</span> adalah Anggota Direksi dari Perusahaan sebagaimana
                        tercantum dalam Akta Pendirian Perusahaan.
                      </li>
                      <li className="ml-1">
                        <span className="font-bold">Karyawan</span> adalah Mereka yang mempunyai hubungan kerja dengan
                        Perusahaan berdasarkan Surat Keputusan Pengangkatan/Perjanjian Kerja yang sah dan menerima upah.
                      </li>
                      <li className="ml-1">
                        <span className="font-bold">Istri/Suami Karyawan</span> adalah 1 (satu) orang istri/suami dari
                        perkawinan yang sah dan terdaftar pada Bagian HRD.
                      </li>
                      <li className="ml-1">
                        <span className="font-bold">Anak Karyawan</span> adalah Anak dan istri yang sah, berusia
                        dibawah 21 (dua puluh satu) tahun, belum bekerja, belum menikah, serta terdaftar di bagian HRD.
                      </li>
                      <li className="ml-1">
                        <span className="font-bold">Masa Kerja</span> adalah Jangka waktu karyawan sejak diterima atau
                        mulai masuk bekerja dalam kaitan dengan pemberian fasilitas karyawan, masa kerja dihitung sejak
                        pengangkatan sebagai karyawan pada unit yang memberikan fasilitas tersebut.
                      </li>
                      <li className="ml-1">
                        <span className="font-bold">Upah/Gaji</span> adalah Hak karyawan yang diterima dan dinyatakan
                        dalam bentuk uang sebagai imbalan dari pengusaha atau pemberi kerja kepada karyawan yang
                        ditetapkan dan dibayarkan menurut suatu perjanjian kerja, kesepakatan individu karyawan dalam
                        ikatan hubungan kerja, atau peraturan perundang-undangan, termasuk tunjangan bagi karyawan dan
                        keluarganya atas suatu pekerjaan dan/atau jasa yang telah atau akan dilakukan.
                      </li>
                      <li className="ml-1">
                        <span className="font-bold">Upah Pokok</span> adalah Upah yang diterima oleh karyawan selain
                        (tetapi tidak terbatas pada) tunjangan, fasilitas, insentif, dan bantuan dalam bentuk apapun.
                      </li>
                      <li className="ml-1">
                        <span className="font-bold">Penilaian Kinerja</span> adalah Rangkaian proses kegiatan
                        mengukur, menganalisa, menilai dan mengkomunikasikan proses dan hasil kinerja karyawan dalam
                        kurun waktu tertentu.
                      </li>
                      <li className="ml-1">
                        <span className="font-bold">Mutasi</span> adalah Pemindahan karyawan dalam satu posisi
                        (jabatan) ke posisi (jabatan) yang lain baik dalam satu unit kerja/unit
                        usaha/perusahaan/kelompok usaha/kelompok perusahaan atau ke unit kerja/unit
                        usaha/perusahaan/kelompok usaha lain, dalam 1 kota maupun ke kota lain di seluruh wilayah
                        Indonesia atau ke luar negeri.
                      </li>
                      <li className="ml-1">
                        <span className="font-bold">Penugasan (assignment)</span> adalah Pemberian tugas kepada
                        karyawan untuk menjalankan suatu pekerjaan diluar posisinya, dalam jangka waktu tertentu dan
                        bersifat sementara.
                      </li>
                      <li className="ml-1">
                        <span className="font-bold">Media Komunikasi</span> adalah segala sarana komunikasi yang
                        digunakan untuk menyampaikan informasi dari Perusahaan kepada Karyawan, termasuk namun tidak
                        terbatas pada media/surat/edaran elektronik atau media lain yang ditunjuk/digunakan oleh
                        Perusahaan dari waktu ke waktu.
                      </li>
                      <li className="ml-1">
                        <span className="font-bold">Syarat Kerja</span> adalah Hak dan kewajiban karyawan dan
                        perusahaan, baik yang sudah maupun yang belum diatur dalam peraturan perundang-undangan.
                      </li>
                      <li className="ml-1">
                        <span className="font-bold">Jam Kerja</span> adalah Jam saat karyawan diwajibkan untuk mulai
                        bekerja sampai dengan pulang bekerja.
                      </li>
                      <li className="ml-1">
                        <span className="font-bold">Hari Kerja</span> adalah Hari dimana karyawan melakukan aktivitas
                        pekerjaan yang pada umumnya dilakukan pada hari Senin sampai dengan Jumat untuk pola hari kerja
                        5 (lima) hari kerja: 2 (dua) hari libur mingguan.
                      </li>
                      <li className="ml-1">
                        <span className="font-bold">Waktu Kerja</span> adalah Aktifitas kerja yang dilakukan di dalam
                        jam kerja.
                      </li>
                      <li className="ml-1">
                        <span className="font-bold">Kerja Lembur</span> adalah Aktifitas kerja yang dilakukan di luar
                        waktu kerja.
                      </li>
                      <li className="ml-1">
                        <span className="font-bold">1 (satu) Bulan</span> adalah Jangka waktu selama 30 (tiga puluh)
                        hari berturut-turut.
                      </li>
                      <li className="ml-1">
                        <span className="font-bold">Perangkat Peraturan</span> adalah Keseluruhan isi buku Peraturan
                        Perusahaan yang dapat berupa, antara lain Surat Keputusan Direksi Grup CBN, Surat Keputusan
                        Direksi PT Suara Kreatif Muda, Prosedur Operasi Standar (SOP), Pedoman Perilaku (Code of
                        Conduct), dan Memorandum Internal sebagai petunjuk pelaksanaannya sepanjang tidak bertentangan
                        dengan Peraturan Perusahaan yang berlaku.
                      </li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>
              </div>

              <div ref={pasal2Ref}>
                <AccordionItem value="pasal-2" id="pasal-2">
                  <AccordionTrigger className="text-lg md:text-xl text-left font-semibold">PASAL 2: Maksud Dan Tujuan</AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-4">
                    <ol className="list-decimal pl-6 sm:pl-8 md:pl-10 space-y-4">
                      <li className="ml-1">
                        <p className="font-medium">Peraturan Perusahaan ini disusun dengan maksud sebagai berikut:</p>
                        <ol className="list-lower-alpha pl-5 space-y-2 mt-2">
                          <li>
                            a. Memberikan kepastian syarat-syarat kerja dilaksanakan sesuai dengan Peraturan
                            Perundang-undangan yang berlaku;
                          </li>
                          <li>
                            b. Menciptakan dan membina suatu hubungan kerja yang sehat, kondusif dan harmonis yang
                            mendorong semangat kerja yang kreatif dan visioner sehingga dapat meningkatkan produktivitas
                            kerja;
                          </li>
                          <li>
                            c. Memberikan pedoman bagi Perusahaan dan Karyawan, yang memuat ketentuan yang mengatur hak
                            dan kewajiban masing-masing, dalam upaya meningkatkan kesejahteraan Karyawan dan
                            kelangsungan usaha Perusahaan;
                          </li>
                          <li>d. Menjamin terpeliharanya tata tertib kerja dan kepentingan bersama.</li>
                        </ol>
                      </li>
                      <li className="ml-1">
                        <p className="font-medium">Peraturan Perusahaan ini disusun dengan tujuan sebagai berikut:</p>
                        <ol className="list-lower-alpha pl-5 space-y-2 mt-2">
                          <li>a. Menjelaskan dan melindungi hak dan kewajiban Perusahaan dan Karyawan;</li>
                          <li>b. Menetapkan aturan/prosedur kerja bagi Karyawan;</li>
                          <li>c. Menciptakan dan mempererat hubungan industrial;</li>
                          <li>
                            d. Memelihara dan mengembangkan hubungan Kerjasama dan harmonis antara Perusahaan dan
                            Karyawan;
                          </li>
                          <li>e. Menjadi acuan dalam memecahkan masalah ketenagakerjaan.</li>
                        </ol>
                      </li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>
              </div>
            </Accordion>
          </div>

          <div className="flex justify-between mt-8">
            <Button variant="outline" asChild className="bg-black text-white hover:bg-gray-700 hover:text-white p-2">
              <Link href="/peraturan/KKP">
                <ArrowLeft className="mr-2 h-4 w-4" /> KKP
              </Link>
            </Button>
            <Button asChild className="bg-black text-white hover:bg-gray-700 hover:text-white p-2">
              <Link href="/peraturan/bab-2">
               BAB II <ArrowRight className="ml-2 h-4 w-4" /> 
              </Link>
            </Button>
          </div>
        </div>

        {/* <div className="md:w-1/4">
          <div className="sticky top-20">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Book className="mr-2 h-5 w-5" />
                  Daftar Pasal
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>
                    <Link href="#pasal-1" className="text-sm hover:underline">
                      PASAL 1: KETENTUAN UMUM
                    </Link>
                  </li>
                  <li>
                    <Link href="#pasal-2" className="text-sm hover:underline">
                      PASAL 2: Maksud Dan Tujuan
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
