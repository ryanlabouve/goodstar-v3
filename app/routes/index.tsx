export default function Index() {
  return (
    <div>
      {/*Header*/}
      <div className="bg-slate-800 text-gray-50 py-6 px-4 shadow border-b border-b-slate-900">
        <div className="flex  max-w-7xl m-auto">
          <img
            src="/images/logo2.svg"
            className="w-72"
            alt="Goodstar Demolition"
          />
          <div className="flex-grow"></div>
          <div className="flex mt-8">
            <div className="mr-4">About Us</div>
            <div className="mr-4">Our Services</div>
            <div className="mr-4">Working with us</div>
            <div className="mr-4">
              <img
                style={{ filter: "invert(1)" }}
                src="/images/facebook.svg"
                className="w-6"
                alt="Facebook"
              />
            </div>
            <div>
              <img
                style={{ filter: "invert(1)" }}
                src="/images/instagram.svg"
                className="w-6  stroke-current"
                alt="Facebook"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Hero */}
      <div
        style={{
          backgroundImage: "url(/images/hero5.jpg)",
        }}
        className="bg-gray-300 py-20 bg-cover"
      >
        <div className="flex  max-w-7xl m-auto px-4 py-14">
          <div className="grid grid-cols-2 gap-4 w-full">
            <div
              style={{
                color: "rgba(255, 255, 255, 0.85)",
              }}
              className="text-6xl font-bold"
            >
              OKC's Commercial Demolition &amp; Deconstruction Specialists
            </div>
            <div>
              <div
                className="p-6 text-white"
                style={{
                  background: "rgba(0, 0, 0, 0.7)",
                }}
              >
                Contact us today for help with your next project! (405)XXX-XXXX
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="about-us" className="bg-gray-50 py-8">
        <div className="flex  max-w-7xl m-auto px-4">
          <div className="text-2xl">About Us</div>

          <div>
            Focused on commercial. About our team forming in Norman. Philthropy
            stuffs
          </div>
        </div>
      </div>
      <div id="our-services">
        <div className="bg-red-300">
          <div className="flex  max-w-7xl m-auto px-4">
            Selective Demolition
          </div>
        </div>
        <div className="bg-blue-300">
          <div className="flex  max-w-7xl m-auto px-4">Deconstruction</div>
        </div>
        <div className="bg-red-300">
          <div className="flex  max-w-7xl m-auto px-4">
            Structural Demolition
          </div>
        </div>
        <div className="bg-blue-300">
          <div className="flex  max-w-7xl m-auto px-4">Concrete Removal</div>
        </div>
        <div className="bg-red-300">
          <div className="flex  max-w-7xl m-auto px-4">Disaster Recovery</div>
        </div>
      </div>
      <div id="working-with-us">
        <div className="flex  max-w-7xl m-auto px-4">Working with us</div>
      </div>
    </div>
  );
}
