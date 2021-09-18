let body = {
    setColor: function(color){
        // document.querySelector('body').style.color = color;
        $('body').css('color', color);
    },
    setBackgroundColor: function(color){
        // document.querySelector('body').style.backgroundColor = color;
        $('body').css('backgroundColor', color);

    }
};
let link = {
    setColor: function(color){
        // let aList = document.querySelectorAll('a');
        // for (let i = 0; i < aList.length; i++){
        //     aList[i].style.color = color;
        // };
        $('a').css('color', color);

    }
}
function dayNightHandler(self) {
    if (self.value === "night"){
        body.setBackgroundColor('black');
        body.setColor('white');
        link.setColor('powderblue');
        self.value = "day";
    } else {
        body.setBackgroundColor('white');
        body.setColor('black');
        link.setColor('blue');
        self.value = "night";
    };
}