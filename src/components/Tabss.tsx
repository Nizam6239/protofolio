"use client";

import { Tabs } from "./ui/tabs";
import Link from 'next/link';
import { FaExternalLinkAlt } from "react-icons/fa";

export function TabsDemo() {
  const tabs = [
    {
      title: "Smart Home App",
      value: "Smart Home App",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <div className="flex flex-row justify-between">
            <p>Smart Home App</p>
            <Link 
              href="https://smart-home-integration-website.onrender.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="border-4 border-amber-50 rounded-full flex items-center justify-center w-12 h-12"
            >
              <FaExternalLinkAlt size={25} />
            </Link>
          </div>
          <DummyContent1 />
        </div>
      ),
    },
    {
      title: "Text App",
      value: "TextApp",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <div className="flex flex-row justify-between">
            <p>Text App</p>
            <Link href="https://textuserapp.netlify.app" target="_blank" rel="noopener noreferrer" className="border-4 border-amber-50 rounded-full flex items-center justify-center w-12 h-12">
              <FaExternalLinkAlt size={30} />
            </Link>
          </div>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Fashion Things",
      value: "Fashion Things",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <div className="flex flex-row justify-between">
            <p>Fashion Things</p>
            <Link href="https://fashionwebsitenext.netlify.app" target="_blank" rel="noopener noreferrer" className="border-4 border-amber-50 rounded-full flex items-center justify-center w-12 h-12">
              <FaExternalLinkAlt size={30} />
            </Link>
          </div>
          <DummyContent2 />
        </div>
      ),
    },
    {
      title: "Shop App",
      value: "Shop App",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <div className="flex flex-row justify-between">
            <p>Shop App</p>
            <Link href="https://shopwebsite1.netlify.app" target="_blank" rel="noopener noreferrer" className="border-4 border-amber-50 rounded-full flex items-center justify-center w-12 h-12">
              <FaExternalLinkAlt size={30} />
            </Link>
          </div>
          <DummyContent3 />
        </div>
      ),
    },
    {
      title: "Gemini clone",
      value: "Gemini clone",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <div className="flex flex-row justify-between">
            <p>Gemini clone</p>
            <Link href="https://geminicloneapp1.netlify.app" target="_blank" rel="noopener noreferrer" className="border-4 border-amber-50 rounded-full flex items-center justify-center w-12 h-12">
              <FaExternalLinkAlt size={20} />
            </Link>
          </div>
          <DummyContent4 />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative   max-w-5xl mx-auto w-full  items-center justify-center mt-10 mb-28">
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <div className="flex flex-col justify-between item-center">
    <img
      src="/TextUserApp.png"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[100%] rounded-xl mx-auto"
    />
    </div>
  );
};


const DummyContent1 = () => {
  return (
    <img
      src="/SmartHomeImage.png"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[100%] rounded-xl mx-auto"
    />
  );
};

const DummyContent2 = () => {
  return (
    <img
      src="/FashionThings.png"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[100%] rounded-xl mx-auto"
    />
  );
};

const DummyContent3 = () => {
  return (
    <img
      src="/ShopApp.png"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[100%] rounded-xl mx-auto"
    />
  );
};

const DummyContent4 = () => {
  return (
    <img
      src="/GeminiClone.png"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[100%] rounded-xl mx-auto"
    />
  );
};
