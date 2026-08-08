import React from 'react'

interface Props {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <html lang="ar" dir="rtl" data-theme="dark">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Black-Matrix - منصة الذكاء الاصطناعي المتقدمة</title>
        <meta name="description" content="منصة Black-Matrix لتطوير وبيع الأدوات التكنولوجية بدعم الذكاء الاصطناعي" />
      </head>
      <body className="bg-bg-dark text-text-light-primary font-sans">
        {children}
      </body>
    </html>
  )
}
