import React from 'react'
import logo from '../../src/assets/images/hospital-logo.png'
const Header = () => {
  return (
    <div class="drawer drawer-end">
  <input id="my-drawer-3" type="checkbox" class="drawer-toggle" /> 
  <div class="drawer-content flex flex-col">
    {/* <!-- Navbar --> */}
    
    <div class="w-full navbar bg-primary ">
    <div class="flex-1 px-2 mx-2"><img src={logo} alt="" /></div>
      <div class="flex-none lg:hidden">
        <label for="my-drawer-3" class="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 
   
      <div class="flex-none hidden lg:block text-black">
        <ul class="menu menu-horizontal ">
          {/* <!-- Navbar menu content here --> */}
          <li><a>Navbar Item 1</a></li>
          <li><a>Navbar Item 2</a></li>
        </ul>
      </div>
    </div>
    {/* <!-- Page content here --> */}
    Content
  </div> 
  <div class="drawer-side text-dark">
    <label for="my-drawer-3" class="drawer-overlay"></label> 
    <ul class="menu p-4 overflow-y-auto w-80 text-black font-bold bg-primary">
      {/* <!-- Sidebar content here --> */}
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
      
    </ul>
    
  </div>
</div>
  )
}

export default Header