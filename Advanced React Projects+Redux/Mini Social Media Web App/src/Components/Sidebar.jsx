import React from 'react'

export default function Sidebar({selectedtab,setSelectedtab}) {
  return (
    <>
      <div
  className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark"
  style={{ width: "280px", minHeight:'100vh' }}
>
  <a
    href="/"
    className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
  >
    <svg className="bi pe-none me-2" width="40" height="32">
      <use xlinkHref="#bootstrap" />
    </svg>
    <span className="fs-4">Sidebar</span>
  </a>
  <hr />
  <ul className="nav nav-pills flex-column mb-auto">
    <li className="nav-item" onClick={()=>setSelectedtab('Home')}>
      <a href="#" className={`nav-link text-white ${selectedtab==="Home" && "active"}`} aria-current="page">
        <svg className="bi pe-none me-2" width="16" height="16">
          <use xlinkHref="/" />
        </svg>
        Home
      </a>
    </li>
    <li onClick={()=>setSelectedtab('CreatePost')}>
      <a href="#" className={`nav-link text-white ${selectedtab==="CreatePost" && "active"}`} >
        <svg className="bi pe-none me-2" width="16" height="16">
          <use xlinkHref="/" />
        </svg>
        Create Post
      </a>
    </li>
  </ul>
  <hr />
  
</div>

    </>
  )
}
