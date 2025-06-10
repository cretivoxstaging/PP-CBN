import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TentangKami() {
  return (
    <div className="container py-5 p-5">
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl ml-1">Tentang Kami</h1>
          <p className="text-muted-foreground ml-1">
            Mengenal lebih dekat perusahaan kami dan nilai-nilai yang kami junjung tinggi.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 pt-3 md:grid-cols-2 lg:grid-cols-2">
          <Card className="bg-black text-white">
            <CardHeader>
              <CardTitle>Sejarah Perusahaan</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Cretivox adalah startup agensi media digital dan kreatif yang berbasis di Jakarta, didirikan pada tahun 2019. Perusahaan ini mengkhususkan diri dalam menciptakan konten dan kampanye inovatif berbasis data yang dirancang untuk menjangkau audiens Gen Z dan Milenial. Dengan keahlian dalam storytelling digital, strategi media sosial, pemasaran melalui influencer, dan hiburan berorientasi brand, Cretivox memadukan media dan teknologi untuk membantu brand tetap relevan di lanskap digital yang terus berkembang.
              </p>
              <p className="mt-4">
                Sebagai platform media sekaligus mitra kreatif, Cretivox memproduksi konten orisinal, pengalaman interaktif, dan solusi pemasaran yang melampaui iklan konvensional. Mulai dari proses ideasi hingga eksekusi, tim Cretivox berkolaborasi dengan klien untuk membangun narasi otentik yang mampu terhubung dengan audiens di berbagai kanal—terutama di platform yang sedang naik daun seperti TikTok, Instagram, dan YouTube.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-black text-white">
            <CardHeader>
              <CardTitle>Visi & Misi</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Visi</h3>
                <p>
                  Menjadi jaringan media hiburan dengan pertumbuhan tercepat di Asia Tenggara.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Misi</h3>
                <p>
                  Kami berkomitmen untuk menjadi jaringan media hiburan yang membentuk standar hiburan berkualitas bagi masyarakat dengan hanya menghadirkan konten yang bermutu tinggi.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
