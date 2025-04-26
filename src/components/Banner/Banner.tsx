import Library from '../../assets/AdobeStock_180373815_Preview.jpeg'
import {GrSecure} from "react-icons/gr";
export function Banner(){
    return (
        <>
            <div className="py-10">
                <div className="container">
                    <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6">
                        <div>
                            <img data-aos="zoom-in" src={Library} alt="" className="max-w-[400px] block mx-auto h1-[700px] w-full drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
 object-cover " />
                        </div>
                        <div className="flex flex-col justify-center gap-6 sm:pt-0">
                            <h1 className="text-3xl sm:text-4xl font-bold">Library at your fingertips</h1>
                            <p className="text-sm text-gray-500 tracking-wide leading-5">An unforgettable journey of hope, courage, and self-discovery. This bestselling novel captures the power of choice and the beauty found in life’s most unexpected moments.
                                </p>
                            <div className="flex flex-col gap-6 ">
                                <div className="flex items-center gap-2">
                                    <GrSecure className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100"/>
                                    <p>Quality Books</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <GrSecure className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100"/>
                                    <p>Fast Delivery</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <GrSecure className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100"/>
                                    <p>Easy Payment Method</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <GrSecure className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100"/>
                                    <p>Get offers in books</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Banner;