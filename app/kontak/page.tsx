"use client"

import Link from "next/link"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { Mail, MapPin, Phone } from "lucide-react"

export default function Kontak() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    department: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, department: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: "Pesan Terkirim",
        description: "Terima kasih telah menghubungi kami. Kami akan segera merespons pesan Anda.",
      })
      setFormData({
        name: "",
        email: "",
        department: "",
        subject: "",
        message: "",
      })
    }, 1500)
  }

  return (
    <div className="container py-12 px-4 sm:px-6 md:px-8">
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Kontak Kami</h1>
          <p className="text-muted-foreground">
            Hubungi kami untuk pertanyaan atau informasi lebih lanjut tentang peraturan perusahaan.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 pt-8 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Phone className="mr-2 h-5 w-5" />
                Telepon
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Kantor Pusat: (021) 123-4567</p>
              <p>Departemen HR: (021) 123-4568</p>
              <p>Fax: (021) 123-4569</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Mail className="mr-2 h-5 w-5" />
                Email
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Informasi Umum: info@perusahaan.com</p>
              <p>Departemen HR: hr@perusahaan.com</p>
              <p>Bantuan Teknis: support@perusahaan.com</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MapPin className="mr-2 h-5 w-5" />
                Alamat
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Jl. Contoh No. 123</p>
              <p>Jakarta Selatan, 12345</p>
              <p>Indonesia</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 gap-6 pt-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Kirim Pesan</CardTitle>
              <CardDescription>Isi formulir di bawah ini untuk mengirim pesan kepada kami.</CardDescription>
            </CardHeader>
            <CardContent className="px-2 sm:px-4">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nama</Label>
                  <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="department">Departemen Tujuan</Label>
                  <Select value={formData.department} onValueChange={handleSelectChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih departemen" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hr">Sumber Daya Manusia</SelectItem>
                      <SelectItem value="legal">Legal</SelectItem>
                      <SelectItem value="operations">Operasional</SelectItem>
                      <SelectItem value="finance">Keuangan</SelectItem>
                      <SelectItem value="other">Lainnya</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subjek</Label>
                  <Input id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Pesan</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Mengirim..." : "Kirim Pesan"}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div>
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Jam Operasional</CardTitle>
              </CardHeader>
              <CardContent className="px-2 sm:px-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Senin - Jumat</span>
                    <span>08.00 - 17.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sabtu</span>
                    <span>08.00 - 13.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Minggu & Hari Libur</span>
                    <span>Tutup</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Lokasi</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-muted rounded-md flex items-center justify-center">
                  <p className="text-center text-muted-foreground">Peta Lokasi Kantor</p>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  Kantor kami terletak di pusat kota, mudah diakses dengan transportasi umum. Tersedia area parkir untuk
                  kendaraan pribadi.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="bg-muted rounded-lg p-6 mt-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold">Pertanyaan Umum</h2>
            <p className="text-muted-foreground">
              Untuk pertanyaan umum tentang peraturan perusahaan, silakan kunjungi halaman
              <Button variant="link" className="px-1" asChild>
                <Link href="/peraturan">Peraturan Perusahaan</Link>
              </Button>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
