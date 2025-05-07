import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import anishaImg from "./assets/images/avatar-anisha.png";
import aliImg from "./assets/images/avatar-ali.png";
import richardImg from "./assets/images/avatar-richard.png";
import shanaiImg from "./assets/images/avatar-shanai.png";
import { Button } from "./Button";
export function Slides() {
  const testimonies = [
    {
      img: anishaImg,
      text: "  “Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.” ",
      name: " Anisha Li",
    },
    {
      img: aliImg,
      text: '“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused" ',
      name: "Ali Bravo",
    },
    {
      img: richardImg,
      text: " “Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!” ",
      name: "Richard Watts",
    },
    {
      img: shanaiImg,
      text: " “Their software allows us to track, manage and collaborate on our projects  from anywhere. It keeps the whole team in-sync without being intrusive.” ",
      name: "  Shanai Gough",
    },
  ];

  return (
    <section className="mt-2 px-5 md:px-0 py-9">
      <h2 className="text-center ">What they've said</h2>
      <Swiper
        autoHeight={false}
        className="w-full !p-0 !m-0 flex"
        modules={[Autoplay, Pagination]}
        loop={true}
        grabCursor={true}
        spaceBetween={30}
        slidesPerView={1}
        speed={600}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        breakpoints={{
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
            speed: 3000,
            autoplay: {
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            },
          },
        }}
        onBreakpoint={(swiper) => {
          if (window.innerWidth >= 1024) {
            swiper.pagination.disable();
            swiper.autoplay.start();
          } else {
            swiper.pagination.enable();
            swiper.autoplay.stop();
          }
        }}
      >
        {testimonies.map((item, i) => (
          <SwiperSlide
            key={i}
            className="bg-very-light-gray rounded-sm lg:mt-[5rem] mt-[1.5rem] lg:px-4 px-4 flex flex-col h-full "
          >
            <div className="text-center flex flex-col gap-6 flex-grow  pb-16 lg:min-h-[22rem] lg:pb:0">
              <div className="flex justify-center items-center-safe">
                <img className="w-[7rem]" src={item.img} alt="" />
              </div>
              <h3>{item.name}</h3>
              <p>{item.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="text-center mt-6 lg:mt-12">
        <Button>Get Started</Button>
      </div>
    </section>
  );
}
