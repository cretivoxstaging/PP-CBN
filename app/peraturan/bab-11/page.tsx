"use client";

import React from "react";
import type { ReactElement } from "react";
import { useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function BabSebelas(): ReactElement {
  const searchParams = useSearchParams();
  const [hash, setHash] = React.useState<string | null>(null);

  // State to track which accordion item should be open
  const [openItem, setOpenItem] = React.useState<string | undefined>(undefined);

  // Refs for each pasal
  const pasal38Ref = useRef<HTMLDivElement>(null);
  const pasal39Ref = useRef<HTMLDivElement>(null);
  const pasal40Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setHash(searchParams.get("hash") || window.location.hash.replace("#", ""));
  }, [searchParams]);

  useEffect(() => {
    // Function to scroll to the specific pasal and open its accordion
    const scrollToElement = () => {
      if (!hash) return;

      // Map hash to accordion value
      const valueMap: Record<string, string> = {
        "pasal-38": "pasal-38",
        "pasal-39": "pasal-39",
        "pasal-40": "pasal-40",
      };

      // Map hash to ref
      const refMap: Record<string, React.RefObject<HTMLDivElement | null>> = {
        "pasal-38": pasal38Ref,
        "pasal-39": pasal39Ref,
        "pasal-40": pasal40Ref,
      };

      // Set the open accordion item
      const accordionValue = valueMap[hash];
      if (accordionValue) {
        setOpenItem(accordionValue);
      }

      // Scroll to the element
      const targetRef = refMap[hash];
      if (targetRef && targetRef.current) {
        // Add a small delay to ensure the accordion has time to render
        setTimeout(() => {
          targetRef.current?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    };

    // Call the function when the component mounts or hash changes
    scrollToElement();
  }, [hash]);

  return (
    <div className="container py-5 p-5 md:p-7">
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Beranda</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/peraturan">
              Peraturan Perusahaan
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/peraturan/bab-11">
              BAB XI: PELANGGARAN DAN SANKSI
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-3/4">
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter">
                BAB XI: PELANGGARAN DAN SANKSI
              </h1>
              <p className="text-muted-foreground">
                Ketentuan mengenai pelanggaran dan sanksi, tindakan disiplin,
                dan pelanggaran tata tertib kerja.
              </p>
            </div>

            <Accordion
              type="single"
              collapsible
              className="w-full"
              value={openItem}
              onValueChange={setOpenItem}
            >
              <div ref={pasal38Ref}>
                <AccordionItem value="pasal-38" id="pasal-38">
                  <AccordionTrigger className="text-lg md:text-xl text-left font-semibold">
                    PASAL 38: Ketentuan Umum
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-4">
                    <ol className="list-decimal pl-6 space-y-4">
                      <li className="ml-1">
                        Perusahaan berupaya menciptakan suasana kerja yang
                        kondusif, harmonis dengan tetap menjaga kedisiplinan dan
                        ketertiban serta mengembangkan sikap saling menghormati
                        dengan penuh pemahaman akan hak dan kewajiban baik
                        Perusahaan maupun Karyawan.
                      </li>
                      <li className="ml-1">
                        Untuk menegakkan disiplin dan ketertiban, Karyawan harus
                        mematuhi Peraturan Perusahaan, Kebijakan Perilaku
                        Bisnis, Tata Tertib, peraturan pelaksanaan dalam bentuk
                        surat keputusan dan/atau peraturan dan instruksi lain
                        dari manajemen.
                      </li>
                      <li className="ml-1">
                        Setiap atasan harus menjadi panutan bagi bawahannya
                        dalam rangka menegakkan disiplin dan ketertiban di
                        masing-masing departemen/unit kerja.
                      </li>
                      <li className="ml-1">
                        Setiap tindakan, ucapan, dan/atau tulisan Karyawan yang
                        melanggar ketentuan dapat dikenakan sanksi mulai dari
                        peringatan sampai dengan pemutusan hubungan kerja yang
                        diatur dalam perjanjian kerja dan peraturan perusahaan
                        atau kesepakatan kerja bersama.
                      </li>
                      <li className="ml-1">
                        Apabila pelanggaran tersebut diatas mengakibatkan
                        kerugian bagi Perusahaan maka selain dikenakan sanksi,
                        Karyawan wajib mengganti kerugian kepada Perusahaan.
                      </li>
                      <li className="ml-1">
                        Apabila pelanggaran yang dilakukan Karyawan
                        mengakibatkan kerugian bagi Perusahaan dikarenakan
                        menyalahi peraturan atau mencederai perjanjian kerja
                        yang sudah disepakati, Karyawan wajib mengganti kerugian
                        kepada Perusahaan.
                      </li>
                      <li className="ml-1">
                        Jenis sanksi yang diberikan adalah pemberian surat
                        peringatan pertama, kedua dan ketiga sampai pemutusan
                        hubungan kerja.
                      </li>
                      <li>
                        Setelah surat peringatan ketiga, Perusahaan dapat
                        melakukan pemutusan hubungan kerja.
                      </li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>
              </div>

              <div ref={pasal39Ref}>
                <AccordionItem value="pasal-39" id="pasal-39">
                  <AccordionTrigger className="text-lg md:text-xl text-left font-semibold">
                    PASAL 39: Tindakan Disiplin
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-4">
                    <ol className="list-decimal pl-6 space-y-4">
                      <li>
                        Setiap pelanggaran dan/atau perbuatan indisipliner yang
                        dilakukan karyawan atas tata tertib kerja maupun
                        ketentuan/peraturan Perusahaan lainnya akan diberikan
                        sanksi sesuai dengan berat/ ringannya perbuatan yang
                        dilakukannya.
                      </li>
                      <li>
                        Sanksi terhadap pelanggaran tersebut dapat berubah:
                        <ol className="list-[lower-alpha] pl-6 space-y-2 mt-2">
                          <li>
                            Peringatan
                            <ol className="list-[decimal] pl-6 space-y-2 mt-2">
                              <li>
                                Peringatan Lisan: diberikan oleh Direksi, tim
                                HRD, atasan langsung atau pejabat yang berwenang
                                atas pelanggaran ringan.
                              </li>
                              <li>
                                Peringatan Tertulis: berdasarkan pelanggaran
                                yang dilakukan oleh Karyawan, bagian HRD berhak
                                memberikan Surat Peringatan Tertulis yang
                                ditandatangani oleh Atasan yang bersangkutan dan
                                HRD.
                                <p className="mt-2">
                                  Peringatan Tertulis dapat berupa:
                                </p>
                                <ol className="list-[lower-alpha] pl-6 space-y-1 mt-1">
                                  <li>Surat Peringatan Pertama (SP I)</li>
                                  <li>Surat Peringatan Kedua (SP II)</li>
                                  <li>Surat Peringatan Ketiga (SP III)</li>
                                  <li>Surat Peringatan Pertama dan Terakhir</li>
                                </ol>
                              </li>
                              <li>
                                Tahapan pemberian Surat Peringatan tidak hanya
                                dilakukan berdasarkan tahapan dan masa
                                keberlakuannya, tetapi berdasarkan penilaian
                                Kepala Departemen Sumber Daya Manusia perihal
                                berat ringannya pelanggaran yang dilakukan
                                Karyawan.
                              </li>
                              <li>
                                Masing-masing Surat Peringatan Tertulis
                                mempunyai masa berlaku selama 6 (enam) bulan dan
                                apabila ternyata dalam masa 6 (enam) bulan yang
                                bersangkutan masih melakukan pelanggaran lagi,
                                maka Perusahaan dapat memberikan sanksi yang
                                lebih berat hingga pemutusan hubungan kerja.
                                Tindakan pemutusan hubungan kerja akan
                                dilaksanakan sesuai dengan Peraturan
                                Perundang-undangan yang berlaku.
                              </li>
                            </ol>
                          </li>
                          <li>
                            Skorsing:
                            <ol className="list-[decimal] pl-6 space-y-2 mt-2">
                              <li>
                                Skorsing adalah suatu tindakan yang dilakukan
                                oleh Perusahaan secara terpaksa dengan alasan:
                                <ol className="list-[lower-alpha] pl-6 space-y-1 mt-1">
                                  <li>
                                    Pemberian Surat Peringatan Ketiga (SP III)
                                    yang diberikan kepada karyawan tidak membawa
                                    hasil.
                                  </li>
                                  <li>
                                    Untuk mencegah meluasnya pengaruh negatif
                                    yang diakibatkan oleh perilaku karyawan
                                    terhadap karyawan lainnya atau Pimpinan
                                    Perusahaan atau harta milik Perusahaan.
                                  </li>
                                  <li>
                                    Dalam masalah dan situasi tertentu masih
                                    dibutuhkan perolehan/ penemuan bukti-bukti
                                    materiil atas kesalahan yang bersangkutan.
                                  </li>
                                </ol>
                              </li>
                              <li>
                                Jenis-jenis skorsing yaitu:
                                <ul className="list-[lower-alpha] pl-6 mt-1">
                                  <li>Skorsing karena hukuman.</li>
                                  <li>Skorsing menuju proses PHK.</li>
                                </ul>
                              </li>
                              <li>
                                Jangka waktu pemberian Skorsing paling lama 1
                                bulan atau sesuai dengan Peraturan
                                Perundang-undangan yang berlaku.
                              </li>
                              <li>
                                Karyawan yang menjalani Skorsing tidak boleh
                                masuk ke dalam Tempat Kerja kecuali mendapat
                                izin dari Pimpinan Perusahaan.
                              </li>
                              <li>
                                Karyawan yang menjalani skorsing dilarang
                                bekerja dengan pihak ketiga.
                              </li>
                              <li>
                                Kepada karyawan yang terkena tindakan skorsing
                                dibayarkan upah sesuai dengan Peraturan
                                Perundang-undangan yang berlaku.
                              </li>
                            </ol>
                          </li>
                        </ol>
                      </li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>
              </div>

              <div ref={pasal40Ref}>
                <AccordionItem value="pasal-40" id="pasal-40">
                  <AccordionTrigger className="text-lg md:text-xl text-left font-semibold">
                    PASAL 40: Pelanggaran Tata Tertib Kerja
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-4">
                    <p className="ml-3">
                      Dalam mengadakan penilaian atas pelanggaran tata tertib,
                      diambil pedoman dasar atas perbuatan-perbuatan yang dapat
                      mengakibatkan diberikannya teguran lisan atau Surat
                      Peringatan Pertama (SP I) sampai dengan Surat Peringatan
                      Ketiga (SP III).
                    </p>

                    <ol className="list-decimal pl-6 space-y-4">
                      <li>
                        <p className="font-medium">
                          Pelanggaran-pelanggaran yang dikenakan Surat
                          Peringatan Pertama (SP I) antara lain adalah:
                        </p>
                        <ol className=" pl-6 space-y-2 mt-2">
                          <li className="relative pl-5 text-justify before:content-['a.'] before:absolute before:left-0">
                            Terlambat masuk kerja atau pulang sebelum waktunya 4
                            (empat) kali berturut-turut atau 5 (lima) kali tidak
                            berturut-turut dalam sebulan atau tanpa alasan yang
                            dapat dipertanggung-jawabkan dan/atau tanpa izin
                            Pimpinan Perusahaan, sesuai dengan Pasal 22 pada
                            Peraturan Perusahaan di atas.
                          </li>
                          <li className="relative pl-5 text-justify before:content-['b.'] before:absolute before:left-0">Mangkir 5 (lima) hari kerja dalam sebulan.</li>
                          <li className="relative pl-5 text-justify before:content-['c.'] before:absolute before:left-0">
                            Meninggalkan tempat kerja pada jam-jam kerja tanpa
                            seijin Atasan.
                          </li>
                          <li className="relative pl-5 text-justify before:content-['d.'] before:absolute before:left-0">Tidur atau bermalas-malasan pada jam kerja.</li>
                          <li className="relative pl-5 text-justify before:content-['e.'] before:absolute before:left-0">
                            Datang ke tempat kerja, apabila karyawan dinyatakan
                            oleh Dokter mengidap penyakit menular atau alasan
                            medis lainnya yang berbahaya, baik untuk dirinya
                            atau sesama karyawan atau lingkungan kerjanya.
                          </li>
                          <li className="relative pl-5 text-justify before:content-['f.'] before:absolute before:left-0">
                            Menerima tamu pribadi dalam jam kerja tanpa ijin
                            atasan.
                          </li>
                          <li className="relative pl-5 text-justify before:content-['g.'] before:absolute before:left-0">
                            Mengabaikan pemeliharaan kebersihan ruang kerja atau
                            alat perlengkapan kerja.
                          </li>
                          <li className="relative pl-5 text-justify before:content-['h.'] before:absolute before:left-0">
                            Menfitnah dan/atau memasang tulisan atau gambar yang
                            mempermalukan orang lain.
                          </li>
                          <li className="relative pl-5 text-justify before:content-['i.'] before:absolute before:left-0">
                            Melakukan pekerjaan yang bukan menjadi tugasnya
                            tanpa sepengetahuan dan persetujuan dari kepala
                            bagian departemen atau orang yang bertanggung jawab.
                          </li>
                          <li className="relative pl-5 text-justify before:content-['j.'] before:absolute before:left-0">
                            Melakukan perbuatan yang bertentangan dengan norma
                            sosial atau sopan santun.
                          </li>
                          <li className="relative pl-5 text-justify before:content-['k.'] before:absolute before:left-0">
                            Pelanggaran lainnya yang dipandang pantas oleh
                            Perusahaan untuk diberikan Surat Peringatan Pertama
                            (SPI).
                          </li>
                          <li className="relative pl-5 text-justify before:content-['l.'] before:absolute before:left-0">
                            Melakukan pelanggaran yang jenis atau berat
                            pelanggarannya dapat dikenakan sanksi Surat
                            Peringatan Pertama (SP I) dan/atau lebih rendah
                            sedangkan yang bersangkutan masih menjalani Surat
                            Peringatan Pertama (SPI).
                          </li>
                          <li className="relative pl-5 text-justify before:content-['m.'] before:absolute before:left-0">
                            Terlambat masuk kerja atau pulang sebelum waktunya 5
                            (lima) kali berturut-turut atau 7 (tujuh) kali tidak
                            berturut-turut dalam sebulan tanpa alasan yang dapat
                            dipertanggungjawabkan dan/atau tanpa izin Pimpinan
                            Perusahaan.
                          </li>
                          <li className="relative pl-5 text-justify before:content-['n.'] before:absolute before:left-0">
                            Mangkir 7 (tujuh) hari kerja berturut-turut atau 8
                            (delapan) hari kerja tidak berturut-turut dalam
                            sebulan.
                          </li>
                          <li className="relative pl-5 text-justify before:content-['o.'] before:absolute before:left-0">
                            Tidak melaporkan kepada Atasan tentang adanya
                            pelanggaran tata tertib kerja dan/atau gangguan
                            keamanan yang diketahuinya dapat merugikan
                            Perusahaan.
                          </li>
                          <li className="relative pl-5 text-justify before:content-['p.'] before:absolute before:left-0">
                            Tidak cakap melakukan pekerjaan sehingga tidak
                            mencapai standar prestasi kerja atau target
                            penjualan minimal dalam jangka waktu yang telah
                            ditetapkan.
                          </li>
                          <li className="relative pl-5 text-justify before:content-['q.'] before:absolute before:left-0">
                            Tidak memperhatikan dan tidak bersedia melaksanakan
                            petunjuk Atasan mengenai tugas yang harus
                            dikerjakan.
                          </li>
                          <li className="relative pl-5 text-justify before:content-['r.'] before:absolute before:left-0">
                            Tidak bersedia bekerja sama dengan teman sekerja
                            atau dengan Atasan dalam melaksanakan tugasnya.
                          </li>
                          <li className="relative pl-5 text-justify before:content-['s.'] before:absolute before:left-0">
                            Bekerja tidak sesuai dengan standar dan prosedur
                            operasional kerja yang telah ditetapkan Perusahaan.
                          </li>
                          <li className="relative pl-5 text-justify before:content-['t.'] before:absolute before:left-0">
                            Melakukan dan/atau mengambil pekerjaan dan/atau
                            tugas yang bukan bidangnya tanpa seijin atasan, yang
                            mengakibatkan kerugian bagi perusahaan.
                          </li>
                          <li className="relative pl-5 text-justify before:content-['u.'] before:absolute before:left-0">
                            Terbukti mempunyai hubungan lain diluar pekerjaan
                            dengan pihak ketiga yang dapat menyebabkan kerugian
                            terhadap perusahaan.
                          </li>
                          <li className="relative pl-5 text-justify before:content-['v.'] before:absolute before:left-0">
                            Melakukan pelanggaran peraturan lalu lintas yang
                            disebabkan oleh kelalaian/kecerobohan ketika
                            menggunakan kendaraan Perusahaan atau pelanggan
                            Perusahaan.
                          </li>
                          <li className="relative pl-5 text-justify before:content-['w.'] before:absolute before:left-0">
                            Pelanggaran lainnya yang dipandang pantas oleh
                            Perusahaan untuk diberikan Surat Peringatan Kedua
                            (SP II).
                          </li>
                          <li className="relative pl-5 text-justify before:content-['x.'] before:absolute before:left-0">
                            Melakukan pelanggaran yang jenis atau berat
                            pelanggarannya dapat dikenakan sanksi Surat
                            Peringatan Kedua (SP II) dan/atau lebih rendah
                            sedangkan yang bersangkutan masih menjalani Surat
                            Peringatan Kedua (SP II).
                          </li>
                          <li className="relative pl-5 text-justify before:content-['y.'] before:absolute before:left-0">
                            Terlambat masuk kerja 6 (enam) kali berturut-turut
                            atau 10 (sepuluh) kali tidak berturut-turut dalam
                            sebulan tanpa alasan yang dapat
                            dipertanggungjawabkan dan/atau tanpa izin Pimpinan
                            Perusahaan.
                          </li>
                          <li className="relative pl-5 text-justify before:content-['z.'] before:absolute before:left-0">
                            Mangkir 9 (sembilan) hari kerja berturut-turut atau
                            10 (sepuluh) hari kerja tidak berturut-turut dalam
                            sebulan.
                          </li>
                          <li className="relative pl-5 text-justify before:content-['aa.'] before:absolute before:left-0">
                            Mempergunakan barang-barang milik Perusahaan
                            dan/atau perlengkapan milik Perusahaan untuk
                            kepentingan pribadi tanpa seizin Pimpinan
                            Perusahaan.
                          </li>
                          <li className="relative pl-5 text-justify before:content-['bb.'] before:absolute before:left-0">
                            Menyalahgunakan barang-barang milik Perusahaan yang
                            dipercayakan kepadanya untuk kepentingan dan
                            keuntungan pribadi ataupun pihak ketiga lainnya.
                          </li>
                          <li className="relative pl-5 text-justify before:content-['cc.'] before:absolute before:left-0">
                            Dalam melaksanakan tugas menolak menggunakan
                            alat-alat atau perlengkapan kesehatan dan
                            keselamatan kerja sebagaimana mestinya.
                          </li>
                          <li className="relative pl-5 text-justify before:content-['dd.'] before:absolute before:left-0">
                            Menolak untuk mentaati perintah atau penugasan yang
                            layak dari Atasan atau Pimpinan Perusahaan termasuk
                            di dalamnya menolak untuk dimutasikan, baik di dalam
                            ataupun di luar Perusahaan dalam satu group.
                          </li>
                          <li className="relative pl-5 text-justify before:content-['ee.'] before:absolute before:left-0">
                            Mengendarai atau mengoperasikan kendaraan, mesin,
                            dan peralatan lainnya dalam tempat kerja tanpa
                            wewenang untuk itu.
                          </li>
                          <li className="relative pl-5 text-justify before:content-['ff.'] before:absolute before:left-0">
                            Melakukan pekerjaan yang sifatnya sebagai rekanan
                            perusahaan dan/atau dengan perusahaan yang dianggap
                            sebagai kompetitor oleh perusahaan.
                          </li>
                          <li className="relative pl-5 text-justify before:content-['gg.'] before:absolute before:left-0">
                            Memindahkan barang milik Perusahaan dari tempatnya
                            dengan niat untuk memiliki.
                          </li>
                          <li className="relative pl-5 text-justify before:content-['hh.'] before:absolute before:left-0">
                            Di dalam Tempat Kerja menyelenggarakan atau
                            menghadiri rapat/pertemuan, mengedarkan atau
                            menempelkan poster, plakat, surat edaran, selebaran,
                            brosur, atau sejenisnya yang tidak ada kaitannya
                            dengan kepentingan Perusahaan tanpa ijin yang
                            berwenang.
                          </li>
                          <li className="relative pl-5 text-justify before:content-['ii.'] before:absolute before:left-0">
                            Melakukan perbuatan yang dapat mengganggu
                            ketertiban/ketentraman kerja atau menimbulkan
                            keonaran.
                          </li>
                          <li className="relative pl-5 text-justify before:content-['jj.'] before:absolute before:left-0">
                            Kedapatan menyimpan barang milik Perusahaan di dalam
                            locker tanpa alasan yang sah.
                          </li>
                          <li className="relative pl-5 text-justify before:content-['kk.'] before:absolute before:left-0">
                            Melakukan perbuatan yang dapat menimbulkan kerugian
                            bagi orang lain atau Perusahan.
                          </li>
                          <li className="relative pl-5 text-justify before:content-['ll.'] before:absolute before:left-0">
                            Pelanggaran lainnya yang dipandang pantas oleh
                            perusahaan untuk diberikan Surat Peringatan Ketiga
                            (SP III).
                          </li>
                        </ol>
                      </li>
                      <li>
                        <p className="font-medium">
                          Pelanggaran-pelanggaran yang dikenakan Surat
                          Peringatan Kedua (SP II), antara lain adalah:
                        </p>
                        <p>
                          Yang termasuk ke dalam hak Perusahaan memberikan Surat
                          Peringatan Ke-2 (Kedua) terhadap Karyawan adalah
                          apabila Karyawan melakukan pelanggaran dan/atau
                          tindakan indisipliner baik yang berkesinambungan
                          dan/atau tidak berkesinambungan dengan pelanggaran
                          yang dibuat sebelumnya dalam masa keberlakuan Surat
                          Peringatan Ke-1.
                        </p>
                      </li>
                      <li>
                        <p className="font-medium">
                          Pelanggaran-pelanggaran yang dikenakan Surat
                          Peringatan ketiga (SP III), antara lain adalah:
                        </p>
                        <p>
                          Yang termasuk ke dalam hak Perusahaan memberikan Surat
                          Peringatan Ke-3 (Ketiga) terhadap Karyawan adalah
                          apabila Karyawan melakukan pelanggaran dan/atau
                          tindakan indisipliner baik yang berkesinambungan
                          dan/atau tidak berkesinambungan dengan pelanggaran
                          yang dibuat sebelumnya dalam masa keberlakuan Surat
                          Peringatan Ke-2
                        </p>
                      </li>
                      <li>
                        <p className="font-medium">
                          Surat Peringatan Pertama dan Terakhir:
                        </p>
                        <p>
                          Melakukan pelanggaran yang jenis atau berat
                          pelanggarannya dapat dikenakan sanksi Surat Peringatan
                          Kedua (SP II) dan/atau lebih rendah sedangkan yang
                          bersangkutan masih menjalani Surat Peringatan Kedua
                          (SP II)
                        </p>
                        <ol className="list-[lower-alpha] pl-6 space-y-2 mt-2">
                          <li>
                            Terlambat masuk kerja 6 (enam) kali berturut-turut
                            atau 10 (sepuluh) kali tidak berturut-turut dalam
                            sebulan tanpa alasan yang dapat
                            dipertanggungjawabkan dan/atau tanpa izin Pimpinan
                            Perusahaan.
                          </li>
                          <li>
                            Mangkir 9 (sembilan) hari kerja berturut-turut atau
                            10 (sepuluh) hari kerja tidak berturut-turut dalam
                            sebulan.
                          </li>
                          <li>
                            Mempergunakan barang-barang milik Perusahaan
                            dan/atau perlengkapan milik Perusahaan untuk
                            kepentingan pribadi tanpa seizin Pimpinan
                            Perusahaan.
                          </li>
                          <li>
                            Menyalahgunakan barang-barang milik Perusahaan yang
                            dipercayakan kepadanya untuk kepentingan dan
                            keuntungan pribadi ataupun pihak ketiga lainnya.
                          </li>
                          <li>
                            Dalam melaksanakan tugas menolak menggunakan
                            alat-alat atau perlengkapan kesehatan dan
                            keselamatan kerja sebagaimana mestinya.
                          </li>
                          <li>
                            Menolak untuk mentaati perintah atau penugasan yang
                            layak dari Atasan atau Pimpinan Perusahaan termasuk
                            di dalamnya menolak untuk dimutasikan, baik di dalam
                            ataupun di luar Perusahaan dalam satu group.
                          </li>
                          <li>
                            Mengendarai atau mengoperasikan kendaraan, mesin,
                            dan peralatan lainnya dalam tempat kerja tanpa
                            wewenang untuk itu.
                          </li>
                          <li>
                            Melakukan pekerjaan yang sifatnya sebagai rekanan
                            perusahaan dan/atau dengan perusahaan yang dianggap
                            sebagai kompetitor oleh perusahaan.
                          </li>
                          <li>
                            Memindahkan barang milik Perusahaan dari tempatnya
                            dengan niat untuk memiliki.
                          </li>
                          <li>
                            Di dalam Tempat Kerja menyelenggarakan atau
                            menghadiri rapat/pertemuan, mengedarkan atau
                            menempelkan poster, plakat, surat edaran, selebaran,
                            brosur, atau sejenisnya yang tidak ada kaitannya
                            dengan kepentingan Perusahaan tanpa ijin yang
                            berwenang.
                          </li>
                          <li>
                            Melakukan perbuatan yang dapat mengganggu
                            ketertiban/ketentraman kerja atau menimbulkan
                            keonaran.
                          </li>
                          <li>
                            Kedapatan menyimpan barang milik Perusahaan di dalam
                            locker tanpa alasan yang sah.
                          </li>
                          <li>
                            Melakukan perbuatan yang dapat menimbulkan kerugian
                            bagi orang lain atau Perusahan.
                          </li>
                          <li>
                            Pelanggaran lainnya yang dipandang pantas oleh
                            perusahaan untuk diberikan Surat Peringatan Ketiga
                            (SP III).
                          </li>
                        </ol>
                      </li>
                    </ol>

                    <p className="mt-4">
                      Karyawan yang mendapatkan Surat Peringatan Pertama (SP I),
                      Surat Peringatan Kedua (SP II), Surat Peringatan Ketiga
                      (SP III) mendapatkan konsekuensi berupa penurunan
                      penilaian kinerjanya dan dapat juga berdampak pada
                      penundaan kenaikan gaji, pencabutan/penurunan
                      pangkat/jabatan, pembebanan denda/ganti rugi yang langsung
                      dipotong gaji, dan/atau pencabutan fasilitas-fasilitas
                      tertentu sesuai dengan tingkat dan jenis pelanggaran yang
                      dilakukan.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </div>
            </Accordion>
          </div>

          <div className="flex justify-between mt-8">
            <Button
              variant="outline"
              asChild
              className="bg-black text-white hover:bg-gray-700 hover:text-white p-2"
            >
              <Link href="/peraturan/bab-10">
                <ArrowLeft className="mr-2 h-4 w-4" /> BAB X
              </Link>
            </Button>
            <Button
              asChild
              className="bg-black text-white hover:bg-gray-700 hover:text-white p-2"
            >
              <Link href="/peraturan/bab-12">
                BAB XII <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* <div className="md:w-1/4">
          <div className="sticky top-20">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="mr-2 h-5 w-5" />
                  Daftar Pasal
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>
                    <Link href="#pasal-38" className="text-sm hover:underline">
                      PASAL 38: Ketentuan Umum
                    </Link>
                  </li>
                  <li>
                    <Link href="#pasal-39" className="text-sm hover:underline">
                      PASAL 39: Tindakan Disiplin
                    </Link>
                  </li>
                  <li>
                    <Link href="#pasal-40" className="text-sm hover:underline">
                      PASAL 40: Pelanggaran Tata Tertib Kerja
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div> */}
      </div>
    </div>
  );
}
