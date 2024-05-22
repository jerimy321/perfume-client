import { perfumeCategory } from '../data/perfumeData';
import '../index.css';

const Carousel: React.FC = () => {
  const categories = Object.keys(
    perfumeCategory,
  ) as (keyof typeof perfumeCategory)[];

  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-interval="false"
    >
      <ol className="carousel-indicators">
        {categories.map((_, index) => (
          <li
            key={index}
            data-target="#carouselExampleIndicators"
            data-slide-to={index}
            className={index === 0 ? 'active' : ''}
          ></li>
        ))}
      </ol>
      <div className="carousel-inner">
        {categories.map((category, index) => (
          <div
            key={category}
            className={`carousel-item ${index === 0 ? 'active' : ''}`}
          >
            <div className="d-block w-100 h-[400px] flex flex-col items-center justify-center bg-gray-100">
              <h5 className="mb-4 text-2xl">{category}</h5>
              <div className="flex flex-wrap justify-center gap-2">
                {perfumeCategory[category].map((item) => (
                  <button
                    key={item}
                    className="px-4 py-2 m-2 border border-gray-300 rounded shadow"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span
          className="bg-black carousel-control-prev-icon"
          aria-hidden="true"
        ></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span
          className="bg-black carousel-control-next-icon"
          aria-hidden="true"
        ></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default Carousel;
