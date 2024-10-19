// src/app/(no-layout)/layout.tsx
export default function NoLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>; // This means no layout will wrap the loading page
  }
  