import Follow from "../follow";


export default function Footer() {
  return (
    <footer>
      <div className="relative mx-auto max-w-6xl px-3 sm:px-3 font-sans">
        {/* Footer illustration */}
        <div className="sm:grid-rows-[auto_auto] md:grid-cols-4 md:grid-rows-[auto_auto] lg:grid-rows-1">
          {/* 3rd block */}
          <Follow />
          <div className="justify-self-end col-span-1 md:col-span-4 lg:col-span-1 lg:text-right">
            <div className="max-w-fit bg-opacity-65 text-md mb-4">
                © FirstDevs.net
                <a
                  className="transition hover:text-indigo-500 p-4"
                  href="/terms"
                >
                  Terms
                </a>                
                |
                <a
                  className="transition hover:text-indigo-500 p-4"
                  href="/privacy"
                >
                  Privacy
                </a>
                |
                <a
                  className="transition hover:text-indigo-500 p-4"
                  href="/support"
                >
                  Support
                </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
