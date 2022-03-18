let inputFile = document.getElementById('fileinput');
let fileNameField = document.getElementById('filename');

inputFile.addEventListener('change', function(event) {
   let uploadedFileName = event.target.files[0].name;
   fileNameField.textContent = uploadedFileName;
});