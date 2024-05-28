import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {

  const [products, setProducts] = useState([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)

  const fetchProducts = async ()=>{
    const res = await fetch(`https://dummyjson.com/products?limit=10&skip=${page*10-10}`)
    const data = await res.json()

    if(data && data.products){
      setProducts(data.products)
      setTotalPages(data.total/1.94)
    }
  }

  const pageHandler =(curr)=>{
    if(curr>=1 && 
      curr<=totalPages && 
      curr!==page){
      setPage(curr)
    }
  }

  //console.log(products);
  useEffect(()=>{
    fetchProducts()
  },[page])
  return (
    <>
      {
        products.length>0 && <div className='products p-1 flex flex-wrap items-center justify-center '>
          {
            products.map((prod)=>{
            return <Card id={prod.id} title={prod.title} imgLink={prod.thumbnail} price={prod.price} category={prod.category}/>
            })
          }
        </div>
      }
      {
        products.length>0 && <div className='py-10 my-14 flex justify-center'>
          <span onClick={()=>pageHandler(page-1)} 
            className={`${page>1? "":"opacity-0"} cursor-pointer p-5 border-2 border-sky-500`} >◀️</span>
          {[...Array(totalPages/10)].map((_,i)=>{
            return <span onClick={()=>pageHandler(i+1)} 
              className={`${page === i+1? " bg-gray-400":""} p-5 cursor-pointer border-2 border-sky-500`} key={i}>{i+1}</span>;
          })}
          <span onClick={()=>pageHandler(page+1)} 
            className={`${page<products.length?"":"opacity-0"} cursor-pointer p-5 border-2 border-sky-500`}>▶️</span>
        </div>
      }
    </>
  )
}

export default App
