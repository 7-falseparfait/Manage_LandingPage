import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
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
    <section className=" mt-2 container-padding py-9">
      <h2 className="text-center">What they've said</h2>
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={1}
      >
        {testimonies.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="text-center flex flex-col gap-6 mt-14 pb-16">
              <div className="flex justify-center items-center-safe">
                <img className="w-[7rem]" src={item.img} alt="" />
              </div>
              <h3>{item.name}</h3>
              <p>{item.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="text-center mt-6">
        <Button>Get Started</Button>
      </div>
    </section>
  );
}
