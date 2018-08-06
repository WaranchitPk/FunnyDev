import SaveFile from "file-saver";

export const png = (chartSVG,domtoimage) => {
  domtoimage.toBlob(chartSVG).then((blob) => {
    SaveFile.saveAs(blob, "test.png");
  });
};

export const jpeg = (chartSVG,domtoimage) =>{
  domtoimage.toBlob(chartSVG).then((blob) => {
    SaveFile.saveAs(blob, "test.jpeg");
  });
};