export default function Footer() {
  return (
    <footer className="glass border-t border-white/10 mt-auto">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Built with Next.js, Tailwind &
          Sanity.
        </p>
      </div>
    </footer>
  );
}
