import Error from "next/error";
import { useRouter } from "next/router";
import { getClient, usePreviewSubscription } from "../utils/sanity";
import { urlFor } from "../utils/sanity";
import RenderSections from "../components/RenderSections";
import Link from "next/link";
const query = `{
  'siteData': *[(_type == "siteConfig" && !(_id in path('drafts.**')))][0] {
	title,
  tagline,
  siteDescription,
  mainNavigation,
  footerNavigation,
  frontpage,
  logo
	},
  'mainContent': *[(_type == "page" && title=="Home" && !(_id in path('drafts.**')))][0] {
    'recentPosts': *[_type=="post" && !(_id in path('drafts.**'))]| order(publishedAt desc)[0..3],
    title,
    content[]{
      ...,
      team_members[]{
        author->{
        _id,
        _type,
        bio,
        headline,
        image,
        name,
        slug
        }
      }
    }
}
}`;

// main page component renders
function IndexPage(props) {
  const { pageData, preview } = props;
  const router = useRouter();
  // console.log("pageData =>", pageData);

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!pageData) {
    return <Error statusCode={404} />;
  }

  const { data: page } = usePreviewSubscription(query, {
    initialData: pageData,
    enabled: preview || router.query.preview !== null,
  });
  console.log("page var -> ", page);
  return (
    <>
      <div className="bg-white">
        <header class="text-gray-600 body-font">
          <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <Link href="/">
              <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 cursor-pointer">
                <img
                  src={urlFor(pageData.siteData.logo)
                    .auto("format")
                    .width(125)
                    // .height(400)
                    .fit("crop")
                    .quality(80)}
                  alt={
                    pageData.siteData.logo?.alt ||
                    `Photo of ${pageData.siteData.title}`
                  }
                />
              </a>
            </Link>
            <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
              <Link href="/">
                <a class="mr-5 hover:text-gray-900 cursor-pointer">Home</a>
              </Link>
              <Link href="/about">
                <a class="mr-5 hover:text-gray-900 cursor-pointer">About</a>
              </Link>
              <Link href="/blog">
                <a class="mr-5 hover:text-gray-900 cursor-pointer">Blog</a>
              </Link>
              {/* <Link href="/contact">
                <a class="mr-5 hover:text-gray-900 cursor-pointer">
                  Contact Us
                </a>
              </Link> */}
            </nav>
          </div>
        </header>


<div class="h-screen bg-gray-50 flex overflow-hidden">
  {/* <!-- Narrow sidebar --> */}
  <div class="hidden w-28 bg-indigo-700 overflow-y-auto md:block">
    <div class="w-full py-6 flex flex-col items-center">
      <div class="flex-shrink-0 flex items-center">
        <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white" alt="Workflow"></img>
      </div>
      <div class="flex-1 mt-6 w-full px-2 space-y-1">
        {/* <!-- Current: "bg-indigo-800 text-white", Default: "group text-indigo-100 hover:bg-indigo-800 hover:text-white" --> */}

        <a href="#" class="group text-indigo-100 hover:bg-indigo-800 hover:text-white w-full p-3 rounded-md flex flex-col items-center text-xs font-medium" aria-current="page">
          {/* <!-- Heroicon name: outline/home --> */}
          <svg class="text-indigo-300 group-hover:text-white h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          <span class="mt-2">Home</span>
        </a>

        <a href="#" class="group text-indigo-100 hover:bg-indigo-800 hover:text-white w-full p-3 rounded-md flex flex-col items-center text-xs font-medium" aria-current="page">
          {/* <!-- Heroicon name: outline/view-grid --> */}
          <svg class="text-indigo-300 group-hover:text-white h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
          </svg>
          <span class="mt-2">Module 1</span>
        </a>

        <a href="#" class="bg-indigo-800 text-white w-full p-3 rounded-md flex flex-col items-center text-xs font-medium" aria-current="page">
          {/* <!-- Current: "text-white", Default: "text-indigo-300 group-hover:text-white" -->
          <!-- Heroicon name: outline/photograph --> */}
          <svg class="text-white h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span class="mt-2">Module 2</span>
        </a>


        <a href="#" class="group text-indigo-100 hover:bg-indigo-800 hover:text-white w-full p-3 rounded-md flex flex-col items-center text-xs font-medium" aria-current="page">
          {/* <!-- Heroicon name: outline/collection --> */}
          <svg class="text-indigo-300 group-hover:text-white h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
          <span class="mt-2">MOdule 3</span>
        </a>

        <a href="#" class="group text-indigo-100 hover:bg-indigo-800 hover:text-white w-full p-3 rounded-md flex flex-col items-center text-xs font-medium" aria-current="page">
          {/* <!-- Heroicon name: outline/cog --> */}
          <svg class="text-indigo-300 group-hover:text-white h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span class="mt-2">Module 4</span>
        </a>
      </div>
    </div>
  </div>

  {/* <!-- Mobile menu -->
  <!-- Off-canvas menu for mobile, show/hide based on off-canvas menu state. --> */}
  <div class="md:hidden">
    <div class="fixed inset-0 z-40 flex">
      {/* <!--
        Off-canvas menu overlay, show/hide based on off-canvas menu state.

        Entering: "transition-opacity ease-linear duration-300"
          From: "opacity-0"
          To: "opacity-100"
        Leaving: "transition-opacity ease-linear duration-300"
          From: "opacity-100"
          To: "opacity-0"
      --> */}
      <div class="fixed inset-0" aria-hidden="true">
        <div class="absolute inset-0 bg-gray-600 opacity-75"></div>
      </div>
      {/* <!--
        Off-canvas menu, show/hide based on off-canvas menu state.

        Entering: "transition ease-in-out duration-300 transform"
          From: "-translate-x-full"
          To: "translate-x-0"
        Leaving: "transition ease-in-out duration-300 transform"
          From: "translate-x-0"
          To: "-translate-x-full"
      --> */}
      <div class="relative max-w-xs w-full bg-indigo-700 pt-5 pb-4 flex-1 flex flex-col">
        <div class="absolute top-1 right-0 -mr-14 p-1">
          <button class="h-12 w-12 rounded-full flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white">
            {/* <!-- Heroicon name: outline/x --> */}
            <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
            <span class="sr-only">Close sidebar</span>
          </button>
        </div>
        <div class="flex-shrink-0 px-4 flex items-center">
          <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white" alt="Workflow"></img>
        </div>
        <div class="mt-5 flex-1 h-0 px-2 overflow-y-auto">
          <nav class="h-full flex flex-col">
            <div class="space-y-1">
              {/* <!-- Current: "bg-indigo-800 text-white", Default: "group text-indigo-100 hover:bg-indigo-800 hover:text-white" --> */}

              <a href="#" class="group text-indigo-100 hover:bg-indigo-800 hover:text-white py-2 px-3 rounded-md flex items-center text-sm font-medium">
                {/* <!-- Heroicon name: outline/home --> */}
                <svg class="text-indigo-300 group-hover:text-white mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span>Home</span>
              </a>

              <a href="#" class="group text-indigo-100 hover:bg-indigo-800 hover:text-white py-2 px-3 rounded-md flex items-center text-sm font-medium">
                {/* <!-- Heroicon name: outline/view-grid --> */}
                <svg class="text-indigo-300 group-hover:text-white mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
                <span>All Files</span>
              </a>

              <a href="#" class="bg-indigo-800 text-white py-2 px-3 rounded-md flex items-center text-sm font-medium" aria-current="page">
                {/* <!-- Current: "text-white", Default: "text-indigo-300 group-hover:text-white" --> */}
                {/* <!-- Heroicon name: outline/photograph --> */}
                <svg class="text-white mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>Videos</span>
              </a>

              <a href="#" class="group text-indigo-100 hover:bg-indigo-800 hover:text-white py-2 px-3 rounded-md flex items-center text-sm font-medium">
                {/* <!-- Heroicon name: outline/user-group --> */}
                <svg class="text-indigo-300 group-hover:text-white mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span>Shared</span>
              </a>

              <a href="#" class="group text-indigo-100 hover:bg-indigo-800 hover:text-white py-2 px-3 rounded-md flex items-center text-sm font-medium">
                {/* <!-- Heroicon name: outline/collection --> */}
                <svg class="text-indigo-300 group-hover:text-white mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                <span>Albums</span>
              </a>

              <a href="#" class="group text-indigo-100 hover:bg-indigo-800 hover:text-white py-2 px-3 rounded-md flex items-center text-sm font-medium">
                {/* <!-- Heroicon name: outline/cog --> */}
                <svg class="text-indigo-300 group-hover:text-white mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Settings</span>
              </a>
            </div>
          </nav>
        </div>
      </div>
      <div class="flex-shrink-0 w-14" aria-hidden="true">
        {/* <!-- Dummy element to force sidebar to shrink to fit close icon --> */}
      </div>
    </div>
  </div>

  {/* <!-- Content area --> */}
  <div class="flex-1 flex flex-col overflow-hidden">
    <header class="w-full">
      <div class="relative z-10 flex-shrink-0 h-16 bg-white border-b border-gray-200 shadow-sm flex">
        <button class="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden">
          <span class="sr-only">Open sidebar</span>
          {/* <!-- Heroicon name: outline/menu-alt-2 --> */}
          <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
          </svg>
        </button>
        <div class="flex-1 flex justify-between px-4 sm:px-6">
          <div class="flex-1 flex">
            <form class="w-full flex md:ml-0" action="#" method="GET">
              <label for="search_field" class="sr-only">Search all files</label>
              <div class="relative w-full text-gray-400 focus-within:text-gray-600">
                <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center">
                  {/* <!-- Heroicon name: solid/search --> */}
                  <svg class="flex-shrink-0 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                  </svg>
                </div>
                <input name="search_field" id="search_field" class="h-full w-full border-transparent py-2 pl-8 pr-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-transparent focus:placeholder-gray-400 sm:hidden" placeholder="Search" type="search"/>
                <input name="search_field" id="search_field" class="hidden h-full w-full border-transparent py-2 pl-8 pr-3 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-transparent focus:placeholder-gray-400 sm:block" placeholder="Search all files" type="search"/>
              </div>
            </form>
          </div>
          <div class="ml-2 flex items-center space-x-4 sm:ml-6 sm:space-x-6">
            {/* <!-- Profile dropdown --> */}
            <div class="relative flex-shrink-0">
              <div>
                <button type="button" class="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="user-menu" aria-expanded="false" aria-haspopup="true">
                  <span class="sr-only">Open user menu</span>
                  <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80" alt=""></img>
                </button>
              </div>

              {/* <!--
                Dropdown menu, show/hide based on menu state.

                Entering: "transition ease-out duration-100"
                  From: "transform opacity-0 scale-95"
                  To: "transform opacity-100 scale-100"
                Leaving: "transition ease-in duration-75"
                  From: "transform opacity-100 scale-100"
                  To: "transform opacity-0 scale-95"
              --> */}
              <div class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Your profile</a>

                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Sign out</a>
              </div>
            </div>

            <button type="button" class="flex bg-indigo-600 p-1 rounded-full items-center justify-center text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              {/* <!-- Heroicon name: outline/plus --> */}
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              <span class="sr-only">Add file</span>
            </button>
          </div>
        </div>
      </div>
    </header>

    {/* <!-- Main content --> */}
    <div class="flex-1 flex items-stretch overflow-hidden">
      <main class="flex-1 overflow-y-auto">
        <div class="pt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex">
            <h1 class="flex-1 text-2xl font-bold text-gray-900">Videos</h1>
            <div class="ml-6 bg-gray-100 p-0.5 rounded-lg flex items-center sm:hidden">
              <button type="button" class="p-1.5 rounded-md text-gray-400 hover:bg-white hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                {/* <!-- Heroicon name: solid/view-list --> */}
                <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                </svg>
                <span class="sr-only">Use list view</span>
              </button>
              <button type="button" class="ml-0.5 bg-white p-1.5 rounded-md shadow-sm text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                {/* <!-- Heroicon name: solid/view-grid --> */}
                <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
                <span class="sr-only">Use grid view</span>
              </button>
            </div>
          </div>

          {/* <!-- Tabs --> */}
          <div class="mt-3 sm:mt-2">
            
            
          </div>

          {/* <!-- Gallery --> */}
          <section class="mt-8 pb-16" aria-labelledby="gallery-heading">
            <h2 id="gallery-heading" class="sr-only">Recently viewed</h2>
            <ul role="list" class="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {/* <!-- Current: "ring-2 ring-offset-2 ring-indigo-500", Default: "focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500" --> */}

              <li class="relative">
                <div class="ring-2 ring-offset-2 ring-indigo-500 group block w-full aspect-w-10 aspect-h-7 rounded-lg overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80" alt="" class="object-cover pointer-events-none"></img>
                  <button type="button" class="absolute inset-0">
                    <span class="sr-only">View details for IMG_4985.HEIC</span>
                  </button>
                </div>
                <p class="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">IMG_4985.HEIC</p>
                <p class="block text-sm font-medium text-gray-500 pointer-events-none">3.9 MB</p>
              </li>

              <li class="relative">
                <div class="focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500 group block w-full aspect-w-10 aspect-h-7 rounded-lg overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1614926857083-7be149266cda?ixlib=rb-1.2.1&ixqx=BUggZxqitM&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=512&q=80" alt="" class="group-hover:opacity-75 object-cover pointer-events-none"></img>
                  <button type="button" class="absolute inset-0">
                    <span class="sr-only">View details for IMG_5214.HEIC</span>
                  </button>
                </div>
                <p class="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">IMG_5214.HEIC</p>
                <p class="block text-sm font-medium text-gray-500 pointer-events-none">4 MB</p>
              </li>

              <li class="relative">
                <div class="focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500 group block w-full aspect-w-10 aspect-h-7 rounded-lg overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1614705827065-62c3dc488f40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80" alt="" class="group-hover:opacity-75 object-cover pointer-events-none"></img>
                  <button type="button" class="absolute inset-0">
                    <span class="sr-only">View details for IMG_3851.HEIC</span>
                  </button>
                </div>
                <p class="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">IMG_3851.HEIC</p>
                <p class="block text-sm font-medium text-gray-500 pointer-events-none">3.8 MB</p>
              </li>

              <li class="relative">
                <div class="focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500 group block w-full aspect-w-10 aspect-h-7 rounded-lg overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80" alt="" class="group-hover:opacity-75 object-cover pointer-events-none"></img>
                  <button type="button" class="absolute inset-0">
                    <span class="sr-only">View details for IMG_4278.HEIC</span>
                  </button>
                </div>
                <p class="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">IMG_4278.HEIC</p>
                <p class="block text-sm font-medium text-gray-500 pointer-events-none">4.1 MB</p>
              </li>

              <li class="relative">
                <div class="focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500 group block w-full aspect-w-10 aspect-h-7 rounded-lg overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1586348943529-beaae6c28db9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80" alt="" class="group-hover:opacity-75 object-cover pointer-events-none"></img>
                  <button type="button" class="absolute inset-0">
                    <span class="sr-only">View details for IMG_6842.HEIC</span>
                  </button>
                </div>
                <p class="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">IMG_6842.HEIC</p>
                <p class="block text-sm font-medium text-gray-500 pointer-events-none">4 MB</p>
              </li>

              <li class="relative">
                <div class="focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500 group block w-full aspect-w-10 aspect-h-7 rounded-lg overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-1.2.1&ixqx=BUggZxqitM&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=512&q=80" alt="" class="group-hover:opacity-75 object-cover pointer-events-none"></img>
                  <button type="button" class="absolute inset-0">
                    <span class="sr-only">View details for IMG_3284.HEIC</span>
                  </button>
                </div>
                <p class="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">IMG_3284.HEIC</p>
                <p class="block text-sm font-medium text-gray-500 pointer-events-none">3.9 MB</p>
              </li>

              <li class="relative">
                <div class="focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500 group block w-full aspect-w-10 aspect-h-7 rounded-lg overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80" alt="" class="group-hover:opacity-75 object-cover pointer-events-none"></img>
                  <button type="button" class="absolute inset-0">
                    <span class="sr-only">View details for IMG_4841.HEIC</span>
                  </button>
                </div>
                <p class="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">IMG_4841.HEIC</p>
                <p class="block text-sm font-medium text-gray-500 pointer-events-none">3.8 MB</p>
              </li>

              <li class="relative">
                <div class="focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500 group block w-full aspect-w-10 aspect-h-7 rounded-lg overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1492724724894-7464c27d0ceb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80" alt="" class="group-hover:opacity-75 object-cover pointer-events-none"></img>
                  <button type="button" class="absolute inset-0">
                    <span class="sr-only">View details for IMG_5644.HEIC</span>
                  </button>
                </div>
                <p class="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">IMG_5644.HEIC</p>
                <p class="block text-sm font-medium text-gray-500 pointer-events-none">4 MB</p>
              </li>

              <li class="relative">
                <div class="focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500 group block w-full aspect-w-10 aspect-h-7 rounded-lg overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1513682322455-ea8b2d81d418?ixlib=rb-1.2.1&ixqx=BUggZxqitM&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=512&q=80" alt="" class="group-hover:opacity-75 object-cover pointer-events-none"></img>
                  <button type="button" class="absolute inset-0">
                    <span class="sr-only">View details for IMG_4945.HEIC</span>
                  </button>
                </div>
                <p class="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">IMG_4945.HEIC</p>
                <p class="block text-sm font-medium text-gray-500 pointer-events-none">4 MB</p>
              </li>

              <li class="relative">
                <div class="focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500 group block w-full aspect-w-10 aspect-h-7 rounded-lg overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1463107971871-fbac9ddb920f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80" alt="" class="group-hover:opacity-75 object-cover pointer-events-none"></img>
                  <button type="button" class="absolute inset-0">
                    <span class="sr-only">View details for IMG_2156.HEIC</span>
                  </button>
                </div>
                <p class="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">IMG_2156.HEIC</p>
                <p class="block text-sm font-medium text-gray-500 pointer-events-none">4.1 MB</p>
              </li>

              <li class="relative">
                <div class="focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500 group block w-full aspect-w-10 aspect-h-7 rounded-lg overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1552461871-ce4f9fb3b438?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80" alt="" class="group-hover:opacity-75 object-cover pointer-events-none"></img>
                  <button type="button" class="absolute inset-0">
                    <span class="sr-only">View details for IMG_6945.HEIC</span>
                  </button>
                </div>
                <p class="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">IMG_6945.HEIC</p>
                <p class="block text-sm font-medium text-gray-500 pointer-events-none">4.2 MB</p>
              </li>

              <li class="relative">
                <div class="focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500 group block w-full aspect-w-10 aspect-h-7 rounded-lg overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1446292532430-3e76f6ab6444?ixlib=rb-1.2.1&ixqx=BUggZxqitM&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=512&q=80" alt="" class="group-hover:opacity-75 object-cover pointer-events-none"></img>
                  <button type="button" class="absolute inset-0">
                    <span class="sr-only">View details for IMG_1846.HEIC</span>
                  </button>
                </div>
                <p class="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">IMG_1846.HEIC</p>
                <p class="block text-sm font-medium text-gray-500 pointer-events-none">3.6 MB</p>
              </li>

              <li class="relative">
                <div class="focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500 group block w-full aspect-w-10 aspect-h-7 rounded-lg overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1508669232496-137b159c1cdb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80" alt="" class="group-hover:opacity-75 object-cover pointer-events-none"/>
                  <button type="button" class="absolute inset-0">
                    <span class="sr-only">View details for IMG_4769.HEIC</span>
                  </button>
                </div>
                <p class="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">IMG_4769.HEIC</p>
                <p class="block text-sm font-medium text-gray-500 pointer-events-none">3.3 MB</p>
              </li>

              <li class="relative">
                <div class="focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500 group block w-full aspect-w-10 aspect-h-7 rounded-lg overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1431512284068-4c4002298068?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80" alt="" class="group-hover:opacity-75 object-cover pointer-events-none"/>
                  <button type="button" class="absolute inset-0">
                    <span class="sr-only">View details for IMG_9513.HEIC</span>
                  </button>
                </div>
                <p class="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">IMG_9513.HEIC</p>
                <p class="block text-sm font-medium text-gray-500 pointer-events-none">4 MB</p>
              </li>

              <li class="relative">
                <div class="focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500 group block w-full aspect-w-10 aspect-h-7 rounded-lg overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1581320546160-0078de357255?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80" alt="" class="group-hover:opacity-75 object-cover pointer-events-none"/>
                  <button type="button" class="absolute inset-0">
                    <span class="sr-only">View details for IMG_8451.HEIC</span>
                  </button>
                </div>
                <p class="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">IMG_8451.HEIC</p>
                <p class="block text-sm font-medium text-gray-500 pointer-events-none">3.4 MB</p>
              </li>

              <li class="relative">
                <div class="focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500 group block w-full aspect-w-10 aspect-h-7 rounded-lg overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1541956628-68d338ae09d5?ixlib=rb-1.2.1&ixqx=BUggZxqitM&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=512&q=80" alt="" class="group-hover:opacity-75 object-cover pointer-events-none"/>
                  <button type="button" class="absolute inset-0">
                    <span class="sr-only">View details for IMG_1298.HEIC</span>
                  </button>
                </div>
                <p class="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">IMG_1298.HEIC</p>
                <p class="block text-sm font-medium text-gray-500 pointer-events-none">4.1 MB</p>
              </li>

              <li class="relative">
                <div class="focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500 group block w-full aspect-w-10 aspect-h-7 rounded-lg overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1505429155379-441cc7a574f7?ixlib=rb-1.2.1&ixqx=BUggZxqitM&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=512&q=80" alt="" class="group-hover:opacity-75 object-cover pointer-events-none"/>
                  <button type="button" class="absolute inset-0">
                    <span class="sr-only">View details for IMG_6222.HEIC</span>
                  </button>
                </div>
                <p class="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">IMG_6222.HEIC</p>
                <p class="block text-sm font-medium text-gray-500 pointer-events-none">4 MB</p>
              </li>

              <li class="relative">
                <div class="focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500 group block w-full aspect-w-10 aspect-h-7 rounded-lg overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1582029133746-96031e5c8d00?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80" alt="" class="group-hover:opacity-75 object-cover pointer-events-none" />
                  <button type="button" class="absolute inset-0">
                    <span class="sr-only">View details for IMG_7451.HEIC</span>
                  </button>
                </div>
                <p class="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">IMG_7451.HEIC</p>
                <p class="block text-sm font-medium text-gray-500 pointer-events-none">3.8 MB</p>
              </li>

              <li class="relative">
                <div class="focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500 group block w-full aspect-w-10 aspect-h-7 rounded-lg overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1575868053350-9fd87f68f984?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80" alt="" class="group-hover:opacity-75 object-cover pointer-events-none" />
                  <button type="button" class="absolute inset-0">
                    <span class="sr-only">View details for IMG_9815.HEIC</span>
                  </button>
                </div>
                <p class="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">IMG_9815.HEIC</p>
                <p class="block text-sm font-medium text-gray-500 pointer-events-none">3.9 MB</p>
              </li>

              <li class="relative">
                <div class="focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500 group block w-full aspect-w-10 aspect-h-7 rounded-lg overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1588391051471-1a5283d5a625?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80" alt="" class="group-hover:opacity-75 object-cover pointer-events-none" />
                  <button type="button" class="absolute inset-0">
                    <span class="sr-only">View details for IMG_1025.HEIC</span>
                  </button>
                </div>
                <p class="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">IMG_1025.HEIC</p>
                <p class="block text-sm font-medium text-gray-500 pointer-events-none">3.9 MB</p>
              </li>

              <li class="relative">
                <div class="focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500 group block w-full aspect-w-10 aspect-h-7 rounded-lg overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1575314146619-ec67b6213351?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80" alt="" class="group-hover:opacity-75 object-cover pointer-events-none" />
                  <button type="button" class="absolute inset-0">
                    <span class="sr-only">View details for IMG_6010.HEIC</span>
                  </button>
                </div>
                <p class="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">IMG_6010.HEIC</p>
                <p class="block text-sm font-medium text-gray-500 pointer-events-none">3.1 MB</p>
              </li>

              <li class="relative">
                <div class="focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500 group block w-full aspect-w-10 aspect-h-7 rounded-lg overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1579874107960-e602329ef20a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80" alt="" class="group-hover:opacity-75 object-cover pointer-events-none" />
                  <button type="button" class="absolute inset-0">
                    <span class="sr-only">View details for IMG_1004.HEIC</span>
                  </button>
                </div>
                <p class="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">IMG_1004.HEIC</p>
                <p class="block text-sm font-medium text-gray-500 pointer-events-none">4.4 MB</p>
              </li>

              <li class="relative">
                <div class="focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500 group block w-full aspect-w-10 aspect-h-7 rounded-lg overflow-hidden">
                  <img src="https://images.unsplash.com/flagged/photo-1551385229-2925ed4eb53d?ixlib=rb-1.2.1&ixqx=BUggZxqitM&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=512&q=80" alt="" class="group-hover:opacity-75 object-cover pointer-events-none" />
                  <button type="button" class="absolute inset-0">
                    <span class="sr-only">View details for IMG_8499.HEIC</span>
                  </button>
                </div>
                <p class="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">IMG_8499.HEIC</p>
                <p class="block text-sm font-medium text-gray-500 pointer-events-none">3.4 MB</p>
              </li>

              <li class="relative">
                <div class="focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500 group block w-full aspect-w-10 aspect-h-7 rounded-lg overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1498575637358-821023f27355?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80" alt="" class="group-hover:opacity-75 object-cover pointer-events-none" />
                  <button type="button" class="absolute inset-0">
                    <span class="sr-only">View details for IMG_2154.HEIC</span>
                  </button>
                </div>
                <p class="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">IMG_2154.HEIC</p>
                <p class="block text-sm font-medium text-gray-500 pointer-events-none">3.8 MB</p>
              </li>
            </ul>
          </section>
        </div>
      </main>

     
    </div>
  </div>
</div>


        <footer class="text-gray-600 body-font">
          <div class="bg-gray-100 border-t border-gray-200">
            <div class="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
              <Link href="/">
                <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 cursor-pointer">
                  <img
                    src={urlFor(pageData.siteData.logo)
                      .auto("format")
                      .width(80)
                      // .height(400)
                      .fit("crop")
                      .quality(80)}
                    alt={
                      pageData.siteData.logo?.alt ||
                      `Photo of ${pageData.siteData.title}`
                    }
                  />
                </a>
              </Link>

              <p class="text-sm text-gray-600 sm:ml-6 sm:mt-0 mt-4">
                © 2021 Lasvit Tennis. All rights reserved.
              </p>

              <span class="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-500 text-sm">
                <Link href="/privacy">
                  <a
                    // href="/privacy"
                    rel="noopener noreferrer"
                    class="text-gray-600 ml-1"
                    // target="_blank"
                  >
                    Privacy Policy
                  </a>
                </Link>{" "}
                //
                <Link href="/terms">
                  <a
                    // href="https://lasvittennis.com/terms"
                    rel="noopener noreferrer"
                    class="text-gray-600 ml-1"
                    // target="_blank"
                  >
                    Website Terms
                  </a>
                </Link>
              </span>
            </div>
          </div>
        </footer>
      </div>



    </>
  );
}

export async function getStaticProps({ params = {}, preview = false }) {
  var pageData = await getClient(preview).fetch(query);

  return {
    props: {
      preview,
      pageData,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every second
    revalidate: 1, // In seconds
  };
}

export default IndexPage;
