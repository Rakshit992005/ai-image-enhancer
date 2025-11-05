import React from 'react'

const DownloadImage = (props) => {
    const imageUrl = props.url;


  const handleDownload = async () => {
    if(imageUrl != null) {

        const response = await fetch(imageUrl);
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
    
        const a = document.createElement("a");
        a.href = url;
        a.download = "image.jpg";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }else{
        alert("Please enetr an image first")
    }
  };

  return (
    <div className='flex  justify-center'>
        <button onClick={handleDownload} className="p-2 mt-4 bg-gray-800 text-white rounded">
      Download Image
    </button>
    </div>
  )
}

export default DownloadImage
