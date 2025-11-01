import React, { useState } from 'react'
import ImagePreview from './ImagePreview'
import ImageUpload from './ImageUpload'

const Home = () => {
  const [uploadImage, setUploadImage] = useState(null);
  const [enhancedImage, setEnhancedImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const uploadImageHandler = async (file)=>{
    setUploadImage(URL.createObjectURL(file));
    setLoading(true);
    //calling api 
    
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


    </div>
  )
}

export default Home
