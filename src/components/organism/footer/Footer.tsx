export default function Footer() {
  return (
    <>
      <footer className="text-white py-8 px-4">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left">
            <h1 className="text-lg font-bold text-green-500">CodeLingo</h1>
            <p className="text-sm mt-2 w-full md:w-2/3 opacity-80">
              Jl. Prof. Soedarto, Tembalang, Kec. Tembalang, Kota Semarang, Jawa
              Tengah 50275
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex md:flex-col flex-row gap-4 md:gap-2 text-sm text-right">
            <a href="#" className="hover:text-green-500">
              HOME
            </a>
            <a href="#" className="hover:text-green-500">
              OUR SERVICE
            </a>
            <a href="#" className="hover:text-green-500">
              ABOUT
            </a>
          </div>
        </div>
        <div className="border-t-2 border-gray-700 mt-8 mx-24 pt-4 text-center text-sm">
          © 2024 FUFUFAFA
        </div>
      </footer>
    </>
  );
}
