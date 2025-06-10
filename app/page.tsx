import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import SearchBar from "@/components/search-bar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-black">
        <div className="w-full px-6 lg:px-8">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl text-white font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Peraturan Perusahaan
              </h1>
              <p className="mx-auto max-w-[700px] md:text-xl text-gray-400 text-sm">
               Panduan ini berisi berbagai peraturan dan kebijakan yang berlaku di perusahaan. Melalui sistem HRIS ini akan mempermudah akses karyawan untuk memahami dan mematuhi setiap peraturan yang telah ditetapkan. Dengan adanya informasi yang terstruktur dengan jelas, perusahaan berharap untuk karyawan dapat berkerja lebih efektif sesuai dengan pedoman yang ada dan mendukung terciptanya lingkungan kerja yang tertib serta profesional. 
              </p>
            </div>
            <div className="space-y-4 w-full max-w-md">
              <div className="mx-auto w-full">
                <SearchBar />
              </div>
              {/* <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="bg-white text-black hover:bg-blue-200">
                  <Link href="/peraturan">Lihat Peraturan</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/kontak">Hubungi Kami</Link>
                </Button>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="w-full px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Bab Peraturan Perushaan
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Berikut adalah bab-bab dalam peraturan perusahaan.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mt-8">
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Image
                  src="/timbang.png"
                  alt="Retro TV"
                  width={100}
                  height={100}
                  className="w-8 h-8 md:w-16 md:h-16"
                />
                <CardTitle>KEBIJAKAN KHUSUS PERUSAHAAN</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Kebijakan fundamental yang bersifat khusus dan wajib ditaati oleh seluruh karyawan dan intern sebagai bagian dari budaya profesional perusahaan.
                </CardDescription>
                <Button variant="link" asChild className="p-0 mt-2">
                  <Link href="/peraturan/KKP" className="flex items-center">
                    Selengkapnya <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Image
                  src="/timbang.png"
                  alt="Retro TV"
                  width={100}
                  height={100}
                  className="w-8 h-8 md:w-16 md:h-16"
                />
                <CardTitle>BAB I: KETENTUAN UMUM</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Ketentuan umum dan definisi yang digunakan dalam peraturan
                  perusahaan.
                </CardDescription>
                <Button variant="link" asChild className="p-0 mt-2">
                  <Link href="/peraturan/bab-1" className="flex items-center">
                    Selengkapnya <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Image
                  src="/timbang.png"
                  alt="Retro TV"
                  width={100}
                  height={100}
                  className="w-8 h-8 md:w-16 md:h-16"
                />
                <CardTitle>BAB II: HUBUNGAN KERJA</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Ketentuan mengenai hubungan kerja antara perusahaan dan
                  karyawan, termasuk penerimaan, masa percobaan, dan
                  pengangkatan karyawan.
                </CardDescription>
                <Button variant="link" asChild className="p-0 mt-2">
                  <Link href="/peraturan/bab-2" className="flex items-center">
                    Selengkapnya <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
              <Image
                  src="/timbang.png"
                  alt="Retro TV"
                  width={100}
                  height={100}
                  className="w-8 h-8 md:w-16 md:h-16"
                />
                <CardTitle>BAB III: WAKTU KERJA</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Ketentuan mengenai hari kerja, jam kerja, dan pengaturan waktu
                  kerja di perusahaan.
                </CardDescription>
                <Button variant="link" asChild className="p-0 mt-2">
                  <Link href="/peraturan/bab-3" className="flex items-center">
                    Selengkapnya <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Image
                  src="/timbang.png"
                  alt="Retro TV"
                  width={100}
                  height={100}
                  className="w-8 h-8 md:w-16 md:h-16"
                />
                <CardTitle>
                  BAB IV: HARI LIBUR, CUTI, DAN MENINGGALKAN PEKERJAAN
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Ketentuan mengenai hari libur, cuti, dan izin meninggalkan
                  pekerjaan di perusahaan.
                </CardDescription>
                <Button variant="link" asChild className="p-0 mt-2">
                  <Link href="/peraturan/bab-4" className="flex items-center">
                    Selengkapnya <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
               <Image
                  src="/timbang.png"
                  alt="Retro TV"
                  width={100}
                  height={100}
                  className="w-8 h-8 md:w-16 md:h-16"
                />
                <CardTitle>BAB V: PENGUPAHAN</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Ketentuan mengenai sistem pengupahan, lembur, tunjangan, dan
                  bantuan bagi karyawan.
                </CardDescription>
                <Button variant="link" asChild className="p-0 mt-2">
                  <Link href="/peraturan/bab-5" className="flex items-center">
                    Selengkapnya <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
               <Image
                  src="/timbang.png"
                  alt="Retro TV"
                  width={100}
                  height={100}
                  className="w-8 h-8 md:w-16 md:h-16"
                />
                <CardTitle>BAB VI: PERAWATAN DI RUMAH SAKIT</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Ketentuan mengenai bantuan biaya perawatan di rumah sakit,
                  tunjangan melahirkan, dan fasilitas kesehatan bagi karyawan
                  dan keluarganya.
                </CardDescription>
                <Button variant="link" asChild className="p-0 mt-2">
                  <Link href="/peraturan/bab-6" className="flex items-center">
                    Selengkapnya <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Image
                  src="/timbang.png"
                  alt="Retro TV"
                  width={100}
                  height={100}
                  className="w-8 h-8 md:w-16 md:h-16"
                />
                <CardTitle>BAB VII: FASILITAS KERJA</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Ketentuan mengenai peralatan kerja, pakaian kerja, dan
                  perjalanan dinas dalam dan luar negeri.
                </CardDescription>
                <Button variant="link" asChild className="p-0 mt-2">
                  <Link href="/peraturan/bab-7" className="flex items-center">
                    Selengkapnya <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
               <Image
                  src="/timbang.png"
                  alt="Retro TV"
                  width={100}
                  height={100}
                  className="w-8 h-8 md:w-16 md:h-16"
                />
                <CardTitle>
                  BAB VIII: JAMINAN SOSIAL DAN KESEJAHTERAAN KARYAWAN
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Ketentuan mengenai BPJS Ketenagakerjaan dan bantuan kematian
                  bagi karyawan.
                </CardDescription>
                <Button variant="link" asChild className="p-0 mt-2">
                  <Link href="/peraturan/bab-8" className="flex items-center">
                    Selengkapnya <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
               <Image
                  src="/timbang.png"
                  alt="Retro TV"
                  width={100}
                  height={100}
                  className="w-8 h-8 md:w-16 md:h-16"
                />
                <CardTitle>BAB IX: PENINGKATAN KETERAMPILAN KARYAWAN</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Ketentuan mengenai pelatihan dan pendidikan karyawan untuk
                  meningkatkan keterampilan.
                </CardDescription>
                <Button variant="link" asChild className="p-0 mt-2">
                  <Link href="/peraturan/bab-9" className="flex items-center">
                    Selengkapnya <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Image
                  src="/timbang.png"
                  alt="Retro TV"
                  width={100}
                  height={100}
                  className="w-8 h-8 md:w-16 md:h-16"
                />
                <CardTitle>BAB X: PERATURAN KERJA KARYAWAN</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Ketentuan mengenai tata tertib, kehadiran, kewajiban dan
                  tanggung jawab, serta larangan bagi karyawan.
                </CardDescription>
                <Button variant="link" asChild className="p-0 mt-2">
                  <Link href="/peraturan/bab-10" className="flex items-center">
                    Selengkapnya <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Image
                  src="/timbang.png"
                  alt="Retro TV"
                  width={100}
                  height={100}
                  className="w-8 h-8 md:w-16 md:h-16"
                />
                <CardTitle>BAB XI: PELANGGARAN DAN SANKSI</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Ketentuan mengenai pelanggaran dan sanksi, tindakan disiplin,
                  dan pelanggaran tata tertib kerja.
                </CardDescription>
                <Button variant="link" asChild className="p-0 mt-2">
                  <Link href="/peraturan/bab-11" className="flex items-center">
                    Selengkapnya <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
               <Image
                  src="/timbang.png"
                  alt="Retro TV"
                  width={100}
                  height={100}
                  className="w-8 h-8 md:w-16 md:h-16"
                />
                <CardTitle>BAB XII: PEMUTUSAN HUBUNGAN KERJA (PHK)</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Ketentuan mengenai pemutusan hubungan kerja antara perusahaan
                  dan karyawan, termasuk sebab-sebab PHK dan kewajiban yang
                  harus dipenuhi.
                </CardDescription>
                <Button variant="link" asChild className="p-0 mt-2">
                  <Link href="/peraturan/bab-12" className="flex items-center">
                    Selengkapnya <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
               <Image
                  src="/timbang.png"
                  alt="Retro TV"
                  width={100}
                  height={100}
                  className="w-8 h-8 md:w-16 md:h-16"
                />
                <CardTitle>BAB XIII: PENYELESAIAN KELUH KESAH</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Ketentuan mengenai tata cara penyelesaian keluhan karyawan
                  terhadap kebijakan perusahaan.
                </CardDescription>
                <Button variant="link" asChild className="p-0 mt-2">
                  <Link href="/peraturan/bab-13" className="flex items-center">
                    Selengkapnya <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Image
                  src="/timbang.png"
                  alt="Retro TV"
                  width={100}
                  height={100}
                  className="w-8 h-8 md:w-16 md:h-16"
                />
                <CardTitle>BAB XIV: PENUTUP</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Ketentuan mengenai interpretasi, amandemen, penyelesaian
                  sengketa, dan ketentuan penutup peraturan perusahaan.
                </CardDescription>
                <Button variant="link" asChild className="p-0 mt-2">
                  <Link href="/peraturan/bab-14" className="flex items-center">
                    Selengkapnya <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="w-full px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Punya Pertanyaan?
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Jika Anda memiliki pertanyaan tentang peraturan kantor, jangan
                ragu untuk menghubungi tim kami.
              </p>
            </div>
            <Button asChild size="lg">
              <Link href="/kontak">Hubungi Kami</Link>
            </Button>
          </div>
        </div>
      </section> */}
    </div>
  );
}
