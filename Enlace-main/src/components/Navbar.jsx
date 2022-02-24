import React from "react"

export default function Navbar(){
return(
  <nav className="container flex sticky top-0 align-baseline justify-between px-4 py-3  mx-auto border-solid border-2 border-border-nav[0.69] bg-bg-nav/[0.6] rounded-full">
  <div className="align-middle">
    <h3 className="text-2xl font-medium text-500 ">
      {/* <img  className="h-12 w-12 float-left pr-2" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="logo" />  */}Enlace</h3>
  </div>
  <div class="hidden space-x-12 lg:flex">
    <a href="">Events</a>
    <a href="">Sponsors</a>
    <a href="">FAQ</a>
    <a href="">Programs</a>
    <a href="">Contact</a>
  </div>
  <div class="flex lg:hidden">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  </div>
</nav>
)
}