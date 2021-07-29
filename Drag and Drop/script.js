// Selecting all required elements

const dropArea=document.querySelector('.drag-area');
dragText=dropArea.querySelector("header");
button=dropArea.querySelector("button");
input=dropArea.querySelector("input");



let file; // this is a global variable and we'll use it inside multiple functions

button.onclick = ()=>{
    input.click(); // if user click on the button then the input also clicked.
}

input.addEventListener('change', function(){
    file = this.files[0];
    dropArea.classList.add('active');
    showFile();
});

// if user drag file over Drag Area
dropArea.addEventListener('dragover', (event)=>{
    event.preventDefault(); // prevent from default behavior
    // console.log("File is over DragArea");
    dropArea.classList.add('active');
    dragText.textContent="Release to Upload File";
});
    
// if user leave dragged file from DragArea
dropArea.addEventListener('dragleave', ()=>{
    // console.log("File is outside from DragArea");
    dropArea.classList.remove('active');
    dragText.textContent="Drag & Drop to Upload File";
});

// if userdrops file on DragArea
dropArea.addEventListener('drop', (event)=>{
    event.preventDefault(); // prevent from default behavior
    // console.log("File is dropped on DragArea");
    file=event.dataTransfer.files[0]; // getting user select file and [0] means if user select multiple files select only the first one
    showFile();
});

function showFile(){
    let fileType = file.type;
    let validExtensions= ['image/jpeg', 'image/jpg', 'image/png'];
    if(validExtensions.includes(fileType)){
        let fileReader = new FileReader();
        fileReader.onload = ()=>{
            let fileURL = fileReader.result;
            let imgTag = `<img src="${fileURL}", alt=''>`;
            dropArea.innerHTML=imgTag;
        }
        fileReader.readAsDataURL(file);
    }
    else{
        alert("This is not an image file!");
        dropArea.classList.remove('active');
        dragText.textContent="Drag & Drop to Upload File";
    }
}