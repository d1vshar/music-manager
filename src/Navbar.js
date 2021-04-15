import React from "react"

import {Link} from "react-router-dom"
function Navbar(){
    return(<div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <Link class="navbar-brand">PlayIt</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
         <Link class="nav-link active" aria-current="page" to={{pathname:"/home"}}>Home</Link>
        </li>
        <li class="nav-item">
         <Link class="nav-link" to={{pathname:"/Library"}}>Library</Link>
        </li>
        <li class="nav-item dropdown">
         <Link class="nav-link" to={{pathname:"/Albums"}} aria-expanded="false">
            Albums
          </Link>
        </li>
        <li class="nav-item">
         <Link class="nav-link" to={{pathname:"/Manage"}} aria-disabled="true">Manage</Link>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>);
}
export default Navbar;