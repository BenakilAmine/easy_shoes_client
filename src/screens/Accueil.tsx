import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



export default function Accueil(): JSX.Element {



    const images = [{
        id: 1,
        src: "assets/Air_jordan_grape.jpg",
        alt: "Air Jordan Grape"
    },
    {
        id: 2,
        src: "assets/Air_jordan_orange.jpg",
        alt: "Air Jordan Orange "
    },
    {
        id: 3,
        src: "assets/Air_jordan_red.jpg",
        alt: "Air Jordan Red"
    }
];

const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
  autoplaySpeed: 2000,
   
  };


    return (
        <>
        <header>
            <div>
                <div>
                    Easy Shoes
                </div>
                <div>
                <a>
                    Home
                </a>
                <a>
                    All products
                </a>
                <a>
                    Account
                </a>
                </div>
                <div>
                    <ShoppingCartIcon />
                    <SearchIcon />
                </div>
            </div>
        </header>
        <div className="imgslider">
        <Slider {...settings}>
          {images.map((item) => (
            <div key={item.id}>
              <img src={item.src}  alt={item.alt} />
            </div>
          ))}
        </Slider>
      </div>
        <p>Hello World</p>
        </>
    )
}

