function canvasToImage(canvas, backgroundColor){
  
  const width = canvas.width;
  const height = canvas.height;
  const context = canvas.getContext('2d')
  
  if(backgroundColor){
      //set to draw behind current content
      context.globalCompositeOperation = "destination-over";

      //set background color
      context.fillStyle = backgroundColor;

      //draw background / rect on entire canvas
      context.fillRect(0,0,width,height);
  }

  //get the image data from the canvas
  const imageData = canvas.toDataURL("image/jpeg");

  //return the Base64 encoded data url string
  return imageData;
}

export default canvasToImage