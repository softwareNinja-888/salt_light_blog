export function HeadShot({ 
  className = '', 
  img = '', 
  link = '#', 
  borderColor = 'border-secondary' 
}) {
  return (
    <div className={`mt-[30px] relative cursor-pointer ${className} px-5 w-[80vw] sm:w-[60vw] md:w-[40vw] lg:w-[29vw] mx-auto`}>
      {/* Frame Container */}
      <div className={`relative border-4 dark:border-white border-black  w-full h-[300px]`}></div>

      {/* Image Positioned Inside the Frame */}
      <div className="absolute inset-0">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img
            src={img}
            alt="Headshot"
            className="w-[98%] h-full object-cover transition-transform duration-500 ease-in-out transform cursor-pointer hover:-translate-x-5 hover:-translate-y-5"
            loading="lazy"
          />
        </a>
      </div>
    </div>
  );
}

// FOR FADE IN AND LAZY LOAD

// import { LazyLoadImage } from "react-lazy-load-image-component";
// import "react-lazy-load-image-component/src/effects/blur.css";

// const MyImage = () => (
//   <LazyLoadImage
//     src="your-image.jpg"
//     alt="description"
//     effect="blur" // Options: "blur", "opacity", "black-and-white"
//   />
// );

// export default MyImage;
