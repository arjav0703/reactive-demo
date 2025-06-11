// psst! If you already know Tailwind CSS, you can use it without any setup!

/// go ahead and remove the content of this and start crafting your own
export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-pink-100 to-yellow-100 flex items-center justify-center">
      <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-10 max-w-lg w-full flex flex-col items-center border border-pink-200">
        <div className="mb-4 flex items-center gap-2">
          <span className="text-3xl">🚀</span>
          <h1 className="text-3xl font-extrabold text-pink-600 drop-shadow">
            Welcome, Hackclubber!
          </h1>
        </div>
        <p className="text-lg text-gray-700 text-center mb-6">
          You have successfully started the server.
          <br />
          Go ahead and edit{" "}
          <code className="bg-pink-100 px-2 py-1 rounded font-mono text-pink-700">
            app/page.js
          </code>{" "}
          to get started and turn this into a masterpiece.
        </p>
        <div className="flex gap-3">
          <a
            href="https://tailwindcss.com/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-pink-500 text-white font-semibold hover:bg-pink-600 transition"
          >
            Tailwind Docs
          </a>
          <a
            href="https://hackclub.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-yellow-400 text-pink-900 font-semibold hover:bg-yellow-500 transition"
          >
            See the guide
          </a>
        </div>
      </div>
    </div>
  );
}