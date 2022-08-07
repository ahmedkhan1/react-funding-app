import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import slider1 from '../../../assets/images/slider1.jpg';

const data = [
  {
    index: 1,
    image: slider1,
  },
  {
    index: 2,
    image: slider1,
  },
  {
    index: 3,
    image: slider1,
  },
];

function Slider(): JSX.Element {
  const slides = () => data.map((res) => (
    <div key={res.index}>
      <img src={res.image} alt="slider" className="slider" />
    </div>
  ));

  return (
    <Carousel
      showArrows={false}
      showThumbs={false}
    >
      {slides()}
    </Carousel>
  );
}

export default Slider;
