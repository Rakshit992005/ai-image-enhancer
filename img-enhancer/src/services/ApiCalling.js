import axios from 'axios';

const API_KEY = "wxrjxu7jm5kqklfet";
const BASE_URL = "https://techhk.aoscdn.com/"

export const ApiCalling = async (file) =>{
  console.log("api called");
  try {
    // code to upload image
    // const taskId = await uploadImage(file);
    // console.log("img uploaded")

    //code to fetch enhanced image
    const enhancedImageData = await fetchImage("047ea3e2-eba7-47fb-89c4-88fc65bf1b3a");
    console.log("Enhanced Image data ", enhancedImageData )

    // return enhancedImageData;
    
  } catch (error) {
    console.log("Error in enhancing the image: " , error.message)
  }

}

const uploadImage = async (file) =>{
  const formData = new FormData();
  formData.append("image_file" , file);

  const { data } = await axios.get(`${BASE_URL}/api/tasks/visual/scale`, formData ,{
    headers: {
       "X-API-KEY": API_KEY,
    }
  }); 

  console.log(data)
  if(!data?.data?.taskId) throw new Error("Failed to upload image");

  return data.data.taskId;
}


const fetchImage = async (taskId) =>{


}

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