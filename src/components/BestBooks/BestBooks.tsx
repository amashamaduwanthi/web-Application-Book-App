import Book2 from "../../assets/download (1).jpg";
import Book3 from "../../assets/Book Covers.jpg";
import Book4 from "../../assets/Amazon KDP book cover design.jpg";
import {FaStar} from "react-icons/fa";

const BookData=[ {
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
export function BestBooks({handleOrderPopup}){
    return (
        <>
            <div className="py-10">
                <div className="container">
                    <div className="text-center mb-20 max-w-[400px] mx-auto">
                        <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                            Trending Books
                        </p>
                        <h1 className="text-3xl font-bold">Best Books</h1>
                        <p className="text-xs text-gray-400">A gripping tale of love, loss, and unexpected destiny. This story will pull at your heartstrings and leave you thinking long after the final page.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-5 place-items-center">
                        {
                            BookData.map((book) => (
                                <div data-aos="zoom-in"
                                    className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary
                                hover:text-whi relative shadow-xl duration-high group max-w-[300px]">
                                    <div className="h-[100px]">
                                        <img src={book.img} alt="" className="max-w-[100px] block mx-auto -translate-y-14 group-hover:scale-105 duration-300 shadow-md" />
                                    </div>
                                    <div className="p-6 text-center">
                                        <div className="w-full flex items-center justify-center
                                        ">
                                            <FaStar className="text-yellow-500"/>
                                            <FaStar className="text-yellow-500"/>
                                            <FaStar className="text-yellow-500"/>
                                            <FaStar className="text-yellow-500"/>
                                        </div>
                                        <h1 className="text-xl font-bold">{book.title}</h1>
                                        <p className="text-gray-500 group-hover:text-white
                                        duration-300 text-sm-clamp-2">{book.description}</p>
                                        <button onClick={handleOrderPopup} className="bg-primary to-secondary
                                        text-white px-6 py-2 rounded-full mt-4 hover:scale-105 duration-200 group-hover:bg-white group-hover:text-primary">Order Now</button>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </div>
        </>
    )
}
export default BestBooks;