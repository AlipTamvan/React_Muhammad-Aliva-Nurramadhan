import axios from "axios";

const CLOUDINARY_UPLOAD_PRESET = "rmlnseof";
const CLOUDINARY_CLOUD_NAME = "dg1zyxy3f";
const CLOUDINARY_UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`;

const cloudinaryService = {
  uploadImage: async (imageFile) => {
    if (!imageFile) return null;

    try {
      const formData = new FormData();
      formData.append("file", imageFile);
      formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

      const response = await axios.post(CLOUDINARY_UPLOAD_URL, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      return response.data.secure_url;
    } catch (error) {
      console.error("Error uploading to Cloudinary:", error);
      throw new Error("Failed to upload image");
    }
  },
};

export default cloudinaryService;
