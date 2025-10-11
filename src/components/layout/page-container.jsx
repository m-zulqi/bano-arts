export function PageContainer({ children }) {
  return (
    <div className="relative">
      <div
        className="fixed inset-0 bg-cover bg-center bg-repeat opacity-10 z-0"
        style={{
          backgroundImage: "url('/images/sunflower-bg.jpg')",
        }}
      />
      <main className="relative z-10">
        {children}
      </main>
    </div>
  )
}
