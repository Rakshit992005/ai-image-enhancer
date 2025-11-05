import Loading from './Loading'

const ImagePreview = (props) => {
  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
      {/* ORIGINAL */}
      <div className="bg-white shadow-lg rounded-xl overflow-hidden">
        <h1 className="text-lg font-semibold text-center bg-gray-800 text-gray-300 py-2">
          Original img
        </h1>

        {props.uploaded ? (
          <img
            src={props.uploaded}
            alt="original"
            className="block w-full h-auto object-contain"
          />

        ) : (
          <div className="flex items-center bg-gray-200 justify-center min-h-[200px]">
            No Image Selected
          </div>
        )}
      </div>

      {/* ENHANCED */}
      <div className="bg-white shadow-lg rounded-xl overflow-hidden">
        <h1 className="text-lg font-semibold text-center bg-gray-800 text-gray-300 py-2">
          Enhanced img
        </h1>

        {props.loading ? (
          <div className="flex items-center justify-center min-h-[200px]">
            <Loading />
          </div>
        ) : props.enhanced ? (
          <img
            src={props.enhanced}
            alt="enhanced"
            className="block w-full h-auto object-contain"
          />

        ) : (
          <div className="flex items-center bg-gray-200 justify-center min-h-[200px]">
            No Enhanced Image
          </div>
        )}
      </div>
    </div>
  )
}

export default ImagePreview;
