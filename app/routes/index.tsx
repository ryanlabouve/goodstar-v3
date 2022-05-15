import SimpleImageSlider from "react-simple-image-slider";
import useWindowSize from "~/hooks/use-window-size";

interface Image {
  original: string;
  thumbnail: string;
}
interface Service {
  heading: string;
  description: string;
  background: string;
  images: Image[];
}

const services: Service[] = [
  {
    heading: "Selective Demolition",
    description:
      "Removing features of an existing space or strucutre. Examples: when one commercial space moves out and a new tennent requires something different ",
    background: "/images/selective-demolition-1.jpg",
    images: [
      {
        original: "/images/selective-demolition/1-1200.jpg",
        thumbnail: "/images/selective-demolition/1-600-thumbnail.jpg",
      },
      {
        original: "/images/selective-demolition/2-1200.jpg",
        thumbnail: "/images/selective-demolition/2-600-thumbnail.jpg",
      },
    ],
  },
  {
    heading: "Deconstruction",
    description: "Breaking down a strucutre to salvage the underlying material",
    background: "/images/deconstruction-bg-1.jpg",
    images: [
      {
        original: "/images/deconstruction/1-1200.jpg",
        thumbnail: "/images/deconstruction/1-600-thumbnail.jpg",
      },
      {
        original: "/images/deconstruction/2-1200.jpg",
        thumbnail: "/images/deconstruction/2-600-thumbnail.jpg",
      },
    ],
  },
  {
    heading: "Structural Demolition",
    description:
      "Removal of whole structures. Examples: removing an existing home to rebuild, removing commercial strucutres to rebuild",
    background: "/images/total-demolition-bg-4.jpg",
    images: [
      {
        original: "/images/structural-demolition/1-1200.jpg",
        thumbnail: "/images/strucrtual-demolition/1-600-thumbnail.jpg",
      },
      {
        original: "/images/structural-demolition/2-1200.jpg",
        thumbnail: "/images/structural-demolition/2-600-thumbnail.jpg",
      },
    ],
  },
  {
    heading: "Concrete Removal",
    description:
      "From removing large runs of parking lot to creating new runs in foundations for plumbing",
    background: "/images/concrete-removal-bg-1.jpg",
    images: [
      {
        original: "/images/concrete-removal/1-1200.jpg",
        thumbnail: "/images/concrete-removal/1-600-thumbnail.jpg",
      },
      {
        original: "/images/concrete-removal/2-1200.jpg",
        thumbnail: "/images/concrete-removal/2-600-thumbnail.jpg",
      },
    ],
  },

  {
    heading: "Disaster Recovery",
    description:
      "When storms come'a'knocking we go a rocking. Goodstar parterns with various diaster relief organizations to volunteer.",
    background: "/images/disaster-recovery-bg-1.jpg",
    images: [
      {
        original: "/images/dr/1-1200.jpg",
        thumbnail: "/images/dr/1-600-thumbnail.jpg",
      },
      {
        original: "/images/dr/2-1200.jpg",
        thumbnail: "/images/dr/2-600-thumbnail.jpg",
      },
    ],
  },
];
export default function Index() {
  let windowSize = useWindowSize();
  let w = windowSize.width > 800 ? 600 : 300;
  let h = windowSize.width > 800 ? 400 : 200;

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
        {services.map(({ heading, description, background, images }) => (
          <div
            style={{
              backgroundImage: `url(${background})`,
            }}
            className="bg-gray-300 py-20 bg-cover text-white "
            key={heading}
          >
            <div className="flex  max-w-7xl m-auto px-4 py-4">
              <div className="grid sm:grid-cols-1 md:grid-cols-2 w-full gap-12">
                <div className="flex items-center">
                  <div>
                    <div className="text-4xl mb-2">{heading}</div>
                    <div className="text-lg">{description}</div>
                  </div>
                </div>
                <div>
                  <SimpleImageSlider
                    width={w}
                    height={h}
                    images={images.map((i) => i.original)}
                    showBullets={true}
                    showNavs={true}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div id="working-with-us">
        <div className="flex  max-w-7xl m-auto px-4">Working with us</div>
      </div>
    </div>
  );
}
