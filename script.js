const api_url = "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";

const inp = document.getElementById("inp");
const images = document.querySelector(".images");

const getImages = async () => {
  const method = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${api_url}`,
    },
    body: JSON.stringify({
      prompt: inp.value,
      n: 3,
      size: "256x256",
    }),
  };

  const res = await fetch("https://api.openai.com/v1/images/generations",method)

  const data = await res.json();
  const imageList = data.data;
  images.innerHTML = ""
  imageList.map(photo=>{
    const container = document.createElement("div");
    images.append(container);
    const img = document.createElement("img");
    container.append(img);
    img.src=photo.url
  })
};
