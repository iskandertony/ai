import React, { useState, useRef, useEffect } from "react";
import * as onnx from "onnxjs";
import * as ort from "onnxruntime-web";
const ChatOnnx = () => {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState(null);
  const [model, setModel] = useState(null);

  useEffect(() => {
    const loadModel = async () => {
      const loadedModel = await ort.InferenceSession.create(
        "../../../yolov8l_best_weights.onnx"
      );
      setModel(loadedModel);
    };
    loadModel();
  }, []);

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = async (e) => {
      setImage(e.target.result);
      const img = new Image();
      img.src = e.target.result;

      img.onload = async () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        canvas.width = 640;
        canvas.height = 640;
        ctx.drawImage(img, 0, 0, 640, 640);
        const imageData = ctx.getImageData(0, 0, 640, 640).data;

        const inputData = new Float32Array(1 * 3 * 640 * 640);

        for (let y = 0; y < 640; ++y) {
          for (let x = 0; x < 640; ++x) {
            const idx = (y * 640 + x) * 4;
            const inputIdx = 3 * 640 * y + 3 * x;

            // Обратите внимание, что imageData в формате RGBA
            inputData[inputIdx] = imageData[idx] / 255; // R
            inputData[inputIdx + 1] = imageData[idx + 1] / 255; // G
            inputData[inputIdx + 2] = imageData[idx + 2] / 255; // B
          }
        }

        const inputTensor = new onnx.Tensor(
          inputData,
          "float32",
          [1, 3, 640, 640]
        );

        // Теперь вы можете использовать inputTensor для предсказаний
        if (model) {
          // здесь используем model напрямую
          const outputMap = await model.run({ input: inputTensor }); // 'input' заменить на имя входного слоя вашей модели
          const outputData = outputMap.values().next().value.data;

          setResult(outputData);
        }
      };
    };

    reader.readAsDataURL(file);
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {image && <img src={image} alt="Uploaded preview" width="200" />}
      {result && <div>Result: {result.toString()}</div>}{" "}
    </div>
  );
};

export default ChatOnnx;
