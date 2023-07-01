import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Carousel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}>
      <div className="w-full bg-red-200 h-10">
        <h3>1</h3>
      </div>
      <div className="w-full bg-blue-200 h-10">
        <h3>2</h3>
      </div>
      <div className="w-full bg-yellow-200 h-10">
        <h3>3</h3>
      </div>
    </Slider>
  );
}