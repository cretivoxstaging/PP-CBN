import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ArrowLeft, Clock } from "lucide-react"

export default function JamKerjaAbsensi() {
  return (
    <div className="container py-12">
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
            <BreadcrumbLink href="/peraturan/jam-kerja-absensi">Jam Kerja & Absensi</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-3/4">
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter">Jam Kerja & Absensi</h1>
              <p className="text-muted-foreground">
                Ketentuan mengenai jam kerja, sistem absensi, dan kebijakan terkait kehadiran karyawan.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold" id="jam-kerja">
                1. Jam Kerja Reguler
              </h2>
              <p>Jam kerja reguler di perusahaan kami adalah sebagai berikut:</p>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Hari</TableHead>
                    <TableHead>Jam Kerja</TableHead>
                    <TableHead>Istirahat</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Senin - Jumat</TableCell>
                    <TableCell>08.00 - 17.00</TableCell>
                    <TableCell>12.00 - 13.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Sabtu</TableCell>
                    <TableCell>08.00 - 13.00</TableCell>
                    <TableCell>-</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Minggu & Hari Libur</TableCell>
                    <TableCell>Libur</TableCell>
                    <TableCell>-</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <p>
                Karyawan diharapkan untuk hadir tepat waktu dan siap bekerja pada jam yang telah ditentukan.
                Keterlambatan yang berulang akan dikenakan sanksi sesuai dengan kebijakan perusahaan.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold" id="sistem-absensi">
                2. Sistem Absensi
              </h2>
              <p>
                Perusahaan menggunakan sistem absensi elektronik untuk mencatat kehadiran karyawan. Setiap karyawan
                wajib melakukan check-in saat tiba di kantor dan check-out saat meninggalkan kantor.
              </p>
              <div className="space-y-2">
                <h3 className="text-xl font-medium">Prosedur Absensi:</h3>
                <ul className="list-disc pl-6 sm:pl-8 md:pl-10 space-y-1">
                  <li className="ml-4">
                    Karyawan wajib melakukan check-in sendiri menggunakan kartu ID atau aplikasi absensi.
                  </li>
                  <li className="ml-4">Check-in harus dilakukan sebelum jam kerja dimulai.</li>
                  <li className="ml-4">Check-out harus dilakukan setelah jam kerja selesai.</li>
                  <li className="ml-4">Karyawan dilarang melakukan absensi untuk karyawan lain (titip absen).</li>
                  <li className="ml-4">
                    Jika terjadi masalah dengan sistem absensi, segera laporkan ke departemen HR.
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold" id="keterlambatan">
                3. Keterlambatan
              </h2>
              <p>
                Keterlambatan didefinisikan sebagai kedatangan setelah jam kerja dimulai. Perusahaan memberikan
                toleransi keterlambatan maksimal 15 menit, dengan ketentuan sebagai berikut:
              </p>
              <ul className="list-disc pl-6 sm:pl-8 md:pl-10 space-y-1">
                <li className="ml-4">
                  Keterlambatan hingga 15 menit: Tidak dikenakan sanksi, tetapi dicatat dalam sistem.
                </li>
                <li className="ml-4">Keterlambatan 16-30 menit: Dikenakan peringatan lisan.</li>
                <li className="ml-4">Keterlambatan 31-60 menit: Dikenakan peringatan tertulis.</li>
                <li className="ml-4">Keterlambatan lebih dari 60 menit: Dihitung sebagai setengah hari absen.</li>
                <li className="ml-4">Keterlambatan 3 kali dalam sebulan: Dikenakan peringatan tertulis.</li>
              </ul>
              <p>
                Karyawan yang terlambat karena alasan yang dapat dibenarkan (seperti keadaan darurat atau masalah
                transportasi) harus memberitahu atasan langsung atau departemen HR sesegera mungkin.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold" id="lembur">
                4. Lembur
              </h2>
              <p>
                Lembur didefinisikan sebagai jam kerja yang melebihi jam kerja reguler. Lembur harus disetujui oleh
                atasan langsung sebelum dilaksanakan.
              </p>
              <div className="space-y-2">
                <h3 className="text-xl font-medium">Ketentuan Lembur:</h3>
                <ul className="list-disc pl-6 sm:pl-8 md:pl-10 space-y-1">
                  <li className="ml-4">
                    Lembur harus disetujui oleh atasan langsung minimal 1 hari sebelumnya, kecuali dalam keadaan
                    darurat.
                  </li>
                  <li className="ml-4">
                    Karyawan wajib mengisi formulir lembur dan mendapatkan tanda tangan persetujuan.
                  </li>
                  <li className="ml-4">
                    Kompensasi lembur akan diberikan sesuai dengan peraturan ketenagakerjaan yang berlaku.
                  </li>
                  <li className="ml-4">
                    Lembur pada hari kerja: 1.5x upah per jam untuk jam pertama, 2x upah per jam untuk jam berikutnya.
                  </li>
                  <li className="ml-4">
                    Lembur pada hari libur: 2x upah per jam untuk 7 jam pertama, 3x upah per jam untuk jam berikutnya.
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold" id="wfh">
                5. Work From Home (WFH)
              </h2>
              <p>Perusahaan memperbolehkan karyawan untuk bekerja dari rumah (WFH) dengan ketentuan sebagai berikut:</p>
              <ul className="list-disc pl-6 sm:pl-8 md:pl-10 space-y-1">
                <li className="ml-4">Karyawan dapat mengajukan WFH maksimal 2 hari per minggu.</li>
                <li className="ml-4">Pengajuan WFH harus disetujui oleh atasan langsung minimal 1 hari sebelumnya.</li>
                <li className="ml-4">
                  Selama WFH, karyawan tetap wajib bekerja sesuai jam kerja reguler dan dapat dihubungi.
                </li>
                <li className="ml-4">Karyawan wajib melaporkan progress pekerjaan kepada atasan di akhir hari.</li>
                <li className="ml-4">
                  Departemen tertentu mungkin memiliki kebijakan WFH yang berbeda sesuai dengan kebutuhan operasional.
                </li>
              </ul>
              <div className="bg-muted p-4 rounded-lg">
                <p className="font-medium">Pembaruan Terbaru (15 Mei 2025):</p>
                <p>
                  Kebijakan WFH telah diperbarui untuk mengakomodasi kebutuhan karyawan dan perusahaan. Karyawan dapat
                  bekerja dari rumah hingga 2 hari per minggu dengan persetujuan manajer. Pengajuan WFH dapat dilakukan
                  melalui sistem HRIS perusahaan.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-between mt-8">
            <Button variant="outline" asChild>
              <Link href="/peraturan">
                <ArrowLeft className="mr-2 h-4 w-4" /> Kembali ke Peraturan
              </Link>
            </Button>
            <Button asChild>
              <Link href="/peraturan/kode-etik-perilaku">Kode Etik & Perilaku</Link>
            </Button>
          </div>
        </div>

        <div className="md:w-1/4">
          <div className="sticky top-20">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="mr-2 h-5 w-5" />
                  Navigasi
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>
                    <Link href="#jam-kerja" className="text-sm hover:underline">
                      1. Jam Kerja Reguler
                    </Link>
                  </li>
                  <li>
                    <Link href="#sistem-absensi" className="text-sm hover:underline">
                      2. Sistem Absensi
                    </Link>
                  </li>
                  <li>
                    <Link href="#keterlambatan" className="text-sm hover:underline">
                      3. Keterlambatan
                    </Link>
                  </li>
                  <li>
                    <Link href="#lembur" className="text-sm hover:underline">
                      4. Lembur
                    </Link>
                  </li>
                  <li>
                    <Link href="#wfh" className="text-sm hover:underline">
                      5. Work From Home
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
