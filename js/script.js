const download = document.getElementById("download");

// Update functions for form inputs
updateFormValues = () => {
  const url = urlInput.value;
  // const img = imgInput.value;
  const size = sizeInput.value;
  const DotStyle = DotStyleInput.value;
  const DotColour = DotColourInput.value;
  const CornerSquareStyle = CornerSquareStyleInput.value;
  const CornerSquareColour = CornerSquareColourInput.value;
  const extension = extensionInput.value;

  const qr = document.getElementById("qrcode");
  qr.innerHTML = "";
  const qrCode = new QRCodeStyling({
    width: size,
    height: size,
    type: "svg",
    data: url,
    // image: img,
    dotsOptions: {
      color: DotColour,
      type: DotStyle,
    },
    cornersSquareOptions: {
      color: CornerSquareColour,
      type: CornerSquareStyle,
    },
    cornersDotOptions: {
      color: CornerSquareColour,
      type: CornerSquareStyle,
    },
    backgroundOptions: {
      color: "#ffffff",
    },
    imageOptions: {
      crossOrigin: "anonymous",
      margin: 5,
    },
  });

  // show QR code
  qrCode.append(qr);
  console.log("qrCode loaded");
};

document.addEventListener("DOMContentLoaded", updateFormValues);

// Get URL value
let urlInput = document.getElementById("URL");
urlInput.onchange = updateFormValues;

// // Get IMG value
// let imgInput = document.getElementById("IMG");
// imgInput.onchange = updateFormValues;

// Get size value
let sizeInput = document.getElementById("size");
sizeInput.onchange = updateFormValues;

// Get DotStyle value
let DotStyleInput = document.getElementById("DotStyle");
DotStyleInput.onchange = updateFormValues;

// Get DotColour value
let DotColourInput = document.getElementById("DotColour");
DotColourInput.onchange = updateFormValues;

// Get CornerSquareStyle value
let CornerSquareStyleInput = document.getElementById("CornerSquareStyle");
CornerSquareStyleInput.onchange = updateFormValues;

// Get CornerSquareColour value
let CornerSquareColourInput = document.getElementById("CornerSquareColour");
CornerSquareColourInput.onchange = updateFormValues;

// Get extension value
let extensionInput = document.getElementById("extension");
extensionInput.onchange = updateFormValues;

// if (urlData && sizeData) {
// }

// };
// generateQR = (
//   url,
//   img,
//   size,
//   DotStyle,
//   DotColour,
//   CornerSquareStyle,
//   CornerSquareColour,
//   extension
// ) => {

// };

// generateQR();

// const downloadQrCode = (e) => {
//   e.preventDefault();
//   qrCode.download({ name: "QRCODE", extension: "svg" });
// };

// download.addEventListener("click", downloadQrCode);
