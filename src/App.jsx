import React, { useState } from 'react'

function App() {
  const [data, setdata] = useState(false)

  return (
    <div className={`transition duration-1000 ${data ? "bg-zinc-950" : "bg-yellow-600"}`}>
      <div className="flex justify-center items-center h-screen">
        <div className={`w-51 h-22 border-10 rounded-full ${data ? "border-white" : "border-black"}`}>
          <button
            onClick={() => setdata(!data)}
            className={`transition duration-700 px-7 py-5 rounded-4xl border-4 font-bold bg-amber-700 text-white 
              ${data ? "translate-x-15 bg-zinc-800" : "translate-x-0 bg-amber-200"}`}
          >
            <div className="flex justify-center items-center">
              <span className={`transition duration-1000 ${data ? "opacity-100" : "opacity-0 absolute"}`}>
                🌙Night
              </span>
              <span className={`transition duration-1000 ${data ? "opacity-0 absolute" : "opacity-100"}`}>
                ☀️ Day
              </span>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
