import PropTypes from "prop-types";
import { PortableText, urlFor } from "../../utils/sanity";

function modulesSection(props) {
  return (
    <React.Fragment>
{/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
// ...
require('@tailwindcss/aspect-ratio'),
    ]
  }
  ```
*/}
<div className="bg-white">
  <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
    <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
      <div className="space-y-5 sm:space-y-4">
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Course Modules</h2>
        <p className="text-xl text-gray-500">Nulla quam felis, enim faucibus proin velit, ornare id pretium. Augue ultrices sed arcu condimentum vestibulum suspendisse. Volutpat eu faucibus vivamus eget bibendum cras.</p>
      </div>
      <div className="lg:col-span-2">
        <ul className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-8">
          <li>
            <div className="space-y-4">
              <div className="aspect-w-3 aspect-h-2">
                <img className="object-cover shadow-lg rounded-lg" src="https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixqx=BUggZxqitM&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" alt />
              </div>
              <div className="text-lg leading-6 font-medium space-y-1">
                <h3>Emma Dorsey</h3>
                <p className="text-indigo-600">Senior Front-end Developer</p>
              </div>
              <div className="text-lg">
                <p className="text-gray-500">Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.</p>
              </div>
              
            </div>
          </li>
          {/* More items... */}
        </ul>
      </div>
    </div>
  </div>
</div>
</React.Fragment>
  );
}

export default modulesSection;
