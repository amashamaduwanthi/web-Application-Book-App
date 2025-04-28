import Slider from 'react-slick'
const TestimonialData=[
    {
        id: 1,
        name: "Emily Rose",
        role: "Avid Reader",
        review:
            "BookApp has completely changed the way I read. I love the personalized recommendations and the beautiful interface. It’s like having a library in my pocket!",
        image: "https://randomuser.me/api/portraits/women/5.jpg",
    },
    {
        id: 2,
        name: "Liam Carter",
        role: "Book Lover",
        review:
            "Such a smooth experience! From classics to new releases, everything I want is here. Plus, the reading tracker keeps me motivated to hit my goals.",
        image: "https://randomuser.me/api/portraits/men/4.jpg",
    },
    {
        id: 3,
        name: "Sophie Turner",
        role: "Literature Blogger",
        review:
            "BookApp blends tech and reading perfectly. I love writing reviews, sharing lists, and connecting with fellow bookworms. It’s a dream for any book enthusiast.",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
    {
        id: 4,
        name: "James Anderson",
        role: "Premium Member",
        review:
            "The curated book lists and easy-to-navigate interface make BookApp stand out. I’ve discovered so many amazing authors I wouldn’t have found otherwise!",
        image: "https://randomuser.me/api/portraits/men/6.jpg",
    }

]
export
function Testimonial(){
     var settings = {
        dots:true,
        arrows:false,
        infinite: true,
        speed:500,

        slidesToScroll:1,
        autoplay:true,
        autoplaySpeed:2000,
        cssEase:'linear',
        pauseOnHover:true,
        pauseOnFocus:true,
        responsive:[
            {
                breakpoint:10000,
                settings:{
                    slidesToScroll:1,
                    slidesToShow:2,
                    infinite:true,
                },
            },
            {
                breakpoint:1024,
                settings:{
                    slidesToScroll:1,
                    slidesToShow:2,
                    initialSlide:2,
                },
            },
            {
                breakpoint:640,
                settings:{
                    slidesToScroll:1,
                    slidesToShow:1,
                },
            },
        ]
    }
    return(
        <>
            <div className="pb-10">
                <div className="container">
                    <div className="text-center mb-20 max-w-[400px] mx-auto">
                        <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                            What Our Customer Says
                        </p>
                        <h1 className="text-3xl font-bold">Testimonial</h1>
                        <p className="text-xs text-gray-400">Hear what our happy clients have to say! Real stories, real experiences — discover how we’ve made a difference in their journey.

                        </p>
                    </div>
                    <div>
                      <Slider {...settings}>
                          {TestimonialData.map((data)=>(
                                <div className="my-6">
                                  <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-primary/10 relative">
                                      <div>
                                          <img src={data.image} alt="" className="rounded-full w-20 h-20 object-cover"/>
                                      </div>
                                      <div>
                                          <div>
                                              <p className="text-gray-500 text-sm">{data.review}</p>
                                              <h1 className="text-xl font-bold text-black/80">{data.name}</h1>
                                          </div>
                                      </div>
                                      <p className="absolute text-black/20 z-10 top-0 right-0 font-serif text-9xl">,,</p>
                                  </div>

                                </div>
                          )

                          )}
                      </Slider>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Testimonial;