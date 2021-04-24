// https://tailwindui.com/components/marketing/sections/feature-sections#component-64ac58e032276db96bf343a8d4f332a8
import { urlFor } from "../../utils/sanity";
import Link from "next/link";
// function featureGridSection(props) {
//   return (
//     <React.Fragment>
//       {/* ALTERNATIVE FEATURE LIST  */}
//       <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
//         <div>
//           <h2 className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl custom_heading2 text-base font-semibold text-indigo-600 uppercase tracking-wide">
//             Everything you need
//           </h2>
//           <p className="mt-2 text-3xl font-extrabold text-gray-900">
//             All-in-one platform
//           </p>
//           <p className="mt-4 text-lg text-gray-500">
//             Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
//             Malesuada adipiscing sagittis vel nulla nec.
//           </p>
//         </div>
//         <div className="mt-12 lg:mt-0 lg:col-span-2">
//           <dl className="space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:grid-rows-4 sm:grid-flow-col sm:gap-x-6 sm:gap-y-10 lg:gap-x-8">
//             <div className="relative">
//               <dt>
//                 {/* Heroicon name: outline/check */}
//                 <svg
//                   className="absolute h-6 w-6 text-green-500"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   aria-hidden="true"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M5 13l4 4L19 7"
//                   />
//                 </svg>
//                 <p className="ml-9 text-lg leading-6 font-medium text-gray-900">
//                   Invite team members
//                 </p>
//               </dt>
//               <dd className="mt-2 ml-9 text-base text-gray-500">
//                 You can manage phone, email and chat conversations all from a
//                 single mailbox.
//               </dd>
//             </div>
//             <div className="relative">
//               <dt>
//                 {/* Heroicon name: outline/check */}
//                 <svg
//                   className="absolute h-6 w-6 text-green-500"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   aria-hidden="true"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M5 13l4 4L19 7"
//                   />
//                 </svg>
//                 <p className="ml-9 text-lg leading-6 font-medium text-gray-900">
//                   List view
//                 </p>
//               </dt>
//               <dd className="mt-2 ml-9 text-base text-gray-500">
//                 You can manage phone, email and chat conversations all from a
//                 single mailbox.
//               </dd>
//             </div>
//             <div className="relative">
//               <dt>
//                 {/* Heroicon name: outline/check */}
//                 <svg
//                   className="absolute h-6 w-6 text-green-500"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   aria-hidden="true"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M5 13l4 4L19 7"
//                   />
//                 </svg>
//                 <p className="ml-9 text-lg leading-6 font-medium text-gray-900">
//                   Keyboard shortcuts
//                 </p>
//               </dt>
//               <dd className="mt-2 ml-9 text-base text-gray-500">
//                 You can manage phone, email and chat conversations all from a
//                 single mailbox.
//               </dd>
//             </div>
//             <div className="relative">
//               <dt>
//                 {/* Heroicon name: outline/check */}
//                 <svg
//                   className="absolute h-6 w-6 text-green-500"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   aria-hidden="true"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M5 13l4 4L19 7"
//                   />
//                 </svg>
//                 <p className="ml-9 text-lg leading-6 font-medium text-gray-900">
//                   Calendars
//                 </p>
//               </dt>
//               <dd className="mt-2 ml-9 text-base text-gray-500">
//                 You can manage phone, email and chat conversations all from a
//                 single mailbox.
//               </dd>
//             </div>
//             <div className="relative">
//               <dt>
//                 {/* Heroicon name: outline/check */}
//                 <svg
//                   className="absolute h-6 w-6 text-green-500"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   aria-hidden="true"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M5 13l4 4L19 7"
//                   />
//                 </svg>
//                 <p className="ml-9 text-lg leading-6 font-medium text-gray-900">
//                   Notifications
//                 </p>
//               </dt>
//               <dd className="mt-2 ml-9 text-base text-gray-500">
//                 Find what you need with advanced filters, bulk actions, and
//                 quick views.
//               </dd>
//             </div>
//             <div className="relative">
//               <dt>
//                 {/* Heroicon name: outline/check */}
//                 <svg
//                   className="absolute h-6 w-6 text-green-500"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   aria-hidden="true"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M5 13l4 4L19 7"
//                   />
//                 </svg>
//                 <p className="ml-9 text-lg leading-6 font-medium text-gray-900">
//                   Boards
//                 </p>
//               </dt>
//               <dd className="mt-2 ml-9 text-base text-gray-500">
//                 Find what you need with advanced filters, bulk actions, and
//                 quick views.
//               </dd>
//             </div>
//             <div className="relative">
//               <dt>
//                 {/* Heroicon name: outline/check */}
//                 <svg
//                   className="absolute h-6 w-6 text-green-500"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   aria-hidden="true"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M5 13l4 4L19 7"
//                   />
//                 </svg>
//                 <p className="ml-9 text-lg leading-6 font-medium text-gray-900">
//                   Reporting
//                 </p>
//               </dt>
//               <dd className="mt-2 ml-9 text-base text-gray-500">
//                 Find what you need with advanced filters, bulk actions, and
//                 quick views.
//               </dd>
//             </div>
//             <div className="relative">
//               <dt>
//                 {/* Heroicon name: outline/check */}
//                 <svg
//                   className="absolute h-6 w-6 text-green-500"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   aria-hidden="true"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M5 13l4 4L19 7"
//                   />
//                 </svg>
//                 <p className="ml-9 text-lg leading-6 font-medium text-gray-900">
//                   Mobile app
//                 </p>
//               </dt>
//               <dd className="mt-2 ml-9 text-base text-gray-500">
//                 Find what you need with advanced filters, bulk actions, and
//                 quick views.
//               </dd>
//             </div>
//           </dl>
//         </div>
//       </div>

//       {/* ALTERNATING FEATURES */}
//       <div className="relative pt-16 pb-32 overflow-hidden">
//         <div className="relative">
//           <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
//             <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
//               <div>
//                 <div>
//                   <span className="h-12 w-12 rounded-md flex items-center justify-center ">
//                     {/* Heroicon name: outline/inbox */}
//                     <svg
//                       className="h-6 w-6 text-white"
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                       aria-hidden="true"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
//                       />
//                     </svg>
//                   </span>
//                 </div>
//                 <div className="mt-6">
//                   <h2 className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl custom_heading2 text-3xl font-extrabold tracking-tight text-gray-900">
//                     Stay on top of customer support
//                   </h2>
//                   <p className="mt-4 text-lg text-gray-500">
//                     Semper curabitur ullamcorper posuere nunc sed. Ornare
//                     iaculis bibendum malesuada faucibus lacinia porttitor.
//                     Pulvinar laoreet sagittis viverra duis. In venenatis sem
//                     arcu pretium pharetra at. Lectus viverra dui tellus ornare
//                     pharetra.
//                   </p>
//                   <div className="mt-6">
//                     <a
//                       href="#"
//                       className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white"
//                     >
//                       Get started
//                     </a>
//                   </div>
//                 </div>
//               </div>
//               <div className="mt-8 border-t border-gray-200 pt-6">
//                 <blockquote>
//                   <div>
//                     <p className="text-base text-gray-500">
//                       “Cras velit quis eros eget rhoncus lacus ultrices sed
//                       diam. Sit orci risus aenean curabitur donec aliquet. Mi
//                       venenatis in euismod ut.”
//                     </p>
//                   </div>
//                   <footer className="mt-3">
//                     <div className="flex items-center space-x-3">
//                       <div className="flex-shrink-0">
//                         <img
//                           className="h-6 w-6 rounded-full"
//                           src="https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
//                           alt
//                         />
//                       </div>
//                       <div className="text-base font-medium text-gray-700">
//                         Marcia Hill, Digital Marketing Manager
//                       </div>
//                     </div>
//                   </footer>
//                 </blockquote>
//               </div>
//             </div>
//             <div className="mt-12 sm:mt-16 lg:mt-0">
//               <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
//                 <img
//                   className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
//                   src="https://tailwindui.com/img/component-images/inbox-app-screenshot-1.jpg"
//                   alt="Inbox user interface"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="mt-24">
//           <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
//             <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
//               <div>
//                 <div>
//                   <span className="h-12 w-12 rounded-md flex items-center justify-center">
//                     {/* Heroicon name: outline/sparkles */}
//                     <svg
//                       className="h-6 w-6 text-white"
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                       aria-hidden="true"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
//                       />
//                     </svg>
//                   </span>
//                 </div>
//                 <div className="mt-6">
//                   <h2 className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl custom_heading2 text-3xl font-extrabold tracking-tight text-gray-900">
//                     Better understand your customers
//                   </h2>
//                   <p className="mt-4 text-lg text-gray-500">
//                     Semper curabitur ullamcorper posuere nunc sed. Ornare
//                     iaculis bibendum malesuada faucibus lacinia porttitor.
//                     Pulvinar laoreet sagittis viverra duis. In venenatis sem
//                     arcu pretium pharetra at. Lectus viverra dui tellus ornare
//                     pharetra.
//                   </p>
//                   <div className="mt-6">
//                     <a
//                       href="#"
//                       className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white"
//                     >
//                       Get started
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
//               <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
//                 <img
//                   className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
//                   src="https://tailwindui.com/img/component-images/inbox-app-screenshot-2.jpg"
//                   alt="Customer profile user interface"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* FEATURE GRID */}
//       {/* This example requires Tailwind CSS v2.0+ */}
//       <div className="py-12 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="lg:text-center">
//             <h2 className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl custom_heading2 text-base text-indigo-600 font-semibold tracking-wide uppercase">
//               Transactions
//             </h2>
//             <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
//               A better way to send money
//             </p>
//             <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
//               Lorem ipsum dolor sit amet consect adipisicing elit. Possimus
//               magnam voluptatum cupiditate veritatis in accusamus quisquam.
//             </p>
//           </div>
//           <div className="mt-10">
//             <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
//               <div className="relative">
//                 <dt>
//                   <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
//                     {/* Heroicon name: outline/globe-alt */}
//                     <svg
//                       className="h-6 w-6"
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                       aria-hidden="true"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
//                       />
//                     </svg>
//                   </div>
//                   <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
//                     Competitive exchange rates
//                   </p>
//                 </dt>
//                 <dd className="mt-2 ml-16 text-base text-gray-500">
//                   Lorem ipsum, dolor sit amet consectetur adipisicing elit.
//                   Maiores impedit perferendis suscipit eaque, iste dolor
//                   cupiditate blanditiis ratione.
//                 </dd>
//               </div>
//               <div className="relative">
//                 <dt>
//                   <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
//                     {/* Heroicon name: outline/scale */}
//                     <svg
//                       className="h-6 w-6"
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                       aria-hidden="true"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
//                       />
//                     </svg>
//                   </div>
//                   <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
//                     No hidden fees
//                   </p>
//                 </dt>
//                 <dd className="mt-2 ml-16 text-base text-gray-500">
//                   Lorem ipsum, dolor sit amet consectetur adipisicing elit.
//                   Maiores impedit perferendis suscipit eaque, iste dolor
//                   cupiditate blanditiis ratione.
//                 </dd>
//               </div>
//               <div className="relative">
//                 <dt>
//                   <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
//                     {/* Heroicon name: outline/lightning-bolt */}
//                     <svg
//                       className="h-6 w-6"
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                       aria-hidden="true"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M13 10V3L4 14h7v7l9-11h-7z"
//                       />
//                     </svg>
//                   </div>
//                   <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
//                     Transfers are instant
//                   </p>
//                 </dt>
//                 <dd className="mt-2 ml-16 text-base text-gray-500">
//                   Lorem ipsum, dolor sit amet consectetur adipisicing elit.
//                   Maiores impedit perferendis suscipit eaque, iste dolor
//                   cupiditate blanditiis ratione.
//                 </dd>
//               </div>
//               <div className="relative">
//                 <dt>
//                   <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
//                     {/* Heroicon name: outline/annotation */}
//                     <svg
//                       className="h-6 w-6"
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                       aria-hidden="true"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
//                       />
//                     </svg>
//                   </div>
//                   <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
//                     Mobile notifications
//                   </p>
//                 </dt>
//                 <dd className="mt-2 ml-16 text-base text-gray-500">
//                   Lorem ipsum, dolor sit amet consectetur adipisicing elit.
//                   Maiores impedit perferendis suscipit eaque, iste dolor
//                   cupiditate blanditiis ratione.
//                 </dd>
//               </div>
//             </dl>
//           </div>
//         </div>
//       </div>
//     </React.Fragment>
//   );
// }

// export default featureGridSection;

/* This example requires Tailwind CSS v2.0+ */
import { CheckIcon } from '@heroicons/react/outline'

const features = [
  {
    name: 'Invite team members',
    description: 'You can manage phone, email and chat conversations all from a single mailbox.',
  },
  { name: 'List view', description: 'You can manage phone, email and chat conversations all from a single mailbox.' },
  {
    name: 'Keyboard shortcuts',
    description: 'You can manage phone, email and chat conversations all from a single mailbox.',
  },
  { name: 'Calendars', description: 'You can manage phone, email and chat conversations all from a single mailbox.' },
  { name: 'Notifications', description: 'Find what you need with advanced filters, bulk actions, and quick views.' },
  { name: 'Boards', description: 'Find what you need with advanced filters, bulk actions, and quick views.' },
  { name: 'Reporting', description: 'Find what you need with advanced filters, bulk actions, and quick views.' },
  { name: 'Mobile app', description: 'Find what you need with advanced filters, bulk actions, and quick views.' },
]

export default function Example() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
        <div>
          <h2 className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl custom_heading2 text-base font-semibold text-indigo-600 uppercase tracking-wide">Everything you need</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900">All-in-one platform</p>
          <p className="mt-4 text-lg text-gray-500">
            Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla nec.
          </p>
        </div>
        <div className="mt-12 lg:mt-0 lg:col-span-2">
          <dl className="space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:grid-rows-4 sm:grid-flow-col sm:gap-x-6 sm:gap-y-10 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <CheckIcon className="absolute h-6 w-6 text-green-500" aria-hidden="true" />
                  <p className="ml-9 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-9 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
