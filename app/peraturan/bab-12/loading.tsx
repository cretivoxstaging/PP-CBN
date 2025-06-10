import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function Loading() {
  return (
    <div className="container py-12">
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <Skeleton className="h-9 w-32" />
        </div>

        <div className="space-y-2">
          <Skeleton className="h-12 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
        </div>

        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <Skeleton className="h-6 w-48" />
                  <Skeleton className="h-4 w-64" />
                </div>
                <Skeleton className="h-6 w-16" />
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-5/6" />
              <Skeleton className="h-32 w-full" />
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-between">
          <Skeleton className="h-9 w-32" />
          <Skeleton className="h-9 w-40" />
        </div>
      </div>
    </div>
  )
}
