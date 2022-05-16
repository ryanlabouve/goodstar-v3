import useWindowSize from "~/hooks/use-window-size";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

export function links() {
  return [
    {
      rel: "stylesheet",
      href: "https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.1.4/swiper-bundle.css",
    },
  ];
}
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
    description:
      "Breaking down a strucutre to either salvage the underlying material or disassemble structure in a particular or controlled fasion",
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
      "From removing large runs of parking lot or selected parts of a foundation",
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
      "When storms come'a'knocking we come a rocking. Goodstar parterns with various diaster relief organizations to volunteer.",
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
    <div style={{ minWidth: "540px;" }}>
      {/*Header*/}
      <div className="bg-slate-800 text-gray-50 py-6 px-4 shadow border-b border-b-slate-900">
        <div className="flex  max-w-7xl m-auto">
          <img
            src="/images/logo2.svg"
            className="w-72"
            alt="Goodstar Demolition"
          />
          <div className="flex-grow"></div>
          <div className="flex mt-8 ">
            <div className="md:flex hidden">
              <div className="mr-4">
                <a href="#about-us">About Us</a>
              </div>
              <div className="mr-4">
                <a href="#our-services">Our Services</a>
              </div>
              <div className="mr-4">
                <a href="#contact-us">Contact Us</a>
              </div>
            </div>
            <div className="mr-4">
              <a href="https://www.facebook.com/goodstardemolition">
                <img
                  style={{ filter: "invert(1)" }}
                  src="/images/facebook.svg"
                  className="w-6"
                  alt="Facebook"
                />
              </a>
            </div>
            <div className="mr-4">
              <a href="https://twitter.com/goodstardemo">
                <img
                  style={{ filter: "invert(1)" }}
                  src="/images/instagram.svg"
                  className="w-6  stroke-current"
                  alt="Facebook"
                />
              </a>
            </div>
            <div className="mr-4">
              <a href="https://www.linkedin.com/company/goodstardemolition/">
                <img
                  style={{ filter: "invert(1)" }}
                  src="/images/linkedin.svg"
                  className="w-6  stroke-current"
                  alt="LinkedIn"
                />
              </a>
            </div>
            <div>
              <a href="mailto:ryan@goodstardemolition.com">
                <img
                  style={{ filter: "invert(1)" }}
                  src="/images/mail.svg"
                  className="w-6  stroke-current"
                  alt="email"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Hero */}
      <div
        style={{
          backgroundImage: "url(/images/hero6.jpg)",
        }}
        className="bg-gray-300 py-20 bg-cover"
      >
        <div className="flex  max-w-7xl m-auto px-6 py-8 md:py-14 lg:py-32 xl:py-52">
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4 w-full">
            <div className="col-span-2">
              <div
                style={{
                  color: "rgba(255, 255, 255, 0.85)",
                  lineHeight: "1.2",
                  opacity: "0.95",
                }}
                className="text-5xl md:text-6xl font-bold mb-3"
              >
                Fast and Reliable Commercial Demolition For Oklahoma
              </div>
              <div className="text-white">
                Call <span className="text-blue-300">(405) 362-7815</span> today
                for help on your next project.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="about-us" className="bg-gray-50 py-8 text-gray-700">
        <div className="md:flex  max-w-7xl m-auto px-4 py-12">
          <img
            src="/images/team.png"
            style={{ width: "300" }}
            className="mr-12"
          />
          <div className=" mt-8 max-w-2xl">
            <div className="text-4xl mb-3 text-gray-800">About Goodstar</div>
            <div className=" mb-3">
              Goodstar started with Tyler &amp; Ryan creating a demolition
              business to help fun disaster relief efforts. Turns out demolition
              is fun and they were good at it. Quickley expanding to add Matt
              and Dan, the first crew of Goodstar was born.
            </div>
            <div>
              Since then Goodstar has expanded and focused on commercial
              demolition. Learn more about our services below. Call{" "}
              <span className="text-blue-600">(405) 362-7815</span> today for
              help on your next project.
            </div>
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
                <div
                  style={{
                    maxWidth: "100%",
                    overflow: "hidden",
                  }}
                >
                  <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log("slide change")}
                  >
                    {images.map((i) => (
                      <SwiperSlide key={i.original}>
                        <img src={i.original} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div id="contact-us">
        <div className="max-w-7xl m-auto px-4 py-14">
          <div className="text-4xl">Contact Us</div>
          <div>
            Contact us today at{" "}
            <span className="text-blue-300">(405) 362-7815</span> today
          </div>
        </div>
      </div>
    </div>
  );
}
