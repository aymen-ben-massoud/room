function change(){

document.getElementById("changeimg").src="./images/desktop-image-hero-2.jpg";
document.getElementById("textone").innerHTML = " We are available all across the globe ";
document.getElementById("texttwo").innerHTML = " With stores all over the world, its easy for you to find furniture for your home or place of business. Locally, were in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today ";
}
function changetwo(){
    document.getElementById("changeimg").src="./images/desktop-image-hero-3.jpg";
    document.getElementById("textone").innerHTML = " Manufactured with the best materials ";
    document.getElementById("texttwo").innerHTML = " Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.";
    }

    function myFunction() {
     
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
          x.className += " responsive";
        
        } else {
          x.className = "topnav";
         
        }
       

      }