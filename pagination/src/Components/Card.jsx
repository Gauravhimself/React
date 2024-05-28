import React from 'react'

function Card({id, title, imgLink, price,category}) {
  return (
    // <div id={id} className="flex-shrink-0 m-6 relative overflow-hidden bg-orange-500 rounded-lg max-w-xs shadow-lg group">
    //                     <svg className="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform"
    //                         viewBox="0 0 375 283" fill="none" style={{opacity: 0.1}}>
    //                         <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
    //                         <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
    //                     </svg>
    //                     <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
    //                         <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
    //                             >
    //                         </div>
    //                         <img className="relative w-40" src={imgLink} alt=""/>
    //                     </div>
    //                     <div className="relative text-white px-6 pb-6 mt-6">
    //                         <span className="block opacity-75 -mb-1">{id}</span>
    //                         <div className="flex justify-between">
    //                             <span className="block font-semibold text-xl">{title}</span>
    //                             <span className="block bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none flex items-center">{price}</span>
    //                         </div>
    //                     </div>
    //                 </div>
    <article key={id} className="max-w-sm w-56  m-1 bg-white rounded-lg shadow-lg overflow-hidden dark:bg-gray-700">
      <div>
        <img
          className="object-cover h-64 w-full"
          src={imgLink}
          alt={title}
        />
      </div>

      <div className="flex flex-col gap-1 mt-4 px-4">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-50">{title}</h2>
        <span className="font-normal text-gray-600 dark:text-gray-300">{category}</span>
        <span className=" mb-3 font-semibold text-gray-800 dark:text-gray-50">Price ${price}</span>
      </div>

      {/* <div className="flex gap-4 mt-4 px-4">
        <span className="sr-only">Colors available</span>

        <button
          aria-label="Yellow"
          className="p-1 border border-gray-200 dark:border-gray-500 rounded-full cursor-pointer bg-yellow-500 dark:bg-yellow-400"
        ></button>

        <button
          aria-label="Red"
          className="p-1 border border-gray-200 dark:border-gray-500 rounded-full cursor-pointer bg-red-500 dark:bg-red-400"
        ></button>

        <button
          aria-label="Blue"
          className="p-1 border border-gray-200 dark:border-gray-500 rounded-full cursor-pointer bg-blue-500 dark:bg-blue-400"
        ></button>

        <button
          aria-label="Black"
          className="p-1 border border-gray-200 dark:border-gray-500 rounded-full cursor-pointer bg-gray-800 dark:bg-gray-600"
        ></button>
      </div> */}

      {/* <div className="mt-4 p-4 border-t border-gray-200 dark:border-gray-500">
        <button className="w-full flex justify-between items-center font-bold cursor-pointer hover:underline text-gray-800 dark:text-gray-50">
          <span className="text-base">Add to Cart</span>
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </button>
      </div> */}
    </article>
  )
}

export default Card