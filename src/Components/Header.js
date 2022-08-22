import React from 'react'
import { MdManageAccounts } from 'react-icons/md';
const Header = ({children}) => {
    const menuItems = <>
      <li ><a className="hover:text-black ease-in duration-300">Home</a></li>
      <li ><a className="hover:text-black ease-in duration-300">Gallery</a></li>
      <li ><a className="hover:text-black ease-in duration-300">Medicalist Shop</a></li>
      <li ><a className="hover:text-black ease-in duration-300">Blog</a></li>
      <li ><a className="hover:text-black ease-in duration-300">About Us</a></li>
      <li ><a className="hover:text-black ease-in duration-300">Contact Us</a></li>
    </>
  return (
    <div class="drawer drawer-end ">
  <input id="my-drawer-3" type="checkbox" class="drawer-toggle" /> 
  <div class="drawer-content flex flex-col lg:px-64 relative top-2 rounded-lg ">
    {/* <!-- Navbar --> */}
    
    <div class=" navbar bg-primary rounded-lg  flex justify-center font-semibold ">
      <div class="flex-none lg:hidden">
        <label for="my-drawer-3" class="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 
   
      <div class="flex-none hidden lg:block text-black">
        <ul class="menu menu-horizontal text-center  text-white ">
          {menuItems}
          <button class="btn btn-ghost ml-24 bg-warning gap-2"> <span className="text-2xl"> <MdManageAccounts/></span> Make Appointment</button>
        </ul>
      </div>
    </div>
    {/* <!-- Page content here --> */}
    {children}
  </div> 
  <div class="drawer-side text-dark">
    <label for="my-drawer-3" class="drawer-overlay"></label> 
    <ul class="menu p-4 overflow-y-auto w-80 text-black font-bold bg-primary">
      {/* <!-- Sidebar content here --> */}
      {menuItems}
      
      
    </ul>
    
  </div>
</div>
  )
}

export default Header