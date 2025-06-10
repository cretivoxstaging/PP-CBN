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

export default function BabEnam(): ReactElement {
  const searchParams = useSearchParams()
  const [hash, setHash] = React.useState<string | null>(null)

  // State to track which accordion item should be open
  const [openItem, setOpenItem] = React.useState<string | undefined>(undefined)

  // Refs for each pasal
  const pasal25Ref = useRef<HTMLDivElement>(null)
  const pasal26Ref = useRef<HTMLDivElement>(null)
  const pasal27Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setHash(searchParams.get("hash") || window.location.hash.replace("#", ""))
  }, [searchParams])

  useEffect(() => {
    // Function to scroll to the specific pasal and open its accordion
    const scrollToElement = () => {
      if (!hash) return

      // Map hash to accordion value
      const valueMap: Record<string, string> = {
        "pasal-25": "pasal-25",
        "pasal-26": "pasal-26",
        "pasal-27": "pasal-27",
      }

      // Map hash to ref
      const refMap: Record<string, React.RefObject<HTMLDivElement | null>> = {
        "pasal-25": pasal25Ref,
        "pasal-26": pasal26Ref,
        "pasal-27": pasal27Ref,
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
            <BreadcrumbLink href="/peraturan/bab-6">BAB VI: PERAWATAN DI RUMAH SAKIT</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-3/4">
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter">BAB VI: PERAWATAN DI RUMAH SAKIT</h1>
              <p className="text-muted-foreground">
                Ketentuan mengenai bantuan biaya perawatan di rumah sakit, tunjangan melahirkan, dan fasilitas kesehatan
                bagi karyawan dan keluarganya.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full" value={openItem} onValueChange={setOpenItem}>
              <div ref={pasal25Ref}>
                <AccordionItem value="pasal-25" id="pasal-25">
                  <AccordionTrigger className="text-lg md:text-xl text-left font-semibold">PASAL 25: Umum</AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-4">
                    <ol className="list-decimal pl-6 sm:pl-8 md:pl-10 space-y-2">
                      <li className="ml-1">
                        Perusahaan memberikan bantuan biaya perawatan di rumah sakit kepada Karyawan beserta
                        keluarganya. Mekanisme pemberian bantuan yang dimaksud, selanjutnya akan diatur oleh Pimpinan
                        Perusahaan dan akan dituangkan dalam Perangkat Peraturan (sebagaimana relevan).
                      </li>
                      <li className="ml-1">
                        Pertanggungan biaya pengobatan oleh perusahaan juga bekerja sama dengan Badan Penyelenggara
                        Jaminan Sosial Kesehatan (BPJS Kesehatan) sesuai dengan peraturan perundang-undangan yang
                        berlaku.
                      </li>
                      <li className="ml-1">
                        Yang dimaksud keluarga Karyawan dalam bantuan biaya pengobatan ini adalah:
                        <ol className="list-lower-alpha pl-5 space-y-1 mt-2">
                          <li className="ml-1">a. 1 (satu) Istri/Suami yang sah dan terdaftar pada bagian HRD.</li>
                          <li className="ml-1">
                            b. Anak dari Karyawan yang pertama dan kedua, dari istri yang sah, berusia di bawah 21 (dua
                            puluh satu) tahun, belum bekerja, belum menikah, serta terdaftar di bagian HRD.
                          </li>
                          <li className="ml-1">
                            c. Karyawan wanita yang menikah menanggung untuk dirinya dan anak maksimal 2 orang.
                          </li>
                        </ol>
                      </li>
                      <li className="ml-1">
                        Perusahaan memberikan bantuan biaya perawatan di rumah sakit dengan rujukan berdasarkan
                        keterangan dokter rumah sakit atau dokter praktek pribadi.
                      </li>
                      <li className="ml-1">
                        Perusahaan juga memberikan bantuan biaya melahirkan kepada Karyawan atau untuk istri sah dari
                        Karyawan yang namanya sudah terdaftar kepada tim HRD untuk semua Karyawan yang telah 12 (dua
                        belas) bulan bekerja.
                      </li>
                      <li className="ml-1">
                        Biaya pengobatan yang dibantu oleh Perusahaan meliputi biaya rawat jalan, rawat inap, dental,
                        alat bantu kesehatan dan melahirkan.
                      </li>
                      <li className="ml-1">
                        Rawat jalan yang dilakukan oleh dokter atau dokter ahli yang meliputi tindakan pemeriksaan,
                        pengobatan, dan operasi ringan.
                      </li>
                      <li className="ml-1">
                        Biaya-biaya rawat jalan, rawat inap, dental, dan alat bantu kesehatan yang diganti oleh
                        perusahaan, beserta batasan / plafon biaya pengobatan rawat jalan untuk 1 (satu) tahun kalender
                        akan diatur oleh Pimpinan Perusahaan kemudian, dan dituangkan dalam Perangkat Peraturan
                        (sebagaimana relevan).
                      </li>
                      <li className="ml-1">
                        Tujuan kosmetik seperti kawat gigi, pemutihan gigi/veneer, dan sejenisnya tidak akan diganti
                        oleh Perusahaan.
                      </li>
                      <li className="ml-1">
                        Biaya melahirkan diberikan kepada karyawan dengan masa kerja minimal 12 (dua belas) bulan
                        bekerja, untuk kelahiran anak pertama dan kedua.
                      </li>
                      <li className="ml-1">
                        Biaya bantuan melahirkan yang diberikan kepada karyawan akan diatur oleh Pimpinan Perusahaan
                        kemudian, dan dituangkan dalam Perangkat Peraturan (sebagaimana relevan).
                      </li>
                      <li className="ml-1">
                        Untuk mendapatkan penggantian biaya pengobatan/perawatan/melahirkan, Karyawan wajib mengisi
                        formulir penggantian biaya pengobatan dan menyerahkannya ke bagian HRD beserta tanda bukti
                        pembayaran/kuitansi asli yang jelas memuat:
                        <ol className="list-lower-alpha pl-5 space-y-1 mt-2">
                          <li className="ml-1">a. Nama dan alamat dokter/apotek/laboratorium/optik/rumah sakit.</li>
                          <li className="ml-1">b. Nama pasien.</li>
                          <li className="ml-1">c. Tanggal pemeriksaan/pengobatan/pembelian/perawatan.</li>
                          <li className="ml-1">d. 
                            Jenis tindakan (misalnya: pemeriksaan, penambalan, nomor gigi, hasil laboratorium, dan
                            lain-lain)
                          </li>
                          <li className="ml-1">e. Copy resep dokter untuk obat/kacamata.</li>
                          <li className="ml-1">f. Jumlah pembayaran.</li>
                          <li className="ml-1">g. 
                            Tanda tangan dari Atasan yang bersangkutan (sekurang-kurangnya Manager) sebagai tanda
                            mengetahui atas permohonan penggantian biaya tersebut.
                          </li>
                        </ol>
                      </li>
                      <li className="ml-1">
                        Kuitansi harus diserahkan ke bagian HRD selambat-lambatnya 1 (satu) bulan setelah tanggal
                        pemeriksaan/pengobatan/pembayaran/perawatan.
                      </li>
                      <li className="ml-1">
                        Kuitansi yang diserahkan ke bagian HRD lebih dari 1 (satu) bulan setelah tanggal pemeriksaan
                        pembiayaan dianggap telah kadaluarsa dan tidak dapat diminta penggantiannya.
                      </li>
                      <li className="ml-1">
                        Bagian HRD berhak meminta keterangan lebih lanjut kepada Karyawan yang bersangkutan maupun pihak
                        ketiga apabila terdapat hal-hal yang kurang jelas atau meragukan sehubungan dengan permintaan
                        penggantian bantuan biaya dimaksud.
                      </li>
                      <li className="ml-1">
                        Perusahaan tidak memberikan penggantian biaya pengobatan/perawatan yang diakibatkan oleh
                        tindakan/perbuatan dalam hal-hal tersebut dibawah ini:
                        <ol className="list-lower-alpha pl-5 space-y-1 mt-2">
                          <li className="ml-1">a. Percobaan bunuh diri.</li>
                          <li className="ml-1">b. 
                            Berkelahi, perbuatan-perbuatan kerusuhan yang melanggar ketertiban umum/Undang-undang dan
                            perbuatan-perbuatan yang membahayakan dirinya (ngebut, ugal-ugalan) dan olahraga yang
                            bersifat keras/kasar dan berbahaya misal: silat, tinju, karate, balap motor, kecuali untuk
                            karyawan yang karena sifat dan kaitan tugasnya dituntut untuk memiliki dan melakukan
                            kegiatan fisik tersebut di atas, mis.: untuk Satpam, yaitu latihan silat, tinju, karate, dan
                            yang berhubungan dengan keterampilan bela diri.
                          </li>
                          <li className="ml-1">c. 
                            Pelanggaran atas peraturan keselamatan dan kesehatan kerja yang ditetapkan oleh perundangan
                            atau perusahaan.
                          </li>
                          <li className="ml-1">d. 
                            Penyakit kelamin, AIDS, penggunaan obat-obat terlarang dan narkotika, mengkonsumsi minuman
                            keras dan zat-zat adiktif lainnya, atau penggunaan obat-obatan tanpa petunjuk Dokter.
                          </li>
                          <li className="ml-1">e. 
                            Tindakan kuret untuk pengguguran kandungan tidak atas rekomendasi dokter.
                          </li>
                          <li className="ml-1">f. 
                            Tidak ada penggantian biaya yang diterapkan untuk konsultasi medis kosmetik yang juga tidak
                            terbatas pada kulit, genital atau ahli gizi kecuali dirujuk oleh spesialis karena alasan
                            kesehatan.
                          </li>
                          <li className="ml-1">g. 
                            Tidak ada penggantian yang diterapkan untuk Pengobatan Alternatif, Pengobatan Fertilitas.
                          </li>
                        </ol>
                      </li>
                      <li className="ml-1">
                        Penggantian bantuan biaya pemeriksaan kesehatan/pengobatan di luar negeri hanya dapat diberikan
                        bilamana terlebih dahulu telah mendapat persetujuan tertulis dari Direksi sebelum pemeriksaan
                        dilakukan.
                      </li>
                      <li className="ml-1">
                        Sisa plafon pengobatan pada akhir tahun tidak dapat diuangkan atau diakumulasi ke tahun
                        berikutnya.
                      </li>
                      <li className="ml-1">
                        Karyawan yang diketahui melakukan kecurangan, seperti mengubah tanda bukti pembayaran/kuitansi
                        dan/atau menyalahgunakan fasilitas pengobatan/perawatan, dianggap melakukan pelanggaran berat
                        dan akan diberikan sanksi khusus dari Pimpinan Perusahaan.
                      </li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>
              </div>

              <div ref={pasal26Ref}>
                <AccordionItem value="pasal-26" id="pasal-26">
                  <AccordionTrigger className="text-lg md:text-xl text-left font-semibold">
                    PASAL 26: Perawatan di Rumah Sakit
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-4">
                    <ol className="list-decimal pl-6 sm:pl-8 md:pl-10 space-y-2">
                      <li className="ml-1">
                        Perusahaan memberikan bantuan biaya perawatan di rumah sakit berdasarkan keterangan Dokter atau
                        Dokter dari luar, kecuali yang diakibatkan oleh tindakan/perbuatan sebagaimana tercantum dalam
                        pasal 25 ayat (16).
                      </li>
                      <li className="ml-1">
                        Yang tercakup dalam biaya perawatan di rumah sakit adalah:
                        <ol className="list-lower-alpha pl-5 space-y-1 mt-2">
                          <li className="ml-1">
                            a. Biaya pemeriksaan/pengawasan Dokter selama pasien rawat-inap di rumah sakit.
                          </li>
                          <li className="ml-1">
                            b. Biaya pembelian obat-obatan atas dasar resep Dokter selama pasien rawat inap di rumah sakit.
                          </li>
                          <li className="ml-1">
                            c. Biaya pemeriksaan laboratorium/rontgen selama pasien rawat inap di rumah sakit.
                          </li>
                          <li className="ml-1">d. Biaya operasi.</li>
                          <li className="ml-1">f. 
                            Biaya kamar selama pasien rawat inap di rumah sakit sesuai dengan standar penempatan kelas
                            kamar.
                          </li>
                        </ol>
                      </li>
                      <li className="ml-1">
                        Penempatan karyawan rawat inap di rumah sakit dan patokan penentuan tarif kelas rumah sakit akan
                        disesuaikan besarnya plafon penempatan kelas kamar asuransi.
                      </li>
                      <li className="ml-1">
                        Penetapan batasan/plafon untuk tunjangan perawatan di rumah sakit akan diatur tersendiri didalam
                        Perangkat Peraturan (sebagaimana relevan).
                      </li>
                      <li className="ml-1">
                        Operasi yang dilakukan dalam rangka program keluarga berencana, seperti vasektomi dan/atau
                        sterilisasi digolongkan ke dalam biaya perawatan di rumah sakit.
                      </li>
                      <li className="ml-1">
                        Tindakan operasi ringan yang tidak mewajibkan pasien untuk rawat inap, yaitu: tindakan kuretasi,
                        operasi gigi, operasi bisul, dan tindakan operasi ringan lainnya, tidak diberlakukan sebagai
                        biaya perawatan di rumah sakit.
                      </li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>
              </div>

              <div ref={pasal27Ref}>
                <AccordionItem value="pasal-27" id="pasal-27">
                  <AccordionTrigger className="text-lg md:text-xl text-left font-semibold">PASAL 27: Tunjangan Melahirkan</AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-4">
                    <ol className="list-decimal pl-6 sm:pl-8 md:pl-10 space-y-2">
                      <li className="ml-1">
                        Tunjangan melahirkan diberikan oleh Perusahaan kepada Karyawan yang sudah lolos masa percobaan
                        atau sudah menjadi karyawan tetap.
                      </li>
                      <li className="ml-1">
                        Perusahaan memberikan tunjangan melahirkan kepada Karyawan tetap atas kelahiran anak pertama dan
                        kedua Karyawan dari perkawinan pertama yang sah dan namanya tercatat pada bagian HRD.
                      </li>
                      <li className="ml-1">
                        Untuk mendapatkan bantuan biaya melahirkan hanya diberikan atas kelahiran anak pertama dan kedua
                        Karyawan wajib menyerahkan salinan surat keterangan lahir atau akta kelahiran anak, paling
                        lambat 1 (satu) bulan setelah tanggal melahirkan.
                      </li>
                      <li className="ml-1">
                        Bantuan biaya melahirkan hanya diberikan atas kelahiran anak pertama dan kedua. Besarnya bantuan
                        biaya melahirkan akan diatur oleh Pimpinan Perusahaan dalam ketentuan tersendiri dan akan
                        dituangkan dalam Perangkat Peraturan (sebagaimana relevan).
                      </li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>
              </div>
            </Accordion>
          </div>

          <div className="flex justify-between mt-8">
            <Button variant="outline" asChild className="bg-black text-white hover:bg-gray-700 hover:text-white p-2">
              <Link href="/peraturan/bab-5">
                <ArrowLeft className="mr-2 h-4 w-4" /> BAB V
              </Link>
            </Button>
            <Button asChild className="bg-black text-white hover:bg-gray-700 hover:text-white p-2">
              <Link href="/peraturan/bab-7">
               BAB VII <ArrowRight className="ml-2 h-4 w-4" /> 
              </Link>
            </Button>
          </div>
        </div>

        {/* <div className="md:w-1/4">
          <div className="sticky top-20">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Stethoscope className="mr-2 h-5 w-5" />
                  Daftar Pasal
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>
                    <Link href="#pasal-25" className="text-sm hover:underline">
                      PASAL 25: Umum
                    </Link>
                  </li>
                  <li>
                    <Link href="#pasal-26" className="text-sm hover:underline">
                      PASAL 26: Perawatan di Rumah Sakit PEMERINTAH
                    </Link>
                  </li>
                  <li>
                    <Link href="#pasal-27" className="text-sm hover:underline">
                      PASAL 27: Tunjangan Melahirkan
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
