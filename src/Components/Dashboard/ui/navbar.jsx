import React from "react";

export default function Navbar() {
  return (
    <div className='dash_nav'>
      <div className='search_int'>
        <form action=''>
          <input type='search' name='' id='' placeholder='Search...' />
          <button>
            <i className='fa-solid fa-magnifying-glass'></i>
          </button>
        </form>
      </div>
    </div>
  );
}
