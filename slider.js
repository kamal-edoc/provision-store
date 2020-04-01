var c=0;
var img = ["image/img2.JPG","image/indeximage.jpg"];
function change()
{   
document.getElementById('image').src = img[c];
c++;
if(c>1)
{
    c = 0;
}
}
setInterval(change,3000);