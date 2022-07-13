export default function PageSection({ children }) {
  return (
    <div className='shadow overflow-hidden sm:rounded-md mb-6 w-full'>
      <div className='px-4 py-5 bg-white space-y-6 sm:p-6'>
        {children}
      </div>
    </div>
  )
}