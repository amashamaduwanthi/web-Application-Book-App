import Book1 from '../../assets/download.jpg'
import Book2 from '../../assets/download (1).jpg'
import Book3 from '../../assets/Book Covers.jpg'
import Book4 from '../../assets/Amazon KDP book cover design.jpg'
import vector from '../../assets/7084.png'
import {useState} from "react";
const ImageList=[ {
    id: 1,
    img: Book2,
    title: "His Life will forever be changed",
    description: "A gripping tale of unexpected twists, where one decision sets off a chain of events that will redefine the course of a man's life."
},
    {
        id: 2,
        img: Book3,
        title: "Who's there",
        description: "A suspenseful mystery that keeps you on edge as strange events unfold behind closed doors, blurring the line between fear and curiosity."
    },
    {
        id: 3,
        img: Book4,
        title: "Lee boy",
        description: "Follow the journey of Lee, a young dreamer navigating challenges and chasing ambitions in a world that tests his courage at every step."
    }
]

export function Hero({handleOrderPopup}){
    const [imageId, setImageId] = useState(Book1)
    const [title, setTitle] = useState('His Life will forever be changed')
    const [description, setDescription] = useState('In a world where truth is often hidden beneath layers of illusion, this captivating novel explores the depths of human emotion, the complexities of relationships, and the resilience of the human spirit. When an unexpected event shatters the ordinary, the characters are forced to confront their past, unravel secrets, and discover strength in places they never imagined.')

    const bgImage={
        backgroundImage:{vector},
        backgroundPosition:"center ",
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover",
        width:"100%",
    }
    return (
        <>
            <div className="min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center  duration-200"
           >

              <div className="container pb-8 sm:pb-0">
                  <div className="grid grid-cols-1 sm:grid-cols-2">
                      <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1">

                          <h1 data-aos="zoom-out" data-aos-duration="500" className="text-5xl sm:text-6xl lg:text-7xl font-bold">{title}
                          <p className="bg-clip-text text-transparent bg-gradient-to-b from-primary text-right text-xl to-secondary">by Anonymous</p></h1>
                          <p
                              data-aos="slide-up"   data-aos-duration="500" data-aos-delay="100"
                              className="text-5m">{description}</p>
                          <div>
                              <button  onClick={handleOrderPopup} data-aos="zoom-in" className="bg-gradient-to-r from-primary to-secondary text-white
                              px-4 py-2 rounded-md mt-4 hover:scale-105 duration-200">Order Now</button>
                          </div>
                      </div>
                      <div className="min-h-[450px] flex justify-center items-center relative order-1 sm:order-2">
                          {/*main image*/}
                          <div className="h-[300px] sm:h-[450px] overflow-hidden flex justify-center items-center">
                              <img src={imageId} alt=""
                              className="w-[300px] h-[300px] sm:[h-450px] sm:w-[450px] sm:scale-125 object-contain mx-auto"/>
                          </div>
                          <div className="flex lg:flex-col lg:top-1/2 lg:translate-y-1/2 lg:py-2 justify-center gap-4 absolute -bottom-[40px] lg:-right-1 bg-white rounded-full">
                              {
                                  ImageList.map((data)=>(
                                      <img
                                          src={data.img}
                                          className="max-w-[100px] h-[100px] object-contain inline-block hover:scale-110 duration-200"
                                          onClick={()=> {setImageId(data.id ===1 ? Book2 :
                                                                          data.id === 2 ? Book3 :
                                                                          Book4
                                                                           );

                                                                           setTitle(data.title)
                                                                           setDescription(data.description)

                                      }
                                          }

                                          />
                                  ))
                              }
                          </div>
                      </div>
                  </div>

              </div>
            </div>
        </>
    )
}
export default Hero;