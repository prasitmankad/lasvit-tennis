import React, { useState, Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  AnnotationIcon,
  ChatAlt2Icon,
  ChatAltIcon,
  DocumentReportIcon,
  HeartIcon,
  InboxIcon,
  MenuIcon,
  PencilAltIcon,
  QuestionMarkCircleIcon,
  ReplyIcon,
  SparklesIcon,
  TrashIcon,
  UsersIcon,
  XIcon,
} from "@heroicons/react/outline";

import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
} from "@heroicons/react/outline";
import { CheckIcon, ChevronDownIcon, MinusIcon } from "@heroicons/react/solid";

const solutions = [
  {
    name: "Analytics",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "#",
    icon: ChartBarIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "#",
    icon: CursorClickIcon,
  },
  {
    name: "Security",
    description: "Your customers' data will be safe and secure.",
    href: "#",
    icon: ShieldCheckIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools that you're already using.",
    href: "#",
    icon: ViewGridIcon,
  },
  {
    name: "Automations",
    description:
      "Build strategic funnels that will drive your customers to convert",
    href: "#",
    icon: RefreshIcon,
  },
];
const tiers = [
  {
    name: "Basic",
    href: "#",
    priceMonthly: 9,
    description: "Quis suspendisse ut fermentum neque vivamus non tellus.",
  },
  {
    name: "Essential",
    href: "#",
    priceMonthly: 29,
    description: "Quis eleifend a tincidunt pellentesque. A tempor in sed.",
  },
  {
    name: "Premium",
    href: "#",
    priceMonthly: 59,
    description:
      "Orci volutpat ut sed sed neque, dui eget. Quis tristique non.",
  },
];
const sections = [
  {
    name: "Features",
    features: [
      {
        name: "Molestie lobortis massa.",
        tiers: { Basic: true, Essential: true, Premium: true },
      },
      {
        name: "Urna purus felis.",
        tiers: { Basic: true, Essential: true, Premium: true },
      },
      {
        name: "Tellus pulvinar sit dictum.",
        tiers: { Essential: true, Premium: true },
      },
      {
        name: "Convallis.",
        tiers: { Essential: "Up to 20 users", Premium: "Up to 50 users" },
      },
    ],
  },
  {
    name: "Reporting",
    features: [
      {
        name: "Adipiscing.",
        tiers: { Basic: true, Essential: true, Premium: true },
      },
      {
        name: "Eget risus integer.",
        tiers: { Essential: true, Premium: true },
      },
      { name: "Gravida leo urna velit.", tiers: { Premium: true } },
      {
        name: "Elementum ut dapibus mi feugiat cras nisl.",
        tiers: { Premium: true },
      },
    ],
  },
  {
    name: "Support",
    features: [
      {
        name: "Sit dignissim.",
        tiers: { Basic: true, Essential: true, Premium: true },
      },
      { name: "Congue at nibh et.", tiers: { Essential: true, Premium: true } },
      {
        name: "Volutpat feugiat mattis.",
        tiers: { Essential: true, Premium: true },
      },
      {
        name: "Tristique pellentesque ornare diam sapien.",
        tiers: { Premium: true },
      },
    ],
  },
];
const faqs = [
  {
    id: 1,
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 2,
    question: "How do you make holy water?",
    answer:
      "You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 3,
    question: "Why do you never see elephants hiding in trees?",
    answer:
      "Because they're so good at it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 4,
    question: "What do you call someone with no body and no nose?",
    answer:
      "Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 5,
    question: "Why can't you hear a pterodactyl go to the bathroom?",
    answer:
      "Because the pee is silent. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 6,
    question: "Why did the invisible man turn down the job offer?",
    answer:
      "He couldn't see himself doing it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
];
const footerNavigation = {
  solutions: [
    { name: "Marketing", href: "#" },
    { name: "Analytics", href: "#" },
    { name: "Commerce", href: "#" },
    { name: "Insights", href: "#" },
  ],
  support: [
    { name: "Pricing", href: "#" },
    { name: "Documentation", href: "#" },
    { name: "Guides", href: "#" },
    { name: "API Status", href: "#" },
  ],
  company: [
    { name: "About", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Jobs", href: "#" },
    { name: "Press", href: "#" },
    { name: "Partners", href: "#" },
  ],
  legal: [
    { name: "Claim", href: "#" },
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
  ],
  social: [
    {
      name: "Facebook",
      href: "#",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "#",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Twitter",
      href: "#",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      href: "#",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Dribbble",
      href: "#",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
};

const features = [
  {
    name: "Unlimited Inboxes",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: InboxIcon,
  },
  {
    name: "Manage Team Members",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: UsersIcon,
  },
  {
    name: "Spam Report",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: TrashIcon,
  },
  {
    name: "Compose in Markdown",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: PencilAltIcon,
  },
  {
    name: "Team Reporting",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: DocumentReportIcon,
  },
  {
    name: "Saved Replies",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: ReplyIcon,
  },
  {
    name: "Email Commenting",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: ChatAltIcon,
  },
  {
    name: "Connect with Customers",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: HeartIcon,
  },
];
const metrics = [
  {
    id: 1,
    stat: "8K+",
    emphasis: "Companies",
    rest: "use laoreet amet lacus nibh integer quis.",
  },
  {
    id: 2,
    stat: "25K+",
    emphasis: "Countries around the globe",
    rest: "lacus nibh integer quis.",
  },
  {
    id: 3,
    stat: "98%",
    emphasis: "Customer satisfaction",
    rest: "laoreet amet lacus nibh integer quis.",
  },
  {
    id: 4,
    stat: "12M+",
    emphasis: "Issues resolved",
    rest: "lacus nibh integer quis.",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="bg-white">

<div>
  {/* component */}
  <section className="min-h-screen flex items-stretch text-white ">
    <div className="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center" style={{"background-image":"url(https://images.unsplash.com/photo-1577495508048-b635879837f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80)"}}>
      <div className="absolute bg-black opacity-60 inset-0 z-0" />
      <div className="w-full px-24 z-10">
        <h1 className="text-5xl font-bold text-left tracking-wide">Keep it special</h1>
        <p className="text-3xl my-4">Capture your personal memory in unique way, anywhere.</p>
      </div>
      <div className="bottom-0 absolute p-4 text-center right-0 left-0 flex justify-center space-x-4">
        <span>
          <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
        </span>
        <span>
          <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
        </span>
        <span>
          <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
        </span>
      </div>
    </div>
    <div className="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0" style={{"background-color":"#161616"}}>
      <div className="absolute lg:hidden z-10 inset-0 bg-gray-500 bg-no-repeat bg-cover items-center" style={{"background-image":"url(https://images.unsplash.com/photo-1577495508048-b635879837f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80)"}}>
        <div className="absolute bg-black opacity-60 inset-0 z-0" />
      </div>
      <div className="w-full py-6 z-20">
        <h1 className="my-6">
          <svg viewBox="0 0 247 31" className="w-auto h-7 sm:h-8 inline-flex"><path fill="rgba(99,102,241, .8)" fillRule="evenodd" clipRule="evenodd" d="M25.517 0C18.712 0 14.46 3.382 12.758 10.146c2.552-3.382 5.529-4.65 8.931-3.805 1.941.482 3.329 1.882 4.864 3.432 2.502 2.524 5.398 5.445 11.722 5.445 6.804 0 11.057-3.382 12.758-10.145-2.551 3.382-5.528 4.65-8.93 3.804-1.942-.482-3.33-1.882-4.865-3.431C34.736 2.92 31.841 0 25.517 0zM12.758 15.218C5.954 15.218 1.701 18.6 0 25.364c2.552-3.382 5.529-4.65 8.93-3.805 1.942.482 3.33 1.882 4.865 3.432 2.502 2.524 5.397 5.445 11.722 5.445 6.804 0 11.057-3.381 12.758-10.145-2.552 3.382-5.529 4.65-8.931 3.805-1.941-.483-3.329-1.883-4.864-3.432-2.502-2.524-5.398-5.446-11.722-5.446z" /><path fill="#fff" fillRule="evenodd" clipRule="evenodd" d="M76.546 12.825h-4.453v8.567c0 2.285 1.508 2.249 4.453 2.106v3.463c-5.962.714-8.332-.928-8.332-5.569v-8.567H64.91V9.112h3.304V4.318l3.879-1.143v5.937h4.453v3.713zM93.52 9.112h3.878v17.849h-3.878v-2.57c-1.365 1.891-3.484 3.034-6.285 3.034-4.884 0-8.942-4.105-8.942-9.389 0-5.318 4.058-9.388 8.942-9.388 2.801 0 4.92 1.142 6.285 2.999V9.112zm-5.674 14.636c3.232 0 5.674-2.392 5.674-5.712s-2.442-5.711-5.674-5.711-5.674 2.392-5.674 5.711c0 3.32 2.442 5.712 5.674 5.712zm16.016-17.313c-1.364 0-2.477-1.142-2.477-2.463a2.475 2.475 0 012.477-2.463 2.475 2.475 0 012.478 2.463c0 1.32-1.113 2.463-2.478 2.463zm-1.939 20.526V9.112h3.879v17.849h-3.879zm8.368 0V.9h3.878v26.06h-3.878zm29.053-17.849h4.094l-5.638 17.849h-3.807l-3.735-12.03-3.771 12.03h-3.806l-5.639-17.849h4.094l3.484 12.315 3.771-12.315h3.699l3.734 12.315 3.52-12.315zm8.906-2.677c-1.365 0-2.478-1.142-2.478-2.463a2.475 2.475 0 012.478-2.463 2.475 2.475 0 012.478 2.463c0 1.32-1.113 2.463-2.478 2.463zm-1.939 20.526V9.112h3.878v17.849h-3.878zm17.812-18.313c4.022 0 6.895 2.713 6.895 7.354V26.96h-3.878V16.394c0-2.713-1.58-4.14-4.022-4.14-2.55 0-4.561 1.499-4.561 5.14v9.567h-3.879V9.112h3.879v2.285c1.185-1.856 3.124-2.749 5.566-2.749zm25.282-6.675h3.879V26.96h-3.879v-2.57c-1.364 1.892-3.483 3.034-6.284 3.034-4.884 0-8.942-4.105-8.942-9.389 0-5.318 4.058-9.388 8.942-9.388 2.801 0 4.92 1.142 6.284 2.999V1.973zm-5.674 21.775c3.232 0 5.674-2.392 5.674-5.712s-2.442-5.711-5.674-5.711-5.674 2.392-5.674 5.711c0 3.32 2.442 5.712 5.674 5.712zm22.553 3.677c-5.423 0-9.481-4.105-9.481-9.389 0-5.318 4.058-9.388 9.481-9.388 3.519 0 6.572 1.82 8.008 4.605l-3.34 1.928c-.79-1.678-2.549-2.749-4.704-2.749-3.16 0-5.566 2.392-5.566 5.604 0 3.213 2.406 5.605 5.566 5.605 2.155 0 3.914-1.107 4.776-2.749l3.34 1.892c-1.508 2.82-4.561 4.64-8.08 4.64zm14.472-13.387c0 3.249 9.661 1.285 9.661 7.89 0 3.57-3.125 5.497-7.003 5.497-3.591 0-6.177-1.607-7.326-4.177l3.34-1.927c.574 1.606 2.011 2.57 3.986 2.57 1.724 0 3.052-.571 3.052-2 0-3.176-9.66-1.391-9.66-7.781 0-3.356 2.909-5.462 6.572-5.462 2.945 0 5.387 1.357 6.644 3.713l-3.268 1.82c-.647-1.392-1.904-2.035-3.376-2.035-1.401 0-2.622.607-2.622 1.892zm16.556 0c0 3.249 9.66 1.285 9.66 7.89 0 3.57-3.124 5.497-7.003 5.497-3.591 0-6.176-1.607-7.326-4.177l3.34-1.927c.575 1.606 2.011 2.57 3.986 2.57 1.724 0 3.053-.571 3.053-2 0-3.176-9.66-1.391-9.66-7.781 0-3.356 2.908-5.462 6.572-5.462 2.944 0 5.386 1.357 6.643 3.713l-3.268 1.82c-.646-1.392-1.903-2.035-3.375-2.035-1.401 0-2.622.607-2.622 1.892z" /></svg>
        </h1>
        <div className="py-6 space-x-2">
          <span className="w-10 h-10 items-center justify-center inline-flex rounded-full font-bold text-lg border-2 border-white">f</span>
          <span className="w-10 h-10 items-center justify-center inline-flex rounded-full font-bold text-lg border-2 border-white">G+</span>
          <span className="w-10 h-10 items-center justify-center inline-flex rounded-full font-bold text-lg border-2 border-white">in</span>
        </div>
        <p className="text-gray-100">
          or use email your account
        </p>
        <form action className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto">
          <div className="pb-2 pt-4">
            <input type="email" name="email" id="email" placeholder="Email" className="block w-full p-4 text-lg rounded-sm bg-black" />
          </div>
          <div className="pb-2 pt-4">
            <input className="block w-full p-4 text-lg rounded-sm bg-black" type="password" name="password" id="password" placeholder="Password" />
          </div>
          <div className="text-right text-gray-400 hover:underline hover:text-gray-100">
            <a href="#">Forgot your password?</a>
          </div>
          <div className="px-4 pb-2 pt-4">
            <button className="uppercase block w-full p-4 text-lg rounded-full bg-indigo-500 hover:bg-indigo-600 focus:outline-none">sign in</button>
          </div>
          <div className="p-4 text-center right-0 left-0 flex justify-center space-x-4 mt-16 lg:hidden ">
            <a href="#">
              <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
            </a>
            <a href="#">
              <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
            </a>
            <a href="#">
              <svg fill="#fff" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
            </a>
          </div>
        </form>
      </div>
    </div>
  </section>
  {/* support me by buying a coffee */}
  <a href="https://www.buymeacoffee.com/danimai" target="_blank" className="bg-purple-600 p-2 rounded-lg text-white fixed right-0 bottom-0">
    Support me
  </a>
</div>
{/* component */}
<div className="w-screen flex justify-center items-center">
  <div className="container mx-auto max-w-sm rounded-lg overflow-hidden shadow-lg my-2 bg-white">
    <div className="relative z-10" style={{"clip-path":"polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 5vw))"}}>
      <img className="w-full" src="https://unsplash.com/photos/llGiAyYthDw/download?force=true&w=640" alt="Profile image" />
      <div className="text-center absolute w-full" style={{"bottom":"4rem"}}>
        <p className="text-white tracking-wide uppercase text-lg font-bold">John Doe</p>
        <p className="text-gray-400 text-sm">@johndoe</p>
      </div>
    </div>
    <div className="relative flex justify-between items-center flex-row px-6 z-50 -mt-10">
      <p className="flex items-center text-gray-400"><span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-2" />online</p>
      <button className="p-4 bg-red-600 rounded-full hover:bg-red-500 focus:bg-red-700 transition ease-in duration-200 focus:outline-none">
        <svg viewBox="0 0 20 20" enableBackground="new 0 0 20 20" className="w-6 h-6">
          <path fill="#FFFFFF" d="M16,10c0,0.553-0.048,1-0.601,1H11v4.399C11,15.951,10.553,16,10,16c-0.553,0-1-0.049-1-0.601V11H4.601
                            C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H9V4.601C9,4.048,9.447,4,10,4c0.553,0,1,0.048,1,0.601V9h4.399
                            C15.952,9,16,9.447,16,10z" />
        </svg>
      </button>
    </div>
    <div className="pt-6 pb-8 text-gray-600 text-center">
      <p>Fullstack Developer </p>
      <p className="text-sm">Coding from Planet Earth</p>
    </div>
    <div className="pb-10 uppercase text-center tracking-wide flex justify-around">
      <div className="posts">
        <p className="text-gray-400 text-sm">Posts</p>
        <p className="text-lg font-semibold text-blue-300">76</p>
      </div>
      <div className="followers">
        <p className="text-gray-400 text-sm">Followers</p>
        <p className="text-lg font-semibold text-blue-300">964</p>
      </div>
      <div className="following">
        <p className="text-gray-400 text-sm">Following</p>
        <p className="text-lg font-semibold text-blue-300">34</p>
      </div>
    </div>
  </div>
</div>

{/* component */}
<div className="w-screen flex justify-center items-center">
  <div className="container mx-auto max-w-xs rounded-lg overflow-hidden shadow-lg my-2 bg-white">
    <div className="relative mb-6">
      <img className="w-full" src="https://www.tailwind-kit.com/images/landscape/3.jpg" alt="Profile picture" />
      <div className="text-center absolute w-full" style={{"bottom":"-30px"}}>
        <div className="mb-10">
          <p className="text-white tracking-wide uppercase text-lg font-bold">Witch</p>
          <p className="text-gray-400 text-sm">@witch_forever</p>
        </div>
        <button className="p-4 rounded-full transition ease-in duration-200 focus:outline-none">
          <svg viewBox="0 0 20 20" enableBackground="new 0 0 20 20" className="w-6 h-6">
            <path fill="#FFFFFF" d="M16,10c0,0.553-0.048,1-0.601,1H11v4.399C11,15.951,10.553,16,10,16c-0.553,0-1-0.049-1-0.601V11H4.601
               C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H9V4.601C9,4.048,9.447,4,10,4c0.553,0,1,0.048,1,0.601V9h4.399
               C15.952,9,16,9.447,16,10z" />
          </svg>
        </button>
      </div>
    </div>
    <div className="py-10 px-6 text-center tracking-wide grid grid-cols-3 gap-6">
      <div className="posts">
        <p className="text-lg">324</p>
        <p className="text-gray-400 text-sm">Posts</p>
      </div>
      <div className="followers">
        <p className="text-lg">7542</p>
        <p className="text-gray-400 text-sm">Followers</p>
      </div>
      <div className="following">
        <p className="text-lg">295</p>
        <p className="text-gray-400 text-sm">Following</p>
      </div>
    </div>
  </div>
</div>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center">
          <div className="max-w-sm w-full sm:w-1/2 lg:w-1/3 py-6 px-3">
            <div className="bg-white shadow-xl rounded-lg overflow-hidden">
              <div className="bg-cover bg-center h-56 p-4" style={{}}>
                <div className="flex justify-end">
                <img  src="https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"></img><svg
                    className="h-6 w-6 text-white fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.76 3.76a6 6 0 0 1 8.48 8.48l-8.53 8.54a1 1 0 0 1-1.42 0l-8.53-8.54a6 6 0 0 1 8.48-8.48l.76.75.76-.75zm7.07 7.07a4 4 0 1 0-5.66-5.66l-1.46 1.47a1 1 0 0 1-1.42 0L9.83 5.17a4 4 0 1 0-5.66 5.66L12 18.66l7.83-7.83z" />
                  </svg>
                  
                </div>
              </div>
              <div className="p-4">
                <p className="uppercase tracking-wide text-sm font-bold text-gray-700">
                  Detached house • 5y old
                </p>
                <p className="text-3xl text-gray-900">$750,000</p>
                <p className="text-gray-700">742 Evergreen Terrace</p>
              </div>
              <div className="flex p-4 border-t border-gray-300 text-gray-700">
                <div className="flex-1 inline-flex items-center">
                  <svg
                    className="h-6 w-6 text-gray-600 fill-current mr-3"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M0 16L3 5V1a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v4l3 11v5a1 1 0 0 1-1 1v2h-1v-2H2v2H1v-2a1 1 0 0 1-1-1v-5zM19 5h1V1H4v4h1V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1h2V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1zm0 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V6h-2v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6H3.76L1.04 16h21.92L20.24 6H19zM1 17v4h22v-4H1zM6 4v4h4V4H6zm8 0v4h4V4h-4z" />
                  </svg>
                  <p>
                    <span className="text-gray-900 font-bold">3</span> Bedrooms
                  </p>
                </div>
                <div className="flex-1 inline-flex items-center">
                  <svg
                    className="h-6 w-6 text-gray-600 fill-current mr-3"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M17.03 21H7.97a4 4 0 0 1-1.3-.22l-1.22 2.44-.9-.44 1.22-2.44a4 4 0 0 1-1.38-1.55L.5 11h7.56a4 4 0 0 1 1.78.42l2.32 1.16a4 4 0 0 0 1.78.42h9.56l-2.9 5.79a4 4 0 0 1-1.37 1.55l1.22 2.44-.9.44-1.22-2.44a4 4 0 0 1-1.3.22zM21 11h2.5a.5.5 0 1 1 0 1h-9.06a4.5 4.5 0 0 1-2-.48l-2.32-1.15A3.5 3.5 0 0 0 8.56 10H.5a.5.5 0 0 1 0-1h8.06c.7 0 1.38.16 2 .48l2.32 1.15a3.5 3.5 0 0 0 1.56.37H20V2a1 1 0 0 0-1.74-.67c.64.97.53 2.29-.32 3.14l-.35.36-3.54-3.54.35-.35a2.5 2.5 0 0 1 3.15-.32A2 2 0 0 1 21 2v9zm-5.48-9.65l2 2a1.5 1.5 0 0 0-2-2zm-10.23 17A3 3 0 0 0 7.97 20h9.06a3 3 0 0 0 2.68-1.66L21.88 14h-7.94a5 5 0 0 1-2.23-.53L9.4 12.32A3 3 0 0 0 8.06 12H2.12l3.17 6.34z"
                    />
                  </svg>
                  <p>
                    <span className="text-gray-900 font-bold">2</span> Bathrooms
                  </p>
                </div>
              </div>
              <div className="px-4 pt-3 pb-4 border-t border-gray-300 bg-gray-100">
                <div className="text-xs uppercase font-bold text-gray-600 tracking-wide">
                  Realtor
                </div>
                <div className="flex items-center pt-2">
                  <div
                    className="bg-cover bg-center w-10 h-10 rounded-full mr-3"
                    style={{}}
                  ></div>
                  <div>
                    <p className="font-bold text-gray-900">Tiffany Heffner</p>
                    <p className="text-sm text-gray-700">(555) 555-4321</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="px-4 py-6 mx-auto lg:py-8 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div class="relative flex items-center justify-between lg:justify-center lg:space-x-16">
          <ul class="flex items-center hidden space-x-8 lg:flex">
            <li>
              <a
                href="/"
                aria-label="Our product"
                title="Our product"
                class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                Product
              </a>
            </li>
            <li>
              <a
                href="/"
                aria-label="Our product"
                title="Our product"
                class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="/"
                aria-label="Product pricing"
                title="Product pricing"
                class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                Pricing
              </a>
            </li>
          </ul>
          <a
            href="/"
            aria-label="Company"
            title="Company"
            class="inline-flex items-center"
          >
            <svg
              class="w-8 text-deep-purple-accent-400"
              viewBox="0 0 24 24"
              strokeLinejoin="round"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              stroke="currentColor"
              fill="none"
            >
              <rect x="3" y="1" width="7" height="12" />
              <rect x="3" y="17" width="7" height="6" />
              <rect x="14" y="1" width="7" height="6" />
              <rect x="14" y="11" width="7" height="12" />
            </svg>
            <span class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
              Company
            </span>
          </a>
          <ul class="flex items-center hidden space-x-8 lg:flex">
            <li>
              <a
                href="/"
                aria-label="About us"
                title="About us"
                class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                About us
              </a>
            </li>
            <li>
              <a
                href="/"
                aria-label="Sign in"
                title="Sign in"
                class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                Sign in
              </a>
            </li>
            <li>
              <a
                href="/"
                aria-label="Sign up"
                title="Sign up"
                class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                Sign up
              </a>
            </li>
          </ul>
          <div class="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div class="absolute top-0 left-0 w-full">
                <div class="p-5 bg-white border rounded shadow-sm">
                  <div class="flex items-center justify-between mb-4">
                    <div>
                      <a
                        href="/"
                        aria-label="Company"
                        title="Company"
                        class="inline-flex items-center"
                      >
                        <svg
                          class="w-8 text-deep-purple-accent-400"
                          viewBox="0 0 24 24"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          stroke="currentColor"
                          fill="none"
                        >
                          <rect x="3" y="1" width="7" height="12" />
                          <rect x="3" y="17" width="7" height="6" />
                          <rect x="14" y="1" width="7" height="6" />
                          <rect x="14" y="11" width="7" height="12" />
                        </svg>
                        <span class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                          Company
                        </span>
                      </a>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul class="space-y-4">
                      <li>
                        <a
                          href="/"
                          aria-label="Our product"
                          title="Our product"
                          class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Product
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          aria-label="Our product"
                          title="Our product"
                          class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Features
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          aria-label="Product pricing"
                          title="Product pricing"
                          class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Pricing
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          aria-label="About us"
                          title="About us"
                          class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          About us
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          aria-label="Sign in"
                          title="Sign in"
                          class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Sign in
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                          aria-label="Sign up"
                          title="Sign up"
                        >
                          Sign up
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
          <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
            <img
              src="https://images.pexels.com/photos/2408666/pexels-photo-2408666.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
              className="object-cover w-full h-64"
              alt=""
            />
            <div className="p-5 border border-t-0">
              <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                <a
                  href="/"
                  className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                  aria-label="Category"
                  title="traveling"
                >
                  traveling
                </a>
                <span className="text-gray-600">— 28 Dec 2020</span>
              </p>
              <a
                href="/"
                aria-label="Category"
                title="Visit the East"
                className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                Visit the East
              </a>
              <p className="mb-2 text-gray-700">
                Sed ut perspiciatis unde omnis iste natus error sit sed quia
                consequuntur magni voluptatem doloremque.
              </p>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Learn more
              </a>
            </div>
          </div>
          <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
            <img
              src="https://images.pexels.com/photos/447592/pexels-photo-447592.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              className="object-cover w-full h-64"
              alt=""
            />
            <div className="p-5 border border-t-0">
              <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                <a
                  href="/"
                  className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                  aria-label="Category"
                  title="traveling"
                >
                  traveling
                </a>
                <span className="text-gray-600">— 28 Dec 2020</span>
              </p>
              <a
                href="/"
                aria-label="Category"
                title="Simple is better"
                className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                Simple is better
              </a>
              <p className="mb-2 text-gray-700">
                Sed ut perspiciatis unde omnis iste natus error sit sed quia
                consequuntur magni voluptatem doloremque.
              </p>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Learn more
              </a>
            </div>
          </div>
          <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
            <img
              src="https://images.pexels.com/photos/139829/pexels-photo-139829.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              className="object-cover w-full h-64"
              alt=""
            />
            <div className="p-5 border border-t-0">
              <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                <a
                  href="/"
                  className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                  aria-label="Category"
                  title="traveling"
                >
                  traveling
                </a>
                <span className="text-gray-600">— 28 Dec 2020</span>
              </p>
              <a
                href="/"
                aria-label="Category"
                title="Film It!"
                className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                Film It!
              </a>
              <p className="mb-2 text-gray-700">
                Sed ut perspiciatis unde omnis iste natus error sit sed quia
                consequuntur magni voluptatem doloremque.
              </p>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <img
          className="object-cover object-center w-full h-56"
          src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
          alt="avatar"
        />
        <div className="flex items-center px-6 py-3 bg-gray-900">
          <svg
            className="w-6 h-6 text-white fill-current"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17 21C15.8954 21 15 20.1046 15 19V15C15 13.8954 15.8954 13 17 13H19V12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12V13H7C8.10457 13 9 13.8954 9 15V19C9 20.1046 8.10457 21 7 21H3V12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12V21H17ZM19 15H17V19H19V15ZM7 15H5V19H7V15Z"
            />
          </svg>
          <h1 className="mx-3 text-lg font-semibold text-white">Focusing</h1>
        </div>
        <div className="px-6 py-4">
          <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
            Patterson johnson
          </h1>
          <p className="py-2 text-gray-700 dark:text-gray-400">
            Full Stack maker &amp; UI / UX Designer , love hip hop music Author
            of Building UI.
          </p>
          <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M14 11H10V13H14V11Z" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7 5V4C7 2.89545 7.89539 2 9 2H15C16.1046 2 17 2.89545 17 4V5H20C21.6569 5 23 6.34314 23 8V18C23 19.6569 21.6569 21 20 21H4C2.34314 21 1 19.6569 1 18V8C1 6.34314 2.34314 5 4 5H7ZM9 4H15V5H9V4ZM4 7C3.44775 7 3 7.44769 3 8V14H21V8C21 7.44769 20.5522 7 20 7H4ZM3 18V16H21V18C21 18.5523 20.5522 19 20 19H4C3.44775 19 3 18.5523 3 18Z"
              />
            </svg>
            <h1 className="px-2 text-sm">Meraki UI</h1>
          </div>
          <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.2721 10.2721C16.2721 12.4813 14.4813 14.2721 12.2721 14.2721C10.063 14.2721 8.27214 12.4813 8.27214 10.2721C8.27214 8.063 10.063 6.27214 12.2721 6.27214C14.4813 6.27214 16.2721 8.063 16.2721 10.2721ZM14.2721 10.2721C14.2721 11.3767 13.3767 12.2721 12.2721 12.2721C11.1676 12.2721 10.2721 11.3767 10.2721 10.2721C10.2721 9.16757 11.1676 8.27214 12.2721 8.27214C13.3767 8.27214 14.2721 9.16757 14.2721 10.2721Z"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.79417 16.5183C2.19424 13.0909 2.05438 7.3941 5.48178 3.79418C8.90918 0.194258 14.6059 0.0543983 18.2059 3.48179C21.8058 6.90919 21.9457 12.606 18.5183 16.2059L12.3124 22.7241L5.79417 16.5183ZM17.0698 14.8268L12.243 19.8965L7.17324 15.0698C4.3733 12.404 4.26452 7.9732 6.93028 5.17326C9.59603 2.37332 14.0268 2.26454 16.8268 4.93029C19.6267 7.59604 19.7355 12.0269 17.0698 14.8268Z"
              />
            </svg>
            <h1 className="px-2 text-sm">California</h1>
          </div>
          <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.00977 5.83789C3.00977 5.28561 3.45748 4.83789 4.00977 4.83789H20C20.5523 4.83789 21 5.28561 21 5.83789V17.1621C21 18.2667 20.1046 19.1621 19 19.1621H5C3.89543 19.1621 3 18.2667 3 17.1621V6.16211C3 6.11449 3.00333 6.06765 3.00977 6.0218V5.83789ZM5 8.06165V17.1621H19V8.06199L14.1215 12.9405C12.9499 14.1121 11.0504 14.1121 9.87885 12.9405L5 8.06165ZM6.57232 6.80554H17.428L12.7073 11.5263C12.3168 11.9168 11.6836 11.9168 11.2931 11.5263L6.57232 6.80554Z"
              />
            </svg>
            <h1 className="px-2 text-sm">patterson@example.com</h1>
          </div>
        </div>
      </div>
      <div className="w-full py-10">
        <div className="container mx-auto px-6 flex items-start justify-center">
          <div className="w-full">
            {/* Card is full width. Use in 12 col grid for best view. */}
            {/* Card code block start */}
            <div className="flex flex-col lg:flex-row mx-auto bg-white dark:bg-gray-800 shadow rounded">
              <div className="w-full lg:w-1/3 px-12 flex flex-col items-center py-10">
                <div className="w-24 h-24 mb-3 p-2 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  <img
                    className="w-full h-full overflow-hidden object-cover rounded-full"
                    src="https://tuk-cdn.s3.amazonaws.com/assets/components/grid_cards/gc_2.png"
                    alt="avatar"
                  />
                </div>
                <h2 className="text-gray-800 dark:text-gray-100 text-xl tracking-normal font-medium mb-1">
                  Timothy Jon Oliphant
                </h2>
                <p className="flex text-gray-600 dark:text-gray-100 text-sm tracking-normal font-normal mb-3 text-center">
                  <span className="cursor-pointer mr-1 text-gray-600 dark:text-gray-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-map-pin"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <circle cx={12} cy={11} r={3} />
                      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1 -2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z" />
                    </svg>
                  </span>
                  Las Vegas, Nevada
                </p>
                <p className="text-gray-600 dark:text-gray-100 text-sm tracking-normal font-normal mb-8 text-center w-10/12">
                  The more I deal with the work as something that is my own, as
                  something that is personal, the more successful it is.
                </p>
                <div className="flex items-start">
                  <div className>
                    <h2 className="text-gray-600 dark:text-gray-100 text-2xl leading-6 mb-2 text-center">
                      82
                    </h2>
                    <p className="text-gray-800 dark:text-gray-100 text-sm leading-5">
                      Reviews
                    </p>
                  </div>
                  <div className="mx-6 lg:mx-3 xl:mx-6 px-8 lg:px-4 xl:px-8 border-l border-r">
                    <h2 className="text-gray-600 dark:text-gray-100 text-2xl leading-6 mb-2 text-center">
                      28
                    </h2>
                    <p className="text-gray-800 dark:text-gray-100 text-sm leading-5">
                      Projects
                    </p>
                  </div>
                  <div className>
                    <h2 className="text-gray-600 dark:text-gray-100 text-2xl leading-6 mb-2 text-center">
                      42
                    </h2>
                    <p className="text-gray-800 dark:text-gray-100 text-sm leading-5">
                      Approved
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/3 px-12 border-t border-b lg:border-t-0 lg:border-b-0 lg:border-l lg:border-r border-gray-300 flex flex-col items-center py-10">
                <div className="mb-3 w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer text-indigo-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-stack"
                    width={48}
                    height={48}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <polyline points="12 4 4 8 12 12 20 8 12 4" />
                    <polyline points="4 12 12 16 20 12" />
                    <polyline points="4 16 12 20 20 16" />
                  </svg>
                </div>
                <h2 className="text-gray-800 dark:text-gray-100 text-xl tracking-normal text-center font-medium mb-1">
                  Senior Product Designer
                </h2>
                <p className="text-gray-600 dark:text-gray-100 text-sm tracking-normal font-normal mb-3 text-center">
                  Freelance
                </p>
                <p className="text-gray-600 dark:text-gray-100 text-sm tracking-normal font-normal mb-8 text-center w-10/12">
                  John is a true asset to us, providing advanced designing
                  skills from years of experience as UX designer.
                </p>
                <div className="flex items-start">
                  <div className="bg-gray-200 text-gray-600 dark:text-gray-100 dark:bg-gray-700 rounded text-xs leading-3 py-2 px-3">
                    Interface
                  </div>
                  <div className="bg-gray-200 text-gray-600 dark:text-gray-100 dark:bg-gray-700 rounded mx-2 text-xs leading-3 py-2 px-3">
                    Interface
                  </div>
                  <div className="bg-gray-200 text-gray-600 dark:text-gray-100 dark:bg-gray-700 rounded text-xs leading-3 py-2 px-3">
                    Interface
                  </div>
                </div>
                <div className="mt-2 flex items-start">
                  <div className="bg-gray-200 text-gray-600 dark:text-gray-100 dark:bg-gray-700 rounded text-xs leading-3 py-2 px-3">
                    Interface
                  </div>
                  <div className="bg-gray-200 text-gray-600 dark:text-gray-100 dark:bg-gray-700 rounded mx-2 text-xs leading-3 py-2 px-3">
                    Interface
                  </div>
                  <div className="bg-gray-200 text-gray-600 dark:text-gray-100 dark:bg-gray-700 rounded text-xs leading-3 py-2 px-3">
                    Interface
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/3 flex-col flex justify-center items-center px-12 py-8">
                <h2 className="text-center text-2xl text-gray-800 dark:text-gray-100 font-medium tracking-normal">
                  $90
                </h2>
                <h2 className="text-center text-sm text-gray-600 dark:text-gray-100 font-normal mt-2 mb-4 tracking-normal">
                  Hourly Rate
                </h2>
                <h2 className="text-center text-2xl text-gray-800 dark:text-gray-100 font-medium tracking-normal">
                  $32,000
                </h2>
                <h2 className="text-center text-sm text-gray-600 dark:text-gray-100 font-normal mt-2 mb-4 tracking-normal">
                  Total Earned
                </h2>
                <h2 className="text-center text-2xl text-gray-800 dark:text-gray-100 font-medium tracking-normal">
                  2000
                </h2>
                <h2 className="text-center text-sm text-gray-600 dark:text-gray-100 font-normal mt-2 mb-4 tracking-normal">
                  Hours Worked
                </h2>
                <h2 className="text-center text-2xl text-gray-800 dark:text-gray-100 font-medium tracking-normal">
                  95%
                </h2>
                <h2 className="text-center text-sm text-gray-600 dark:text-gray-100 font-normal mt-2 mb-4 tracking-normal">
                  Success Rate
                </h2>
                <div className="flex items-center">
                  <svg
                    className="cursor-pointer w-4 mr-1 text-yellow-400 icon icon-tabler icon-tabler-star"
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" fill="none" d="M0 0h24v24H0z" />
                    <path
                      fill="currentColor"
                      d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z"
                    />
                  </svg>
                  <svg
                    className="cursor-pointer w-4 mr-1 text-yellow-400 icon icon-tabler icon-tabler-star"
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" fill="none" d="M0 0h24v24H0z" />
                    <path
                      fill="currentColor"
                      d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z"
                    />
                  </svg>
                  <svg
                    className="cursor-pointer w-4 mr-1 text-yellow-400 icon icon-tabler icon-tabler-star"
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" fill="none" d="M0 0h24v24H0z" />
                    <path
                      fill="currentColor"
                      d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z"
                    />
                  </svg>
                  <svg
                    className="cursor-pointer w-4 mr-1 text-yellow-400 icon icon-tabler icon-tabler-star"
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" fill="none" d="M0 0h24v24H0z" />
                    <path
                      fill="currentColor"
                      d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z"
                    />
                  </svg>
                  <svg
                    className="cursor-pointer w-4 text-gray-200 dark:text-gray-400 icon icon-tabler icon-tabler-star"
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" fill="none" d="M0 0h24v24H0z" />
                    <path
                      fill="currentColor"
                      d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            {/* Card code block end */}
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl p-4 bg-white dark:bg-gray-800 mx-auto px-4 sm:px-6 lg:px-8 relative py-26 lg:mt-20">
        <div className="relative">
          <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="lg:col-start-2 lg:max-w-2xl ml-auto">
              <p className="text-base leading-6 text-indigo-500 font-semibold uppercase">
                Interactive
              </p>
              <h4 className="mt-2 text-2xl leading-8 font-extrabold text-gray-900 dark:text-white sm:text-3xl sm:leading-9">
                Interactivity between team members is the key of the success.
              </h4>
              <p className="mt-4 text-lg leading-6 text-gray-500 dark:text-gray-300">
                Build a simply and powered collaborative space for all your
                team. Track, share, measure, you have a fully control, it's
                never be simply and efficient.
              </p>
              <ul className="mt-8 md:grid md:grid-cols-2 gap-6">
                <li className="mt-6 lg:mt-0">
                  <div className="flex">
                    <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 dark:text-green-500 drark:bg-transparent">
                      <svg
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </span>
                    <span className="ml-4 text-base leading-6 font-medium text-gray-500 dark:text-gray-200">
                      Live modifications
                    </span>
                  </div>
                </li>
                <li className="mt-6 lg:mt-0">
                  <div className="flex">
                    <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 dark:text-green-500 drark:bg-transparent">
                      <svg
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </span>
                    <span className="ml-4 text-base leading-6 font-medium text-gray-500 dark:text-gray-200">
                      Data tracker
                    </span>
                  </div>
                </li>
                <li className="mt-6 lg:mt-0">
                  <div className="flex">
                    <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 dark:text-green-500 drark:bg-transparent">
                      <svg
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </span>
                    <span className="ml-4 text-base leading-6 font-medium text-gray-500 dark:text-gray-200">
                      24/24 support
                    </span>
                  </div>
                </li>
                <li className="mt-6 lg:mt-0">
                  <div className="flex">
                    <span className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-800 dark:text-green-500 drark:bg-transparent">
                      <svg
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </span>
                    <span className="ml-4 text-base leading-6 font-medium text-gray-500 dark:text-gray-200">
                      Free tips to improve work time
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="mt-10 lg:-mx-4 relative relative-20 lg:mt-0 lg:col-start-1">
              <div className="relative space-y-4">
                <div className="flex items-end justify-center lg:justify-start space-x-4">
                  <img
                    className="rounded-lg shadow-lg w-32 md:w-56"
                    width={200}
                    src="https://www.tailwind-kit.com/images/landscape/1.jpg"
                    alt={1}
                  />
                  <img
                    className="rounded-lg shadow-lg w-40 md:w-64"
                    width={260}
                    src="https://www.tailwind-kit.com/images/landscape/2.jpg"
                    alt={2}
                  />
                </div>
                <div className="flex items-start justify-center lg:justify-start space-x-4 ml-12">
                  <img
                    className="rounded-lg shadow-lg w-24 md:w-40"
                    width={170}
                    src="https://www.tailwind-kit.com/images/landscape/3.jpg"
                    alt={3}
                  />
                  <img
                    className="rounded-lg shadow-lg w-32 md:w-56"
                    width={200}
                    src="https://www.tailwind-kit.com/images/landscape/4.jpg"
                    alt={4}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 overflow-hidden relative lg:flex lg:items-center">
        <div className="w-full py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
          <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
            <span className="block">Mother hearth host your travel</span>
          </h2>
          <p className="text-md mt-4 text-gray-400">
            The state of Utah in the united states is home to lots of beautiful
            National parks, Bryce national canion park ranks as three of the
            most magnificient &amp; awe inspiring.
          </p>
          <div className="lg:mt-0 lg:flex-shrink-0">
            <div className="mt-12 inline-flex rounded-md shadow">
              <button
                type="button"
                className="py-2 px-4  bg-green-500 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                Get started
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-8 p-8 lg:p-24">
          <img
            src="https://www.tailwind-kit.com/images/landscape/3.jpg"
            className="rounded-sm w-1/2"
            alt="Tree"
          />
          <div>
            <img
              src="https://www.tailwind-kit.com/images/landscape/2.jpg"
              className="rounded-sm mb-8"
              alt="Tree"
            />
            <img
              src="https://www.tailwind-kit.com/images/landscape/4.jpg"
              className="rounded-sm"
              alt="Tree"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap w-full">
        <div className="flex flex-col w-full md:w-1/2">
          <div className="flex justify-center pt-12 md:justify-start md:pl-12 md:-mb-24">
            <a href="#" className="p-4 text-xl font-bold text-white bg-black">
              Design.
            </a>
          </div>
          <div className="flex flex-col justify-center px-8 pt-8 my-auto md:justify-start md:pt-0 md:px-24 lg:px-32">
            <p className="text-3xl text-center">Welcome.</p>
            <form className="flex flex-col pt-3 md:pt-8">
              <div className="flex flex-col pt-4">
                <div className="flex relative ">
                  <span className=" inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                    <svg
                      width={15}
                      height={15}
                      fill="currentColor"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z"></path>
                    </svg>
                  </span>
                  <input
                    type="text"
                    id="design-login-email"
                    className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="flex flex-col pt-4 mb-12">
                <div className="flex relative ">
                  <span className=" inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                    <svg
                      width={15}
                      height={15}
                      fill="currentColor"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1376 768q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-320q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z"></path>
                    </svg>
                  </span>
                  <input
                    type="password"
                    id="design-login-password"
                    className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Password"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-black shadow-md hover:text-black hover:bg-white focus:outline-none focus:ring-2"
              >
                <span className="w-full">Submit</span>
              </button>
            </form>
            <div className="pt-12 pb-12 text-center">
              <p>
                Don't have an account?
                <a href="#" className="font-semibold underline">
                  Register here.
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="w-1/2 shadow-2xl">
          <img
            className="hidden object-cover w-full h-screen md:block"
            src="https://www.tailwind-kit.com/images/object/9.jpg"
          />
        </div>
      </div>
      <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pricing-box max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex">
          <div className="bg-white dark:bg-gray-800 px-6 py-8 lg:flex-shrink-1 lg:p-12">
            <h3 className="text-2xl leading-8 font-extrabold text-gray-900 sm:text-3xl sm:leading-9 dark:text-white">
              Zero Commission
            </h3>
            <p className="mt-6 text-base leading-6 text-gray-500 dark:text-gray-200">
              Start selling online for free with all the features you need to
              launch your local delivery and pick-up service, nothing more. We
              don't charge commission or monthly fees, keep all your margin.
            </p>
            <div className="mt-8">
              <div className="flex items-center">
                <h4 className="flex-shrink-0 pr-4 bg-white dark:bg-gray-800 text-sm leading-5 tracking-wider font-semibold uppercase text-indigo-600">
                  What's included
                </h4>
                <div className="flex-1 border-t-2 border-gray-200"></div>
              </div>
              <ul className="mt-8 lg:grid lg:grid-cols-2 lg:col-gap-8 lg:row-gap-5">
                <li className="flex items-start lg:col-span-1">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-6 w-6 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      width={6}
                      height={6}
                      stroke="currentColor"
                      fill="#10b981"
                      viewBox="0 0 1792 1792"
                    >
                      <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                    </svg>
                  </div>
                  <p className="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                    All illimited components
                  </p>
                </li>
                <li className="flex items-start lg:col-span-1">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-6 w-6 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      width={6}
                      height={6}
                      stroke="currentColor"
                      fill="#10b981"
                      viewBox="0 0 1792 1792"
                    >
                      <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                    </svg>
                  </div>
                  <p className="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                    Own custom Tailwind styles
                  </p>
                </li>
                <li className="flex items-start lg:col-span-1">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-6 w-6 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      width={6}
                      height={6}
                      stroke="currentColor"
                      fill="#10b981"
                      viewBox="0 0 1792 1792"
                    >
                      <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                    </svg>
                  </div>
                  <p className="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                    Unlimited Templates
                  </p>
                </li>
                <li className="flex items-start lg:col-span-1">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-6 w-6 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      width={6}
                      height={6}
                      stroke="currentColor"
                      fill="#10b981"
                      viewBox="0 0 1792 1792"
                    >
                      <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                    </svg>
                  </div>
                  <p className="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                    Free premium dashboard
                  </p>
                </li>
                <li className="flex items-start lg:col-span-1">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-6 w-6 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      width={6}
                      height={6}
                      stroke="currentColor"
                      fill="#10b981"
                      viewBox="0 0 1792 1792"
                    >
                      <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                    </svg>
                  </div>
                  <p className="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                    Best ranking
                  </p>
                </li>
                <li className="flex items-start lg:col-span-1">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-6 w-6 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      width={6}
                      height={6}
                      stroke="currentColor"
                      fill="#10b981"
                      viewBox="0 0 1792 1792"
                    >
                      <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                    </svg>
                  </div>
                  <p className="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                    Prenium svg
                  </p>
                </li>
                <li className="flex items-start lg:col-span-1">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-6 w-6 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      width={6}
                      height={6}
                      stroke="currentColor"
                      fill="#10b981"
                      viewBox="0 0 1792 1792"
                    >
                      <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                    </svg>
                  </div>
                  <p className="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                    My wife
                  </p>
                </li>
              </ul>
            </div>
            <div className="mt-8">
              <div className="flex items-center">
                <h4 className="flex-shrink-0 pr-4 bg-white text-sm dark:bg-gray-800 leading-5 tracking-wider font-semibold uppercase text-indigo-600">
                  &amp; What's not
                </h4>
              </div>
              <ul className="mt-8 lg:grid lg:grid-cols-2 lg:col-gap-8 lg:row-gap-5">
                <li className="flex items-start lg:col-span-1">
                  <div className="flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={6}
                      height={6}
                      className="h-6 w-6 mr-2"
                      fill="red"
                      viewBox="0 0 1792 1792"
                    >
                      <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                    </svg>
                  </div>
                  <p className="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                    No Contracts. No monthly, setup, or additional payment
                    processor fees
                  </p>
                </li>
                <li className="flex items-start lg:col-span-1">
                  <div className="flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={6}
                      height={6}
                      className="h-6 w-6 mr-2"
                      fill="red"
                      viewBox="0 0 1792 1792"
                    >
                      <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                    </svg>
                  </div>
                  <p className="ml-3 text-sm leading-5 text-gray-700 dark:text-gray-200">
                    No 2-week on-boarding, it takes 20 minutes!
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="py-8 px-6 text-center bg-gray-50 dark:bg-gray-700 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
            <p className="text-lg leading-6 font-bold text-gray-900 dark:text-white">
              Free
            </p>
            <div className="mt-4 flex items-center justify-center text-5xl leading-none font-extrabold text-gray-900 dark:text-white">
              <span>$0/mo</span>
            </div>
            <p className="mt-4 text-sm leading-5">
              <span className="block font-medium text-gray-500 dark:text-gray-400">
                Card payments:
              </span>
              <span className=" inline-block font-medium text-gray-500 dark:text-gray-400">
                2.9% + 20p per transaction
              </span>
            </p>
            <div className="mt-6">
              <div className="rounded-md shadow">
                <button
                  type="button"
                  className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                >
                  Create your store
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container w-1/4 px-5 py-24 mx-auto">
        <div className="w-80 flex justify-center items-center">
          <div className="w-full p-4">
            <div className="card flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl">
              <div className="prod-title">
                <p className="text-2xl uppercase text-gray-900 font-bold">
                  Puma Shoes
                </p>
                <p className="uppercase text-sm text-gray-400">
                  The best shoes in the marketplace
                </p>
              </div>
              <div className="prod-img">
                <img
                  src="/images/object/4.jpg"
                  className="w-full object-cover object-center"
                />
              </div>
              <div className="prod-info grid gap-10">
                <div>
                  <ul className="flex flex-row justify-center items-center">
                    <li className="mr-4 last:mr-0">
                      <span className="block p-1 border-2 border-gray-500 rounded-full transition ease-in duration-300">
                        <a
                          href="#blue"
                          className="block w-6 h-6 bg-blue-900 rounded-full"
                        ></a>
                      </span>
                    </li>
                    <li className="mr-4 last:mr-0">
                      <span className="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                        <a
                          href="#yellow"
                          className="block w-6 h-6 bg-yellow-500 rounded-full"
                        ></a>
                      </span>
                    </li>
                    <li className="mr-4 last:mr-0">
                      <span className="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                        <a
                          href="#red"
                          className="block w-6 h-6 bg-red-500 rounded-full"
                        ></a>
                      </span>
                    </li>
                    <li className="mr-4 last:mr-0">
                      <span className="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
                        <a
                          href="#green"
                          className="block w-6 h-6 bg-green-500 rounded-full"
                        ></a>
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center text-gray-900">
                  <p className="font-bold text-xl">65 $</p>
                  <button className="px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container w-1/4 px-5 py-24 mx-auto">
        <div className="shadow-lg rounded-xl max-w-xs p-4 py-20 bg-white dark:bg-gray-800 relative overflow-hidden">
          <a href="#" className="w-full h-full block"></a>
          <div className="w-full">
            <a href="#" className="w-full h-full block">
              <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
                Improve css design of the carousel
              </p>
              <p className="text-gray-400 dark:text-gray-300 text-xs font-medium mb-2">
                Sunday 13 october
              </p>
              <p className="text-gray-400 dark:text-gray-300 text-sm mb-4">
                You’ve been coding for a while now and know your way around a
                CSS file. You’re certainly no master, but with enough fiddling
                you can get where you want to go.
              </p>
              <div className="flex dark:text-gray-200 items-center justify-between">
                <p>Task progress</p>
                <p>33%</p>
              </div>
              <div className="w-full h-2 bg-gray-400 rounded-full mt-3 mb-6">
                <div className="w-1/3 h-full text-center text-xs text-white bg-green-400 rounded-full"></div>
              </div>
            </a>
            <div className="flex items-center">
              <a href="#" className="w-full h-full block"></a>
              <div className="flex -space-x-2">
                <a href="#" className="w-full h-full block"></a>
                <a href="#" className>
                  <img
                    className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white"
                    src="/images/person/1.jpg"
                    alt="Guy"
                  />
                </a>
                <a href="#" className>
                  <img
                    className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white"
                    src="/images/person/2.jpeg"
                    alt="Max"
                  />
                </a>
                <a href="#" className>
                  <img
                    className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white"
                    src="/images/person/3.jpg"
                    alt="Charles"
                  />
                </a>
                <a href="#" className>
                  <img
                    className="inline-block h-10 w-10 rounded-full object-cover ring-2 ring-white"
                    src="/images/person/4.jpg"
                    alt="Jade"
                  />
                </a>
              </div>
              <span className="text-gray-500 dark:text-gray-300 ml-2">
                + 4 more
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="container w-1/4 px-5 py-24 mx-auto">
        <div className="shadow-lg px-4 py-6 w-full bg-white dark:bg-gray-800 relative">
          <p className="text-sm w-max text-gray-700 dark:text-white font-semibold border-b border-gray-200">
            Project Reffered
          </p>
          <div className="flex items-end space-x-2 my-6">
            <p className="text-5xl text-black dark:text-white font-bold">12</p>
            <span className="text-green-500 text-xl font-bold flex items-center">
              <svg
                width={20}
                fill="currentColor"
                height={20}
                className="h-3"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"></path>
              </svg>
              22%
            </span>
          </div>
          <div className="dark:text-white">
            <div className="flex items-center pb-2 mb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200">
              <p>Unique refferal URL</p>
              <div className="flex items-end text-xs">
                34
                <span className="flex items-center">
                  <svg
                    width={20}
                    fill="currentColor"
                    height={20}
                    className="h-3 text-green-500"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"></path>
                  </svg>
                  22%
                </span>
              </div>
            </div>
            <div className="flex items-center mb-2 pb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200">
              <p>Embedded form</p>
              <div className="flex items-end text-xs">
                13
                <span className="flex items-center">
                  <svg
                    width={20}
                    fill="currentColor"
                    height={20}
                    className="h-3 text-green-500"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"></path>
                  </svg>
                  12%
                </span>
              </div>
            </div>
            <div className="flex items-center text-sm space-x-12 md:space-x-24 justify-between">
              <p>New visitor</p>
              <div className="flex items-end text-xs">
                45
                <span className="flex items-center">
                  <svg
                    width={20}
                    fill="currentColor"
                    height={20}
                    className="h-3 text-green-500"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1675 971q0 51-37 90l-75 75q-38 38-91 38-54 0-90-38l-294-293v704q0 52-37.5 84.5t-90.5 32.5h-128q-53 0-90.5-32.5t-37.5-84.5v-704l-294 293q-36 38-90 38t-90-38l-75-75q-38-38-38-90 0-53 38-91l651-651q35-37 90-37 54 0 91 37l651 651q37 39 37 91z"></path>
                  </svg>
                  41%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="text-3xl font-medium title-font text-gray-900 mb-12 text-center">
            Testimonials
          </h1>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-100 p-8 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="block w-5 h-5 text-gray-400 mb-4"
                  viewBox="0 0 975.036 975.036"
                >
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z" />
                </svg>
                <p className="leading-relaxed mb-6">
                  Synth chartreuse iPhone lomo cray raw denim brunch everyday
                  carry neutra before they sold out fixie 90's microdosing.
                  Tacos pinterest fanny pack venmo, post-ironic heirloom
                  try-hard pabst authentic iceland.
                </p>
                <a className="inline-flex items-center">
                  <img
                    alt="testimonial"
                    src="https://dummyimage.com/106x106"
                    className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-gray-900">
                      Holden Caulfield
                    </span>
                    <span className="text-gray-500 text-sm">UI DEVELOPER</span>
                  </span>
                </a>
              </div>
            </div>
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-100 p-8 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="block w-5 h-5 text-gray-400 mb-4"
                  viewBox="0 0 975.036 975.036"
                >
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z" />
                </svg>
                <p className="leading-relaxed mb-6">
                  Synth chartreuse iPhone lomo cray raw denim brunch everyday
                  carry neutra before they sold out fixie 90's microdosing.
                  Tacos pinterest fanny pack venmo, post-ironic heirloom
                  try-hard pabst authentic iceland.
                </p>
                <a className="inline-flex items-center">
                  <img
                    alt="testimonial"
                    src="https://dummyimage.com/107x107"
                    className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-gray-900">
                      Alper Kamu
                    </span>
                    <span className="text-gray-500 text-sm">DESIGNER</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <header>
        <Popover className="relative bg-white">
          {({ open }) => (
            <>
              <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
                <div className="flex justify-start lg:w-0 lg:flex-1">
                  <a href="#">
                    <span className="sr-only">Workflow</span>
                    <img
                      className="h-8 w-auto sm:h-10"
                      src="https://tailwindui.com/img/logos/workflow-mark-purple-600-to-indigo-600.svg"
                      alt=""
                    />
                  </a>
                </div>
                <div className="-mr-2 -my-2 md:hidden">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Open menu</span>
                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
                <Popover.Group as="nav" className="hidden md:flex space-x-10">
                  <Popover className="relative">
                    {({ open }) => (
                      <>
                        <Popover.Button
                          className={classNames(
                            open ? "text-gray-900" : "text-gray-500",
                            "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          )}
                        >
                          <span>Solutions</span>
                          <ChevronDownIcon
                            className={classNames(
                              open ? "text-gray-600" : "text-gray-400",
                              "ml-2 h-5 w-5 group-hover:text-gray-500"
                            )}
                            aria-hidden="true"
                          />
                        </Popover.Button>

                        <Transition
                          show={open}
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 translate-y-1"
                        >
                          <Popover.Panel
                            static
                            className="absolute z-10 -ml-4 mt-3 transform w-screen max-w-md lg:max-w-2xl lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                          >
                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                              <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                                {solutions.map((item) => (
                                  <a
                                    key={item.name}
                                    href={item.href}
                                    className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                  >
                                    <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-gradient-to-r from-purple-600 to-indigo-600 text-white sm:h-12 sm:w-12">
                                      <item.icon
                                        className="h-6 w-6"
                                        aria-hidden="true"
                                      />
                                    </div>
                                    <div className="ml-4">
                                      <p className="text-base font-medium text-gray-900">
                                        {item.name}
                                      </p>
                                      <p className="mt-1 text-sm text-gray-500">
                                        {item.description}
                                      </p>
                                    </div>
                                  </a>
                                ))}
                              </div>
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>

                  <a
                    href="#"
                    className="text-base font-medium text-gray-500 hover:text-gray-900"
                  >
                    Pricing
                  </a>
                  <a
                    href="#"
                    className="text-base font-medium text-gray-500 hover:text-gray-900"
                  >
                    Partners
                  </a>
                  <a
                    href="#"
                    className="text-base font-medium text-gray-500 hover:text-gray-900"
                  >
                    Company
                  </a>
                </Popover.Group>
                <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                  <a
                    href="#"
                    className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
                  >
                    Sign in
                  </a>
                  <a
                    href="#"
                    className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
                  >
                    Sign up
                  </a>
                </div>
              </div>

              <Transition
                show={open}
                as={Fragment}
                enter="duration-200 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Popover.Panel
                  focus
                  static
                  className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                >
                  <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                    <div className="pt-5 pb-6 px-5">
                      <div className="flex items-center justify-between">
                        <div>
                          <img
                            className="h-8 w-auto"
                            src="https://tailwindui.com/img/logos/workflow-mark-purple-600-to-indigo-600.svg"
                            alt="Workflow"
                          />
                        </div>
                        <div className="-mr-2">
                          <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                            <span className="sr-only">Close menu</span>
                            <XIcon className="h-6 w-6" aria-hidden="true" />
                          </Popover.Button>
                        </div>
                      </div>
                      <div className="mt-6">
                        <nav className="grid grid-cols-1 gap-7">
                          {solutions.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                            >
                              <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
                                <item.icon
                                  className="h-6 w-6"
                                  aria-hidden="true"
                                />
                              </div>
                              <div className="ml-4 text-base font-medium text-gray-900">
                                {item.name}
                              </div>
                            </a>
                          ))}
                        </nav>
                      </div>
                    </div>
                    <div className="py-6 px-5">
                      <div className="grid grid-cols-2 gap-4">
                        <a
                          href="#"
                          className="text-base font-medium text-gray-900 hover:text-gray-700"
                        >
                          Pricing
                        </a>
                        <a
                          href="#"
                          className="text-base font-medium text-gray-900 hover:text-gray-700"
                        >
                          Partners
                        </a>
                        <a
                          href="#"
                          className="text-base font-medium text-gray-900 hover:text-gray-700"
                        >
                          Company
                        </a>
                      </div>
                      <div className="mt-6">
                        <a
                          href="#"
                          className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
                        >
                          Sign up
                        </a>
                        <p className="mt-6 text-center text-base font-medium text-gray-500">
                          Existing customer?
                          <a href="#" className="text-gray-900">
                            Sign in
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
      </header>

      <main>
        {/* Hero section */}
        <div className="relative">
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
              <div className="absolute inset-0">
                <img
                  className="h-full w-full object-cover"
                  src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100"
                  alt="People working on laptops"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-800 to-indigo-700 mix-blend-multiply" />
              </div>
              <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                  <span className="block text-white">Take control of your</span>
                  <span className="block text-indigo-200">
                    customer support
                  </span>
                </h1>
                <p className="mt-6 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-3xl">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                  qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
                  occaecat fugiat aliqua.
                </p>
                <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                  <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                    <a
                      href="#"
                      className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-indigo-50 sm:px-8"
                    >
                      Get started
                    </a>
                    <a
                      href="#"
                      className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-500 bg-opacity-60 hover:bg-opacity-70 sm:px-8"
                    >
                      Live demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Logo Cloud */}
        <div className="bg-gray-100">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <p className="text-center text-sm font-semibold uppercase text-gray-500 tracking-wide">
              Trusted by over 5 very average small businesses
            </p>
            <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
              <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                <img
                  className="h-12"
                  src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg"
                  alt="Tuple"
                />
              </div>
              <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                <img
                  className="h-12"
                  src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg"
                  alt="Mirage"
                />
              </div>
              <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                <img
                  className="h-12"
                  src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
                  alt="StaticKit"
                />
              </div>
              <div className="col-span-1 flex justify-center md:col-span-2 md:col-start-2 lg:col-span-1">
                <img
                  className="h-12"
                  src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
                  alt="Transistor"
                />
              </div>
              <div className="col-span-2 flex justify-center md:col-span-2 md:col-start-4 lg:col-span-1">
                <img
                  className="h-12"
                  src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
                  alt="Workcation"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Alternating Feature Sections */}
        <div className="relative pt-16 pb-32 overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-gray-100"
          />
          <div className="relative">
            <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
              <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
                <div>
                  <div>
                    <span className="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600">
                      <InboxIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                  <div className="mt-6">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                      Stay on top of customer support
                    </h2>
                    <p className="mt-4 text-lg text-gray-500">
                      Semper curabitur ullamcorper posuere nunc sed. Ornare
                      iaculis bibendum malesuada faucibus lacinia porttitor.
                      Pulvinar laoreet sagittis viverra duis. In venenatis sem
                      arcu pretium pharetra at. Lectus viverra dui tellus ornare
                      pharetra.
                    </p>
                    <div className="mt-6">
                      <a
                        href="#"
                        className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
                      >
                        Get started
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mt-8 border-t border-gray-200 pt-6">
                  <blockquote>
                    <div>
                      <p className="text-base text-gray-500">
                        &ldquo;Cras velit quis eros eget rhoncus lacus ultrices
                        sed diam. Sit orci risus aenean curabitur donec aliquet.
                        Mi venenatis in euismod ut.&rdquo;
                      </p>
                    </div>
                    <footer className="mt-3">
                      <div className="flex items-center space-x-3">
                        <div className="flex-shrink-0">
                          <img
                            className="h-6 w-6 rounded-full"
                            src="https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                            alt=""
                          />
                        </div>
                        <div className="text-base font-medium text-gray-700">
                          Marcia Hill, Digital Marketing Manager
                        </div>
                      </div>
                    </footer>
                  </blockquote>
                </div>
              </div>
              <div className="mt-12 sm:mt-16 lg:mt-0">
                <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                  <img
                    className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                    src="https://tailwindui.com/img/component-images/inbox-app-screenshot-1.jpg"
                    alt="Inbox user interface"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-24">
            <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
              <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
                <div>
                  <div>
                    <span className="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600">
                      <SparklesIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                  <div className="mt-6">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                      Better understand your customers
                    </h2>
                    <p className="mt-4 text-lg text-gray-500">
                      Semper curabitur ullamcorper posuere nunc sed. Ornare
                      iaculis bibendum malesuada faucibus lacinia porttitor.
                      Pulvinar laoreet sagittis viverra duis. In venenatis sem
                      arcu pretium pharetra at. Lectus viverra dui tellus ornare
                      pharetra.
                    </p>
                    <div className="mt-6">
                      <a
                        href="#"
                        className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
                      >
                        Get started
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
                <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                  <img
                    className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                    src="https://tailwindui.com/img/component-images/inbox-app-screenshot-2.jpg"
                    alt="Customer profile user interface"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Gradient Feature Section */}
        <div className="bg-gradient-to-r from-purple-800 to-indigo-700">
          <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8">
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Inbox support built for efficiency
            </h2>
            <p className="mt-4 max-w-3xl text-lg text-purple-200">
              Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et
              magna sit morbi lobortis. Blandit aliquam sit nisl euismod mattis
              in.
            </p>
            <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name}>
                  <div>
                    <span className="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
                      <feature.icon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-lg font-medium text-white">
                      {feature.name}
                    </h3>
                    <p className="mt-2 text-base text-purple-200">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats section */}
        <div className="relative bg-gray-900">
          <div className="h-80 absolute inset-x-0 bottom-0 xl:top-0 xl:h-full">
            <div className="h-full w-full xl:grid xl:grid-cols-2">
              <div className="h-full xl:relative xl:col-start-2">
                <img
                  className="h-full w-full object-cover opacity-25 xl:absolute xl:inset-0"
                  src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100"
                  alt="People working on laptops"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"
                />
              </div>
            </div>
          </div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-cols-2 xl:grid-flow-col-dense xl:gap-x-8">
            <div className="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
              <h2 className="text-sm font-semibold tracking-wide uppercase">
                <span className="bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent">
                  Valuable Metrics
                </span>
              </h2>
              <p className="mt-3 text-3xl font-extrabold text-white">
                Get actionable data that will help grow your business
              </p>
              <p className="mt-5 text-lg text-gray-300">
                Rhoncus sagittis risus arcu erat lectus bibendum. Ut in
                adipiscing quis in viverra tristique sem. Ornare feugiat viverra
                eleifend fusce orci in quis amet. Sit in et vitae tortor, massa.
                Dapibus laoreet amet lacus nibh integer quis. Eu vulputate diam
                sit tellus quis at.
              </p>
              <div className="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
                {metrics.map((item) => (
                  <p key={item.id}>
                    <span className="block text-2xl font-bold text-white">
                      {item.stat}
                    </span>
                    <span className="mt-1 block text-base text-gray-300">
                      <span className="font-medium text-white">
                        {item.emphasis}
                      </span>{" "}
                      {item.rest}
                    </span>
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-white">
          <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 lg:flex lg:items-center lg:justify-between">
            <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              <span className="block">Ready to get started?</span>
              <span className="block bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Get in touch or create an account.
              </span>
            </h2>
            <div className="mt-6 space-y-4 sm:space-y-0 sm:flex sm:space-x-5">
              <a
                href="#"
                className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
              >
                Learn more
              </a>
              <a
                href="#"
                className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-800 bg-indigo-50 hover:bg-indigo-100"
              >
                Get started
              </a>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-50" aria-labelledby="footerHeading">
        <h2 id="footerHeading" className="sr-only">
          Footer
        </h2>
        <div className="max-w-7xl mx-auto pt-16 pb-8 px-4 sm:px-6 lg:pt-24 lg:px-8">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="grid grid-cols-2 gap-8 xl:col-span-2">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                    Solutions
                  </h3>
                  <ul className="mt-4 space-y-4">
                    {footerNavigation.solutions.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-base text-gray-500 hover:text-gray-900"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                    Support
                  </h3>
                  <ul className="mt-4 space-y-4">
                    {footerNavigation.support.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-base text-gray-500 hover:text-gray-900"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                    Company
                  </h3>
                  <ul className="mt-4 space-y-4">
                    {footerNavigation.company.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-base text-gray-500 hover:text-gray-900"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                    Legal
                  </h3>
                  <ul className="mt-4 space-y-4">
                    {footerNavigation.legal.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-base text-gray-500 hover:text-gray-900"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-12 xl:mt-0">
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Subscribe to our newsletter
              </h3>
              <p className="mt-4 text-base text-gray-500">
                The latest news, articles, and resources, sent to your inbox
                weekly.
              </p>
              <form className="mt-4 sm:flex sm:max-w-md">
                <label htmlFor="emailAddress" className="sr-only">
                  Email address
                </label>
                <input
                  type="email"
                  name="emailAddress"
                  id="emailAddress"
                  autoComplete="email"
                  required
                  className="appearance-none min-w-0 w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:placeholder-gray-400"
                  placeholder="Enter your email"
                />
                <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between lg:mt-16">
            <div className="flex space-x-6 md:order-2">
              {footerNavigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
            <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
              &copy; 2020 Workflow, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="https://dummyimage.com/720x400"
                  alt="blog"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    CATEGORY
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    The Catalyzer
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                      </svg>
                    </a>
                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx={12} cy={12} r={3} />
                      </svg>
                      1.2K
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                      </svg>
                      6
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="https://dummyimage.com/721x401"
                  alt="blog"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    CATEGORY
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    The 400 Blows
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                  <div className="flex items-center flex-wrap">
                    <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                      </svg>
                    </a>
                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx={12} cy={12} r={3} />
                      </svg>
                      1.2K
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                      </svg>
                      6
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="https://dummyimage.com/722x402"
                  alt="blog"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    CATEGORY
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Shooting Stars
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                      </svg>
                    </a>
                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx={12} cy={12} r={3} />
                      </svg>
                      1.2K
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                      </svg>
                      6
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex w-full mb-20 flex-wrap">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
              Master Cleanse Reliac Heirloom
            </h1>
            <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven't heard of them man bun deep jianbing selfies heirloom.
            </p>
          </div>
          <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="https://dummyimage.com/500x300"
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="https://dummyimage.com/501x301"
                />
              </div>
              <div className="md:p-2 p-1 w-full">
                <img
                  alt="gallery"
                  className="w-full h-full object-cover object-center block"
                  src="https://dummyimage.com/600x360"
                />
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-full">
                <img
                  alt="gallery"
                  className="w-full h-full object-cover object-center block"
                  src="https://dummyimage.com/601x361"
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="https://dummyimage.com/502x302"
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="https://dummyimage.com/503x303"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src="https://dummyimage.com/720x600"
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Microdosing synth tattooed vexillologist
            </h1>
            <p className="mb-8 leading-relaxed">
              Meggings kinfolk echo park stumptown DIY, kale chips beard
              jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice
              godard disrupt ramps hexagon mustache umami snackwave tilde
              chillwave ugh. Pour-over meditation PBR&amp;B pickled ennui celiac
              mlkshk freegan photo booth af fingerstache pitchfork.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Button
              </button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Button
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
          <img
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src="https://dummyimage.com/720x600"
          />
          <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Knausgaard typewriter readymade marfa
            </h1>
            <p className="mb-8 leading-relaxed">
              Kickstarter biodiesel roof party wayfarers cold-pressed. Palo
              santo live-edge tumeric scenester copper mug flexitarian. Prism
              vice offal plaid everyday carry. Gluten-free chia VHS squid
              listicle artisan.
            </p>
            <div className="flex w-full justify-center items-end">
              <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
                <label
                  htmlFor="hero-field"
                  className="leading-7 text-sm text-gray-600"
                >
                  Placeholder
                </label>
                <input
                  type="text"
                  id="hero-field"
                  name="hero-field"
                  className="w-full bg-gray-100 bg-opacity-50 rounded focus:ring-2 focus:ring-indigo-200 focus:bg-transparent border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Button
              </button>
            </div>
            <p className="text-sm mt-2 text-gray-500 mb-8 w-full">
              Neutra shabby chic ramps, viral fixie.
            </p>
            <div className="flex">
              <button className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-6 h-6"
                  viewBox="0 0 512 512"
                >
                  <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z" />
                </svg>
                <span className="ml-4 flex items-start flex-col leading-none">
                  <span className="text-xs text-gray-600 mb-1">GET IT ON</span>
                  <span className="title-font font-medium">Google Play</span>
                </span>
              </button>
              <button className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center ml-4 hover:bg-gray-200 focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-6 h-6"
                  viewBox="0 0 305 305"
                >
                  <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z" />
                  <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z" />
                </svg>
                <span className="ml-4 flex items-start flex-col leading-none">
                  <span className="text-xs text-gray-600 mb-1">
                    Download on the
                  </span>
                  <span className="title-font font-medium">App Store</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap flex-col">
          <div className="flex mx-auto flex-wrap mb-20">
            <a className="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium bg-gray-100 inline-flex items-center leading-none border-indigo-500 text-indigo-500 tracking-wider rounded-t">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5 mr-3"
                viewBox="0 0 24 24"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              STEP 1
            </a>
            <a className="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5 mr-3"
                viewBox="0 0 24 24"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
              STEP 2
            </a>
            <a className="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5 mr-3"
                viewBox="0 0 24 24"
              >
                <circle cx={12} cy={5} r={3} />
                <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3" />
              </svg>
              STEP 3
            </a>
            <a className="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5 mr-3"
                viewBox="0 0 24 24"
              >
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                <circle cx={12} cy={7} r={4} />
              </svg>
              STEP 4
            </a>
          </div>
          <img
            className="xl:w-1/4 lg:w-1/3 md:w-1/2 w-2/3 block mx-auto mb-10 object-cover object-center rounded"
            alt="hero"
            src="https://dummyimage.com/720x600"
          />
          <div className="flex flex-col text-center w-full">
            <h1 className="text-xl font-medium title-font mb-4 text-gray-900">
              Master Cleanse Reliac Heirloom
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven't heard of them man bun deep jianbing selfies heirloom prism
              food truck ugh squid celiac humblebrag.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <div className="max-w-2xl mx-auto bg-white py-16 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        {/* xs to lg */}
        <div className="space-y-24 lg:hidden">
          {tiers.map((tier) => (
            <section key={tier.name}>
              <div className="px-4 mb-8">
                <h2 className="text-lg leading-6 font-medium text-gray-900">
                  {tier.name}
                </h2>
                <p className="mt-4">
                  <span className="text-4xl font-extrabold text-gray-900">
                    ${tier.priceMonthly}
                  </span>
                  <span className="text-base font-medium text-gray-500">
                    /mo
                  </span>
                </p>
                <p className="mt-4 text-sm text-gray-500">{tier.description}</p>
                <a
                  href={tier.href}
                  className="mt-6 block w-full bg-gradient-to-r from-orange-500 to-pink-500 border border-transparent rounded-md shadow py-2 text-sm font-semibold text-white text-center hover:to-pink-600"
                >
                  Buy {tier.name}
                </a>
              </div>

              {sections.map((section) => (
                <table key={section.name} className="w-full">
                  <caption className="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-medium text-gray-900 text-left">
                    {section.name}
                  </caption>
                  <thead>
                    <tr>
                      <th className="sr-only" scope="col">
                        Feature
                      </th>
                      <th className="sr-only" scope="col">
                        Included
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {section.features.map((feature) => (
                      <tr
                        key={feature.name}
                        className="border-t border-gray-200"
                      >
                        <th
                          className="py-5 px-4 text-sm font-normal text-gray-500 text-left"
                          scope="row"
                        >
                          {feature.name}
                        </th>
                        <td className="py-5 pr-4">
                          {typeof feature.tiers[tier.name] === "string" ? (
                            <span className="block text-sm text-gray-700 text-right">
                              {feature.tiers[tier.name]}
                            </span>
                          ) : (
                            <>
                              {feature.tiers[tier.name] === true ? (
                                <CheckIcon
                                  className="ml-auto h-5 w-5 text-green-500"
                                  aria-hidden="true"
                                />
                              ) : (
                                <MinusIcon
                                  className="ml-auto h-5 w-5 text-gray-400"
                                  aria-hidden="true"
                                />
                              )}

                              <span className="sr-only">
                                {feature.tiers[tier.name] === true
                                  ? "Yes"
                                  : "No"}
                              </span>
                            </>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ))}

              <div className="border-t border-gray-200 px-4 pt-5">
                <a
                  href="#"
                  className="block w-full bg-gradient-to-r from-orange-500 to-pink-500 border border-transparent rounded-md shadow py-2 text-sm font-semibold text-white text-center hover:to-pink-600"
                >
                  Buy {tier.name}
                </a>
              </div>
            </section>
          ))}
        </div>

        {/* lg+ */}
        <div className="hidden lg:block">
          <table className="w-full h-px table-fixed">
            <caption className="sr-only">Pricing plan comparison</caption>
            <thead>
              <tr>
                <th
                  className="pb-4 pl-6 pr-6 text-sm font-medium text-gray-900 text-left"
                  scope="col"
                >
                  <span className="sr-only">Feature by</span>
                  <span>Plans</span>
                </th>
                {tiers.map((tier) => (
                  <th
                    key={tier.name}
                    className="w-1/4 pb-4 px-6 text-lg leading-6 font-medium text-gray-900 text-left"
                    scope="col"
                  >
                    {tier.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="border-t border-gray-200 divide-y divide-gray-200">
              <tr>
                <th
                  className="py-8 pl-6 pr-6 align-top text-sm font-medium text-gray-900 text-left"
                  scope="row"
                >
                  Pricing
                </th>
                {tiers.map((tier) => (
                  <td key={tier.name} className="h-full py-8 px-6 align-top">
                    <div className="h-full flex flex-col justify-between">
                      <div>
                        <p>
                          <span className="text-4xl font-extrabold text-gray-900">
                            ${tier.priceMonthly}
                          </span>
                          <span className="text-base font-medium text-gray-500">
                            /mo
                          </span>
                        </p>
                        <p className="mt-4 text-sm text-gray-500">
                          {tier.description}
                        </p>
                      </div>
                      <a
                        href={tier.href}
                        className="mt-6 block w-full bg-gradient-to-r from-orange-500 to-pink-500 border border-transparent rounded-md shadow py-2 text-sm font-semibold text-white text-center hover:to-pink-600"
                      >
                        Buy {tier.name}
                      </a>
                    </div>
                  </td>
                ))}
              </tr>
              {sections.map((section) => (
                <Fragment key={section.name}>
                  <tr>
                    <th
                      className="py-3 pl-6 bg-gray-50 text-sm font-medium text-gray-900 text-left"
                      colSpan={4}
                      scope="colgroup"
                    >
                      {section.name}
                    </th>
                  </tr>
                  {section.features.map((feature) => (
                    <tr key={feature.name}>
                      <th
                        className="py-5 pl-6 pr-6 text-sm font-normal text-gray-500 text-left"
                        scope="row"
                      >
                        {feature.name}
                      </th>
                      {tiers.map((tier) => (
                        <td key={tier.name} className="py-5 px-6">
                          {typeof feature.tiers[tier.name] === "string" ? (
                            <span className="block text-sm text-gray-700">
                              {feature.tiers[tier.name]}
                            </span>
                          ) : (
                            <>
                              {feature.tiers[tier.name] === true ? (
                                <CheckIcon
                                  className="h-5 w-5 text-green-500"
                                  aria-hidden="true"
                                />
                              ) : (
                                <MinusIcon
                                  className="h-5 w-5 text-gray-400"
                                  aria-hidden="true"
                                />
                              )}

                              <span className="sr-only">
                                {feature.tiers[tier.name] === true
                                  ? "Included"
                                  : "Not included"}{" "}
                                in {tier.name}
                              </span>
                            </>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </Fragment>
              ))}
            </tbody>
            <tfoot>
              <tr className="border-t border-gray-200">
                <th className="sr-only" scope="row">
                  Choose your plan
                </th>
                {tiers.map((tier) => (
                  <td key={tier.name} className="pt-5 px-6">
                    <a
                      href="#"
                      className="block w-full bg-gradient-to-r from-orange-500 to-pink-500 border border-transparent rounded-md shadow py-2 text-sm font-semibold text-white text-center hover:to-pink-600"
                    >
                      Buy {tier.name}
                    </a>
                  </td>
                ))}
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      {/* Logo cloud */}
      <div className="max-w-7xl mx-auto border-t border-gray-200 py-12 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <img
              className="h-12"
              src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg"
              alt="Tuple"
            />
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <img
              className="h-12"
              src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg"
              alt="Mirage"
            />
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <img
              className="h-12"
              src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
              alt="StaticKit"
            />
          </div>
          <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
            <img
              className="h-12"
              src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
              alt="Transistor"
            />
          </div>
          <div className="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
            <img
              className="h-12"
              src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
              alt="Workcation"
            />
          </div>
        </div>
      </div>

      <div className="bg-gray-50">
        {/* FAQ */}
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center">
            Frequently asked questions
          </h2>
          <div className="mt-12">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-x-8 md:gap-y-12 lg:grid-cols-3">
              {faqs.map((faq) => (
                <div key={faq.id} className="space-y-2">
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    {faq.question}
                  </dt>
                  <dd className="text-base text-gray-500">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Feature section with brand panel */}
      <div className="relative">
        <div className="absolute inset-0 flex flex-col" aria-hidden="true">
          <div className="flex-1 bg-gray-50" />
          <div className="flex-1" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-orange-400 to-pink-500 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
            <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
              <div className="lg:self-center">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                  <span className="block">Ready to dive in?</span>
                  <span className="block text-red-900">
                    Start your free trial today.
                  </span>
                </h2>
                <p className="mt-4 text-lg leading-6 text-orange-50">
                  Ac euismod vel sit maecenas id pellentesque eu sed
                  consectetur. Malesuada adipiscing sagittis vel nulla nec.
                </p>
                <a
                  href="#"
                  className="mt-8 bg-orange-100 border border-transparent rounded-md shadow py-3 px-6 inline-flex items-center text-base font-medium text-red-600 hover:text-red-500"
                >
                  Sign up for free
                </a>
              </div>
            </div>
            <div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
              <img
                className="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
                src="https://tailwindui.com/img/component-images/full-width-with-sidebar.jpg"
                alt="App screenshot"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-12 max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <h2 className="sr-only">Footer</h2>
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h4 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Solutions
                </h4>
                <ul className="mt-4 space-y-4">
                  {footerNavigation.solutions.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-base text-gray-500 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h4 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Support
                </h4>
                <ul className="mt-4 space-y-4">
                  {footerNavigation.support.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-base text-gray-500 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h4 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Company
                </h4>
                <ul className="mt-4 space-y-4">
                  {footerNavigation.company.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-base text-gray-500 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h4 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Legal
                </h4>
                <ul className="mt-4 space-y-4">
                  {footerNavigation.legal.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-base text-gray-500 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8 xl:mt-0">
            <h4 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Subscribe to our newsletter
            </h4>
            <p className="mt-4 text-gray-500 text-base">
              The latest news, articles, and resources, sent to your inbox
              weekly.
            </p>
            <form className="mt-4 sm:flex sm:max-w-md">
              <label htmlFor="emailAddress" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                name="emailAddress"
                id="emailAddress"
                autoComplete="email"
                required
                className="min-w-0 w-full bg-white shadow-sm py-2 px-4 placeholder-gray-500 focus:outline-none focus:ring-orange-500 focus:border-orange-500 border-gray-300 rounded-md"
                placeholder="Enter your email"
              />
              <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <button
                  type="submit"
                  className="w-full bg-orange-100 border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-base font-medium text-red-600 hover:bg-orange-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            {footerNavigation.social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>
          <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
            &copy; 2020 Workflow, Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
