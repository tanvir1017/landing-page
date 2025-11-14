export default function AnnouncementBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-indigo-50 border-b border-indigo-100">
      <div className="flex justify-center items-center px-4 py-3">
        <p className="text-sm font-medium text-indigo-700">
          We just raised our biggest update – Brand V3.0 🚀{" "}
          <span className="cursor-pointer hover:underline">Check it out →</span>
        </p>
      </div>
    </div>
  );
}
