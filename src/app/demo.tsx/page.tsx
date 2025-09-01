/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client";
import { FaHome } from "react-icons/fa";
import { IoLogoAndroid } from "react-icons/io";
import { FaApple } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { BsGiftFill } from "react-icons/bs";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import Image from "next/image";

export default function JiliGamingPage() {
  const navigationItems = [
    { icon: FaHome, label: "Home", href: "https://www.99nowjili.cc/" },
    {
      icon: IoLogoAndroid,
      label: "Android",
      href: "https://www.97nowjili.cc/",
    },
    { icon: FaApple, label: "IOS", href: "https://www.95nowjili.cc/" },
    { icon: FaUserFriends, label: "Agent", href: "http://ag.93nowjili.cc/" },
    { icon: BsGiftFill, label: "Promotion", href: "https://www.89nowjili.cc/" },
    {
      icon: FaPeopleGroup,
      label: "CSKH 7*24",
      href: "https://direct.lc.chat/18136068/",
    },
  ];

  const speedTestItems = [
    {
      domain: "87nowjili.cc",
      speed: "90ms",
      status: "active",
      diceColor: "bg-red-500",
    },
    {
      domain: "85nowjili.cc",
      speed: "90ms",
      status: "active",
      diceColor: "bg-green-500",
    },
    {
      domain: "89nowjili.cc",
      speed: "100ms",
      status: "active",
      diceColor: "bg-blue-500",
    },
    {
      domain: "95nowjili.cc",
      speed: "100ms",
      status: "active",
      diceColor: "bg-red-600",
    },
    {
      domain: "97nowjili.cc",
      speed: "100ms",
      status: "active",
      diceColor: "bg-gray-500",
    },
    {
      domain: "99nowjili.cc",
      speed: "120ms",
      status: "active",
      diceColor: "bg-yellow-500",
    },
  ];

  return (
    <div
      className="relative min-h-screen overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at center, #3d2914 0%, #1a0e08 70%, #0f0704 100%)",
      }}
    >
      {/* Background Texture Overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Desktop Layout */}
      <div className="relative mx-auto hidden h-screen max-w-7xl lg:flex">
        {/* Left Sidebar Navigation - Desktop Only */}
        <div className="flex h-full w-32 flex-col items-center justify-center space-y-4 py-8">
          {navigationItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-32 w-32 animate-[fadeInLeft_0.6s_ease-out_forwards] flex-col items-center justify-center rounded-full border-2 border-gray-200 bg-gradient-to-br from-gray-100 to-gray-300 shadow-lg transition-all duration-300 hover:scale-105 hover:border-blue-300 hover:shadow-xl"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <item.icon className="mb-1 size-8 text-[#003399]" />
              <span className="text-center text-xl leading-tight text-gray-700">
                {item.label}
              </span>
            </a>
          ))}
        </div>

        {/* Main Content Area - Desktop */}
        <div className="flex flex-1 flex-col items-center justify-center px-8">
          {/* Header Logo Section */}
          <div className="mb-12 text-center">
            <div className="relative mb-6 flex justify-center">
              <Image
                className="object-cover"
                src="/logo.png"
                alt="7S.com"
                width={200}
                height={200}
              />
            </div>

            <h2 className="mt-6 animate-pulse text-3xl font-bold tracking-wide text-yellow-500">
              Top Entertainment - Super Reputation
            </h2>
          </div>

          {/* Speed Test Section */}
          <div className="flex w-full items-center gap-4">
            <div className="flex-[1.5] pt-4">
              <Image src="/jltara.png" alt="7S.com" width={960} height={960} />
            </div>
            <div className="max-w-2xl flex-1 space-y-3">
              {speedTestItems.map((item, index) => (
                <div
                  key={item.domain}
                  className="flex animate-[fadeInRight_0.6s_ease-out_forwards] cursor-pointer items-center justify-between rounded-2xl border border-white/20 bg-[#ECF7EE] p-3 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:bg-white/90"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <div className="flex items-center space-x-4">
                    <div
                      style={{
                        background:
                          "linear-gradient(to bottom, #FF5E00 0, #39FF14 47%, #FF0080 100%)",
                      }}
                      className={`h-10 w-10 ${item.diceColor} flex items-center justify-center rounded-lg border-2 border-white/30 shadow-lg`}
                    >
                      <svg
                        className="transform animate-spin"
                        style={{ animationDuration: "0.8s" }}
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        p-id="4263"
                        width="200"
                        height="200"
                      >
                        <path
                          d="M835.515114 201.257835c2.131038 22.642281-0.093233 44.831716-6.659495 66.594943a1402.089934 1402.089934 0 0 0-113.211403 79.913932 1776.167049 1776.167049 0 0 0-186.465841 86.573426 216.433565 216.433565 0 0 1-106.551909 0l-279.698761-146.508875c-23.028531-23.827671-31.912297-52.689919-26.637978-86.573426 106.4054-76.477633 224.052027-129.753587 352.953199-159.827864 134.734889 26.34496 256.816739 79.620914 366.272188 159.827864z"
                          fill="#EEEDED"
                          opacity=".954"
                          p-id="4264"
                        ></path>
                        <path
                          d="M422.626466 161.300869c57.138461-6.832641 108.190145 6.486347 153.168369 39.956966 16.928435 48.827412 1.385175 82.124884-46.61646 99.892415-74.93263 24.347111-128.208585 2.144357-159.827864-66.594944 6.752727-33.896826 24.506939-58.323851 53.275955-73.254437z"
                          fill="#FD542D"
                          p-id="4265"
                        ></path>
                        <path
                          d="M116.289727 201.257835c-5.27432 33.883507 3.609446 62.745755 26.637978 86.573426l279.698761 146.508875a216.433565 216.433565 0 0 0 106.551909 0 1776.167049 1776.167049 0 0 1 186.465841-86.573426 2147.220753 2147.220753 0 0 0-219.763313 159.827863 2613.71833 2613.71833 0 0 0 0 372.931682 334.972564 334.972564 0 0 0 59.935449 53.275955c-69.7915 18.113825-140.821667 15.889553-213.103818-6.659494A1703.551923 1703.551923 0 0 1 69.673267 760.655358a305.670789 305.670789 0 0 1-26.637977-66.594944c-8.883765-133.189886-8.883765-266.379773 0-399.569659 12.453254-41.22227 36.88028-72.308789 73.254437-93.23292z"
                          fill="#DBDBDB"
                          opacity=".97"
                          p-id="4266"
                        ></path>
                        <path
                          d="M835.515114 201.257835c22.935298 23.348187 42.913781 49.986164 59.935449 79.913932 8.883765 146.508875 8.883765 293.01775 0 439.526625a153.55462 153.55462 0 0 1-46.616461 59.935449 1536.212149 1536.212149 0 0 1-293.01775 153.168369 334.972564 334.972564 0 0 1-59.935449-53.275955 2613.71833 2613.71833 0 0 1 0-372.931682 2147.220753 2147.220753 0 0 1 219.763313-159.827863c35.681571-27.969876 73.414265-54.607853 113.211403-79.913932 6.566261-21.763227 8.790533-43.952663 6.659495-66.594943z"
                          fill="#B7B7B7"
                          opacity=".981"
                          p-id="4267"
                        ></path>
                        <path
                          d="M102.970739 374.404687c89.42369 8.95036 116.061667 55.566821 79.913931 139.849381-64.5305 6.539623-95.6037-24.533577-93.23292-93.232921a146.282452 146.282452 0 0 1 13.318989-46.61646zM782.239159 387.723676c84.215965-1.798063 101.970177 33.723679 53.275955 106.551909-49.12043 42.181237-80.180312 33.297472-93.232921-26.637977 1.704831-32.698117 15.023819-59.336094 39.956966-79.913932z"
                          fill="#343434"
                          p-id="4268"
                        ></path>
                        <path
                          d="M675.68725 547.551539c94.791242-10.029198 116.993996 25.479225 66.594943 106.551909-50.079397 42.00809-85.587821 33.124325-106.551909-26.637977 13.185799-26.558063 26.504787-53.196041 39.956966-79.913932z"
                          fill="#373737"
                          p-id="4269"
                        ></path>
                        <path
                          d="M302.755568 707.379403c80.286864 15.916191 106.924841 62.532652 79.913932 139.849381-48.827412 16.928435-82.124884 1.385175-99.892415-46.616461-11.094718-35.575019-4.435223-66.648219 19.978483-93.23292z"
                          fill="#383838"
                          p-id="4270"
                        ></path>
                        <path
                          d="M595.773318 707.379403c49.813018-10.095793 72.015772 9.88269 66.594943 59.935449 0.13319 48.760817-24.280516 77.623066-73.254437 86.573426-27.410479-7.431996-42.953738-25.186208-46.61646-53.275955 7.591824-37.466315 25.359354-68.539516 53.275954-93.23292z"
                          fill="#363636"
                          p-id="4271"
                        ></path>
                      </svg>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="text-lg font-bold text-green-500">
                        {item.speed}
                      </div>
                      <div className="text-green-500">{item.domain}</div>
                    </div>
                  </div>

                  <button className="cursor-pointer rounded-full border border-red-400 bg-gradient-to-r from-pink-500 to-red-500 px-6 py-2 font-bold text-white transition-all duration-300 hover:scale-105 hover:from-pink-600 hover:to-red-600 hover:shadow-lg">
                    Enter
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="relative flex min-h-screen flex-col lg:hidden">
        {/* Mobile Header */}
        <div className="relative z-10 px-4 pt-8 pb-4">
          {/* Logo Section */}
          <div className="mb-6 text-center">
            <div className="relative mb-4 flex justify-center">
              <Image
                className="object-cover"
                src="/logo.png"
                alt="7S.com"
                width={80}
                height={80}
              />
            </div>
            <h2 className="animate-pulse text-xl font-bold tracking-wide text-yellow-500 sm:text-2xl">
              Top Entertainment - Super Reputation
            </h2>
          </div>

          {/* Mobile Navigation Grid */}
          <div className="mb-6 grid grid-cols-3 gap-3 px-2">
            {navigationItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-20 animate-[fadeIn_0.6s_ease-out_forwards] flex-col items-center justify-center rounded-2xl border-2 border-gray-200 bg-gradient-to-br from-gray-100 to-gray-300 shadow-lg transition-all duration-300 active:scale-95 sm:h-24"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <item.icon className="mb-1 size-5 text-[#003399] sm:size-6" />
                <span className="text-center text-xs leading-tight text-gray-700 sm:text-sm">
                  {item.label}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Main Content */}
        <div className="flex-1 px-4 pb-20">
          {/* Character Image */}
          <div className="mb-6 flex justify-center">
            <div className="relative max-w-xs">
              <Image
                src="/jltara.png"
                alt="7S.com"
                width={300}
                height={300}
                className="object-contain"
              />
            </div>
          </div>

          {/* Speed Test Items */}
          <div className="space-y-3">
            {speedTestItems.map((item, index) => (
              <div
                key={item.domain}
                className="justify-betweenborder flex animate-[fadeInUp_0.6s_ease-out_forwards] cursor-pointer items-center border-white/20 bg-[#ECF7EE] p-4 shadow-lg backdrop-blur-sm transition-all duration-300 active:scale-[0.98]"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <div className="flex items-center space-x-3">
                  {/* Dice Icon */}
                  <div
                    style={{
                      background:
                        "linear-gradient(to bottom, #FF5E00 0, #39FF14 47%, #FF0080 100%)",
                    }}
                    className={`h-12 w-12 ${item.diceColor} flex items-center justify-center rounded-lg border-2 border-white/30 shadow-lg sm:h-10 sm:w-10`}
                  >
                    <svg
                      className="transform animate-spin"
                      style={{ animationDuration: "0.8s" }}
                      viewBox="0 0 1024 1024"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      p-id="4263"
                      width="200"
                      height="200"
                    >
                      <path
                        d="M835.515114 201.257835c2.131038 22.642281-0.093233 44.831716-6.659495 66.594943a1402.089934 1402.089934 0 0 0-113.211403 79.913932 1776.167049 1776.167049 0 0 0-186.465841 86.573426 216.433565 216.433565 0 0 1-106.551909 0l-279.698761-146.508875c-23.028531-23.827671-31.912297-52.689919-26.637978-86.573426 106.4054-76.477633 224.052027-129.753587 352.953199-159.827864 134.734889 26.34496 256.816739 79.620914 366.272188 159.827864z"
                        fill="#EEEDED"
                        opacity=".954"
                        p-id="4264"
                      ></path>
                      <path
                        d="M422.626466 161.300869c57.138461-6.832641 108.190145 6.486347 153.168369 39.956966 16.928435 48.827412 1.385175 82.124884-46.61646 99.892415-74.93263 24.347111-128.208585 2.144357-159.827864-66.594944 6.752727-33.896826 24.506939-58.323851 53.275955-73.254437z"
                        fill="#FD542D"
                        p-id="4265"
                      ></path>
                      <path
                        d="M116.289727 201.257835c-5.27432 33.883507 3.609446 62.745755 26.637978 86.573426l279.698761 146.508875a216.433565 216.433565 0 0 0 106.551909 0 1776.167049 1776.167049 0 0 1 186.465841-86.573426 2147.220753 2147.220753 0 0 0-219.763313 159.827863 2613.71833 2613.71833 0 0 0 0 372.931682 334.972564 334.972564 0 0 0 59.935449 53.275955c-69.7915 18.113825-140.821667 15.889553-213.103818-6.659494A1703.551923 1703.551923 0 0 1 69.673267 760.655358a305.670789 305.670789 0 0 1-26.637977-66.594944c-8.883765-133.189886-8.883765-266.379773 0-399.569659 12.453254-41.22227 36.88028-72.308789 73.254437-93.23292z"
                        fill="#DBDBDB"
                        opacity=".97"
                        p-id="4266"
                      ></path>
                      <path
                        d="M835.515114 201.257835c22.935298 23.348187 42.913781 49.986164 59.935449 79.913932 8.883765 146.508875 8.883765 293.01775 0 439.526625a153.55462 153.55462 0 0 1-46.616461 59.935449 1536.212149 1536.212149 0 0 1-293.01775 153.168369 334.972564 334.972564 0 0 1-59.935449-53.275955 2613.71833 2613.71833 0 0 1 0-372.931682 2147.220753 2147.220753 0 0 1 219.763313-159.827863c35.681571-27.969876 73.414265-54.607853 113.211403-79.913932 6.566261-21.763227 8.790533-43.952663 6.659495-66.594943z"
                        fill="#B7B7B7"
                        opacity=".981"
                        p-id="4267"
                      ></path>
                      <path
                        d="M102.970739 374.404687c89.42369 8.95036 116.061667 55.566821 79.913931 139.849381-64.5305 6.539623-95.6037-24.533577-93.23292-93.232921a146.282452 146.282452 0 0 1 13.318989-46.61646zM782.239159 387.723676c84.215965-1.798063 101.970177 33.723679 53.275955 106.551909-49.12043 42.181237-80.180312 33.297472-93.232921-26.637977 1.704831-32.698117 15.023819-59.336094 39.956966-79.913932z"
                        fill="#343434"
                        p-id="4268"
                      ></path>
                      <path
                        d="M675.68725 547.551539c94.791242-10.029198 116.993996 25.479225 66.594943 106.551909-50.079397 42.00809-85.587821 33.124325-106.551909-26.637977 13.185799-26.558063 26.504787-53.196041 39.956966-79.913932z"
                        fill="#373737"
                        p-id="4269"
                      ></path>
                      <path
                        d="M302.755568 707.379403c80.286864 15.916191 106.924841 62.532652 79.913932 139.849381-48.827412 16.928435-82.124884 1.385175-99.892415-46.616461-11.094718-35.575019-4.435223-66.648219 19.978483-93.23292z"
                        fill="#383838"
                        p-id="4270"
                      ></path>
                      <path
                        d="M595.773318 707.379403c49.813018-10.095793 72.015772 9.88269 66.594943 59.935449 0.13319 48.760817-24.280516 77.623066-73.254437 86.573426-27.410479-7.431996-42.953738-25.186208-46.61646-53.275955 7.591824-37.466315 25.359354-68.539516 53.275954-93.23292z"
                        fill="#363636"
                        p-id="4271"
                      ></path>
                    </svg>
                  </div>

                  {/* Speed and Domain Info */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
                    <div className="text-base font-bold text-green-500 sm:text-lg">
                      {item.speed}
                    </div>
                    <div className="text-sm text-green-700 sm:text-base">
                      {item.domain}
                    </div>
                  </div>
                </div>

                {/* Enter Button */}
                <button className="cursor-pointer rounded-full border border-red-400 bg-gradient-to-r from-pink-500 to-red-500 px-4 py-2 text-sm font-bold text-white transition-all duration-300 active:scale-95 sm:px-6 sm:text-base">
                  Enter
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Telegram Contact Button */}
      <div className="fixed right-4 bottom-4 z-20 sm:right-8 sm:bottom-8">
        <a
          href="https://t.me/nowjili"
          target="_blank"
          rel="noopener noreferrer"
          className="lg:hover:shadow-3xl flex h-14 w-14 items-center justify-center rounded-full bg-[#1e96c8] shadow-2xl transition-all duration-300 active:scale-95 sm:h-16 sm:w-16 lg:hover:scale-110"
        >
          <FaTelegramPlane className="h-6 w-6 text-white sm:h-8 sm:w-8" />
        </a>
      </div>
    </div>
  );
}
