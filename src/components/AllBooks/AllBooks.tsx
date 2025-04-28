import book1 from "../../assets/download.jpg"
import Book2 from "../../assets/Amazon KDP book cover design.jpg"
import Book3 from "../../assets/download (1).jpg"
import {FaStar} from "react-icons/fa";
const BooksData=[
    {
        id: 1,
        img:book1,
        title:"who's there",
        rating:"5.0",
        author:"someone",
    },
    {
        id: 2,
        img: Book2,
        title:"His Life",
        rating:"4.5",
        author:"James",
    },
    {
        id: 3,
        img: Book3,
        title:"Lost Boys",
        rating:"6.0",
        author:"Lost Girl",
    },
    {
        id: 4,
        img: Book2,
        title:"His Marketplace",
        rating:"6.0",
        author:"James",
    },
    {
        id: 5,
        img: book1,
        title:"His Marketplace",
        rating:"4.0",
        author:"Goslin",
    }

]
export function AllBooks(){
    return(
        <>
            <div className="py-10">
                <div className="container placeholder-gray-100">
                    <div data-aos="slide-up" className="text-center mb-20 max-w-[400px] mx-auto">
                        <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                            Best Books
                        </p>
                        <h1 className="text-3xl font-bold">Top Books</h1>
                        <p className="text-xs text-gray-400">An unforgettable journey of hope, courage, and self-discovery. This bestselling novel captures the power of choice and the beauty found in life’s most unexpected moments..</p>
                    </div>
                    <div data-aos="slide-up">
                        <div className="grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4 lg:grid-cols-5 gap-5 place-items-center gap-5">
                            {
                                BooksData.map((data) => (
                                    <div>
                                        <img src={data.img} alt=""
                                        className="h-{220px} w-{150ppx} object-cover rounded-md"/>
                                        <div>
                                            <h2 className="font-semibold">{data.title}</h2>
                                            <p className="text-sm text-gray-700">{data.author}</p>
                                            <div className="flex items-center gap-1">
                                                <FaStar className="text-yellow-500" />
                                                <span>{data.rating}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="flex justify-center">
                            <button className="text-center mt-10 cursor-pointer bg-primary text-white py-2 px-5 rounded-full">View All Books</button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
export default AllBooks