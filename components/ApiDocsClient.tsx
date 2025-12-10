'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

interface ApiDocsClientProps {
  slug: string
}

export default function ApiDocsClient({ slug }: ApiDocsClientProps) {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch by waiting for mount
  useEffect(() => {
    setMounted(true)
  }, [])

  const theme = mounted && resolvedTheme === 'dark' ? 'dark' : 'light'

  return (
    <div style={{ width: '100%', height: 'calc(100vh - 64px)', minHeight: '600px' }}>
      <iframe
        src={`/api-docs-${slug}.html?theme=${theme}`}
        style={{ width: '100%', height: '100%', border: 'none' }}
        title="API Reference"
      />
    </div>
  )
}
