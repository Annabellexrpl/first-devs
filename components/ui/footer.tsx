export default function Footer() {
  return (
    <footer>
      <div className="relative mx-auto max-w-6xl px-3 sm:px-3 font-sans">
        {/* Footer illustration */}
        <div className="sm:grid-rows-[auto_auto] md:grid-cols-4 md:grid-rows-[auto_auto] lg:grid-rows-1">
          {/* 3rd block */}
          <div className="justify-self-end col-span-1 md:col-span-4 lg:col-span-1 lg:text-right">
            <div className="max-w-fit bg-opacity-65 text-sm">
              <p className="mb-3 text-indigo-200/65">
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
                </p>
                <a
                    className="text-blue-500 transition hover:text-blue-400"
                    href="https://x.com/firstdevs"
                    aria-label="Twitter"
                  >
                    <svg
                      className="h-8 w-8 fill-current"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z" />
                    </svg>
                </a>

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
