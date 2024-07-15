import React from 'react'
import Cards from './Cards'
import list from "../../public/list.json"
import { Link } from 'react-router-dom'

function Course() {
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='mt-28 items-center jstify-center text-center'>
          <h1 className='text-2xl  md:text-4xl'>
            We're delighted to have you
            <span className='text-pink-500'> Here !</span>
          </h1>
          <p className='mt-12'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque culpa sapiente cumque eos, repudiandae et provident laudantium incidunt explicabo nostrum soluta reiciendis dolor. Suscipit, fuga similique aut tenetur perspiciatis consequuntur deleniti necessitatibus voluptatum eos voluptates eligendi quidem? Perferendis, dolore. Quia esse amet enim nisi perferendis consequatur hic alias, autem omnis odio? Architecto quo magnam quam illo. Veritatis, quisquam repellat. Consequuntur architecto, cumque ex consequatur iste alias voluptatibus numquam magnam similique maxime error eveniet dignissimos possimus voluptatum aspernatur consectetur ratione modi officia odit autem tempore! Culpa incidunt accusamus, a itaque est dolorem facere. Accusamus, nam. Voluptas deserunt nulla delectus sapiente laborum!
          </p>
          <Link to="/">
            <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>Back</button>
          </Link>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
          {
            list.map((item) => (
              <Cards key={item.id} item={item} />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Course