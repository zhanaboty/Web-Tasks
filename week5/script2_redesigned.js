
let currentImageIndex = 1;
function text(n1){
    if(n1==2){
        var tt ="Mercedes-Benz  is a German global automobile marque and a division of Daimler AG. The brand is known for luxury vehicles, buses, coaches, and trucks. The headquarters is in Stuttgart, Baden-Württemberg. The name first appeared in 1926 under Daimler-Benz"
        document.getElementById("description").innerHTML = tt;
    }
    if(n1==3){
        var tt  = "Rolls-Royce Motor Cars Limited is a British luxury automobile maker. A wholly owned subsidiary of German group BMW, it was established in 1998 after BMW was licensed the rights to the Rolls-Royce brand name and logo from Rolls-Royce plc and acquired the rights to the Spirit of Ecstasy and Rolls-Royce grill shape trademarks from Volkswagen AG.";
        document.getElementById("description").innerHTML = tt;
    }
    if(n1==4){
        var tt ="Audi AG is a German automobile manufacturer that designs, engineers, produces, markets and distributes luxury vehicles. Audi is a member of the Volkswagen Group and has its roots at Ingolstadt, Bavaria, Germany. Audi-branded vehicles are produced in nine production facilities worldwide."
        document.getElementById("description").innerHTML = tt;
    }
    if(n1==5){
        var tt ="Tesla is an American automotive and energy company based in Palo Alto, California. The company specializes in electric car manufacturing and, through its SolarCity subsidiary, solar panel manufacturing. It operates multiple production and assembly plants"
        document.getElementById("description").innerHTML = tt;
    }

}
function showSlides(n) {
    
    currentImageIndex = n;
    text(currentImageIndex);
    let image = document.querySelector("#i"+currentImageIndex);
    document.querySelector("#bigImage img").src = image.src;x
    

}
function next() {
    
    currentImageIndex++;
    text(currentImageIndex);
    let image = document.querySelector("#i"+currentImageIndex);
    document.querySelector("#bigImage img").src = image.src;

}
function previous() {
    
    currentImageIndex--;
    text(currentImageIndex);
    let image = document.querySelector("#i"+currentImageIndex);
    document.querySelector("#bigImage img").src = image.src;
    
}