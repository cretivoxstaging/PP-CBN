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

export default function Bab12() {
  const searchParams = useSearchParams()
  const [hash, setHash] = React.useState<string | null>(null)

  // State to track which accordion item should be open
  const [openItem, setOpenItem] = React.useState<string | undefined>(undefined)

  // Refs for each pasal
  const pasal41Ref = useRef<HTMLDivElement>(null)
  const pasal42Ref = useRef<HTMLDivElement>(null)
  const pasal43Ref = useRef<HTMLDivElement>(null)
  const pasal44Ref = useRef<HTMLDivElement>(null)
  const pasal45Ref = useRef<HTMLDivElement>(null)
  const pasal46Ref = useRef<HTMLDivElement>(null)
  const pasal47Ref = useRef<HTMLDivElement>(null)
  const pasal48Ref = useRef<HTMLDivElement>(null)
  const pasal49Ref = useRef<HTMLDivElement>(null)
  const pasal50Ref = useRef<HTMLDivElement>(null)
  const pasal51Ref = useRef<HTMLDivElement>(null)
  const pasal52Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setHash(searchParams.get("hash") || window.location.hash.replace("#", ""))
  }, [searchParams])

  useEffect(() => {
    // Function to scroll to the specific pasal and open its accordion
    const scrollToElement = () => {
      if (!hash) return

      // Map hash to accordion value
      const valueMap: Record<string, string> = {
        "pasal-41": "pasal-41",
        "pasal-42": "pasal-42",
        "pasal-43": "pasal-43",
        "pasal-44": "pasal-44",
        "pasal-45": "pasal-45",
        "pasal-46": "pasal-46",
        "pasal-47": "pasal-47",
        "pasal-48": "pasal-48",
        "pasal-49": "pasal-49",
        "pasal-50": "pasal-50",
        "pasal-51": "pasal-51",
        "pasal-52": "pasal-52",
      }

      // Map hash to ref
      const refMap: Record<string, React.RefObject<HTMLDivElement | null>> = {
        "pasal-41": pasal41Ref,
        "pasal-42": pasal42Ref,
        "pasal-43": pasal43Ref,
        "pasal-44": pasal44Ref,
        "pasal-45": pasal45Ref,
        "pasal-46": pasal46Ref,
        "pasal-47": pasal47Ref,
        "pasal-48": pasal48Ref,
        "pasal-49": pasal49Ref,
        "pasal-50": pasal50Ref,
        "pasal-51": pasal51Ref,
        "pasal-52": pasal52Ref,
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
            <BreadcrumbLink href="/peraturan/bab-12">BAB XII: PEMUTUSAN HUBUNGAN KERJA (PHK)</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-3/4">
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter">BAB XII: PEMUTUSAN HUBUNGAN KERJA (PHK)</h1>
              <p className="text-muted-foreground">
                Ketentuan mengenai pemutusan hubungan kerja antara perusahaan dan karyawan.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full" value={openItem} onValueChange={setOpenItem}>
              <div ref={pasal41Ref}>
                <AccordionItem value="pasal-41" id="pasal-41">
                  <AccordionTrigger className="text-lg md:text-xl text-left font-semibold">PASAL 41: Ketentuan Umum</AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-4">
                    <ol className="list-decimal pl-6 space-y-4">
                      <li>Perusahaan wajib berusaha agar tidak terjadi pemutusan hubungan kerja.</li>
                      <li>
                        Bila segala upaya telah ditempuh, pemutusan hubungan kerja tidak dapat dihindarkan antara
                        Karyawan dan Perusahaan, Perusahaan akan menyelesaikannya kewajibannya berdasarkan Peraturan
                        Perundang-undangan yang berlaku.
                      </li>
                      <li>
                        Putusnya hubungan kerja dapat terjadi oleh macam-macam sebab, antara lain:
                        <ol className="list-decimal pl-6 mt-2 space-y-1">
                          <li>Karyawan mencapai usia pensiun (57 tahun);</li>
                          <li>
                            Karyawan melakukan pelanggaran terhadap peraturan perusahaan/ tata tertib kerja dan atau
                            kesepakatan kerja;
                          </li>
                          <li>Karyawan melakukan tindak pidana/melanggar hukum Negara; dan</li>
                          <li>
                            Karyawan menderita sakit berkepanjangan dan/atau ketidakmampuan bekerja karena kesehatan.
                          </li>
                          <li>Karyawan tidak mampu mencapai standar prestasi kerja yang ditentukan.</li>
                          <li>Karyawan tidak hadir tanpa ijin/mangkir selama 9 (sembilan) hari kerja.</li>
                          <li>
                            Perusahaan melakukan perubahan status dan Karyawan tidak bersedia melanjutkan hubungan
                            kerja.
                          </li>
                          <li>Karena alasan mendesak.</li>
                          <li>
                            Alasan lainnya, yakni:
                            <ol className="list-[lower-alpha] pl-6 mt-1 space-y-1">
                              <li>Tidak memenuhi persyaratan kerja dalam Masa Percobaan.</li>
                              <li>Mengundurkan diri.</li>
                              <li>Meninggal dunia.</li>
                              <li>Berakhirnya masa kontrak kerja atau PKWT.</li>
                              <li>Perusahaan melakukan efisiensi karena mengalami kerugian.</li>
                              <li>Perusahaan tutup/pailit.</li>
                            </ol>
                          </li>
                        </ol>
                      </li>
                      <li>
                        Karyawan yang putus hubungan kerjanya dengan Perusahaan dengan alasan apapun yang masih
                        mempunyai hutang yang menjadi tanggungannya harus melunasinya sekaligus. Pemutusan hubungan
                        kerja tidak membebaskan karyawan yang bersangkutan dari kewajiban melunasi hutang-hutang
                        tersebut.
                      </li>
                      <li>
                        Karyawan yang putus hubungan kerjanya dengan Perusahaan Wajib mengembalikan semua harta
                        benda/alat perlengkapan kerja yang dipercayakan kepadanya dalam melakukan tugas selama bekerja.
                      </li>
                      <li>
                        Karyawan yang diberhentikan karena sebab selain meninggal dunia wajib melakukan serah terima
                        pekerjaan.
                      </li>
                      <li>
                        Karyawan yang sudah bekerja selama 3 (tiga) tahun atau lebih dan sedang dalam masa surat
                        peringatan kemudian mengundurkan diri, kebijakan terkait uang pesangon akan didiskusikan
                        terlebih dahulu dengan atasan, tim HRD dan Direksi.
                      </li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>
              </div>

              <div ref={pasal42Ref}>
                <AccordionItem value="pasal-42" id="pasal-42">
                  <AccordionTrigger className="text-lg md:text-xl text-left font-semibold">
                    PASAL 42: Penghentian Selama Periode Percobaan
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-4">
                    <ol className="list-decimal pl-6 space-y-4">
                      <li>
                        Selama masa percobaan, baik perusahaan maupun karyawan dapat memutuskan hubungan kerja
                        sewaktu-waktu tanpa kewajiban menjelaskan alasannya.
                      </li>
                      <li>
                        Karyawan yang hubungan kerjanya dengan Perusahaan berakhir pada masa percobaan tidak berhak atas
                        kompensasi apapun selain upah untuk hari kerja yang diselesaikan.
                      </li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>
              </div>

              <div ref={pasal43Ref}>
                <AccordionItem value="pasal-43" id="pasal-43">
                  <AccordionTrigger className="text-lg md:text-xl text-left font-semibold">
                    PASAL 43: Berakhirnya Perjanjian Kerja Waktu Tertentu
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-4">
                    <ol className="list-decimal pl-6 space-y-4">
                      <li>
                        Hubungan kerja waktu tertentu berakhir demi hukum pada saat berakhirnya masa kontrak atau
                        selesainya pekerjaan yang telah ditentukan dan disepakati bersama dalam Perjanjian Kerja Waktu
                        Tertentu.
                      </li>
                      <li>
                        Pada akhir Perjanjian Kerja Waktu Tertentu, Perusahaan tidak berkewajiban untuk memberikan uang
                        pesangon, uang masa kerja, uang penggantian hak dan uang pisah serta pembayaran lainnya kepada
                        Karyawan Waktu Tertentu. Namun, Perusahaan akan memberikan kompensasi kepada Karyawan Jangka
                        Waktu Tertentu terkait dengan berakhirnya masa kontrak sesuai dengan peraturan
                        perundang-undangan yang berlaku.
                      </li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>
              </div>

              <div ref={pasal44Ref}>
                <AccordionItem value="pasal-44" id="pasal-44">
                  <AccordionTrigger className="text-lg md:text-xl text-left font-semibold">PASAL 44: Pengunduran Diri</AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-4">
                    <ol className="list-decimal pl-6 space-y-4">
                      <li>
                        Karyawan yang ingin memutuskan hubungan kerja dengan Perusahaan, wajib mengajukan permintaan
                        berhenti secara tertulis 45 (empat puluh lima) hari sebelum hari terakhir bekerja.
                      </li>
                      <li>
                        Permohonan tersebut diajukan kepada atasan langsung yang bersangkutan dengan tembusan kepada
                        atasan yang lebih tinggi dan bagian HRD.
                      </li>
                      <li>
                        Karyawan yang akan mengundurkan diri diwajibkan mengirimkan surat pengunduran diri atau email
                        pengunduran diri yang dikirimkan kepada tim HRD, lengkap dengan tanda tangan karyawan tersebut.
                      </li>
                      <li>
                        Sebelum berhenti Karyawan tersebut harus memenuhi syarat:
                        <ol className="list-[lower-alpha] pl-6 mt-2 space-y-1">
                          <li>
                            Apabila Karyawan tersebut berstatus probation maka pengunduran diri harus mendapatkan
                            persetujuan selambatnya 1 (satu) bulan atau 30 (tiga puluh) hari sebelum tanggal efektif
                            pengunduran diri Karyawan.
                          </li>
                          <li>
                            Menyerahkan kembali semua milik Perusahaan yang terbukti berada dalam penguasaannya dan atau
                            di bawah tanggung jawabnya, yang meliputi seluruh barang inventaris dan surat-surat serta
                            naskah-naskah lain baik dalam bentuk asli maupun rekaman.
                          </li>
                          <li>
                            Melakukan serah terima pekerjaan dengan atasannya atau dengan Karyawan lain yang ditunjuk
                            oleh atasannya tersebut.
                          </li>
                          <li>Menyelesaikan hutang-hutang dan kewajiban-kewajiban keuangan lainnya.</li>
                          <li>Tidak terikat dalam ikatan dinas.</li>
                          <li>Tetap melaksanakan kewajibannya sampai tanggal pengunduran diri.</li>
                        </ol>
                      </li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>
              </div>

              <div ref={pasal45Ref}>
                <AccordionItem value="pasal-45" id="pasal-45">
                  <AccordionTrigger className="text-lg md:text-xl text-left font-semibold">
                    PASAL 45: Karyawan Mencapai Usia Pensiun
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-4">
                    <ol className="list-decimal pl-6 space-y-4">
                      <li>
                        Seorang Karyawan yang telah mencapai usia genap 57 (lima puluh tujuh) tahun, akan diputuskan
                        hubungan kerjanya dengan hormat dari Perusahaan.
                      </li>
                      <li>
                        Maksud dari Perusahaan untuk memutuskan hubungan kerja tersebut akan disampaikan secara tertulis
                        oleh bagian HRD kepada Karyawan yang bersangkutan sekurang-kurangnya 1 (satu) tahun sebelumnya
                        dan diulangi 11 (sebelas) bulan kemudian.
                      </li>
                      <li>Pemutusan hubungan kerja tersebut dilakukan pada akhir periode penggajian.</li>
                      <li>
                        Apabila Karyawan dimaksud masih diperlukan karyanya oleh Perusahaan, maka berdasarkan
                        Persetujuan Pimpinan Perusahaan, karyawan yang bersangkutan dapat dipekerjakan kembali atas
                        dasar suatu kontrak kerja khusus untuk jangka waktu yang ditentukan.
                      </li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>
              </div>

              <div ref={pasal46Ref}>
                <AccordionItem value="pasal-46" id="pasal-46">
                  <AccordionTrigger className="text-lg md:text-xl text-left font-semibold">
                    PASAL 46: Karyawan Melanggar Tata tertib
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-4">
                    <p className="pl-6">
                      Dalam hal pemutusan hubungan kerja karena pelanggaran peraturan tata tertib, kesepakatan kerja,
                      dan peraturan perusahaan, akan ada perubahan untuk perhitungan pemberian pesangon, dan penggantian
                      hak akan dilaksanakan sesuai dengan Peraturan Perundang-undangan yang berlaku. Perusahaan dapat
                      melakukan pemutusan hubungan kerja jika Karyawan tetap melakukan pelanggaran pada saat surat
                      peringatan ketiga (terakhir) belum habis masa berlakunya.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </div>

              <div ref={pasal47Ref}>
                <AccordionItem value="pasal-47" id="pasal-47">
                  <AccordionTrigger className="text-lg md:text-xl text-left font-semibold">
                    PASAL 47: Pemutusan Hubungan Kerja Karena Alasan Mendesak
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-4">
                    <p className="pl-6 mb-4">
                      Pelanggaran-pelanggaran yang dapat mengakibatkan Pemutusan Hubungan Kerja seketika:
                    </p>
                    <ol className="list-decimal pl-6 space-y-2 ml-5">
                      <li>
                        Melakukan pelanggaran yang jenis atau berat pelanggarannya dapat dikenakan, sanksi Surat
                        Peringatan Pertama (SP I) atau lebih tinggi sedangkan yang bersangkutan masih menjalani Surat
                        Peringatan Ketiga (SP III)
                      </li>
                      <li>Melakukan penipuan, pencurian, dan penggelapan barang dan/atau uang Perusahaan.</li>
                      <li>
                        Mengambil, memindahkan, menggunakan barang dan/atau uang di Tempat Kerja tanpa hak atau seizin
                        pemiliknya.
                      </li>
                      <li>
                        Mengambil, memindahkan, menggunakan barang dan/atau uang yang menjadi kewenangannya yang tidak
                        untuk kepentingan Perusahaan namun menimbulkan kerugian bagi Perusahaan atau pihak ketiga.
                      </li>
                      <li>
                        Melakukan dan/atau memberitakan suatu kebohongan dan/atau informasi/keterangan yang tidak benar
                        yang menyebabkan Perusahaan atau pihak ketiga menderita kerugian.
                      </li>
                      <li>
                        Mabuk, minum minuman keras yang memabukkan, membawa, memakai, atau mengedarkan minuman keras,
                        narkotika, psikotropika, dan zat adiktif lainnya di Tempat Kerja
                      </li>
                      <li>
                        Memperdagangkan dan/atau memiliki barang terlarang baik dalam Tempat Kerja maupun di luar Tempat
                        Kerja
                      </li>
                      <li>
                        Memalsukan atau meniru paraf atau tanda tangan orang lain dengan alasan atau tujuan apapun
                      </li>
                      <li>
                        Memalsukan dokumen, surat-surat, bukti, kuitansi-kuitansi yang berhubungan dengan Perusahaan
                      </li>
                      <li>Memberikan keterangan palsu atau yang dipalsukan sehingga merugikan Perusahaan</li>
                      <li>
                        Menyerang, mengancam, mengintimidasi, melakukan pelecehan seksual baik secara fisik dan/atau
                        mental, menghina secara kasar, melakukan tindakan/perbuatan kasar/pemukulan, serta upaya-upaya
                        mencederai orang lain, teman sekerja, Direksi, atau Pimpinan Perusahaan beserta keluarganya.
                      </li>
                      <li>
                        Membujuk Pimpinan Perusahaan atau teman sekerja untuk melakukan sesuatu perbuatan yang
                        bertentangan dengan hukum atau peraturan perundangan yang berlaku dan peraturan yang berlaku di
                        Tempat Kerja.
                      </li>
                      <li>
                        Dengan ceroboh atau sengaja merusak atau membiarkan barang milik Perusahaan dalam keadaan bahaya
                        yang dapat menimbulkan kerugian bagi Perusahaan
                      </li>
                      <li>
                        Dengan ceroboh atau sengaja membiarkan teman sekerja atau Pimpinan Perusahan dalam keadaan
                        bahaya di Tempat Kerja
                      </li>
                      <li>
                        Melakukan perbuatan perjudian, asusila dan/atau melakukan segala bentuk hubungan di Tempat Kerja
                      </li>
                      <li>
                        Menyalakan api atau merokok di dalam bengkel/gudang atau tempat-tempat lain yang nyata-nyata
                        terlarang untuk itu
                      </li>
                      <li>
                        Menyalakan api atau merokok di dalam bengkel/gudang atau tempat-tempat lain yang nyata-nyata
                        terlarang untuk itu
                      </li>
                      <li>
                        Tanpa wewenang dan/atau ijin dari instansi yang berwenang membawa senjata api/tajam/petasan/
                        bahan peledak atau barang-barang yang membahayakan lainnya ke dalam Tempat Kerja
                      </li>
                      <li>Mengcopy atau memperdagangkan rencana proyek Perusahaan</li>
                      <li>
                        Membongkar, membocorkan, menjual, memberikan, atau meminjamkan rahasia Perusahaan atau
                        mencemarkan nama baik Perusahaan atau Pimpinan Perusahaan dan/atau keluarga Pimpinan Perusahaan
                        yang seharusnya dirahasiakan kecuali untuk kepentingan Negara
                      </li>
                      <li>
                        Menyalahgunakan jabatan atau fasilitas yang diberikan Perusahaan untuk kepentingan dan
                        keuntungan pribadi ataupun pihak ketiga lainnya sehingga dapat merugikan Perusahaan baik secara
                        materi maupun secara reputasi
                      </li>
                      <li>
                        Menerima pemberian imbalan jasa dari siapapun karena jabatannya sehingga menyebabkan kerugian
                        pada Perusahaan
                      </li>
                      <li>Melakukan pungut liar di Tempat Kerja, baik kepada sesama karyawan, vendor, dan customer.</li>
                      <li>
                        Bekerja pada pihak lain atau mempunyai usaha sendiri yang tidak diberitahukan kepada Pimpinan
                        Perusahaan dan dianggap Pimpinan Perusahaan dapat mengganggu pelaksanaan tugasnya di Perusahaan.
                      </li>
                      <li>
                        Memberikan konsultasi atau pelatihan di bidang bisnis dan manajemen kepada pihak lain yang
                        merupakan kompetensi dan/atau rahasia perusahaan
                      </li>
                      <li>
                        Dengan sengaja atau karena lalai sehingga mengakibatkan dirinya dalam keadaan sedemikian rupa
                        sehingga tidak dapat menjalankan pekerjaan.
                      </li>
                      <li>Membantu melaksanakan perbuatan-perbuatan melawan hukum</li>
                      <li>
                        Melakukan perbuatan yang melanggar lainnya di dalam Tempat Kerja yang diancam pidana penjara
                        sekurang-kurangnya 6 (enam) bulan atau lebih.
                      </li>
                      <li>
                        Pemutusan hubungan kerja dapat dilaksanakan karena alasan-alasan yang mendesak seperti adanya
                        Force Majeure, dan/atau alasan-alasan lain yang mengakibatkan Perusahaan terpaksa mengadakan
                        pengurangan Karyawan, maka Karyawan tersebut dapat diputuskan hubungan kerjanya sesuai Peraturan
                        Perundang-undangan yang berlaku.
                      </li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>
              </div>

              <div ref={pasal48Ref}>
                <AccordionItem value="pasal-48" id="pasal-48">
                  <AccordionTrigger className="text-lg md:text-xl text-left font-semibold">
                    PASAL 48: Tidak Dapat Mencapai Standar Prestasi Kerja
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-4">
                    <p className="pl-6">
                      Karyawan yang tidak mampu mencapai standar prestasi kerja yang ditetapkan, akan diberikan surat
                      peringatan dan kepadanya diberikan pembinaan. Bagi karyawan yang mendapatkan Surat Peringatan 3
                      (tiga) kali berturut-turut yang berkaitan dengan ketidakmampuan karyawan dalam mencapai standar
                      prestasi kerja yang ditentukan, dan kepadanya telah diberikan pembinaan tetapi tidak mendatangkan
                      hasil yang diharapkan, maka karyawan tersebut dapat diputuskan hubungan kerjanya sesuai dengan
                      Peraturan Perundang-undangan yang berlaku.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </div>

              <div ref={pasal49Ref}>
                <AccordionItem value="pasal-49" id="pasal-49">
                  <AccordionTrigger className="text-lg md:text-xl text-left font-semibold">
                    PASAL 49: Perusahaan Menyalahi Aturan
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-4">
                    <p className="pl-6 mb-4">
                      Karyawan dapat mengajukan permohonan pemutusan hubungan kerja, dalam hal perusahaan melakukan
                      perbuatan sebagai berikut:
                    </p>
                    <ol className="list-decimal pl-6 space-y-2 ml-5">
                      <li>Menganiaya, menghina secara kasar atau mengancam Karyawan.</li>
                      <li>
                        Membujuk dan/atau menyuruh Karyawan untuk melakukan perbuatan yang bertentangan dengan peraturan
                        perundang-undangan.
                      </li>
                      <li>
                        Tidak membayar gaji tepat pada waktu yang telah ditentukan selama 3 (tiga) bulan berturut-turut
                        atau lebih.
                      </li>
                      <li>Tidak melakukan kewajiban yang telah dijanjikan kepada Karyawan.</li>
                      <li>Memerintahkan Karyawan untuk melaksanakan pekerjaan diluar yang diperjanjikan.</li>
                      <li>
                        Memberikan pekerjaan yang membahayakan jiwa, keselamatan, kesehatan dan kesusilaan Karyawan
                        sedangkan pekerjaan tersebut tidak dicantumkan pada perjanjian kerja.
                      </li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>
              </div>

              <div ref={pasal50Ref}>
                <AccordionItem value="pasal-50" id="pasal-50">
                  <AccordionTrigger className="text-lg md:text-xl text-left font-semibold">PASAL 50: Bipartit</AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-4">
                    <ol className="list-decimal pl-6 space-y-4">
                      <li>
                        Bipartit adalah perundingan yang dilakukan dengan karyawan dan perusahaan dalam upaya
                        menyelesaikan suatu masalah industrial dalam satu perusahaan, yang dilakukan dengan prinsip
                        musyawarah untuk mencapai mufakat secara kekeluargaan dan keterbukaan.
                      </li>
                      <li>
                        Setelah terbentuknya keputusan dari perundingan Bipartit, karyawan tetap harus menjalankan tugas
                        dan tanggung jawabnya sebagai karyawan, dan perusahaan akan tetap memberikan hak yang harus
                        didapatkan oleh karyawan.
                      </li>
                      <li>
                        Setelah mencapai musyawarah mufakat, baik pihak karyawan tidak dapat menuntut secara hukum
                        kepada pihak perusahaan, begitu pula sebaliknya.
                      </li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>
              </div>

              <div ref={pasal51Ref}>
                <AccordionItem value="pasal-51" id="pasal-51">
                  <AccordionTrigger className="text-lg md:text-xl text-left font-semibold">
                    PASAL 51: Uang Pesangon, Uang Penghargaan Masa Kerja, dan Uang Penggantian Hak
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-4">
                    <ol className="list-decimal pl-6 space-y-4">
                      <li>
                        Uang pesangon, uang penghargaan masa kerja dan penggantian hak dibayarkan satu kali dan
                        sekaligus yang dilakukan pada saat pemutusan hubungan kerja berlaku yang besarnya adalah
                        kelipatan gaji bulanan berdasarkan banyaknya masa kerja pada saat pemutusan hubungan kerja
                        tersebut.
                      </li>
                      <li>
                        Dalam hal perusahaan memprakarsai Pemutusan Hubungan Kerja maka Karyawan akan menerima uang
                        pesangon, uang penghargaan masa kerja dan uang penggantian hak sesuai dengan Peraturan
                        Perundang-undangan yang berlaku.
                      </li>
                      <li>
                        Uang pesangon adalah pemberian uang dari Perusahaan kepada Karyawan sebagai akibat adanya
                        pemutusan hubungan kerja, yang besarnya ditetapkan berdasarkan aturan perundang-undangan yang
                        berlaku antara lain sebagai berikut:
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                          <li>Masa kerja kurang dari 1 (satu) tahun, diberikan 1 (satu) bulan upah.</li>
                          <li>
                            Masa kerja 1 (satu) tahun atau lebih tetapi kurang dari 2 (dua) tahun, diberikan 2 (dua)
                            bulan upah.
                          </li>
                          <li>
                            Masa kerja 2 (dua) tahun atau lebih tetapi kurang dari 3 (tiga) tahun, diberikan 3 (tiga)
                            bulan upah.
                          </li>
                          <li>
                            Masa kerja 3 (tiga) tahun atau lebih tetapi kurang dari 4 (empat) tahun, diberikan 4 (empat)
                            bulan upah.
                          </li>
                          <li>
                            Masa kerja 4 (empat) tahun atau lebih tetapi kurang dari 5 (lima) tahun, diberikan 5 (lima)
                            bulan upah.
                          </li>
                          <li>
                            Masa kerja 5 (lima) tahun atau lebih tetapi kurang dari 6 (enam) tahun, diberikan 6 (enam)
                            bulan upah.
                          </li>
                          <li>
                            Masa kerja 6 (enam) tahun atau lebih tetapi kurang dari 7 (tujuh) tahun, diberikan 7 (tujuh)
                            bulan upah.
                          </li>
                          <li>
                            Masa kerja 7 (tujuh) tahun atau lebih tetapi kurang dari 8 (delapan) tahun, diberikan 8
                            (delapan) bulan upah.
                          </li>
                          <li>Masa kerja 8 (delapan) tahun atau lebih, diberikan 9 (sembilan) bulan upah.</li>
                        </ul>
                      </li>
                      <li>
                        Uang Penghargaan Masa Kerja adalah pemberian berupa uang dari Perusahaan kepada Karyawan sebagai
                        penghargaan berdasarkan masa kerja akibat adanya pemutusan hubungan kerja yang besarnya
                        ditetapkan berdasarkan peraturan perundang-undangan yang berlaku, antara lain sebagai berikut:
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                          <li>
                            Masa kerja 3 (tiga) tahun atau lebih tetapi kurang dari 6 (enam) tahun, diberikan 2 (dua)
                            bulan upah.
                          </li>
                          <li>
                            Masa kerja 6 (enam) tahun atau lebih tetapi kurang dari 9 (sembilan) tahun, diberikan 3
                            (tiga) bulan upah.
                          </li>
                          <li>
                            Masa kerja 9 (sembilan) tahun atau lebih tetapi kurang dari 12 (dua belas) tahun, diberikan
                            4 (empat) bulan upah.
                          </li>
                          <li>
                            Masa kerja 12 (dua belas) tahun atau lebih tetapi kurang dari 15 (lima belas) tahun,
                            diberikan 5 (lima) bulan upah.
                          </li>
                          <li>
                            Masa kerja 15 (lima belas) tahun atau lebih tetapi kurang dari 18 (delapan belas) tahun,
                            diberikan 6 (enam) bulan upah.
                          </li>
                          <li>
                            Masa kerja 18 (delapan belas) tahun atau lebih tetapi kurang dari 21 (dua puluh satu) tahun,
                            diberikan 7 (tujuh) bulan upah.
                          </li>
                          <li>
                            Masa kerja 21 (dua puluh satu) tahun atau lebih tetapi kurang dari 24 (dua puluh empat)
                            tahun, diberikan 8 (delapan) bulan upah.
                          </li>
                          <li>Masa kerja 24 (dua puluh empat) tahun atau lebih, diberikan 10 bulan upah.</li>
                        </ul>
                      </li>
                      <li>
                        Uang Penggantian Hak adalah pemberian berupa uang dari Perusahaan kepada Karyawan sebagai akibat
                        adanya pemutusan hubungan kerja, pengganti hak seperti cuti tahunan yang belum diambil dan belum
                        gugur, penggantian pengobatan dan hak lain yang ditetapkan dalam Perjanjian Kerja.
                      </li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>
              </div>

              <div ref={pasal52Ref}>
                <AccordionItem value="pasal-52" id="pasal-52">
                  <AccordionTrigger className="text-lg md:text-xl text-left font-semibold">PASAL 52: Uang Pisah</AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-4 ">
                    <p className="pl-6 mb-4">
                      Uang pisah akan diberikan kepada karyawan yang mengundurkan diri secara baik dan telah bekerja
                      dengan prestasi sangat baik dengan masa kerja lebih dari 3 tahun dan untuk Karyawan yang mangkir
                      dengan ketentuan seperti yang tersebut di bawah ini:
                    </p>

                    <div className="overflow-x-auto">
                      <table className="min-w-full border-collapse border border-gray-300 ">
                        <thead>
                          <tr className="bg-gray-100"> 
                            <th className="border border-gray-300 px-3 py-2 text-[7px] md:text-sm text-center">Masa Kerja (Thn)</th>
                            <th className="border border-gray-300 px-3 py-2 text-[8px] md:text-sm text-center">
                              Mengundurkan diri secara baik-baik
                            </th>
                            <th className="border border-gray-300 px-3 py-2 text-[8px] md:text-sm text-center">
                              PHK karena melakukan mangkir
                            </th>
                            <th className="border border-gray-300 px-3 py-2 text-[8px] md:text-sm text-center">
                              PHK karena alasan mendesak
                            </th>
                            <th className="border border-gray-300 px-3 py-2 text-[8px] md:text-sm text-center">Adanya putusan PHI</th>
                            <th className="border border-gray-300 px-3 py-2 text-[8px] md:text-sm text-center">
                              Pekerja ditahan pihak berwajib lebih dari 6 (enam) bulan
                            </th>
                            <th className="border border-gray-300 px-3 py-2 text-[8px] md:text-sm text-center">
                              Sebelum jangka waktu 6 (enam) bulan sudah ada putusan Pengadilan yang menyatakan pekerja
                              bersalah
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-3 py-2 text-[8px] md:text-sm text-center">3 ≤ MK &lt; 6</td>
                            <td className="border border-gray-300 px-3 py-2 text-[8px] md:text-sm text-center">1.0 x UP</td>
                            <td className="border border-gray-300 px-3 py-2 text-[8px] md:text-sm text-center">0.25 x UP</td>
                            <td className="border border-gray-300 px-3 py-2 text-[8px] md:text-sm text-center">0.1 x UP</td>
                            <td className="border border-gray-300 px-3 py-2 text-[8px] md:text-sm text-center">0.1 x UP</td>
                            <td className="border border-gray-300 px-3 py-2 text-[8px] md:text-sm text-center">0.1 x UP</td>
                            <td className="border border-gray-300 px-3 py-2 text-[8px] md:text-sm text-center">0.1 x UP</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-3 py-2 text-[8px] md:text-sm text-center">6 ≤ MK &lt; 9</td>
                            <td className="border border-gray-300 px-3 py-2 text-[8px] md:text-sm text-center">1.5 x UP</td>
                            <td className="border border-gray-300 px-3 py-2 text-[8px] md:text-sm text-center">0.50 x UP</td>
                            <td className="border border-gray-300 px-3 py-2 text-[8px] md:text-sm text-center">0.2 x UP</td>
                            <td className="border border-gray-300 px-3 py-2 text-[8px] md:text-sm text-center">0.2 x UP</td>
                            <td className="border border-gray-300 px-3 py-2 text-[8px] md:text-sm text-center">0.2 x UP</td>
                            <td className="border border-gray-300 px-3 py-2 text-[8px] md:text-sm text-center">0.2 x UP</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-3 py-2 text-[8px] md:text-sm text-center">9 &lt; MK &lt; 12</td>
                            <td className="border border-gray-300 px-3 py-2 text-[8px] md:text-sm text-center">2.0 x UP</td>
                            <td className="border border-gray-300 px-3 py-2 text-[8px] md:text-sm text-center">0.75 x UP</td>
                            <td className="border border-gray-300 px-3 py-2 text-[8px] md:text-sm text-center">0.3 x UP</td>
                            <td className="border border-gray-300 px-3 py-2 text-[8px] md:text-sm text-center">0.3 x UP</td>
                            <td className="border border-gray-300 px-3 py-2 text-[8px] md:text-sm text-center">0.3 x UP</td>
                            <td className="border border-gray-300 px-3 py-2 text-[8px] md:text-sm text-center">0.3 x UP</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-3 py-2 text-[8px] md:text-sm text-center">12 ≤ MK &lt; 15</td>
                            <td className="border border-gray-300 px-3 py-2 text-[8px] md:text-sm text-center">2.5 x UP</td>
                            <td className="border border-gray-300 px-3 py-2 text-[8px] md:text-sm text-center">1.00 x UP</td>
                            <td className="border border-gray-300 px-3 py-2 text-[8px] md:text-sm text-center">0.5 x UP</td>
                            <td className="border border-gray-300 px-3 py-2 text-[8px] md:text-sm text-center">0.5 x UP</td>
                            <td className="border border-gray-300 px-3 py-2 text-[8px] md:text-sm text-center">0.5 x UP</td>
                            <td className="border border-gray-300 px-3 py-2 text-[8px] md:text-sm text-center">0.5 x UP</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-3 py-2 text-[8px] md:text-sm text-center">15 ≤ MK &lt; 18</td>
                            <td className="border border-gray-300 px-3 py-2 text-[8px] md:text-sm text-center">3.0 x UP</td>
                            <td className="border border-gray-300 px-3 py-2 text-[8px] md:text-sm text-center">1.25 x UP</td>
                            <td className="border border-gray-300 px-3 py-2 text-[8px] md:text-sm text-center">0.6 x UP</td>
                            <td className="border border-gray-300 px-3 py-2 text-[8px] md:text-sm text-center">0.6 x UP</td>
                            <td className="border border-gray-300 px-3 py-2 text-[8px] md:text-sm text-center">0.6 x UP</td>
                            <td className="border border-gray-300 px-3 py-2 text-[8px] md:text-sm text-center">0.6 x UP</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-3 py-2 text-[8px] md:text-sm text-center">18 ≤ MK &lt; 21</td>
                            <td className="border border-gray-300 px-3 py-2 text-[8px] md:text-sm text-center">3.5 x UP</td>
                            <td className="border border-gray-300 px-3 py-2 text-[8px] md:text-sm text-center">1.50 x UP</td>
                            <td className="border border-gray-300 px-3 py-2 text-[8px] md:text-sm text-center">0.7 x UP</td>
                            <td className="border border-gray-300 px-3 py-2 text-[8px] md:text-sm text-center">0.7 x UP</td>
                            <td className="border border-gray-300 px-3 py-2 text-[8px] md:text-sm text-center">0.7 x UP</td>
                            <td className="border border-gray-300 px-3 py-2 text-[8px] md:text-sm text-center">0.7 x UP</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-3 py-2 text-[8px] md:text-sm text-center">21 ≤ MK &lt; 24</td>
                            <td className="border border-gray-300 px-3 py-2 text-[8px] md:text-sm text-center">4.0 x UP</td>
                            <td className="border border-gray-300 px-3 py-2 text-[8px] md:text-sm text-center">1.75 x UP</td>
                            <td className="border border-gray-300 px-3 py-2 text-[8px] md:text-sm text-center">0.8 x UP</td>
                            <td className="border border-gray-300 px-3 py-2 text-[8px] md:text-sm text-center">0.8 x UP</td>
                            <td className="border border-gray-300 px-3 py-2 text-[8px] md:text-sm text-center">0.8 x UP</td>
                            <td className="border border-gray-300 px-3 py-2 text-[8px] md:text-sm text-center">0.8 x UP</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-3 py-2 text-[8px] md:text-sm text-center">MK ≥ 24</td>
                            <td className="border border-gray-300 px-3 py-2 text-[8px] md:text-sm text-center">5.0 x UP</td>
                            <td className="border border-gray-300 px-3 py-2 text-[8px] md:text-sm text-center">2.00 x UP</td>
                            <td className="border border-gray-300 px-3 py-2 text-[8px] md:text-sm text-center">1.0 x UP</td>
                            <td className="border border-gray-300 px-3 py-2 text-[8px] md:text-sm text-center">1.0 x UP</td>
                            <td className="border border-gray-300 px-3 py-2 text-[8px] md:text-sm text-center">1.0 x UP</td>
                            <td className="border border-gray-300 px-3 py-2 text-[8px] md:text-sm text-center">1.0 x UP</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="mt-4 pl-6">
                      <p >Keterangan: </p>
                      <p>Komponen perhitungan uang pisah adalah sebesar upah pokok.</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </div>
            </Accordion>
          </div>

          <div className="flex justify-between mt-8">
            <Button variant="outline" asChild className="bg-black text-white hover:bg-gray-700 hover:text-white p-2">
              <Link href="/peraturan/bab-11">
                <ArrowLeft className="mr-2 h-4 w-4" /> BAB XI
              </Link>
            </Button>
            <Button asChild className="bg-black text-white hover:bg-gray-700 hover:text-white p-2">
              <Link href="/peraturan/bab-13">
               BAB XIII <ArrowRight className="ml-2 h-4 w-4" /> 
              </Link>
            </Button>
          </div>
        </div>

        {/* <div className="md:w-1/4">
          <div className="sticky top-20">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <UserX className="mr-2 h-5 w-5" />
                  Daftar Pasal
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>
                    <Link href="#pasal-41" className="text-[8px] md:text-sm hover:underline">
                      PASAL 41: Ketentuan Umum
                    </Link>
                  </li>
                  <li>
                    <Link href="#pasal-42" className="text-[8px] md:text-sm hover:underline">
                      PASAL 42: Penghentian Selama Periode Percobaan
                    </Link>
                  </li>
                  <li>
                    <Link href="#pasal-43" className="text-[8px] md:text-sm hover:underline">
                      PASAL 43: Berakhirnya Perjanjian Kerja Waktu Tertentu
                    </Link>
                  </li>
                  <li>
                    <Link href="#pasal-44" className="text-[8px] md:text-sm hover:underline">
                      PASAL 44: Pengunduran Diri
                    </Link>
                  </li>
                  <li>
                    <Link href="#pasal-45" className="text-[8px] md:text-sm hover:underline">
                      PASAL 45: Karyawan Mencapai Usia Pensiun
                    </Link>
                  </li>
                  <li>
                    <Link href="#pasal-46" className="text-[8px] md:text-sm hover:underline">
                      PASAL 46: Karyawan Melanggar Tata tertib
                    </Link>
                  </li>
                  <li>
                    <Link href="#pasal-47" className="text-[8px] md:text-sm hover:underline">
                      PASAL 47: Pemutusan Hubungan Kerja Karena Alasan Mendesak
                    </Link>
                  </li>
                  <li>
                    <Link href="#pasal-48" className="text-[8px] md:text-sm hover:underline">
                      PASAL 48: Tidak Dapat Mencapai Standar Prestasi Kerja
                    </Link>
                  </li>
                  <li>
                    <Link href="#pasal-49" className="text-[8px] md:text-sm hover:underline">
                      PASAL 49: Perusahaan Menyalahi Aturan
                    </Link>
                  </li>
                  <li>
                    <Link href="#pasal-50" className="text-[8px] md:text-sm hover:underline">
                      PASAL 50: Bipartit
                    </Link>
                  </li>
                  <li>
                    <Link href="#pasal-51" className="text-[8px] md:text-sm hover:underline">
                      PASAL 51: Uang Pesangon, Uang Penghargaan Masa Kerja Uang Penggantian Hak
                    </Link>
                  </li>
                  <li>
                    <Link href="#pasal-52" className="text-[8px] md:text-sm hover:underline">
                      PASAL 52: Uang Pisah
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
