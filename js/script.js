// Send alert if download type is empty
const download = document.getElementById("download");
download.addEventListener("click", checkDownloadType);
function checkDownloadType(e) {
  if (e.target.id === "download" && document.getElementById("extension").value === "Choose...") {
    alert('Please select "Download type"');
  }
}

// Update functions for form inputs
updateQRCode = () => {
  const url = urlInput.value;
  // const img = imgInput.value;
  const size = sizeInput.value;
  const DotStyle = DotStyleInput.value;
  const DotColour = DotColourInput.value;
  const CornerSquareStyle = CornerSquareStyleInput.value;
  const CornerSquareColour = CornerSquareColourInput.value;

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
  console.log("qrCode updated");

  // download QR code
  chooseDownloadType = () => {
    let extension = extensionInput.value;

    const download = document.getElementById("download");
    download.addEventListener("click", downloadQR);

    function downloadQR(e) {
      qrCode.download({ name: "qrCode", extension: extension });
      location.reload();
    }
  };

  // Get extension value
  let extensionInput = document.getElementById("extension");
  extensionInput.onchange = chooseDownloadType;
};

document.addEventListener("DOMContentLoaded", updateQRCode);

// Get URL value
let urlInput = document.getElementById("URL");
urlInput.onchange = updateQRCode;

// Get IMG value
// let imgInput = document.getElementById("IMG");
// imgInput.onchange = updateQRCode;

// Get size value
let sizeInput = document.getElementById("size");
sizeInput.onchange = updateQRCode;

// Get DotStyle value
let DotStyleInput = document.getElementById("DotStyle");
DotStyleInput.onchange = updateQRCode;

// Get DotColour value
let DotColourInput = document.getElementById("DotColour");
DotColourInput.onchange = updateQRCode;

// Get CornerSquareStyle value
let CornerSquareStyleInput = document.getElementById("CornerSquareStyle");
CornerSquareStyleInput.onchange = updateQRCode;

// Get CornerSquareColour value
let CornerSquareColourInput = document.getElementById("CornerSquareColour");
CornerSquareColourInput.onchange = updateQRCode;
