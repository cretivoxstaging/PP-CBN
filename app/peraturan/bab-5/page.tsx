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

export default function BabLima(): ReactElement {
  const searchParams = useSearchParams()
  const [hash, setHash] = React.useState<string | null>(null)

  // State to track which accordion item should be open
  const [openItem, setOpenItem] = React.useState<string | undefined>(undefined)

  // Refs for each pasal
  const pasal19Ref = useRef<HTMLDivElement>(null)
  const pasal20Ref = useRef<HTMLDivElement>(null)
  const pasal21Ref = useRef<HTMLDivElement>(null)
  const pasal22Ref = useRef<HTMLDivElement>(null)
  const pasal23Ref = useRef<HTMLDivElement>(null)
  const pasal24Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setHash(searchParams.get("hash") || window.location.hash.replace("#", ""))
  }, [searchParams])

  useEffect(() => {
    // Function to scroll to the specific pasal and open its accordion
    const scrollToElement = () => {
      if (!hash) return

      // Map hash to accordion value
      const valueMap: Record<string, string> = {
        "pasal-19": "pasal-19",
        "pasal-20": "pasal-20",
        "pasal-21": "pasal-21",
        "pasal-22": "pasal-22",
        "pasal-23": "pasal-23",
        "pasal-24": "pasal-24",
      }

      // Map hash to ref
      const refMap: Record<string, React.RefObject<HTMLDivElement | null>> = {
        "pasal-19": pasal19Ref,
        "pasal-20": pasal20Ref,
        "pasal-21": pasal21Ref,
        "pasal-22": pasal22Ref,
        "pasal-23": pasal23Ref,
        "pasal-24": pasal24Ref,
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
            <BreadcrumbLink href="/peraturan/bab-5">BAB V: PENGUPAHAN</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-3/4">
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter">BAB V: PENGUPAHAN</h1>
              <p className="text-muted-foreground">
                Ketentuan mengenai sistem pengupahan, lembur, tunjangan, dan bantuan bagi karyawan.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full" value={openItem} onValueChange={setOpenItem}>
              <div ref={pasal19Ref}>
                <AccordionItem value="pasal-19" id="pasal-19">
                  <AccordionTrigger className="text-lg md:text-xl text-left font-semibold">PASAL 19: Sistem Pengupahan</AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-4">
                    <ol className="list-decimal pl-6 sm:pl-8 md:pl-10 space-y-2">
                      <li className="ml-1">
                        Kebijakan dan pengaturan upah Karyawan merupakan hak dan wewenang penuh Pimpinan Perusahaan.
                      </li>
                      <li className="ml-1">
                        Penetapan upah Karyawan tetap didasarkan atas:
                        <ol className="list-lower-alpha pl-5 space-y-1 mt-2">
                          <li className="ml-1">a. Bobot pekerjaan;</li>
                          <li className="ml-1">b. Golongan jabatan;</li>
                          <li className="ml-1">c. Kompetensi;</li>
                        </ol>
                      </li>
                      <li className="ml-1">
                        Penetapan upah terendah tidak akan kurang dari ketentuan Upah Minimum Provinsi (UMP) yang
                        ditetapkan Pemerintah.
                      </li>
                      <li className="ml-1">Upah dibayarkan selambat-lambatnya pada akhir bulan pada bulan berjalan.</li>
                      <li className="ml-1">
                        Berdasarkan kemampuan perusahaan, Pimpinan Perusahaan dapat mengadakan peninjauan upah dan
                        sebagai dasar perhitungan untuk peninjauan upah tersebut adalah upah pokok.
                      </li>
                      <li className="ml-1">
                        Upah sangat dirahasiakan, dan Karyawan harus menjaga kerahasiaan gajinya baik dari rekan kerja
                        maupun pihak lain di luar Perusahaan. Setiap pelanggaran kerahasiaan dinyatakan sebagai
                        pelanggaran yang dapat dikenakan sanksi disiplin.
                      </li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>
              </div>

              <div ref={pasal20Ref}>
                <AccordionItem value="pasal-20" id="pasal-20">
                  <AccordionTrigger className="text-lg md:text-xl text-left font-semibold">PASAL 20: Lembur</AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-4">
                    <ol className="list-decimal pl-6 sm:pl-8 md:pl-10 space-y-2">
                      <li className="ml-1">
                        Lembur adalah pekerjaan yang dilakukan oleh Karyawan melebihi jam kerja biasa dan dilakukan
                        untuk kepentingan Perusahaan.
                      </li>
                      <li className="ml-1">
                        Jam kerja yang masuk dalam kategori lembur adalah apabila karyawan telah bekerja 8 (delapan) jam
                        kerja, ditambah bekerja selama minimal 3 (tiga) jam pada hari yang sama. Jam Lembur dapat
                        diperhitungkan untuk mengambil Upah Lembur sesuai dengan kesepakatan dengan Pimpinan Perusahaan
                        dengan diketahui oleh Atasan. Perhitungan upah kerja lembur dihitung dengan menggunakan
                        Peraturan Pemerintah No. 35 Tahun 2021.
                      </li>
                      <li className="ml-1">
                        Tanpa suatu alasan yang sah, yang dapat diterima dan dibenarkan oleh Pimpinan, Karyawan tidak
                        dapat menolak kerja lembur, terutama apabila Perusahaan menghadapi hal-hal sebagai berikut:
                        <ol className="list-lower-alpha pl-5 space-y-1 mt-2">
                          <li className="ml-1">
                            a. Force Majeure atau keadaan darurat seperti: kebakaran, gempa bumi, banjir, huru-hara,
                            kerusakan peralatan kerja, dan sebagainya.
                          </li>
                          <li className="ml-1">
                            b. Ada pekerjaan yang apabila tidak diselesaikan akan merugikan serta mengganggu kelancaran
                            produksi dan/atau jalannya Perusahaan.
                          </li>
                          <li className="ml-1">
                            c. Ada kerja regu secara bergilir dan petugas regu berikutnya berhalangan untuk bekerja.
                          </li>
                          <li className="ml-1">
                            d. Apabila pekerjaan itu menyangkut kepentingan nasional atau Pemerintah setempat (pemilu dan
                            sebagainya).
                          </li>
                        </ol>
                      </li>
                      <li className="ml-1">
                        Atasan yang bersangkutan perlu mengawasi pelaksanaan kerja lembur di unit kerjanya.
                      </li>
                      <li className="ml-1">Yang berhak atas upah lembur hanya karyawan di bawah tingkat Manajer.</li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>
              </div>

              <div ref={pasal21Ref}>
                <AccordionItem value="pasal-21" id="pasal-21">
                  <AccordionTrigger className="text-lg md:text-xl text-left font-semibold">
                    PASAL 21: Upah Selama Sakit Berkepanjangan
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-4">
                    <ol className="list-decimal pl-6 sm:pl-8 md:pl-10 space-y-2">
                      <li className="ml-1">
                        Yang dimaksud dengan gaji selama sakit berkepanjangan adalah gaji yang dibayarkan kepada
                        Karyawan yang mengalami sakit yang lama dan terus menerus yang dibuktikan dengan surat
                        keterangan dokter.
                      </li>
                      <li className="ml-1">
                        Sakit berkepanjangan adalah kondisi kesehatan yang terbukti melalui pernyataan medis yang
                        membutuhkan perawatan intensif 24 jam, sehingga menyebabkan Karyawan tidak dapat melakukan
                        kewajiban untuk bekerja secara optimal.
                      </li>
                      <li className="ml-1">
                        Besarnya pembayaran gaji tersebut besarannya sebagai berikut:
                        <ol className="list-lower-alpha pl-5 space-y-1 mt-2">
                          <li className="ml-1">
                            a. 4 (empat) bulan pertama, dibayar 100% (seratus perseratus) dari gaji;
                          </li>
                          <li className="ml-1">
                            b. 4 (empat) bulan kedua, dibayar 75% (tujuh puluh lima perseratus) dari gaji;
                          </li>
                          <li className="ml-1">
                            c. 4 (empat) bulan ketiga, dibayar 50% (lima puluh perseratus) dari gaji; dan
                          </li>
                          <li className="ml-1">
                            d. Bulan selanjutnya dibayar 25% (dua puluh lima perseratus) dari gaji sebelum pemutusan
                            hubungan kerja dilakukan oleh Perusahaan.
                          </li>
                        </ol>
                      </li>
                      <li className="ml-1">
                        Apabila setelah melebihi 12 (dua belas) bulan karyawan belum juga sembuh, Perusahaan dapat
                        memutuskan hubungan kerjanya sesuai dengan Peraturan Perundang-undangan yang berlaku.
                      </li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>
              </div>

              <div ref={pasal22Ref}>
                <AccordionItem value="pasal-22" id="pasal-22">
                  <AccordionTrigger className="text-lg md:text-xl text-left font-semibold">
                    PASAL 22: Tunjangan Hari Raya Keagamaan
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-4">
                    <ol className="list-decimal pl-6 sm:pl-8 md:pl-10 space-y-2">
                      <li className="ml-1">
                        Perusahaan memberikan Tunjangan Hari Raya Keagamaan kepada Karyawan yang telah mempunyai masa
                        kerja sekurang-kurangnya 1 (satu) bulan sesuai dengan ketentuan yang berlaku.
                      </li>
                      <li className="ml-1">
                        Besarnya Tunjangan Hari Raya Keagamaan ditetapkan sesuai dengan Peraturan Menteri Tenaga Kerja
                        Nomor PER-06/MEN/2016 tentang Tunjangan Hari Raya Keagamaan Bagi Pekerja di Perusahaan, yaitu
                        sebesar 1 (satu) bulan upah pokok bagi karyawan yang telah mempunyai masa kerja 12 (dua belas)
                        bulan berturut-turut atau lebih.
                      </li>
                      <li className="ml-1">
                        Bagi Karyawan yang masa kerjanya telah mencapai 1 (satu) bulan atau lebih tetapi kurang dari 12
                        (dua belas) bulan akan diberikan Tunjangan Hari Raya Keagamaan sebesar perbandingan jumlah bulan
                        masa kerjanya (secara proporsional).
                      </li>
                      <li className="ml-1">
                        Pembayaran Tunjangan Hari Raya Keagamaan kepada semua Karyawan dilakukan selambat-lambatnya 14
                        (empat belas) hari kalender sebelum Hari Raya Idul Fitri.
                      </li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>
              </div>

              <div ref={pasal23Ref}>
                <AccordionItem value="pasal-23" id="pasal-23">
                  <AccordionTrigger className="text-lg md:text-xl text-left font-semibold">
                    PASAL 23: Tunjangan Transportasi
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-4 ml-2">
                    <p>
                      Perusahaan memberikan Tunjangan Transport kepada setiap karyawan yang diatur oleh Pimpinan
                      Perusahaan dalam ketentuan tersendiri dan akan dituangkan dalam Perangkat Peraturan (sebagaimana
                      relevan).
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </div>

              <div ref={pasal24Ref}>
                <AccordionItem value="pasal-24" id="pasal-24">
                  <AccordionTrigger className="text-lg md:text-xl text-left font-semibold">
                    PASAL 24: Bantuan Bagi Karyawan Yang Ditahan Pihak Berwajib
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-4">
                    <ol className="list-decimal pl-6 sm:pl-8 md:pl-10 space-y-2">
                      <li className="ml-1">
                        Untuk karyawan yang ditahan oleh Pihak Berwajib bukan karena pengaduan Perusahaan dan bukan
                        berhubungan dengan pekerjaannya, tidak mendapat upah.
                      </li>
                      <li className="ml-1">
                        Apabila yang bersangkutan dinyatakan bersalah dan dijatuhi hukuman oleh Pihak Berwajib,
                        kepadanya dapat diputuskan hubungan kerjanya oleh Perusahaan yang dilaksanakan sesuai Peraturan
                        Perundang-undangan yang berlaku.
                      </li>
                      <li className="ml-1">
                        Kepada karyawan yang ditahan oleh Pihak Berwajib karena laporan / pengaduan perusahaan, maka:
                        <ol className="list-lower-alpha pl-5 space-y-1 mt-2">
                          <li className="ml-1">
                            a. Sejak ditahan sampai adanya keputusan Pihak Berwajib, karyawan yang bersangkutan menerima
                            upah yang besarannya sesuai dengan Undang-undang / Peraturan Ketenagakerjaan yang berlaku,
                            dan berlaku paling lama 6 (enam) bulan terhitung sejak hari pertama karyawan ditahan.
                            Apabila karyawan dibebaskan karena dinyatakan tidak bersalah, yang bersangkutan dapat
                            diterima bekerja kembali dengan tidak mengurangi hak-haknya dan perusahaan membayar upah
                            penuh yang seharusnya diterima karyawan terhitung sejak ditahan.
                          </li>
                          <li className="ml-1">
                            b. Apabila yang bersangkutan dinyatakan bersalah dan dijatuhi hukuman oleh Pihak Berwajib,
                            kepadanya dapat diputuskan hubungan kerjanya oleh perusahaan yang dilaksanakan sesuai
                            Undang-undang / Peraturan Ketenagakerjaan.
                          </li>
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
              <Link href="/peraturan/bab-4">
                <ArrowLeft className="mr-2 h-4 w-4" /> BAB IV
              </Link>
            </Button>
            <Button asChild className="bg-black text-white hover:bg-gray-700 hover:text-white p-2">
              <Link href="/peraturan/bab-6">
               BAB VI <ArrowRight className="ml-2 h-4 w-4" /> 
              </Link>
            </Button>
          </div>
        </div>

        {/* <div className="md:w-1/4">
          <div className="sticky top-20">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <DollarSign className="mr-2 h-5 w-5" />
                  Daftar Pasal
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>
                    <Link href="#pasal-19" className="text-sm hover:underline">
                      PASAL 19: Sistem Pengupahan
                    </Link>
                  </li>
                  <li>
                    <Link href="#pasal-20" className="text-sm hover:underline">
                      PASAL 20: Lembur
                    </Link>
                  </li>
                  <li>
                    <Link href="#pasal-21" className="text-sm hover:underline">
                      PASAL 21: Upah Selama Sakit Berkepanjangan
                    </Link>
                  </li>
                  <li>
                    <Link href="#pasal-22" className="text-sm hover:underline">
                      PASAL 22: Tunjangan Hari Raya Keagamaan
                    </Link>
                  </li>
                  <li>
                    <Link href="#pasal-23" className="text-sm hover:underline">
                      PASAL 23: Tunjangan Transportasi
                    </Link>
                  </li>
                  <li>
                    <Link href="#pasal-24" className="text-sm hover:underline">
                      PASAL 24: Bantuan Bagi Karyawan Yang Ditahan Pihak Berwajib
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
