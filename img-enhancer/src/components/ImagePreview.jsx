import Loading from './Loading'

const ImagePreview = (props) => {
  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 w-full  max-w-4xl">
      {/* original image */}
      <div className="bg-white shadow-lg rounded-xl h-80  overflow-hidden">
        <h1 className="text-lg font-semibold text-center bg-gray-800 text-gray-300 py-2">
          Original img
        </h1>
        {props.uploaded ? (
          
          <img
            src={props.uploaded}
            alt=""
            className="w-full h-full object-fill"
          />
        ) : (
          <div className="flex items-center bg-gray-200 justify-center h-80 ">
            No Image Select
          </div>
        )}
      </div>

      {/* Enhanced Image */}
      <div className="bg-white shadow-lg rounded-xl h-80  overflow-hidden">
        <h1 className="text-lg font-semibold text-center bg-gray-800 text-gray-300 py-2">
          Enhanced img
        </h1>

        {props.enhanced && !props.loading &&(
          <img src="" alt="" className="w-full h-full object-cover" />
        ) 
        }
        {props.loading ? <Loading /> :(

          <div className="flex items-center bg-gray-200 justify-center h-80 ">
            No Enhanced Image 
          </div>
        )}
      </div>
    </div>
  );
};

export default ImagePreview;
