
// Upload Image
function uploadImage(){
let file=document.getElementById("imageUpload").files[0];
if(!file) return;
let reader=new FileReader();
reader.onload=function(e){
let div=document.createElement("div");
let img=document.createElement("img");
img.src=e.target.result;
let likeBtn=document.createElement("button");
let count=0;
likeBtn.innerText="❤️ Like 0";
likeBtn.onclick=function(){count++;likeBtn.innerText="❤️ Like "+count;};
div.appendChild(img);
div.appendChild(likeBtn);
document.getElementById("imageGallery").appendChild(div);
}
reader.readAsDataURL(file);
}

// Upload Video (vertical style)
function uploadVideo(){
let file=document.getElementById("videoUpload").files[0];
if(!file) return;
let reader=new FileReader();
reader.onload=function(e){
let video=document.createElement("video");
video.src=e.target.result;
video.controls=true;
video.style.height="500px";
video.style.width="auto";
document.getElementById("videoGallery").appendChild(video);
}
reader.readAsDataURL(file);
}

// Comments
function addComment(){
let input=document.getElementById("commentInput");
let text=input.value;
if(text==="") return;
let li=document.createElement("li");
li.innerText=text;
document.getElementById("commentList").appendChild(li);
input.value="";
}
