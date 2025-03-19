import {BlogPreview} from './BlogPreview'

export function Carousel(){
	return(
		<>
      <div className="carousel carousel-center bg-neutral rounded-box max-w-md space-x-4 p-4">
        <div className="carousel-item">
          <BlogPreview/>
        </div>
        <div className="carousel-item">
          <BlogPreview/>
        </div>
        <div className="carousel-item">
          <BlogPreview/>
        </div>
        <div className="carousel-item">
          <BlogPreview/>
        </div>
        <div className="carousel-item">
          <BlogPreview/>
        </div>

      </div>
		</>
		)	
}