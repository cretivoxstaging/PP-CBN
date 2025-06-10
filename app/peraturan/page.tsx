import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import {
  BookOpen,
  Book,
  Shield,
  Clock,
  Calendar,
  DollarSign,
  Stethoscope,
  Briefcase,
  Heart,
  GraduationCap,
  FileText,
  UserX,
  MessageCircle,
  BookText,
} from "lucide-react"
import SearchBar from "@/components/search-bar"

export default function PeraturanPerusahaan() {
  return (
    <div className="w-full py-5 px-6 lg:px-8 bg-white">
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Peraturan Perusahaan</h1>
          <p className="text-muted-foreground">
            Panduan lengkap tentang peraturan dan kebijakan yang berlaku di perusahaan kami.
          </p>
        </div>

        <div className="relative">
          <SearchBar />
        </div>

        <Tabs defaultValue="bab" className="w-full">
          {/* <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="bab">Bab Peraturan</TabsTrigger>
            <TabsTrigger value="terbaru">Terbaru</TabsTrigger>
          </TabsList> */}
          <TabsContent value="bab" className="mt-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

              <Card className="bg-black text-white">
                <CardHeader className="flex flex-row items-center gap-4">
                  <Book className="h-8 w-8" />
                  <div>
                    <CardTitle>KEBIJAKAN KHUSUS PERUSAHAAN</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-6 sm:pl-8 space-y-1 text-sm">
                    <li className="ml-2">1. Larangan Hubungan Romantis di Lingkungan Kerja</li>
                    <li className="ml-2">2. Budaya 3S: Senyum, Sapa, Salam</li>
                    <li className="ml-2">3. Ketuk Pintu Sebelum Masuk</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link href="/peraturan/KKP">Lihat Detail</Link>
                  </Button>
                </CardFooter>
              </Card>


              <Card className="bg-black text-white">
                <CardHeader className="flex flex-row items-center gap-4">
                  <Book className="h-8 w-8" />
                  <div>
                    <CardTitle>BAB I</CardTitle>
                    <CardDescription>KETENTUAN UMUM</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-6 sm:pl-8 space-y-1 text-sm">
                    <li className="ml-2">Pasal 1: KETENTUAN UMUM</li>
                    <li className="ml-2">Pasal 2: Maksud Dan Tujuan</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link href="/peraturan/bab-1">Lihat Detail</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="bg-black text-white">
                <CardHeader className="flex flex-row items-center gap-4">
                  <BookOpen className="h-8 w-8" />
                  <div>
                    <CardTitle>BAB II</CardTitle>
                    <CardDescription>HUBUNGAN KERJA</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-6 sm:pl-8 space-y-1 text-sm">
                    <li className="ml-2">Pasal 3: Penerimaan Karyawan</li>
                    <li className="ml-2">Pasal 4: Masa Percobaan</li>
                    <li className="ml-2">Pasal 5: Karyawan Tidak Tetap</li>
                    <li className="ml-2">Pasal 6: Pengangkatan, dan Pemindahan Karyawan</li>
                    <li className="ml-2">Pasal 7: Evaluasi dan Penilaian Kinerja</li>
                    <li className="ml-2">Pasal 8: Promosi</li>
                    <li className="ml-2">Pasal 9: Demosi</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link href="/peraturan/bab-2">Lihat Detail</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="bg-black text-white">
                <CardHeader className="flex flex-row items-center gap-4">
                  <Clock className="h-8 w-8" />
                  <div>
                    <CardTitle>BAB III</CardTitle>
                    <CardDescription>WAKTU KERJA</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-6 sm:pl-8 space-y-1 text-sm">
                    <li className="ml-2">Pasal 10: Hari dan Jam Kerja</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link href="/peraturan/bab-3">Lihat Detail</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="bg-black text-white">
                <CardHeader className="flex flex-row items-center gap-4">
                  <Calendar className="h-8 w-8" />
                  <div>
                    <CardTitle>BAB IV</CardTitle>
                    <CardDescription>HARI LIBUR, CUTI, DAN MENINGGALKAN PEKERJAAN</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-6 sm:pl-8 space-y-1 text-sm">
                    <li className="ml-2">Pasal 11: Hari Libur</li>
                    <li className="ml-2">Pasal 12: Cuti Tahunan</li>
                    <li className="ml-2">Pasal 13: Cuti Melahirkan/Keguguran</li>
                    <li className="ml-2">Pasal 14: Cuti Sakit</li>
                    <li className="ml-2">Pasal 15: Ijin Meninggalkan Pekerjaan dengan Gaji Penuh</li>
                    <li className="ml-2">Pasal 16: Ijin Meninggalkan Pekerjaan Pada Waktu Jam Kerja</li>
                    <li className="ml-2">Pasal 17: Meninggalkan Pekerjaan Tanpa Ijin/Mangkir</li>
                    <li className="ml-2">Pasal 18: Cuti Lainnya</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link href="/peraturan/bab-4">Lihat Detail</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="bg-black text-white">
                <CardHeader className="flex flex-row items-center gap-4">
                  <DollarSign className="h-8 w-8" />
                  <div>
                    <CardTitle>BAB V</CardTitle>
                    <CardDescription>PENGUPAHAN</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-6 sm:pl-8 space-y-1 text-sm">
                    <li className="ml-2">Pasal 19: Sistem Pengupahan</li>
                    <li className="ml-2">Pasal 20: Lembur</li>
                    <li className="ml-2">Pasal 21: Upah Selama Sakit Berkepanjangan</li>
                    <li className="ml-2">Pasal 22: Tunjangan Hari Raya Keagamaan</li>
                    <li className="ml-2">Pasal 23: Tunjangan Transportasi</li>
                    <li className="ml-2">Pasal 24: Bantuan Bagi Karyawan Yang Ditahan Pihak Berwajib</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link href="/peraturan/bab-5">Lihat Detail</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="bg-black text-white">
                <CardHeader className="flex flex-row items-center gap-4">
                  <Stethoscope className="h-8 w-8" />
                  <div>
                    <CardTitle>BAB VI</CardTitle>
                    <CardDescription>PERAWATAN DI RUMAH SAKIT</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-6 sm:pl-8 space-y-1 text-sm">
                    <li className="ml-2">Pasal 25: Umum</li>
                    <li className="ml-2">Pasal 26: Perawatan di Rumah Sakit PEMERINTAH</li>
                    <li className="ml-2">Pasal 27: Tunjangan Melahirkan</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link href="/peraturan/bab-6">Lihat Detail</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="bg-black text-white">
                <CardHeader className="flex flex-row items-center gap-4">
                  <Briefcase className="h-8 w-8" />
                  <div>
                    <CardTitle>BAB VII</CardTitle>
                    <CardDescription>FASILITAS KERJA</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-6 sm:pl-8 space-y-1 text-sm">
                    <li className="ml-2">Pasal 28: Peralatan Kerja</li>
                    <li className="ml-2">Pasal 29: Pakaian Kerja</li>
                    <li className="ml-2">Pasal 30: Perjalanan Dinas Dalam Dan Luar Negeri</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link href="/peraturan/bab-7">Lihat Detail</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="bg-black text-white">
                <CardHeader className="flex flex-row items-center gap-4">
                  <Heart className="h-8 w-8" />
                  <div>
                    <CardTitle>BAB VIII</CardTitle>
                    <CardDescription>JAMINAN SOSIAL DAN KESEJAHTERAAN KARYAWAN</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-6 sm:pl-8 space-y-1 text-sm">
                    <li className="ml-2">Pasal 31: BPJS Ketenagakerjaan</li>
                    <li className="ml-2">Pasal 32: Bantuan Kematian</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link href="/peraturan/bab-8">Lihat Detail</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="bg-black text-white">
                <CardHeader className="flex flex-row items-center gap-4">
                  <GraduationCap className="h-8 w-8" />
                  <div>
                    <CardTitle>BAB IX</CardTitle>
                    <CardDescription>PENINGKATAN KETERAMPILAN KARYAWAN</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-6 sm:pl-8 space-y-1 text-sm">
                    <li className="ml-2">Pasal 33: Pelatihan dan Pendidikan Karyawan</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link href="/peraturan/bab-9">Lihat Detail</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="bg-black text-white">
                <CardHeader className="flex flex-row items-center gap-4">
                  <FileText className="h-8 w-8" />
                  <div>
                    <CardTitle>BAB X</CardTitle>
                    <CardDescription>PERATURAN KERJA KARYAWAN</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-6 sm:pl-8 space-y-1 text-sm">
                    <li className="ml-2">Pasal 34: Tata Tertib</li>
                    <li className="ml-2">Pasal 35: Kehadiran</li>
                    <li className="ml-2">Pasal 36: Kewajiban dan Tanggung Jawab Karyawan</li>
                    <li className="ml-2">Pasal 37: Larangan Bagi Karyawan</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link href="/peraturan/bab-10">Lihat Detail</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="bg-black text-white">
                <CardHeader className="flex flex-row items-center gap-4">
                  <Shield className="h-8 w-8" />
                  <div>
                    <CardTitle>BAB XI</CardTitle>
                    <CardDescription>PELANGGARAN DAN SANKSI</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-6 sm:pl-8 space-y-1 text-sm">
                    <li className="ml-2">Pasal 38: Ketentuan Umum</li>
                    <li className="ml-2">Pasal 39: Tindakan Disiplin</li>
                    <li className="ml-2">Pasal 40: Pelanggaran Tata Tertib Kerja</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link href="/peraturan/bab-11">Lihat Detail</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="bg-black text-white">
                <CardHeader className="flex flex-row items-center gap-4">
                  <UserX className="h-8 w-8" />
                  <div>
                    <CardTitle>BAB XII</CardTitle>
                    <CardDescription>PEMUTUSAN HUBUNGAN KERJA (PHK)</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-6 sm:pl-8 space-y-1 text-sm">
                    <li className="ml-2">Pasal 41: Ketentuan Umum</li>
                    <li className="ml-2">Pasal 42: Penghentian Selama Periode Percobaan</li>
                    <li className="ml-2">Pasal 43: Berakhirnya Perjanjian Kerja Waktu Tertentu</li>
                    <li className="ml-2">Pasal 44: Pengunduran Diri</li>
                    <li className="ml-2">Pasal 45: Karyawan Mencapai Usia Pensiun</li>
                    <li className="ml-2">Pasal 46: Karyawan Melanggar Tata tertib</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link href="/peraturan/bab-12">Lihat Detail</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="bg-black text-white">
                <CardHeader className="flex flex-row items-center gap-4">
                  <MessageCircle className="h-8 w-8" />
                  <div>
                    <CardTitle>BAB XIII</CardTitle>
                    <CardDescription>PENYELESAIAN KELUH KESAH</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-6 sm:pl-8 space-y-1 text-sm">
                    <li className="ml-2">Pasal 53: Tata Cara Penyelesaian Keluh Kesah</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link href="/peraturan/bab-13">Lihat Detail</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="bg-black text-white">
                <CardHeader className="flex flex-row items-center gap-4">
                  <BookText className="h-8 w-8" />
                  <div>
                    <CardTitle>BAB XIV</CardTitle>
                    <CardDescription>PENUTUP</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-6 sm:pl-8 space-y-1 text-sm">
                    <li className="ml-2">Pasal 54: Interpretasi Dan Amandemen</li>
                    <li className="ml-2">Pasal 55: Penyelesaian Sengketa</li>
                    <li className="ml-2">Pasal 56: Penutup</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link href="/peraturan/bab-14">Lihat Detail</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
          {/* <TabsContent value="terbaru" className="mt-6">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Pembaruan BAB XIV: PENUTUP</CardTitle>
                  <CardDescription>Diperbarui pada 23 Mei 2025</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Ketentuan mengenai interpretasi, amandemen, penyelesaian sengketa, dan ketentuan penutup peraturan
                    perusahaan telah ditambahkan untuk memberikan informasi yang jelas tentang masa berlaku dan
                    perubahan peraturan perusahaan.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link href="/peraturan/bab-14#pasal-54">Lihat Detail</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Pembaruan BAB XIII: PENYELESAIAN KELUH KESAH</CardTitle>
                  <CardDescription>Diperbarui pada 23 Mei 2025</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Ketentuan mengenai tata cara penyelesaian keluhan karyawan terhadap kebijakan perusahaan telah
                    ditambahkan untuk memberikan informasi yang jelas tentang prosedur penyelesaian keluhan.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link href="/peraturan/bab-13#pasal-53">Lihat Detail</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Pembaruan BAB XII: PEMUTUSAN HUBUNGAN KERJA (PHK)</CardTitle>
                  <CardDescription>Diperbarui pada 23 Mei 2025</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    Ketentuan mengenai pemutusan hubungan kerja (PHK) telah ditambahkan dengan pasal-pasal baru tentang
                    penghentian selama periode percobaan, berakhirnya perjanjian kerja waktu tertentu, pengunduran diri,
                    karyawan mencapai usia pensiun, dan karyawan melanggar tata tertib.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link href="/peraturan/bab-12#pasal-42">Lihat Detail</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent> */}
        </Tabs>
      </div>
    </div>
  )
}
