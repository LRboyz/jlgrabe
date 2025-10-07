"use client";

import { Bell, RefreshCcw, UserIcon } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { CgWebsite } from "react-icons/cg";
import { toast } from "react-hot-toast";

/* eslint-disable @typescript-eslint/no-unsafe-assignment */
export default function HomePage() {
  // 添加弹框状态管理
  const [showDownloadModal, setShowDownloadModal] = useState(false);

  // 可用域名列表
  const availableDomains = [
    "https://jlgrabe111.com",
    "https://jlgrabe222.com",
    "https://jlgrabe333.com",
    "https://jlgrabe444.com",
    "https://jlgrabe555.com",
    "https://jlgrabe666.com",
    "https://jlgrabe777.com",
    "https://jlgrabe888.com",
    "https://jlgrabe999.com",
  ];

  // 随机选择域名的函数
  const getRandomDomain = (): string => {
    const randomIndex = Math.floor(Math.random() * availableDomains.length);
    return availableDomains[randomIndex]!;
  };

  const [sites, setSites] = useState([
    {
      domain: "jlgrabe111.COM",
      ping: "479",
      route: "Recommended Route",
      status: "excellent",
      isLoading: false,
    },
    {
      domain: "jlgrabe222.COM",
      ping: "477",
      route: "Backup Route",
      status: "excellent",
      isLoading: false,
    },
    {
      domain: "jlgrabe333.COM",
      ping: "470",
      route: "High Speed Route",
      status: "excellent",
      isLoading: false,
    },
    {
      domain: "jlgrabe444.COM",
      ping: "553",
      route: "Stable Route",
      status: "good",
      isLoading: false,
    },
    {
      domain: "jlgrabe555.COM",
      ping: "479",
      route: "International Route",
      status: "excellent",
      isLoading: false,
    },
    {
      domain: "jlgrabe666.COM",
      ping: "578",
      route: "Exclusive Route",
      status: "good",
      isLoading: false,
    },
    {
      domain: "jlgrabe777.COM",
      ping: "498",
      route: "Premium Route",
      status: "good",
      isLoading: false,
    },
    {
      domain: "jlgrabe888.COM",
      ping: "470",
      route: "VIP Route",
      status: "excellent",
      isLoading: false,
    },
    {
      domain: "jlgrabe999.COM",
      ping: "522",
      route: "Elite Route",
      status: "good",
      isLoading: false,
    },
  ]);
  const simulateRequest = (index: number) => {
    // 设置加载状态
    setSites((prev) =>
      prev.map((site, i) =>
        i === index ? { ...site, isLoading: true } : site,
      ),
    );

    // 模拟1.5秒内的请求
    const requestTime = Math.random() * 1500 + 500; // 0.5-2秒之间

    setTimeout(() => {
      // 生成500ms以内的随机延迟
      const newPing = Math.floor(Math.random() * 500) + 1; // 1-500ms

      setSites((prev) =>
        prev.map((site, i) =>
          i === index
            ? {
              ...site,
              ping: newPing.toString(),
              isLoading: false,
              status:
                newPing < 300 ? "excellent" : newPing < 400 ? "good" : "fair",
            }
            : site,
        ),
      );
    }, requestTime);
  };

  // 添加客户端渲染状态
  const [isClient, setIsClient] = useState(false);

  // 确保只在客户端渲染星星
  useEffect(() => {
    setIsClient(true);
  }, []);

  const refreshAllSites = () => {
    sites.forEach((_, index) => {
      setTimeout(() => {
        simulateRequest(index);
      }, index * 200); // 错开每个站点的请求时间
    });
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-900">
      {/* Background Stars with Animation - 只在客户端渲染 */}
      {isClient && (
        <div className="absolute inset-0">
          {[...Array(200)].map((_, i) => {
            const randomX = Math.random() * 100;
            const randomY = Math.random() * 100;
            const animationDuration = 20 + Math.random() * 40;
            const animationDelay = Math.random() * 20;

            return (
              <div
                key={i}
                className="absolute h-1 w-1 animate-pulse rounded-full bg-white opacity-30"
                style={{
                  left: `${randomX}%`,
                  top: `${randomY}%`,
                  animation: `float ${animationDuration}s ease-in-out infinite`,
                  animationDelay: `${animationDelay}s`,
                }}
              />
            );
          })}
        </div>
      )}

      <div className="relative z-10 container mx-auto p-4 sm:p-6">
        {/* Header - 移动端优化 */}
        <header className="mb-6 sm:mb-8">
          {/* LOGO - 移动端居中显示 */}
          <div className="mb-4 flex justify-center sm:mb-6 sm:justify-start">
            <Image
              src="/logo-title.png"
              alt="8JL.COM"
              width={240}
              height={24}
              className="drop-shadow-lg"
            />
          </div>

          {/* 统计卡片 - 移动端堆叠布局 */}
          <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-end sm:space-y-0 sm:space-x-6 lg:space-x-12">
            {/* 在线用户统计 */}
            <div className="group relative">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-emerald-500/20 via-green-500/20 to-emerald-500/20 opacity-75 blur-sm transition-all duration-300 group-hover:opacity-100 group-hover:blur-md"></div>
              <div className="relative rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-emerald-900/20 via-green-900/10 to-emerald-800/20 px-4 py-3 backdrop-blur-sm transition-all duration-300 group-hover:border-emerald-400/50 sm:px-6 sm:py-4">
                <div className="flex items-center space-x-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full sm:h-10 sm:w-10">
                    <UserIcon className="text-emerald-300" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="glow-text bg-gradient-to-r from-emerald-300 via-green-400 to-emerald-300 bg-clip-text text-lg font-bold text-transparent drop-shadow-lg sm:text-2xl">
                      98,430
                    </div>
                    <div className="text-xs font-medium tracking-wider whitespace-nowrap text-emerald-300/80 uppercase">
                      Online Users
                    </div>
                  </div>
                </div>
                {/* 脉冲动画指示器 */}
                <div className="absolute -top-1 -right-1 h-3 w-3">
                  <div className="absolute h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></div>
                  <div className="relative h-full w-full rounded-full bg-emerald-500"></div>
                </div>
              </div>
            </div>

            {/* 可用站点统计 */}
            <div className="group relative">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-cyan-500/20 opacity-75 blur-sm transition-all duration-300 group-hover:opacity-100 group-hover:blur-md"></div>
              <div className="relative rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-cyan-900/20 via-blue-900/10 to-cyan-800/20 px-4 py-3 backdrop-blur-sm transition-all duration-300 group-hover:border-cyan-400/50 sm:px-6 sm:py-4">
                <div className="flex items-center space-x-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full sm:h-10 sm:w-10">
                    <CgWebsite className="text-xl text-blue-300 sm:text-2xl" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="glow-text bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-300 bg-clip-text text-lg font-bold text-transparent drop-shadow-lg sm:text-2xl">
                      10/10
                    </div>
                    <div className="text-xs font-medium tracking-wider whitespace-nowrap text-cyan-300/80 uppercase">
                      Available Sites
                    </div>
                  </div>
                </div>
                {/* 成功状态指示器 */}
                <div className="absolute -top-1 -right-1 h-3 w-3">
                  <div className="h-full w-full rounded-full bg-cyan-500 shadow-lg shadow-cyan-500/50"></div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Feature Cards - 移动端优化 */}
        <div className="mb-6 grid grid-cols-1 gap-3 sm:mb-8 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
          <div
            onClick={() => window.location.replace("https://www.jlgrabe.bet/promotions")}
            className="card-hover cursor-pointer rounded-xl border border-zinc-700 bg-gradient-to-br from-zinc-800/70 to-zinc-900/70 p-4 shadow-lg backdrop-blur-md transition-all duration-300 hover:border-pink-500 sm:p-6"
          >
            <div className="flex items-center space-x-3 sm:space-x-4">
              <div className="text-2xl drop-shadow-lg sm:text-3xl">🎁</div>
              <div>
                <div className="text-base font-bold text-white drop-shadow-sm sm:text-lg">
                  Promotions Center
                </div>
                <div className="mt-1 text-xs text-zinc-300 sm:text-sm">
                  Rich rewards await you
                </div>
              </div>
            </div>
            <div className="mt-3 h-1 w-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-60 sm:mt-4"></div>
          </div>

          <div
            onClick={() => window.location.replace("https://tawk.to/chat/68de05796f76d8194fba5631/1j6hkap6m")}
            className="card-hover cursor-pointer rounded-xl border border-zinc-700 bg-gradient-to-br from-zinc-800/70 to-zinc-900/70 p-4 shadow-lg backdrop-blur-md transition-all duration-300 hover:border-blue-400 sm:p-6"
          >
            <div className="flex items-center space-x-3 sm:space-x-4">
              <div className="text-2xl drop-shadow-lg sm:text-3xl">💬</div>
              <div>
                <div className="text-base font-bold text-white drop-shadow-sm sm:text-lg">
                  Customer Service
                </div>
                <div className="mt-1 text-xs text-zinc-300 sm:text-sm">
                  24/7 Online Service
                </div>
              </div>
            </div>
            <div className="mt-3 h-1 w-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 opacity-60 sm:mt-4"></div>
          </div>

          <div
            className="card-hover cursor-pointer rounded-xl border border-zinc-700 bg-gradient-to-br from-zinc-800/70 to-zinc-900/70 p-4 shadow-lg backdrop-blur-md transition-all duration-300 hover:border-emerald-400 sm:p-6"
            onClick={() => window.location.replace("https://www.jlgrabe.bet/down")}
          >
            <div className="flex items-center space-x-3 sm:space-x-4">
              <div className="text-2xl drop-shadow-lg sm:text-3xl">📱</div>
              <div>
                <div className="text-base font-bold text-white drop-shadow-sm sm:text-lg">
                  Download APP
                </div>
                <div className="mt-1 text-xs text-zinc-300 sm:text-sm">
                  Get our mobile app
                </div>
              </div>
            </div>
            <div className="mt-3 h-1 w-full rounded-full bg-gradient-to-r from-green-500 to-emerald-500 opacity-60 sm:mt-4"></div>
          </div>

          {/* Download Modal - 移动端优化 */}
          {showDownloadModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
              <div className="relative w-full max-w-sm rounded-2xl border border-gray-600 bg-zinc-900 p-4 shadow-2xl sm:max-w-md sm:p-6">
                {/* 关闭按钮 */}
                <button
                  onClick={() => window.location.replace("https://www.jlgrabe.bet/down")}
                  className="absolute top-3 right-3 cursor-pointer text-gray-400 transition-colors hover:text-white sm:top-4 sm:right-4"
                >
                  <svg
                    className="h-5 w-5 sm:h-6 sm:w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                {/* 标题 */}
                <div className="mb-4 text-center sm:mb-6">
                  <h2 className="text-lg font-bold text-white sm:text-xl">
                    扫码下载APP
                  </h2>
                </div>

                {/* 二维码区域 - 移动端优化 */}
                <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-6">
                  {/* iOS APP */}
                  <div className="flex flex-col items-center space-y-2 sm:space-y-3">
                    <div className="rounded-lg bg-white p-2 sm:p-3">
                      <Image
                        src="/qr.png"
                        alt="iOS QR Code"
                        width={80}
                        height={80}
                        className="rounded sm:h-24 sm:w-24"
                      />
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-semibold text-white sm:text-base">
                        iOS APP
                      </div>
                      <div className="text-xs text-gray-400 sm:text-sm">
                        iPhone / iPad
                      </div>
                    </div>
                  </div>

                  {/* Android APP */}
                  <div className="flex flex-col items-center space-y-2 sm:space-y-3">
                    <div className="rounded-lg bg-white p-2 sm:p-3">
                      <Image
                        src="/qr.png"
                        alt="Android QR Code"
                        width={80}
                        height={80}
                        className="rounded sm:h-24 sm:w-24"
                      />
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-semibold text-white sm:text-base">
                        Android APP
                      </div>
                      <div className="text-xs text-gray-400 sm:text-sm">
                        Android mobile / tablet
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div
            onClick={() => window.location.replace("https://www.jlgrabe.bet/register")}
            className="card-hover cursor-pointer rounded-xl bg-[url('/bg.png')] bg-cover bg-left bg-no-repeat p-4 opacity-80 shadow-lg backdrop-blur-md transition-all duration-300 hover:opacity-100 sm:p-6"
          >
            <div className="flex items-center justify-between space-x-3 sm:space-x-4">
              <div className="text-2xl drop-shadow-lg sm:text-3xl">✨</div>
              <div className="">
                <div className="text-base font-bold text-white drop-shadow-sm sm:text-lg">
                  Register Now
                </div>
                <div className="mt-1 text-xs text-zinc-300 sm:text-sm">
                  Join us today
                </div>
              </div>
            </div>
            <div className="mt-3 h-1 w-full rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 opacity-60 sm:mt-4"></div>
          </div>
        </div>

        {/* Main Content - 移动端优化 */}
        <div className="rounded-xl border border-zinc-600/50 bg-gradient-to-br from-zinc-800/40 to-zinc-900/40 p-4 shadow-2xl backdrop-blur-md sm:p-6">
          <div className="mb-4 flex flex-col space-y-3 sm:mb-6 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
            <div className="flex items-center space-x-2">
              <div className="text-lg text-orange-400 drop-shadow-lg sm:text-xl">
                🚀
              </div>
              <h2 className="text-lg font-bold text-amber-500 drop-shadow-sm sm:text-xl">
                Official Entry
              </h2>
            </div>
            {/* 刷新按钮 - 移动端优化 */}
            <button
              onClick={refreshAllSites}
              className="flex cursor-pointer items-center justify-center space-x-2 rounded-lg border border-yellow-400 px-3 py-2 text-xs text-white transition-all duration-300 hover:scale-105 hover:bg-yellow-900/20 hover:shadow-lg sm:px-4 sm:text-sm"
            >
              <RefreshCcw className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="font-medium">Refresh Speed Test</span>
            </button>
          </div>
          {/* Site Grid - 移动端优化 */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {sites.map((site, index) => {
              const pingValue = site.isLoading ? 0 : parseInt(site.ping);

              return (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-800/90 via-zinc-900/95 to-black/70 p-3 shadow-xl backdrop-blur-xl transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/20 sm:p-4"
                >
                  {/* ... existing code ... */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 via-transparent to-cyan-600/5" />
                  <div className="absolute -top-10 -right-10 h-20 w-20 rounded-full bg-gradient-to-br from-purple-500/10 to-cyan-500/10 blur-2xl transition-all duration-700 group-hover:scale-150" />

                  {/* 顶部装饰线 */}
                  <div className="absolute top-0 right-0 left-0 h-0.5 bg-gradient-to-r from-amber-600 to-yellow-500" />

                  <div className="relative z-10">
                    {/* 域名和状态 - 移动端优化 */}
                    <div className="mb-2 flex items-start justify-between sm:mb-3">
                      <div className="flex-1">
                        <div className="glow-text mb-1 bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-base font-bold text-transparent sm:mb-2 sm:text-lg">
                          {site.domain}
                        </div>
                        <div className="flex items-center space-x-2">
                          <div
                            className={`relative h-2 w-2 rounded-full ${site.isLoading
                              ? "bg-gray-400"
                              : pingValue < 300
                                ? "bg-emerald-400"
                                : pingValue < 400
                                  ? "bg-amber-400"
                                  : "bg-orange-400"
                              } shadow-xs`}
                          >
                            {!site.isLoading && (
                              <div
                                className={`absolute inset-0 animate-ping rounded-full ${pingValue < 300
                                  ? "bg-emerald-400"
                                  : pingValue < 400
                                    ? "bg-amber-400"
                                    : "bg-orange-400"
                                  }`}
                              />
                            )}
                          </div>
                          <span className="text-xs font-medium text-slate-300">
                            {site.isLoading ? "Testing..." : "Online"}
                          </span>
                        </div>
                      </div>
                      {/* 刷新按钮 */}
                      <button
                        onClick={() => simulateRequest(index)}
                        disabled={site.isLoading}
                        className="group/refresh rounded-lg p-1 text-slate-400 transition-all duration-300 hover:bg-slate-700/50 hover:text-amber-400 disabled:cursor-not-allowed disabled:opacity-50 sm:p-1.5"
                      >
                        <svg
                          className={`h-3 w-3 transition-transform duration-300 sm:h-4 sm:w-4 ${site.isLoading
                            ? "animate-spin"
                            : "group-hover/refresh:rotate-180"
                            }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                          />
                        </svg>
                      </button>
                    </div>

                    {/* 延迟和路由信息 - 移动端优化 */}
                    <div className="mb-3 flex items-center justify-between sm:mb-4">
                      <div className="flex items-center space-x-1">
                        {site.isLoading ? (
                          <div className="flex items-center space-x-1">
                            <div className="h-1 w-1 animate-pulse rounded-full bg-gray-400 [animation-delay:0ms]"></div>
                            <div className="h-1 w-1 animate-pulse rounded-full bg-gray-400 [animation-delay:150ms]"></div>
                            <div className="h-1 w-1 animate-pulse rounded-full bg-gray-400 [animation-delay:300ms]"></div>
                          </div>
                        ) : (
                          <span
                            className={`text-xl font-bold sm:text-2xl ${pingValue < 300
                              ? "text-emerald-400"
                              : pingValue < 400
                                ? "text-amber-400"
                                : "text-orange-400"
                              }`}
                          >
                            {site.ping}
                          </span>
                        )}
                        <span className="text-xs text-slate-400 sm:text-sm">
                          ms
                        </span>
                      </div>
                    </div>

                    {/* 按钮组 - 移动端优化 */}
                    <div className="flex space-x-2">
                      <button
                        className="group/btn relative flex flex-1 cursor-pointer items-center justify-center space-x-1 overflow-hidden rounded-lg bg-gradient-to-r from-amber-500 to-yellow-600 p-2 font-bold text-white shadow-lg transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/25"
                        disabled={site.isLoading}
                        onClick={() => {
                          const randomDomain = getRandomDomain();
                          window.location.replace(randomDomain);
                        }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-yellow-600 opacity-0 transition-opacity duration-300 group-hover/btn:opacity-100" />
                        <span className="relative z-10 text-xs sm:text-sm">
                          🚀
                        </span>
                        <span className="relative z-10 text-xs sm:text-sm">
                          Enter
                        </span>
                        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover/btn:translate-x-full" />
                      </button>

                      <button
                        onClick={() => simulateRequest(index)}
                        className="group/test flex cursor-pointer items-center space-x-1 rounded-lg border border-slate-500/30 bg-gradient-to-r from-slate-700/80 via-slate-600/80 to-slate-700/80 px-2 py-2 text-white backdrop-blur-sm transition-all duration-300 hover:border-slate-400/50 hover:shadow-lg hover:shadow-slate-500/25 sm:px-3"
                        disabled={site.isLoading}
                      >
                        <span className="text-xs transition-transform duration-300 group-hover/test:scale-110 sm:text-sm">
                          📊
                        </span>
                        <span className="text-xs font-medium">Test</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Announcement Section - 移动端优化 */}
        <div className="mt-6 rounded-xl border border-orange-500/30 bg-gradient-to-br from-orange-900/20 via-amber-900/10 to-orange-800/20 p-4 shadow-2xl backdrop-blur-md sm:mt-8 sm:p-6">
          <div className="mb-3 flex items-center space-x-3 sm:mb-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-orange-500/20 to-amber-500/20 sm:h-10 sm:w-10">
              <span className="text-lg sm:text-xl">📢</span>
            </div>
            <h2 className="bg-gradient-to-r from-orange-300 via-amber-400 to-orange-300 bg-clip-text text-lg font-bold text-transparent drop-shadow-sm sm:text-xl">
              Important Announcement
            </h2>
          </div>
          <div className="space-y-2 sm:space-y-3">
            <div className="flex items-start space-x-3">
              <div className="mt-1.5 h-2 w-2 rounded-full bg-orange-400 shadow-sm"></div>
              <p className="text-xs leading-relaxed text-gray-300 sm:text-sm">
                1. Download the APP and Claim up to 777P Bonus instantly
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="mt-1.5 h-2 w-2 rounded-full bg-orange-400 shadow-sm"></div>
              <p className="text-xs leading-relaxed text-gray-300 sm:text-sm">
                2. Share and Earn，Referral Bonus + Topup Commission +
                Cumulative Invite Friend
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="mt-1.5 h-2 w-2 rounded-full bg-orange-400 shadow-sm"></div>
              <p className="text-xs leading-relaxed text-gray-300 sm:text-sm">
                3. Deposit up to 5 times & unlock a total of 345% Bonus
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="mt-1.5 h-2 w-2 rounded-full bg-orange-400 shadow-sm"></div>
              <p className="text-xs leading-relaxed text-gray-300 sm:text-sm">
                4. Daily First Deposit Get up to 555P
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="mt-1.5 h-2 w-2 rounded-full bg-orange-400 shadow-sm"></div>
              <p className="text-xs leading-relaxed text-gray-300 sm:text-sm">
                5. 15 Red Envelopes Per Day bonus up to 12899P
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="mt-1.5 h-2 w-2 rounded-full bg-orange-400 shadow-sm"></div>
              <p className="text-xs leading-relaxed text-gray-300 sm:text-sm">
                6. Sign In 15 Days & Claim up to P1646 Bonus!
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <p className="text-xs leading-relaxed text-gray-300 sm:text-sm">
                More activities, please enter the official website activity page
                for more information
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer - 移动端优化 */}
      <footer className="relative z-10 mt-8 border-t border-zinc-700/50 bg-gradient-to-br from-zinc-900/80 to-zinc-900/80 backdrop-blur-md sm:mt-12">
        <div className="container mx-auto px-4 py-6 sm:px-6 sm:py-8">
          <div className="flex flex-col items-center justify-between space-y-3 sm:flex-row sm:space-y-0 md:space-y-0">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-xs text-zinc-400 sm:text-sm">
                © 2025 jlgrabe.COM. All rights reserved.
              </p>
            </div>

            {/* Footer Links */}
            <div className="flex flex-wrap items-center justify-center space-x-4 text-xs sm:space-x-6 sm:text-sm">
              <p
                onClick={() =>
                  toast("About us will be available soon!", {
                    className:
                      " !bg-gradient-to-br !from-orange-900  !to-zinc-950 !text-white border !border-zinc-700",
                    icon: <Bell className="h-4 w-4" />,
                  })
                }
                className="cursor-pointer text-zinc-400 transition-colors duration-300 hover:text-cyan-400"
              >
                About Us
              </p>
              <p
                onClick={() =>
                  toast("Terms of Service will be available soon!", {
                    className:
                      " !bg-gradient-to-br !from-orange-900  !to-zinc-950 !text-white border !border-zinc-700",
                    icon: <Bell className="h-4 w-4" />,
                  })
                }
                className="cursor-pointer text-zinc-400 transition-colors duration-300 hover:text-cyan-400"
              >
                Terms of Service
              </p>
              <p
                onClick={() =>
                  toast("Privacy Policy will be available soon!", {
                    className:
                      " !bg-gradient-to-br !from-orange-900  !to-zinc-950 !text-white border !border-zinc-700",
                    icon: <Bell className="h-4 w-4" />,
                  })
                }
                className="cursor-pointer text-zinc-400 transition-colors duration-300 hover:text-cyan-400"
              >
                Privacy Policy
              </p>
            </div>
          </div>

          {/* Decorative Line */}
          <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-zinc-600/50 to-transparent sm:mt-6"></div>
        </div>
      </footer>
    </div>
  );
}
