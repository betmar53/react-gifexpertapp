import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
 
   const [categoria, setCategoria] = useState(['comic']);

  return (
    <>
    <h2>Titulo</h2>
   
   <AddCategory setCategorias={setCategoria} />
   <hr />
    <ol>
      {
      categoria.map(categories =>{
       return <GifGrid key={categories} category={categories}/>
      })}
    </ol>

    </>
  )
}
