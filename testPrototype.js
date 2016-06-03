function TestObject(color){
    this.color = color;
}

TestObject.prototype = {
    height :"100px",
    width : "100px"
}

test1 = new TestObject("red");
test2 = new TestObject("yellow");
test3 = new TestObject("green");

function refresh() {
    
    console.log("Inside bodyOnLoad()")
    
    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");
    var div3 = document.getElementById("div3");
    
    div1.style.background = test1.color;
    div2.style.background = test2.color;
    div3.style.background = test3.color;
    
    
    for(var i = 0; i < document.getElementsByTagName("div").length ; i++) {
        
        var divItem = document.getElementsByTagName("div")[i];
        divItem.style.height = test1.height;
        divItem.style.width = test1.width;
        divItem.style.border = "thick solid black";
        
    }
}

function colorChange() {
    
    console.log("Inside colorChange");
    
    var color1 = document.getElementById("color1");
    var color2 = document.getElementById("color2");
    var color3 = document.getElementById("color3");
    
    test1.color = color1.options[color1.selectedIndex].value;
    test2.color = color2.options[color2.selectedIndex].value;
    test3.color = color3.options[color3.selectedIndex].value;
    
    console.log("Exit colorChange");
    
    refresh();
}

function colorChange1(changer) {
    
    console.log("Inside colorChange" + changer);
    
    var value = changer.options[changer.selectedIndex].value;
    
    switch(changer.id) {
        case "color1":
            test1.color = value;
            break;
        case "color2":
            test2.color = value;
            break;
        case "color3":
            test3.color = value;
            break;
        case "size":
            switch(value) {
                case "small":
                    test1.height = "25px";
                    test1.width = "25px";
                    break;
                case "medium":
                    test1.height = "50px";
                    test1.width = "50px";
                    break;
                case "large":
                    test1.height = "100px";
                    test1.width = "100px";
                    break;
                case "xl":
                    test1.height = "200px";
                    test1.width = "200px";
            }
    } 
    
    refresh();
    console.log("Exit colorChange");
    
}





 