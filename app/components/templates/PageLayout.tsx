import Image from 'next/image'

interface PageLayoutProps {
  children: React.ReactNode
  title: string
  children2?: React.ReactNode
}

const PageLayout: React.FC<PageLayoutProps> = ({
  children,
  title,
  children2,
}) => {
  return (
    <>
      <header className="px-5 py-4 grid grid-cols-4 gap-1 bg-primary-dark text-white">
        <button className="flex justify-between items-center w-full">
          <Image
            src={'/assets/arrow.svg'}
            alt="arrow icon"
            className="rotate-180 col-span"
            width={16}
            height={16}
          />
        </button>
        <p className="col-span-2 text-center font-medium text-xl truncate">
          {title}
        </p>
        <div className="flex justify-end gap-1">{children2}</div>
      </header>
      <main className="px-5 py-4 bg-primary-dark text-white">
        {children}
        <div>Other</div>
      </main>
    </>
  )
}

export default PageLayout
