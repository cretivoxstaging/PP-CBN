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

export default function BabSepuluh(): ReactElement {
  const searchParams = useSearchParams()
  const [hash, setHash] = React.useState<string | null>(null)

  // State to track which accordion item should be open
  const [openItem, setOpenItem] = React.useState<string | undefined>(undefined)

  // Refs for each pasal
  const pasal34Ref = useRef<HTMLDivElement>(null)
  const pasal35Ref = useRef<HTMLDivElement>(null)
  const pasal36Ref = useRef<HTMLDivElement>(null)
  const pasal37Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setHash(searchParams.get("hash") || window.location.hash.replace("#", ""))
  }, [searchParams])

  useEffect(() => {
    // Function to scroll to the specific pasal and open its accordion
    const scrollToElement = () => {
      if (!hash) return

      // Map hash to accordion value
      const valueMap: Record<string, string> = {
        "pasal-34": "pasal-34",
        "pasal-35": "pasal-35",
        "pasal-36": "pasal-36",
        "pasal-37": "pasal-37",
      }

      // Map hash to ref
      const refMap: Record<string, React.RefObject<HTMLDivElement | null>> = {
        "pasal-34": pasal34Ref,
        "pasal-35": pasal35Ref,
        "pasal-36": pasal36Ref,
        "pasal-37": pasal37Ref,
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
            <BreadcrumbLink href="/peraturan/bab-10">BAB X: PERATURAN KERJA KARYAWAN</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-3/4">
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter">BAB X: PERATURAN KERJA KARYAWAN</h1>
              <p className="text-muted-foreground">
                Ketentuan mengenai tata tertib, kehadiran, kewajiban dan tanggung jawab, serta larangan bagi karyawan.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full" value={openItem} onValueChange={setOpenItem}>
              <div ref={pasal34Ref}>
                <AccordionItem value="pasal-34" id="pasal-34">
                  <AccordionTrigger className="text-lg md:text-xl text-left font-semibold">PASAL 34: Tata Tertib</AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-4">
                    <ol className="list-decimal pl-6 sm:pl-8 md:pl-10 space-y-2">
                      <li className="ml-1">
                        Setiap Karyawan wajib memeriksa peralatan kerja masing-masing sebelum mulai bekerja dan saat
                        meninggalkan pekerjaan, sehingga tidak akan menimbulkan kerusakan atau bahaya yang akan
                        mengganggu pekerjaan.
                      </li>
                      <li className="ml-1">
                        Setiap Karyawan wajib memelihara ketertiban, kerapian dan kebersihan di tempat kerja, serta
                        memelihara kondisi dan keselamatan barang-barang inventaris yang ada di tempat kerja maupun yang
                        menjadi tanggung jawab Karyawan.
                      </li>
                      <li className="ml-1">
                        Setiap Karyawan wajib bersikap, berperilaku dan berpakaian yang pantas dan sopan tanpa
                        mengurangi kebebasan untuk mengekspresikan diri. Bagi Karyawan yang bekerja di bagian tertentu
                        yang karena sifat pekerjaannya memerlukan keseragaman atau peralatan yang ditetapkan oleh
                        Perusahaan, diharuskan memakai pakaian kerja yang telah ditentukan oleh Perusahaan,
                      </li>
                      <li className="ml-1">
                        Apabila Karyawan menemui hal-hal yang dapat membahayakan keselamatan Karyawan dan/atau
                        Perusahaan, Karyawan yang bersangkutan harus segera melapor kepada atasan atau bidang lain yang
                        terkait.
                      </li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>
              </div>

              <div ref={pasal35Ref}>
                <AccordionItem value="pasal-35" id="pasal-35">
                  <AccordionTrigger className="text-lg md:text-xl text-left font-semibold">PASAL 35: Kehadiran</AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-4">
                    <ol className="list-decimal pl-6 sm:pl-8 md:pl-10 space-y-2">
                      <li className="ml-1">
                        Setiap karyawan wajib hadir pada waktu kerja dan mendata kehadirannya dengan sistem pencatat
                        waktu <span className="italic">(Time Recorder/Finger Scan)</span> yang telah disediakan, pada saat masuk kerja dan pulang kerja.
                      </li>
                      <li className="ml-1">
                        Pengisian data kehadiran harus dilakukan sendiri oleh karyawan yang bersangkutan.
                      </li>
                      <li className="ml-1">
                        Keterlambatan kehadiran sebagaimana pada angka ayat 2 pasal ini merupakan tindakan pelanggaran
                        disiplin kerja. Mekanisme pemberian sanksi pelanggaran disiplin kerja atas keterlambatan
                        kehadiran akan diatur dalam ketentuan tersendiri dan akan dituangkan dalam Perangkat Peraturan
                        (sebagaimana relevan).
                      </li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>
              </div>

              <div ref={pasal36Ref}>
                <AccordionItem value="pasal-36" id="pasal-36">
                  <AccordionTrigger className="text-lg md:text-xl text-left font-semibold">
                    PASAL 36: Kewajiban dan Tanggung Jawab Karyawan
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-4">
                    <ol className="list-decimal pl-6 sm:pl-8 md:pl-10 space-y-2">
                      <li className="ml-1">
                        Setiap Karyawan wajib mengutamakan kepentingan Perusahaan dengan sebaik-baiknya dan berupaya
                        semaksimal mungkin untuk memenuhi tugas dan kewajiban yang diberikan kepadanya oleh Perusahaan
                        dengan baik dan penuh rasa tanggung jawab termasuk pada saat melakukan Perjalanan Bisnis jika
                        diperlukan.
                      </li>
                      <li className="ml-1">
                        Setiap Karyawan wajib menaati dan mematuhi ketentuan peraturan yang berlaku di Perusahaan
                        dan/atau Perusahaan Klien, termasuk peraturan lain yang akan dikeluarkan dari waktu ke waktu
                        serta peraturan yang ditetapkan oleh pelanggan/klien Perusahaan.
                      </li>
                      <li className="ml-1">
                        Setiap Karyawan wajib mematuhi jam kerja yang ditetapkan Perusahaan, yaitu datang ke tempat
                        kerja tepat waktu dan tidak pulang sebelum jam kerja berakhir yang telah ditentukan serta tidak
                        menyalahgunakan waktu kerja.
                      </li>
                      <li className="ml-1">
                        Setiap Karyawan yang ditugaskan di kantor pelanggan/klien harus selalu memperhatikan jam kerja
                        di kantor pelanggan/klien yang mungkin berbeda dengan jam kantor Perusahaan dan harus
                        mematuhinya. Sehingga Karyawan harus segera mulai bekerja pada saat kedatangan di kantor
                        pelanggan/klien.
                      </li>
                      <li className="ml-1">
                        Setiap Karyawan wajib mentaati tata tertib dan tata cara peminjaman arsip, dokumen bahan, dan
                        referensi yang disimpan di perpustakaan dan di tempat lain.
                      </li>
                      <li className="ml-1">
                        Setiap Karyawan yang akan meninggalkan kantor atau bekerja di luar kantor wajib memberitahukan
                        kepada atasannya atau Direksi.
                      </li>
                      <li className="ml-1">
                        Setiap Karyawan wajib bersikap sopan, saling menghormati, dan berprilaku baik terhadap atasan,
                        sesama karyawan, hubungan bisnis dengan klien, menjaga kesopanan baik didalam maupun diluar
                        Perusahaan serta memperhatikan pakaian dan dandanan sebagai Karyawan yang profesional.
                      </li>
                      <li className="ml-1">
                        Setiap Karyawan wajib melaksanakan dan mematuhi arahan atau instruksi yang diberikan oleh atasan
                        atau Direksi, termasuk meminta arahan Ketika menghadapi kesulitan yang tidak dapat ditanganinya.
                      </li>
                      <li className="ml-1">
                        Setiap Karyawan yang melayani klien wajib menjaga dan memelihara hubungan baik dengan Perusahaan
                        maupun dengan karyawan kantor pelanggan/klien tempat Karyawan tersebut ditugaskan, sepanjang
                        tidak menimbulkan keadaan yang dapat mempengaruhi sifat tanggung jawab profesionalnya.
                      </li>
                      <li className="ml-1">
                        Dalam hal-hal tertentu, Karyawan yang harus bekerja melebihi jam kerja yang ditentukan apabila
                        diminta oleh Perusahaan/Klien dan diperintahkan oleh Atasannya dengan mengacu pada ketentuan
                        Peraturan Perusahaan ini.
                      </li>
                      <li className="ml-1">
                        Setiap Karyawan wajib membaca dan mematuhi pengumuman Perusahaan yang disampaikan kepada
                        Karyawan melalui media komunikasi Perusahaan.
                      </li>
                      <li className="ml-1">
                        Setiap Karyawan harus sangat menjaga kerahasiaan semua dokumen, termasuk upah dan/atau kebijakan
                        Perusahaan yang diketahuinya, dan harus sangat menjaga kerahasiaan dan rahasia Perusahaan
                        klien/pelanggan yang dia tahu dari siapa pun. Berkaitan dengan hal ini diberlakukan hal-hal
                        sebagai berikut:
                        <ol className="list-lower-alpha pl-5 space-y-1 mt-2">
                          <li className="ml-1">
                            a. Karyawan tidak dibenarkan menyimpan di luar kantor dan/atau memperlihatkan kepada pihak
                            ketiga atau membawa keluar catatan ataupun dokumen-dokumen yang bersifat rahasia tanpa izin
                            khusus dari Perusahaan.
                          </li>
                          <li className="ml-1">
                            b. Pada waktu pemutusan hubungan kerja semua surat-surat, catatan atau dokumen- dokumen yang
                            berkaitan dengan pekerjaan dan Perusahaan wajib diserahkan oleh Karyawan kepada atasannya,
                            selambat-lambatnya 2 (dua) minggu sebelum hubungan kerja berakhir.
                          </li>
                        </ol>
                      </li>
                      <li className="ml-1">
                        Setiap Karyawan harus melaporkan kepada HRD setiap perubahan data Karyawan dan informasi lain
                        yang berkaitan dengan Karyawan seperti statusnya, struktur keluarga, Pendidikan, termasuk alamat
                        yang dapat dihubungi jika terjadi keadaan darurat.
                      </li>
                      <li className="ml-1">
                        Setiap Karyawan wajib memelihara atau menggunakan dengan baik dan tidak menyalahgunakan kekayaan
                        dan/atau aset perusahaan, termasuk namun tidak terbatas pada milik Perusahaan, perangkat lunak
                        dan hak kekayaan intelektual yang dipercayakan kepadanya.
                      </li>
                      <li className="ml-1">
                        Setiap Karyawan wajib segera melaporkan kepada atasannya setiap potensi dan/atau terjadi
                        kecelakaan, kehilangan atau kerusakan pada harta benda Perusahaan.
                      </li>
                      <li className="ml-1">
                        Setiap Karyawan wajib mempertahankan dan menjaga nama baik Perusahaan, meningkatkan suasana
                        kerja yang kondusif, jujur, loyal, dan inovatif, bertekad untuk unggul, kooperatif dan saling
                        membantu terhadap sesama Karyawan.
                      </li>
                      <li className="ml-1">
                        Setiap Karyawan wajib memberikan informasi yang benar dan akurat kepada Perusahaan, termasuk
                        pada saat rekrutmen.
                      </li>
                      <li className="ml-1">
                        Setiap Karyawan harus bersedia dikirim ke luar kota atau keluar negeri untuk melaksanakan setiap
                        penugasan yang diberikan oleh Perusahaan dan selalu bersedia untuk ditugaskan sesuai kebutuhan
                        Perusahaan.
                      </li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>
              </div>

              <div ref={pasal37Ref}>
                <AccordionItem value="pasal-37" id="pasal-37">
                  <AccordionTrigger className="text-lg md:text-xl text-left font-semibold">
                    PASAL 37: Larangan Bagi Karyawan
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-4">
                    <ol className="list-decimal pl-6 sm:pl-8 md:pl-10 space-y-2">
                      <li className="ml-1">
                        Setiap Karyawan dilarang merokok di ruang kerja, baik di Perusahaan maupun di Kantor Pelanggan.
                      </li>
                      <li className="ml-1">
                        Setiap Karyawan dilarang mengalihkan atau memindahtangankan tugas pekerjaannya kepada pihak lain
                        tanpa persetujuan Manajemen.
                      </li>
                      <li className="ml-1">
                        Setiap Karyawan dilarang memberikan password login kepada pihak lain (password sharing) atau
                        menyalahgunakan website atau email Perusahaan.
                      </li>
                      <li className="ml-1">
                        Setiap Karyawan dilarang menerima dan/atau melakukan pekerjaan sampingan serta bekerja di
                        perusahaan lain selama masih dalam hubungan kerja dengan Perusahaan.
                      </li>
                      <li className="ml-1">
                        Setiap Karyawan dilarang menerima hadiah baik berupa uang maupun barang dari pelanggan. Dalam
                        hal demikian, Karyawan harus melaporkannya kepada atasan langsungnya atau manajemen.
                      </li>
                      <li className="ml-1">
                        Setiap Karyawan dilarang membujuk, membantu atau melindungi sesama Karyawan, Manajemen untuk
                        melakukan Tindakan yang bertentangan dengan hukum, kesusilaan, Peraturan Perusahaan, Kebijakan
                        Perilaku Bisnis, dan peraturan internal Perusahaan lainnya.
                      </li>
                      <li className="ml-1">
                        Setiap Karyawan dilarang menyalahgunakan tanggung jawab/jabatannya secara langsung maupun tidak
                        langsung untuk kepentingan pribadi Karyawan atau di luar kepentingan Perusahaan atau melakukan
                        hal-hal yang dapat merusak reputasi atau kepercayaan terhadap Perusahaan.
                      </li>
                      <li className="ml-1">
                        Setiap Karyawan dilarang membawa dan/atau menggunakan harta benda atau aset milik Perusahaan
                        dan/atau rekanan Perusahaan, keluar dari lingkungan Perusahaan tanpa seizin Direksi dan/atau
                        HRD.
                      </li>
                      <li className="ml-1">
                        Setiap Karyawan dilarang membawa, menyimpan, dan menyalahgunakan narkotika, berada di bawah
                        pengaruh minuman keras atau alkohol, berjudi, bertengkar, mengancam, atau berkelahi dengan
                        sesama Karyawan atau Karyawan klien/pelanggan.
                      </li>
                      <li className="ml-1">
                        Setiap Karyawan dilarang melakukan Tindakan atau menyimpan/menyebarkan informasi atau materi
                        yang bertentangan dengan asas kesusilaan, seperti email pornografi, gambar porno dan/atau
                        melakukan Tindakan seksual atau pelecehan atau perbuatan asusila dengan sesama Karyawan, bawahan
                        atau pelanggan.
                      </li>
                      <li className="ml-1">
                        Setiap Karyawan dilarang membawa senjata api/senjata tajam di lingkungan Perusahaan atau
                        dikantor pelanggan/klien.
                      </li>
                      <li className="ml-1">
                        Setiap Karyawan dilarang melakukan rapat, menyebarkan propaganda, memasang pamphlet/poster,
                        mengirim pesan dengan cara apapun dengan tujuan untuk membujuk atau atau mempengaruhi Karyawan
                        lain untuk melakukan Tindakan negatif di Perusahaan, atau mendorong dan/atau mengendalikan
                        dan/atau mengundang dan/atau mengancam rekan kerja untuk ikut serta dalam demonstrasi illegal;
                      </li>
                      <li className="ml-1">
                        Setiap Karyawan dilarang mengungkapkan, membocorkan, membahas rahasia atau hal-hal yang
                        dirahasiakan oleh Perusahaan, termasuk rahasia perusahaan klien/pelanggan yang diketahuinya
                        kepada siapapun.
                      </li>
                      <li className="ml-1">
                        Karyawan yang tidak berwenang dilarang memberikan keterangan/pernyataan lisan atau tertulis
                        kepada pers/media. Segala sesuatu yang berhubungan dengan pers harus diserahkan kepada pejabat
                        Perusahaan yang ditunjuk.
                      </li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>
              </div>
            </Accordion>
          </div>

          <div className="flex justify-between mt-8">
            <Button variant="outline" asChild className="bg-black text-white hover:bg-gray-700 hover:text-white p-2">
              <Link href="/peraturan/bab-9">
                <ArrowLeft className="mr-2 h-4 w-4" /> BAB IX
              </Link>
            </Button>
            <Button asChild className="bg-black text-white hover:bg-gray-700 hover:text-white p-2">
              <Link href="/peraturan/bab-11">
               BAB XI <ArrowRight className="ml-2 h-4 w-4" /> 
              </Link>
            </Button>
          </div>
        </div>

        {/* <div className="md:w-1/4">
          <div className="sticky top-20">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="mr-2 h-5 w-5" />
                  Daftar Pasal
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>
                    <Link href="#pasal-34" className="text-sm hover:underline">
                      PASAL 34: Tata Tertib
                    </Link>
                  </li>
                  <li>
                    <Link href="#pasal-35" className="text-sm hover:underline">
                      PASAL 35: Kehadiran
                    </Link>
                  </li>
                  <li>
                    <Link href="#pasal-36" className="text-sm hover:underline">
                      PASAL 36: Kewajiban dan Tanggung Jawab Karyawan
                    </Link>
                  </li>
                  <li>
                    <Link href="#pasal-37" className="text-sm hover:underline">
                      PASAL 37: Larangan Bagi Karyawan
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
