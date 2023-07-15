# Teachable Machine model to classify images

_This package provides the ability to easily customize a model trained in Teachable Machine into your project_

## Notes

When installing this package, you must also install [TensorFlow.js](https://www.npmjs.com/package/@tensorflow/tfjs) and [Teachable Machine Image](https://www.npmjs.com/package/@teachablemachine/image)
` npm install @tensorflow/tfjs @teachablemachine/image`

## Usage

Below is a simple example of how to integrate the model into your project. This example uses React

```
import * as tf from "@tensorflow/tfjs";
import { loadModel, imageFormatting } from "tm-image-model";

function App() {
  const [model, setModel] = useState();
  const [image, setImage] = useState();
  const canvasRef = useRef(null);

  useEffect(() => {
    async function handleModel() {
      const url = "https://teachablemachine.withgoogle.com/models/[...]";
      setModel(await loadModel(url));
    }

    handleModel();
  }, []);

  async function handleImage(imageFile) {
    const image = await imageFormatting(imageFile, canvasRef);
    console.log(image);
    setImage(image);
  }

  return (
    <>
      <canvas ref={canvasRef} />
    </>
  );
}
```

## Additionally

And a small example of checking whether our model works or not

```
async function predict() {
    const pr = await model.predict(image);
    console.log(pr);
    pr.forEach(({ className, probability }) => {
      console.log(className, " --- ", probability.toFixed(2));
    });
  }

  return (
    <>
      <canvas ref={canvasRef} />
      <div>
        <input
          type="file"
          id="imageinput"
          onChange={(e) => handleImg(e.target.files[0])}
          accept="image/*"
        />
      </div>
      <button onClick={predict}>Predict</button>
    </>
  );
```

### License

MIT | [Oganes Oganisyan](https://www.linkedin.com/in/hov13/)
