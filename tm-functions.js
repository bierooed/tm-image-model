import * as tf from "@tensorflow/tfjs";
import * as tmImage from "@teachablemachine/image";

export async function loadModel(url) {
  const modelUrl = url + "model.json";
  const metadataUrl = url + "metadata.json";
  const model = await tmImage.load(modelUrl, metadataUrl);
  return model;
}

export async function imageFormatting(imageFile, canvasRef) {
  const file = URL.createObjectURL(imageFile);
  const canvas = canvasRef.current;
  const context = canvas.getContext("2d");
  const image = new Image();

  image.onload = () => {
    context.drawImage(image, 0, 0, "300", "300");
  };

  image.src = file;

  return image;
}
