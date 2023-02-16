const download = document.getElementById("download");
const qr = document.getElementById("qrcode");

// Update functions for form inputs
updateURL = () => {
  const url = urlInput.value;
};
updateImg = () => {
  const IMG = imgInput.value;
  console.log(IMG);
};
updateSize = () => {
  const size = sizeInput.value;
};
updateDotStyle = () => {
  const DotStyle = DotStyleInput.value;
};
updateDotColour = () => {
  const DotColour = DotColourInput.value;
};
updateCornerSquareStyle = () => {
  const CornerSquareStyle = CornerSquareStyleInput.value;
};
updateCornerSquareColour = () => {
  const CornerSquareColour = CornerSquareColourInput.value;
};
updateExtension = () => {
  const extension = extensionInput.value;
  console.log(extension);
};

// Get URL value
let urlInput = document.getElementById("URL");
urlInput.onchange = updateURL;

// Get IMG value
let imgInput = document.getElementById("IMG");
imgInput.onchange = updateImg;

// Get size value
let sizeInput = document.getElementById("size");
sizeInput.onchange = updateSize;

// Get DotStyle value
let DotStyleInput = document.getElementById("DotStyle");
DotStyleInput.onchange = updateDotStyle;

// Get DotColour value
let DotColourInput = document.getElementById("DotColour");
DotColourInput.onchange = updateDotColour;

// Get CornerSquareStyle value
let CornerSquareStyleInput = document.getElementById("CornerSquareStyle");
CornerSquareStyleInput.onchange = updateCornerSquareStyle;

// Get CornerSquareColour value
let CornerSquareColourInput = document.getElementById("CornerSquareColour");
CornerSquareColourInput.onchange = updateCornerSquareColour;

// Get extension value
let extensionInput = document.getElementById("extension");
extensionInput.onchange = updateExtension;

const qrCode = new QRCodeStyling({
  width: 300,
  height: 300,
  type: "svg",
  data: "https://www.facebook.com/",
  image: "",
  dotsOptions: {
    color: "#4267b2",
    type: "rounded",
  },
  backgroundOptions: {
    color: "#e9ebee",
  },
  imageOptions: {
    crossOrigin: "anonymous",
    margin: 20,
  },
});

// show QR code
qrCode.append(qr);

// const downloadQrCode = (e) => {
//   e.preventDefault();
//   qrCode.download({ name: "QRCODE", extension: "svg" });
// };

// download.addEventListener("click", downloadQrCode);
