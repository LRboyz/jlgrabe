export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black">
      {/* WiFi Loading Icon */}
      <div className="mb-8">
        <div className="relative">
          {/* WiFi Signal Bars */}
          <div className="flex items-end space-x-1">
            <div className="h-2 w-2 animate-pulse rounded-full bg-cyan-400"></div>
            <div
              className="h-4 w-2 animate-pulse rounded-full bg-green-400"
              style={{ animationDelay: "0.2s" }}
            ></div>
            <div
              className="h-6 w-2 animate-pulse rounded-full bg-yellow-400"
              style={{ animationDelay: "0.4s" }}
            ></div>
            <div
              className="h-8 w-2 animate-pulse rounded-full bg-pink-400"
              style={{ animationDelay: "0.6s" }}
            ></div>
          </div>

          {/* WiFi Arc Lines */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 transform">
            <div className="h-6 w-12 animate-pulse rounded-t-full border-2 border-b-0 border-cyan-400 opacity-60"></div>
          </div>
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 transform">
            <div
              className="h-8 w-16 animate-pulse rounded-t-full border-2 border-b-0 border-green-400 opacity-40"
              style={{ animationDelay: "0.3s" }}
            ></div>
          </div>
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 transform">
            <div
              className="h-10 w-20 animate-pulse rounded-t-full border-2 border-b-0 border-pink-400 opacity-20"
              style={{ animationDelay: "0.6s" }}
            ></div>
          </div>
        </div>
      </div>

      {/* Loading Text */}
      <p className="text-lg font-light tracking-wide text-gray-300">
        Loading the best route...
      </p>

      {/* Optional Loading Dots Animation */}
      <div className="mt-4 flex space-x-1">
        <div className="h-2 w-2 animate-bounce rounded-full bg-gray-500"></div>
        <div
          className="h-2 w-2 animate-bounce rounded-full bg-gray-500"
          style={{ animationDelay: "0.1s" }}
        ></div>
        <div
          className="h-2 w-2 animate-bounce rounded-full bg-gray-500"
          style={{ animationDelay: "0.2s" }}
        ></div>
      </div>
    </div>
  );
}
