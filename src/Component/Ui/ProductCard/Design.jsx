import React from 'react'
import { Link } from 'react-router-dom'


export default function Design({ img, linkUrl }) {
  return (
    <div className="card bg-white w-full shadow-sm">
      <figure>
        <img src={img} alt="Product" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Card Title</h2>
        <p>
          A card component has a figure, a body part, and inside body there are title and actions parts.
        </p>
        <div className="card-actions justify-end">
          <Link to={linkUrl || '/product/1'}>
            <button className="bg-gray-800 text-white btn btn-primary">Read More</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
