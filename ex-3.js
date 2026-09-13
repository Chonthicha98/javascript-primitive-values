// Exercise #3: Uploading Progress

let totalFileSize = 250000;
let uploadedSize = 30000;

// Start coding here

// uploaded 30000, and still 250000 - 30000 to be uploaded, so find this % of uploaded.
let uploadProgress = `${(uploadedSize / totalFileSize) * 100}%`;
console.log(uploadProgress);
