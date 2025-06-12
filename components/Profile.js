export default function Profile({ user }) {
  const size = typeof user.imageSize === "number"
    ? `${user.imageSize}px`
    : user.imageSize;

  return (
    <div className="w-sm mx-auto bg-transparent border-1 border-white backdrop-blur-xl backdrop-brightness-70 rounded-xl shadow-md overflow-hidden hover:scale-105 active:scale-95">
      <div className="flex flex-col items-center p-6">
        <div
          className="rounded-full overflow-hidden border-4 border-red-400 shadow-lg"
          style={{ width: size, height: size }}
        >
          <img
            src={user.imageUrl}
            alt={`Photo of ${user.name}`}
            className="w-full h-full object-cover"
          />
        </div>

        <h1 className="mt-4 text-2xl font-semibold text-red-500">
          {user.name}
        </h1>
      </div>
    </div>
  );
}
