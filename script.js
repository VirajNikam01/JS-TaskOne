let rect = document.querySelector("#rectangle");

rect.addEventListener("mousemove", function(details){
    let rectangleLocation = rect.getBoundingClientRect();
    let innerRectVal = details.clientX - rectangleLocation.left;

    if (innerRectVal<rectangleLocation.width/2) {
       
        var redColor = gsap.utils.mapRange(0, rectangleLocation.width/2, 255, 0, innerRectVal)

        gsap.to(rect,{
            backgroundColor:`rgb(${redColor}, 0, 0)`
        })


    } else {
        
        var greenColor = gsap.utils.mapRange(rectangleLocation.width/2, rectangleLocation.width, 0, 255, innerRectVal)

        gsap.to(rect,{
            backgroundColor:`rgb(0, ${greenColor}, 0)`
        })
    }
    


})


rect.addEventListener("mouseleave", function(){
    gsap.to(rect,{
        backgroundColor:"transparent"
    })
})