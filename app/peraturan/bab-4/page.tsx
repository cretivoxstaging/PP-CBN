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

export default function BabEmpat(): ReactElement {
  const searchParams = useSearchParams()
  const [hash, setHash] = React.useState<string | null>(null)

  // State to track which accordion item should be open
  const [openItem, setOpenItem] = React.useState<string | undefined>(undefined)

  // Refs for each pasal
  const pasal11Ref = useRef<HTMLDivElement>(null)
  const pasal12Ref = useRef<HTMLDivElement>(null)
  const pasal13Ref = useRef<HTMLDivElement>(null)
  const pasal14Ref = useRef<HTMLDivElement>(null)
  const pasal15Ref = useRef<HTMLDivElement>(null)
  const pasal16Ref = useRef<HTMLDivElement>(null)
  const pasal17Ref = useRef<HTMLDivElement>(null)
  const pasal18Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setHash(searchParams.get("hash") || window.location.hash.replace("#", ""))
  }, [searchParams])

  useEffect(() => {
    // Function to scroll to the specific pasal and open its accordion
    const scrollToElement = () => {
      if (!hash) return

      // Map hash to accordion value
      const valueMap: Record<string, string> = {
        "pasal-11": "pasal-11",
        "pasal-12": "pasal-12",
        "pasal-13": "pasal-13",
        "pasal-14": "pasal-14",
        "pasal-15": "pasal-15",
        "pasal-16": "pasal-16",
        "pasal-17": "pasal-17",
        "pasal-18": "pasal-18",
      }

      // Map hash to ref
      const refMap: Record<string, React.RefObject<HTMLDivElement | null>> = {
        "pasal-11": pasal11Ref,
        "pasal-12": pasal12Ref,
        "pasal-13": pasal13Ref,
        "pasal-14": pasal14Ref,
        "pasal-15": pasal15Ref,
        "pasal-16": pasal16Ref,
        "pasal-17": pasal17Ref,
        "pasal-18": pasal18Ref,
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
            <BreadcrumbLink href="/peraturan/bab-4">
              BAB IV: HARI LIBUR, CUTI, DAN MENINGGALKAN PEKERJAAN
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-3/4">
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter">
                BAB IV: HARI LIBUR, CUTI, DAN MENINGGALKAN PEKERJAAN
              </h1>
              <p className="text-muted-foreground">
                Ketentuan mengenai hari libur, cuti, dan izin meninggalkan pekerjaan di perusahaan.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full" value={openItem} onValueChange={setOpenItem}>
              <div ref={pasal11Ref}>
                <AccordionItem value="pasal-11" id="pasal-11">
                  <AccordionTrigger className="text-lg md:text-xl text-left font-semibold">PASAL 11: Hari Libur</AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-4">
                    <ol className="list-decimal pl-6 sm:pl-8 md:pl-10 space-y-2">
                      <li className="ml-1">
                        Hari Istirahat Mingguan adalah hari Sabtu dan hari Minggu dalam 1 (Satu) minggu.
                      </li>
                      <li className="ml-1">
                        Demi kepentingan Perusahaan, pengaturan Hari Istirahat Mingguan dapat diubah oleh Perusahaan
                        dengan mengikuti ketentuan jumlah jam kerja dalam seminggu.
                      </li>
                      <li className="ml-1">
                        Hari Libur Perusahaan adalah hari kerja yang ditetapkan oleh Pimpinan Perusahaan sebagai hari
                        libur.
                      </li>
                      <li className="ml-1">
                        Hari Libur Nasional adalah hari libur berdasarkan ketetapan Pemerintah yang berlaku untuk
                        Perusahaan Swasta.
                      </li>
                      <li className="ml-1">Upah pada ayat (1), (2), (3), dan (4) tersebut diatas dibayar penuh.</li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>
              </div>

              <div ref={pasal12Ref}>
                <AccordionItem value="pasal-12" id="pasal-12">
                  <AccordionTrigger className="text-lg md:text-xl text-left font-semibold">PASAL 12: Cuti Tahunan</AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-4">
                    <ol className="list-decimal pl-6 sm:pl-8 md:pl-10 space-y-2">
                      <li className="ml-1">
                        Karyawan yang telah bekerja selama 3 (tiga) bulan dan berhasil lolos dalam masa percobaan,
                        berhak atas Cuti Tahunan dengan tetap mendapatkan upah penuh.
                      </li>
                      <li className="ml-1">
                        Cuti Tahunan yang tidak dapat dapat dilaksanakan di tahun yang sama, dianggap hangus sehingga
                        tidak dapat diuangkan atau ditambahkan ke tahun berikutnya.
                      </li>
                      <li className="ml-1">
                        Pelaksanaan Cuti Tahunan diatur sebagai berikut:
                        <ol className="list-lower-alpha pl-5 space-y-1 mt-2">
                          <li className="ml-1">a. Libur tanggal merah tidak diperhitungkan dalam Cuti Tahunan;</li>
                          <li className="ml-1">b. Cuti bersama akan diperhitungkan dalam Cuti Tahunan; dan</li>
                          <li className="ml-1">
                            c. Banyaknya kesempatan untuk mengambil cuti kerja tidak dibatasi sepanjang total hari yang
                            diambil tidak lebih dari 5 (lima) hari kerja.
                          </li>
                        </ol>
                      </li>
                      <li className="ml-1">
                        Karyawan yang hendak menggunakan cuti tahunannya wajib memberitahukan secara tertulis kepada
                        Perusahaan melalui sistem yang telah disediakan, dan disetujui atasan masing-masing
                        selambat-lambatnya 5 (lima) hari kerja sebelum cuti dimaksud.
                      </li>
                      <li className="ml-1">
                        Cuti Tahunan wajib digunakan oleh karyawan dalam waktu 1 (satu) tahun setelah haknya timbul.
                      </li>
                      <li className="ml-1">
                        Apabila hak cuti tahunan tidak dilaksanakan seperti dimaksud ayat (5) pasal ini, maka hak
                        cutinya dinyatakan hangus, kecuali atas kepentingan perusahaan dapat ditunda dengan persetujuan
                        Pimpinan Perusahaan.
                      </li>
                      <li className="ml-1">
                        Selama menjalankan cuti tahunan atau cuti lainnya, karyawan tidak dibenarkan bekerja pada
                        Perusahaan lain. Pelanggaran terhadap ketentuan ini merupakan tindak pelanggaran disiplin.
                      </li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>
              </div>

              <div ref={pasal13Ref}>
                <AccordionItem value="pasal-13" id="pasal-13">
                  <AccordionTrigger className="text-lg md:text-xl text-left font-semibold">
                    PASAL 13: Cuti Melahirkan/Keguguran
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-4">
                    <ol className="list-decimal pl-6 sm:pl-8 md:pl-10 space-y-2">
                      <li className="ml-1">
                        Karyawan wanita yang akan melahirkan diberikan Cuti Melahirkan selama 90 (sembilan puluh) hari
                        kalender,
                      </li>
                      <li className="ml-1">
                        Pelaksanaan Cuti Melahirkan ditentukan 45 (empat puluh lima) hari sebelum dan 45 (empat puluh
                        lima) bulan sesudah melahirkan/gugur kandungan atau ditentukan oleh dokter ahli kandungan
                        melalui Surat Keterangan Dokter resmi.
                      </li>
                      <li className="ml-1">
                        Karyawan yang mengalami keguguran kandungan atau menggugurkan kandungan karena alasan medis,
                        yang dibuktikan dengan Surat Keterangan Dokter, diberikan cuti berdasarkan Surat Keterangan
                        Dokter yang sah.
                      </li>
                      <li className="ml-1">
                        Karyawan yang hendak mengambil hak istirahat melahirkan, seperti ayat (2) pasal ini, wajib
                        menyampaikan Surat Permohonan istirahat selambat-lambatnya sepuluh hari sebelum waktu istirahat
                        itu dimulai. Surat Permohonan dimaksud harus disertai dengan Surat Keterangan Dokter.
                      </li>
                      <li className="ml-1">
                        Karyawan yang menjalani istirahat melahirkan/keguguran mendapatkan upah penuh
                      </li>
                      <li className="ml-1">
                        Karyawan yang hendak menggunakan cuti Istirahat Melahirkan/Keguguran wajib memberitahukan secara
                        tertulis kepada Perusahaan melalui sistem yang telah disediakan.
                      </li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>
              </div>

              <div ref={pasal14Ref}>
                <AccordionItem value="pasal-14" id="pasal-14">
                  <AccordionTrigger className="text-lg md:text-xl text-left font-semibold">PASAL 14: Cuti Sakit</AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-4">
                    <ol className="list-decimal pl-6 sm:pl-8 md:pl-10 space-y-2">
                      <li className="ml-1">
                        Karyawan yang menderita sakit selama lebih dari sama dengan 1 (satu) hari, tapi kurang dari 12
                        (dua belas) hari, dan dapat membuktikan sakitnya berdasarkan Surat Keterangan Dokter dan/atau
                        Surat Keterangan dari Rumah Sakit, dapat diberikan cuti/istirahat;
                      </li>
                      <li className="ml-1">
                        Apabila lebih dari sama dengan 12 (dua belas) hari, karyawan harus mendapat izin tertulis dari
                        perusahaan berdasarkan Surat Keterangan Dokter dan/atau Surat Keterangan Rumah Sakit yang
                        diberikan oleh karyawan;
                      </li>
                      <li className="ml-1">
                        Karyawan yang menderita sakit pada saat pelaksanaan cuti tahunan, maka Surat Keterangan Dokter
                        tidak bisa menggantikan cuti tahunan yang berlangsung.
                      </li>
                      <li className="ml-1">
                        Penyalahgunaan cuti sakit oleh karyawan merupakan tindak pelanggaran disiplin kerja.
                      </li>
                      <li className="ml-1">
                        Karyawan yang hendak menggunakan Cuti Sakit wajib memberitahukan secara tertulis kepada
                        Perusahaan melalui sistem yang telah disediakan.
                      </li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>
              </div>

              <div ref={pasal15Ref}>
                <AccordionItem value="pasal-15" id="pasal-15">
                  <AccordionTrigger className="text-lg md:text-xl text-left font-semibold">
                    PASAL 15: Ijin Meninggalkan Pekerjaan dengan Gaji Penuh
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-4">
                    <ol className="list-decimal pl-6 sm:pl-8 md:pl-10 space-y-2">
                      <li className="ml-1">
                        Karyawan diberikan ijin meninggalkan pekerjaan untuk keperluan-keperluan tersebut dibawah ini:
                        <table className="w-full border-collapse border border-border mt-4">
                          <tbody>
                            <tr>
                              <td className="border border-border p-2">a. Pernikahan karyawan</td>
                              <td className="border border-border p-2 text-right">3 hari</td>
                            </tr>
                            <tr>
                              <td className="border border-border p-2">b. Pernikahan anak sah karyawan</td>
                              <td className="border border-border p-2 text-right">2 hari</td>
                            </tr>
                            <tr>
                              <td className="border border-border p-2">c. Istri sah karyawan melahirkan/keguguran</td>
                              <td className="border border-border p-2 text-right">2 hari</td>
                            </tr>
                            <tr>
                              <td className="border border-border p-2">
                                d. Anggota keluarga (yaitu suami/istri, orang tua/ mertua, atau anak / menantu karyawan
                                sah) meninggal dunia
                              </td>
                              <td className="border border-border p-2 text-right">2 hari</td>
                            </tr>
                            <tr>
                              <td className="border border-border p-2">
                                e. Pemakaman saudara kandung karyawan yang sah dan terdaftar pada bagian HRD
                              </td>
                              <td className="border border-border p-2 text-right">1 hari</td>
                            </tr>
                            <tr>
                              <td className="border border-border p-2">f. Menyunatkan / membaptiskan anak</td>
                              <td className="border border-border p-2 text-right">2 hari</td>
                            </tr>
                            <tr>
                              <td className="border border-border p-2">
                                g. Anggota keluarga yang tinggal 1 rumah meninggal dunia
                              </td>
                              <td className="border border-border p-2 text-right">1 hari</td>
                            </tr>
                            <tr>
                              <td className="border border-border p-2">
                                h. Memenuhi panggilan dinas oleh instansi pemerintah yang dibuktikan dengan surat resmi
                                dari instansi yang bersangkutan
                              </td>
                              <td className="border border-border p-2 text-right">Sesuai isi surat</td>
                            </tr>
                            <tr>
                              <td className="border border-border p-2">
                                i. Mendapat musibah (kebakaran, kebanjiran, atau hal-hal lain)
                              </td>
                              <td className="border border-border p-2 text-right">
                                Berdasarkan pertimbangan Perusahaan
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </li>
                      <li className="ml-1">
                        Permohonan ijin melebihi ketentuan di atas akan diperhitungkan dengan hak cuti tahunan yang ada
                        dengan persetujuan Atasan langsung.
                      </li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>
              </div>

              <div ref={pasal16Ref}>
                <AccordionItem value="pasal-16" id="pasal-16">
                  <AccordionTrigger className="text-lg md:text-xl text-left font-semibold">
                    PASAL 16: Ijin Meninggalkan Pekerjaan Pada Waktu Jam Kerja
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-4">
                    <ol className="list-decimal pl-6 sm:pl-8 md:pl-10 space-y-2">
                      <li className="ml-1">
                        Atasan dapat memberikan izin kepada Karyawan yang terlambat datang atau meninggalkan pekerjaan
                        pada waktu jam kerja untuk suatu urusan atau kepentingan pribadi dengan alasan yang dapat
                        diterima oleh Perusahaan dengan terlebih dahulu mengajukan ijin melalui system yang telah
                        disediakan, diajukan kepada Operations Manager dan diketahui oleh atasan, Pimpinan Perusahaan,
                        dan HRD.
                      </li>
                      <li className="ml-1">
                        Karyawan yang mengajukan izin dikarenakan terlambat datang atau meninggalkan pekerjaan pada
                        waktu jam kerja untuk suatu urusan atau kepentingan pribadi, dengan alasan yang tidak dapat
                        diterima oleh Perusahaan, maka hal tersebut dapat ditolak oleh atasan. Apabila karyawan tidak
                        menerima penolakan dari Atasan dan tetap bersikeras, maka karyawan bersangkutan dianggap
                        Mangkir, dan selanjutnya diatur dalam pasal 18 terkait Meninggalkan Pekerjaan Tanpa
                        Ijin/Mangkir.
                      </li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>
              </div>

              <div ref={pasal17Ref}>
                <AccordionItem value="pasal-17" id="pasal-17">
                  <AccordionTrigger className="text-lg md:text-xl text-left font-semibold">
                    PASAL 17: Meninggalkan Pekerjaan Tanpa Ijin/Mangkir
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-4">
                    <ol className="list-decimal pl-6 sm:pl-8 md:pl-10 space-y-2">
                      <li className="ml-1">
                        Karyawan yang tidak masuk kerja tanpa adanya pemberitahuan tertulis atau tanpa ijin Perusahaan
                        dianggap mangkir.
                      </li>
                      <li className="ml-1">
                        Karyawan yang mangkir selama 1 (satu) hari penuh atau lebih seperti dimaksud pada ayat (1)
                        tersebut di atas baik berturut-turut atau tidak berturut-turut dalam 30 (tiga puluh) hari kerja
                        akan diberikan sanksi dan peringatan.
                      </li>
                      <li className="ml-1">
                        Karyawan yang masuk kerja tetapi tidak bersedia melaksanakan tugasnya dengan alasan yang tidak
                        dapat diterima oleh Perusahaan maka Karyawan tersebut dapat dianggap mangkir
                      </li>
                      <li className="ml-1">
                        Apabila Karyawan tidak masuk kerja selama 5 (Lima) hari kerja berturut-turut tanpa keterangan
                        tertulis disertai bukti yang sah dan telah dipanggil secara lisan dan tertulis sebanyak 2 (dua)
                        kali, maka karyawan tersebut dapat diputus hubungan kerjanya karena dikualifikasikan
                        mengundurkan diri.
                      </li>
                      <li className="ml-1">
                        Karyawan yang tidak masuk kerja selama 2 (dua) hari berturut-turut selanjutnya akan diberikan
                        Surat Peringatan yang akan mengacu kepada klausul Tindakan Disiplin sebagaimana diatur dalam Bab
                        XI Peraturan Perusahaan ini. Selanjutnya karyawan yang bersangkutan akan dikirimkan Surat
                        Pemanggilan secara tertulis yang dikirimkan melalui jasa pengiriman surat dengan tanggal dan
                        waktu pengiriman surat tercatat secara sah pada perusahaan jasa tersebut.
                      </li>
                      <li className="ml-1">
                        Apabila karyawan tidak masuk kerja selama 4 (empat) hari kerja berturut-turut tanpa keterangan
                        tertulis disertai bukti yang sah dan telah dipanggil secara tertulis sebanyak 2 (dua) kali, maka
                        karyawan tersebut dapat diputus hubungan kerjanya karena dikualifikasikan mengundurkan diri yang
                        akan mengacu kepada klausul Pemutusan Hubungan Kerja sebagaimana diatur dalam Bab XIII Peraturan
                        Perusahaan ini.
                      </li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>
              </div>

              <div ref={pasal18Ref}>
                <AccordionItem value="pasal-18" id="pasal-18">
                  <AccordionTrigger className="text-lg md:text-xl text-left font-semibold">PASAL 18: Cuti Lainnya</AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-4 ml-2">
                    <p>
                      Perusahaan dapat menentukan cuti lainnya di kemudian hari yang belum diatur pada Peraturan
                      Perusahaan ini, yang akan dituangkan dalam Perangkat Peraturan (sebagaimana relevan).
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </div>
            </Accordion>
          </div>

          <div className="flex justify-between mt-8">
            <Button variant="outline" asChild className="bg-black text-white hover:bg-gray-700 hover:text-white p-2">
              <Link href="/peraturan/bab-3">
                <ArrowLeft className="mr-2 h-4 w-4" /> BAB III
              </Link>
            </Button>
            <Button asChild className="bg-black text-white hover:bg-gray-700 hover:text-white p-2">
              <Link href="/peraturan/bab-5">
               BAB V <ArrowRight className="ml-2 h-4 w-4" /> 
              </Link>
            </Button>
          </div>
        </div>

        {/* <div className="md:w-1/4">
          <div className="sticky top-20">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5" />
                  Daftar Pasal
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>
                    <Link href="#pasal-11" className="text-sm hover:underline">
                      PASAL 11: Hari Libur
                    </Link>
                  </li>
                  <li>
                    <Link href="#pasal-12" className="text-sm hover:underline">
                      PASAL 12: Cuti Tahunan
                    </Link>
                  </li>
                  <li>
                    <Link href="#pasal-13" className="text-sm hover:underline">
                      PASAL 13: Cuti Melahirkan/Keguguran
                    </Link>
                  </li>
                  <li>
                    <Link href="#pasal-14" className="text-sm hover:underline">
                      PASAL 14: Cuti Sakit
                    </Link>
                  </li>
                  <li>
                    <Link href="#pasal-15" className="text-sm hover:underline">
                      PASAL 15: Ijin Meninggalkan Pekerjaan dengan Gaji Penuh
                    </Link>
                  </li>
                  <li>
                    <Link href="#pasal-16" className="text-sm hover:underline">
                      PASAL 16: Ijin Meninggalkan Pekerjaan Pada Waktu Jam Kerja
                    </Link>
                  </li>
                  <li>
                    <Link href="#pasal-17" className="text-sm hover:underline">
                      PASAL 17: Meninggalkan Pekerjaan Tanpa Ijin/Mangkir
                    </Link>
                  </li>
                  <li>
                    <Link href="#pasal-18" className="text-sm hover:underline">
                      PASAL 18: Cuti Lainnya
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
