var loaderColor;

function colorSwitch(background,bordercolor,imgurl){
    document.querySelectorAll('span').forEach(function(item){
        item.classList.remove('active')
    })
    event.target.classList.add('active')
    if(bordercolor=='#db518b'){
        document.getElementById('loader').style.filter='invert(43%) sepia(76%) saturate(454%) hue-rotate(283deg) brightness(89%) contrast(101%)'
    }
    else if(bordercolor=='#25b0e4'){
        document.getElementById('blue-border').style.borderColor='#87CEEB'
        document.getElementById('loader').style.filter='invert(53%) sepia(41%) saturate(2354%) hue-rotate(168deg) brightness(107%) contrast(79%'
    }
    else if(bordercolor=='#fdd041'){
        document.getElementById('yellow-border').style.borderColor='#FFFF00'
        document.getElementById('loader').style.filter='invert(70%) sepia(67%) saturate(426%) hue-rotate(1deg) brightness(105%) contrast(98%)'
    }
    loaderColor =bordercolor
    document.body.style.background=background
    document.getElementById('upload-file').style.background=bordercolor
    document.getElementById('umbrella-image').src=imgurl
    document.getElementById('umbrella-image').style.visibility="hidden"
    document.getElementById('logo').style.display='none'
    setTimeout(()=>{
        document.getElementById('loader').style.display="none"
        document.getElementById('umbrella-image').style.visibility="visible"
        document.getElementById('logo').style.display='block'
    },1000)
    document.getElementById('loader').style.display="block"

}

function uploadLogo(){
    document.getElementById('remove-logo').style.display='block'
    document.getElementById('upload').style.display='block'
    document.getElementById('upload-logo-text').style.display='none'
    document.getElementById('upload-icon').style.visibility='hidden'
    document.getElementById('umbrella-image').style.visibility="hidden"
    document.getElementById('logo').style.display='none'
    setTimeout(()=>{
        document.getElementById('loader').style.display="none"
        document.getElementById('umbrella-image').style.visibility="visible"
        document.getElementById('logo').style.display='block'
        document.getElementById('small-loader').style.display='none'
        document.getElementById('upload-icon').style.visibility='visible'
    },1000)
    document.getElementById('loader').style.display="block"
    document.getElementById('small-loader').style.display='block'
    document.getElementById('loader').style.filter='invert(43%) sepia(76%) saturate(454%) hue-rotate(283deg) brightness(89%) contrast(101%)'
    if(loaderColor=='#db518b'){
        document.getElementById('loader').style.filter='invert(43%) sepia(76%) saturate(454%) hue-rotate(283deg) brightness(89%) contrast(101%)'
    }
    else if(loaderColor=='#25b0e4'){
        document.getElementById('loader').style.filter='invert(53%) sepia(41%) saturate(2354%) hue-rotate(168deg) brightness(107%) contrast(79%'
    }
    else if(loaderColor=='#fdd041'){
        document.getElementById('loader').style.filter='invert(70%) sepia(67%) saturate(426%) hue-rotate(1deg) brightness(105%) contrast(98%)'
    }
}

const imgInput=document.getElementById('upload')
var uploadedImage=""

imgInput.addEventListener("change",function(){
    const reader = new FileReader()
    reader.addEventListener("load",()=>{
        uploadedImage =reader.result
        document.getElementById('logo').style.backgroundImage=`url(${uploadedImage})`
    })
    reader.readAsDataURL(this.files[0])
})

function removeLogo(){
    document.getElementById('logo').style.backgroundImage=""
    document.getElementById('upload').value = "";  
    document.getElementById('upload').style.display='none'
    document.getElementById('upload-logo-text').style.display='block'
    document.getElementById('remove-logo').style.display='none'
}


