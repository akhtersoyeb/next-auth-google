
function Loading() {
  return (
    <main className='h-screen flex flex-col items-center justify-center'>
      <div className="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full" role="status" aria-label="loading">
        <span className="sr-only">Loading...</span>
      </div>
    </main>
  )
}

export default Loading