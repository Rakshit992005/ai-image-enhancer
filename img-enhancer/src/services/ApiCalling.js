import axios from 'axios';

const API_KEY = "wxrjxu7jm5kqklfet";
const BASE_URL = "https://techhk.aoscdn.com/"

export const ApiCalling = async (file) =>{
  console.log("api called");
  try {
    // code to upload image
    const taskId = await uploadImage(file);
    console.log("img uploaded")

    //code to fetch enhanced image
    const enhancedImageData = await pollForEnhancedImage(taskId);
    console.log("Enhanced Image data ", enhancedImageData )

    return enhancedImageData;
    
  } catch (error) {
    console.log("Error in enhancing the image: " , error.message)
  }

}

const uploadImage = async (file) =>{
  const formData = new FormData();
  formData.append("image_file" , file);

  const { data } = await axios.post(`${BASE_URL}/api/tasks/visual/scale`, formData ,{
    headers: {
       "X-API-KEY": API_KEY,
    }
  }); 

  if(!data?.data?.task_id) throw new Error("Failed to upload image");

  return data.data.task_id;
}


const fetchImage = async (taskId) =>{
   const { data } = await axios.get(`${BASE_URL}/api/tasks/visual/scale/${taskId}`,{
    headers: {
       "X-API-KEY": API_KEY,
    }
  }); 
  if(!data?.data){
    throw new Error("Failed to fetch Enhancedimage! Image not found.")
  }
  return data.data;

}

const pollForEnhancedImage = async (taskId , retries = 0) => {
  const result = await fetchImage(taskId);
  if(result.state === 4){
    console.log(`Processsing.... (${retries}/20)`);

    if(retries >= 20){
      throw new Error("Max retries reached. please try again");

    }
    await new Promise((resolve) => setTimeout(resolve , 2000));
    return pollForEnhancedImage(taskId , retries+1);
  }
  console.log("Enhanced Image URL : " , result);
  return result;
};

// {status: 200, message: 'success', data: {…}}
// data
// : 
// {task_id: '047ea3e2-eba7-47fb-89c4-88fc65bf1b3a'}
// message
// : 
// "success"
// status
// : 
// 200
// [[Prototype]]
// : 
// Object