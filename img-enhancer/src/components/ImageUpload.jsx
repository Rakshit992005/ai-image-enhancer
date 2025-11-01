 

const ImageUpload = (props) => {

  const ShowImageHandler = (e) => {
    const file = e.target.files[0];
    if(file){
      props.uploadImageHandler(file);
    }
  }


  return (
    <div className="bg-white shadow-lg rounded-2xl w-full p-6 ">
      <label
        htmlFor="fileInput"
        className="block w-full curser-pointer border-2 border-dashed border-gray-300 rounded-lg text-center p-4 hover:border-blue-500 translate-all"
      >
        <input type="file" id="fileInput" className="hidden" onChange={ShowImageHandler} />
        <span className="text-lg font-medium text-gray-600">
          Click and drage to upload image
        </span>
      </label>
    </div>
  );
};

export default ImageUpload;
