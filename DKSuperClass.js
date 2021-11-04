
class ScannerSuperClass {
  constructor(model, height, width, color, dpi, outputFormat) {
    this.model = model;
    this.height = height;
    this.width = width;
    this.color = color;
    this.dpi = dpi;
    this.outputFormat = outputFormat;
  }
  get model() {
    return this.model
  } 
  get height() {
    return this.height
  }
  get width() {
    return this.width
  }
  get color() {
    return this.color
  }
  get dpi() {
    return this.dpi
  }
  get outputFormat() {
    return this.outputFormat
  }

  scanDocuments(model, height, width, color, dpi, outputFormat){
    console.log("Scan Documents")
    return {model, height, width, color, dpi, outputFormat}
  }

  deleteScannedDocument(scannedImages) {
    console.log("Delete Scabbed Document")
    return {scannedImages}
  }
  
  getScannedDocuments(imageLocation) {
    console.log("Get Scanned Documents")
    return {imageLocation}
  }
}
