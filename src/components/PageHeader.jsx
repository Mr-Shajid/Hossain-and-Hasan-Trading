export default function PageHeader({ title, subtitle }) {
  return (
    <div className="bg-green-50 py-14">
      <div className="mx-auto max-w-6xl px-4 justify-items-center">
        <h1 className="text-3xl font-bold text-green-900 md:text-4xl">{title}</h1>
        {subtitle && <p className="mt-3 max-w-2xl text-gray-600">{subtitle}</p>}
      </div>
    </div>
  )
}