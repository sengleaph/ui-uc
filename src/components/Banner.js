export default function Banner() {
    return (
      <div className="relative">
        <img
          src="https://dlcdnwebimgs.asus.com/gain/87A7680C-3702-4D1C-ACEA-4D99F6B4BB1C/fwebp" // Replace with your banner image path
          alt="Banner"
          className="w-full h-200 object-cover"
        />
        {/* <div className="absolute inset-0 flex items-center justify-center">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
            Shop Now
          </button>
        </div> */}
      </div>
    );
  }
  