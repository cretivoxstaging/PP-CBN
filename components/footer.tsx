import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t bg-black text-white w-full">
      <div className="w-full py-8 md:py-12 px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3 -mt-7">
            <div className="flex items-center space-x-3 -ml-2">
              <Link href="https://www.instagram.com/cretivox/">
                <Image
                  src="/cretivox-white.png"
                  alt="Retro TV"
                  width={100}
                  height={100}
                  className="w-36 h-30 hover:scale-105 transition-all duration-300"
                />
              </Link>
              <Link href="https://www.instagram.com/condfe/">
                <Image
                  src="/condfe.png"
                  alt="Retro TV"
                  width={100}
                  height={100}
                  className="hover:scale-105 transition-all duration-300"
                />
              </Link>
              <Link href="https://www.instagram.com/ogsmedia_/">
                <Image
                  src="/ogs-white.png"
                  alt="Retro TV"
                  width={100}
                  height={100}
                  className="hover:scale-105 transition-all duration-300"
                />
              </Link>
            </div>
            <p className="text-sm text-muted-foreground text-gray-200">
              Peraturan Perusahaan merupakan sarana yang sangat penting dalam
              mewujudkan Hubungan Perusahaan dan Karyawan yang dilandasi oleh
              kepentingan bersama.
            </p>
          </div>
          <div className="space-y-3 md:ml-36">
            <h3 className="text-xl font-semibold">Tautan Cepat</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-muted-foreground hover:text-primary text-gray-200 hover:text-gray-400"
                >
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  href="/tentang-kami"
                  className="text-sm text-muted-foreground hover:text-primary text-gray-200 hover:text-gray-400"
                >
                  Tentang Kami
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3 md:ml-24">
            <h3 className="text-xl font-semibold">Tautan Lainnya</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/peraturan"
                  className="text-sm text-muted-foreground hover:text-primary text-gray-200 hover:text-gray-400"
                >
                  Peraturan Perusahaan
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3 md:ml-16">
            <h3 className="text-xl font-semibold">Kontak</h3>
            <p className="text-sm text-muted-foreground text-gray-200 hover:text-gray-400">
              Website:{" "}
              <a
                href="https://cretivox.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-gray-400 hover:scale-105 inline-block transition-all duration-300"
              >
                cretivox.com
              </a>
              <br />
              Contact:{" "}
              <a
                href="https://wa.me/62895414197895"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-gray-400 hover:scale-105 inline-block transition-all duration-300"
              >
                0895414197895
              </a>
              <br />
              Alamat: Jl. Balap Sepeda No.6B, Rawamangun, Kec. Pulo Gadung, Kota
              Jakarta Timur, Daerah Khusus Ibukota Jakarta 13220
            </p>
          </div>
        </div>
        <div className="mt-8 border-t text-center">
          <p className="text-xs md:text-sm -mb-8 py-3 text-muted-foreground text-gray-200">
            &copy; {new Date().getFullYear()} CBN. Hak Cipta Dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}
