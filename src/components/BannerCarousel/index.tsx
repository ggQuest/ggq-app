import {Image} from ""
export const BannerCarousel = () => {
    return (
        <>
    <div className="max-w-full p-4 space-x-4 carousel carousel-center bg-quest rounded-box">
        <div id="item1" className="carousel-item">
        <img src="/assets/banners/axie-infinity.png" className="w-full rounded-box" />
        </div> 
        <div id="item2" className="carousel-item">
        <img src="/assets/banners/sandbox.png" className="w-full rounded-box" />
        </div> 
        <div  id="item3"  className="carousel-item">
        <img src="/assets/banners/iluvium-2.png/" className="w-full rounded-box" />
        </div> 
        <div id="item4" className="carousel-item">
        <img src="/assets/banners/sandbox.png" className="w-full rounded-box" />
        </div>
  </div>
  <div className="flex justify-center w-full gap-2 py-2">
  <a href="#item1" className="btn btn-xs btn-white btn-circle btn-outline"></a> 
  <a href="#item2" className="btn btn-xs btn-white btn-circle btn-outline"></a> 
  <a href="#item3" className="btn btn-xs btn-white btn-circle btn-outline"></a> 
  <a href="#item4" className="btn btn-xs btn-white btn-circle btn-outline"></a>
</div>
</>
)
}