import  { useState } from 'react'
import ImagePreview from './ImagePreview'
import ImageUpload from './ImageUpload'
import { ApiCalling } from '../services/ApiCalling';
import DownloadImage from './DownloadImage';

const Home = () => {
  const [uploadImage, setUploadImage] = useState(null);
  const [enhancedImage, setEnhancedImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const uploadImageHandler = async (file)=>{
    setUploadImage(URL.createObjectURL(file));
    setLoading(true);
    //calling api 
    try{
      const enhancedURL = await ApiCalling(file);
      setEnhancedImage(enhancedURL?.image);
      setLoading(false);
    }catch (error){
        alert("Error while enhancing the image. Please try again later: " , error);
    }

  }

  return (
    <div>
        <ImageUpload
            uploadImageHandler = {uploadImageHandler}
        />

        <ImagePreview 
        loading={loading}
        uploaded={uploadImage}
        enhanced={enhancedImage}
        />
      <DownloadImage url={enhancedImage} />

    </div>
  )
}

export default Home
