import BoardImg from '../../assets/AppStore.png'
import AppStoreImg from '../../assets/app_store-removebg-preview.png'
import PlayStoreImg from '../../assets/google_play-removebg-preview.png'

const bannerImg={
    backgroundImage:`url(${BoardImg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
}
export function AppStoreBanner() {
    return (
        <>
            <div className="bg-gray-100 text-white py-10 "
            style={bannerImg}>
                <div className="container">
                    <div className="space-y-6 max-w-xl mx-auto">
                        <h1 data-aos="slide-up" className="text-2xl text-center sm:text-4xl font-semibold">Read Books at Your Fingertips</h1>
                        <div data-aos="slide-up" className="flex flex-wrap justify-center items-center gap-4">
                            <a href="#">
                                <img src={PlayStoreImg} alt="" className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"  />
                            </a>
                            <a href="#">
                                <img src={AppStoreImg} alt="" className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"/>
                            </a>


                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AppStoreBanner