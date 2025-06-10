"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Search, ArrowRight, Loader2 } from "lucide-react"

interface SearchResult {
  id: string
  title: string
  content: string
  bab: string
  url: string
}

export default function SearchPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const query = searchParams.get("q") || ""

  const [searchQuery, setSearchQuery] = useState(query)
  const [results, setResults] = useState<SearchResult[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    if (query) {
      performSearch(query)
    }
  }, [query])

  const performSearch = async (searchTerm: string) => {
    if (!searchTerm.trim()) {
      setResults([])
      return
    }

    setIsLoading(true)
    setError("")

    try {
      const response = await fetch(`/api/search?q=${encodeURIComponent(searchTerm)}`)

      if (!response.ok) {
        throw new Error("Terjadi kesalahan saat melakukan pencarian")
      }

      const data = await response.json()
      setResults(data.results)
    } catch (err) {
      setError("Terjadi kesalahan saat melakukan pencarian. Silakan coba lagi.")
      console.error("Search error:", err)
    } finally {
      setIsLoading(false)
    }
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`)
      performSearch(searchQuery)
    }
  }

  // Fungsi untuk memotong konten yang terlalu panjang
  const truncateContent = (content: string, maxLength = 200) => {
    if (content.length <= maxLength) return content
    return content.substring(0, maxLength) + "..."
  }

  // Fungsi untuk menyoroti kata kunci pencarian
  const highlightText = (text: string, query: string) => {
    if (!query.trim()) return text

    const parts = text.split(new RegExp(`(${query})`, "gi"))
    return parts.map((part, i) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <span key={i} className="bg-yellow-200 dark:bg-yellow-800">
          {part}
        </span>
      ) : (
        part
      ),
    )
  }

  // Fungsi untuk menangani klik pada hasil pencarian
  const handleResultClick = (url: string, bab: string) => {
    // Arahkan ke URL dan tambahkan hash untuk membuka pasal yang dicari
    router.push(`${url}#${bab}`)
  }

  return (
    <div className="container py-5 px-4 sm:px-6 md:px-8">
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Beranda</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/search">Pencarian</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Pencarian Peraturan</h1>
          <p className="text-muted-foreground">
            Cari peraturan, kebijakan, atau informasi spesifik dalam peraturan perusahaan.
          </p>
        </div>

        <form onSubmit={handleSearch} className="relative mt-6">
          <div className="relative rounded-md shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <Search className="h-5 w-5 text-muted-foreground" />
            </div>
            <Input
              type="text"
              className="block w-full rounded-md border-input bg-background py-3 pl-10 pr-12 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              placeholder="Cari peraturan..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
              <Button variant="ghost" size="sm" type="submit" disabled={isLoading}>
                {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Cari"}
              </Button>
            </div>
          </div>
        </form>

        {error && <div className="bg-destructive/10 text-destructive p-4 rounded-md">{error}</div>}

        <div className="mt-8">
          {query && (
            <p className="text-muted-foreground mb-4">
              {isLoading
                ? "Mencari..."
                : results.length > 0
                  ? `Ditemukan ${results.length} hasil untuk "${query}"`
                  : `Tidak ditemukan hasil untuk "${query}"`}
            </p>
          )}

          <div className="space-y-4">
            {results.map((result) => (
              <Card key={result.id}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl">{highlightText(result.title, query)}</CardTitle>
                  <CardDescription>{result.bab}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{highlightText(truncateContent(result.content), query)}</p>
                  <Button asChild variant="outline" size="sm" onClick={() => handleResultClick(result.url, result.bab)}>
                    <Link href={result.url} className="flex items-center">
                      Lihat Detail <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {results.length === 0 && query && !isLoading && (
            <div className="text-center py-12">
              <p className="text-lg font-medium">Tidak ditemukan hasil yang sesuai</p>
              <p className="text-muted-foreground mt-2">Coba gunakan kata kunci yang berbeda atau lebih umum</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
