import React from 'react'
import Projects from './components/Projects'
import Techstack from './components/Techstack/Techstack'
import NoStyleCryptotext from './components/NoStyleCryptotext'

const HomeClient = () => {
  return (
    <div className="w-full max-w-7xl  mx-auto lg:px-4 ">
      <div className="flex lg:flex-row flex-col-reverse lg:items-center items-start justify-between py-8">
        <div className="flex flex-col items-start gap-6 max-w-2xl">
          <h1 className="lg:text-7xl md:text-6xl text-5xl lg:pt-0 pt-4 font-semibold uppercase">Jacob Shaul</h1>
          <div className="flex items-center justify-between lg:text-2xl md:text-lg text-sm font-semibold w-full uppercase">
            <h2>Student</h2>
            <h2>|</h2>
            <h2>Full-stack developer</h2>
            <h2>|</h2>
            <h2>Founder</h2>
          </div>
          <h3 className="lg:text-xl text-base">Incoming CS student <a href="https://www.berkeley.edu/" target="_blank" className="text-paleslate underline hover:text-white"><NoStyleCryptotext text={'@UC Berkeley'} /></a>, previously interning <a href="https://tesseral.com/" target="_blank" className="text-paleslate hover:text-white underline"><NoStyleCryptotext text={'@Tesseral'} /></a>. As seen on:
            <ul className='list-disc pl-5'>
              <li><a href="https://www.cnn.com/2025/09/27/tech/sillicon-valley-seniors-ai-course" target="_blank" className="text-paleslate underline hover:text-white"><NoStyleCryptotext text={'CNN'} /></a></li>
              <li><a href="https://www.nbcbayarea.com/video/news/local/sf-teen-is-helping-other-students-learn-computer-coding/3953420/" target='_blank' className="text-paleslate hover:text-white underline"><NoStyleCryptotext text={'NBC Bay Area'} /></a></li>
              <li><a href="https://www.ktvu.com/news/teen-teaching-ai-free-grows-program-international-movement" target='_blank' className="text-paleslate hover:text-white underline"><NoStyleCryptotext text={'KTVU Fox'} /></a></li>
              <li><a href="https://dillerteenawards.org/recipient/jacob-shaul/" target='_blank' className="text-paleslate hover:text-white underline"><NoStyleCryptotext text={'Diller Teen Award Recipient'} /></a></li>
            </ul>
          </h3>
          <div className="flex items-center lg:gap-8 gap-6">
            <a href="https://github.com/jacob-s-codes" target="_blank" className="hover:text-black border border-white hover:rounded-r-xl p-2 hover:bg-white duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-github lg:w-8 w-6 h-auto" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
              </svg>
            </a>
            <a href="mailto:jshaul@berkeley.edu" className="hover:text-black border border-white hover:rounded-r-xl p-2 hover:bg-white duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="lg:w-8 w-6 h-auto bi bi-envelope" viewBox="0 0 16 16">
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
              </svg>
            </a>

            <a href="https://www.linkedin.com/in/jacob-shaul/" target="_blank" className="hover:text-black border border-white hover:rounded-r-xl pr-2 p-2 hover:bg-white duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-linkedin rounded-sm lg:w-8 w-6 h-auto" viewBox="0 0 16 16">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
              </svg></a>
          </div>
        </div>
        <div className="flex w-full justify-center">
          <img src="/jacobbgremove.png" alt="Jacob's Avatar" className="lg:w-96 lg:h-96 w-80 h-80 rounded-full border-4 border-white" />
        </div>
      </div>

      <div className="py-16">
        <div className='pb-4'>
          <h2 className="lg:text-6xl text-5xl font-semibold uppercase">projects:</h2>
          <hr className="border-2 border-white" />
        </div>



        <Projects />
        <div>
          <a href="/projects">
            <button className="w-fit hover:cursor-pointer border-white border lg:px-12 px-8 py-4 hover:bg-lessdarkbg duration-200 ease-in hover:rounded-r-xl lg:text-2xl text-xl">
              Read more
            </button>
          </a>
        </div>
      </div>




      <div className="py-16">
        <Techstack />

        {/* <h3 className="text-4xl py-4">Backend:</h3>
        <div className="flex items-center justify-evenly">
          <img src="/gologo.png" alt="go" className="w-64 h-auto" />
          <img src="/nodejs.png" alt="" className="w-64 h-auto" />
          <svg className="w-64 h-auto" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.0164 2C10.8193 2 9.03825 3.72453 9.03825 5.85185V8.51852H15.9235V9.25926H5.97814C3.78107 9.25926 2 10.9838 2 13.1111L2 18.8889C2 21.0162 3.78107 22.7407 5.97814 22.7407H8.27322V19.4815C8.27322 17.3542 10.0543 15.6296 12.2514 15.6296H19.5956C21.4547 15.6296 22.9617 14.1704 22.9617 12.3704V5.85185C22.9617 3.72453 21.1807 2 18.9836 2H13.0164ZM12.0984 6.74074C12.8589 6.74074 13.4754 6.14378 13.4754 5.40741C13.4754 4.67103 12.8589 4.07407 12.0984 4.07407C11.3378 4.07407 10.7213 4.67103 10.7213 5.40741C10.7213 6.14378 11.3378 6.74074 12.0984 6.74074Z" fill="url(#paint0_linear_87_8204)" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M18.9834 30C21.1805 30 22.9616 28.2755 22.9616 26.1482V23.4815L16.0763 23.4815L16.0763 22.7408L26.0217 22.7408C28.2188 22.7408 29.9998 21.0162 29.9998 18.8889V13.1111C29.9998 10.9838 28.2188 9.25928 26.0217 9.25928L23.7266 9.25928V12.5185C23.7266 14.6459 21.9455 16.3704 19.7485 16.3704L12.4042 16.3704C10.5451 16.3704 9.03809 17.8296 9.03809 19.6296L9.03809 26.1482C9.03809 28.2755 10.8192 30 13.0162 30H18.9834ZM19.9015 25.2593C19.1409 25.2593 18.5244 25.8562 18.5244 26.5926C18.5244 27.329 19.1409 27.9259 19.9015 27.9259C20.662 27.9259 21.2785 27.329 21.2785 26.5926C21.2785 25.8562 20.662 25.2593 19.9015 25.2593Z" fill="url(#paint1_linear_87_8204)" />
            <defs>
              <linearGradient id="paint0_linear_87_8204" x1="12.4809" y1="2" x2="12.4809" y2="22.7407" gradientUnits="userSpaceOnUse">
                <stop stop-color="#327EBD" />
                <stop offset="1" stop-color="#1565A7" />
              </linearGradient>
              <linearGradient id="paint1_linear_87_8204" x1="19.519" y1="9.25928" x2="19.519" y2="30" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FFDA4B" />
                <stop offset="1" stop-color="#F9C600" />
              </linearGradient>
            </defs>
          </svg>
        </div> */}

        {/* <h3 className="text-4xl py-4">Backend:</h3>
        <div className="flex items-center justify-evenly">
          <img src="/nextjslogo.jpeg" alt="nextjs logo" className="w-64 h-auto" />
          <img src="/tailwindlogo.png" alt="" className="w-64 h-auto" />
        </div> */}

      </div>

    </div>
  )
}

export default HomeClient
