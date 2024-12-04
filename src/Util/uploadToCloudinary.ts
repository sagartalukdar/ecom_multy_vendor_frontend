
export const uploadToCloudinary=async(file:any,fileType:string)=>{
    if(file){
        const data=new FormData();
        data.append("file",file);
        data.append('cloud_name',"dj2wdfbxm");
        data.append('upload_preset',"whatsapp");
        data.append('resource_type',fileType);

        const res=await fetch(`https://api.cloudinary.com/v1_1/dj2wdfbxm/${fileType}/upload`,
            {
                method:"post",
                body:data
            }
        )

        const fileData=await res.json();
        return fileData.url?.toString();        
        
    }else{
        console.log("error from upload function");
    }
}