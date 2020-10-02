
$(document).ready(function() {
    //setting current day/time
        var currentDay = $("#currentDay");
        var date = new Date();
        currentDay.append(date);

        var date = new Date();
        var hourNow = date.getHours(); 
        console.log(hourNow);
        
    //assigning past present and future to timeblocks
        if (hourNow < 9) {
            $("#nineAM").addClass("future");
            $("#tenAM").addClass("future");
            $("#elevenAM").addClass("future");
            $("#twelvePM").addClass("future");
            $("#onePM").addClass("future");
            $("#twoPM").addClass("future");
            $("#threePM").addClass("future");
            $("#fourPM").addClass("future");
            $("#fivePM").addClass("future");
        };

        if (hourNow === 9) {
            $("#nineAM").addClass("present");
            $("#tenAM").addClass("future");
            $("#elevenAM").addClass("future");
            $("#twelvePM").addClass("future");
            $("#onePM").addClass("future");
            $("#twoPM").addClass("future");
            $("#threePM").addClass("future");
            $("#fourPM").addClass("future");
            $("#fivePM").addClass("future");
        };

        if (hourNow === 10) {
            $("#nineAM").addClass("past");
            $("#tenAM").addClass("present");
            $("#elevenAM").addClass("future");
            $("#twelvePM").addClass("future");
            $("#onePM").addClass("future");
            $("#twoPM").addClass("future");
            $("#threePM").addClass("future");
            $("#fourPM").addClass("future");
            $("#fivePM").addClass("future");
        };

        if (hourNow === 11) {
            $("#nineAM").addClass("past");
            $("#tenAM").addClass("past");
            $("#elevenAM").addClass("present");
            $("#twelvePM").addClass("future");
            $("#onePM").addClass("future");
            $("#twoPM").addClass("future");
            $("#threePM").addClass("future");
            $("#fourPM").addClass("future");
            $("#fivePM").addClass("future");
        };

        if (hourNow === 12) {
            $("#nineAM").addClass("past");
            $("#tenAM").addClass("past");
            $("#elevenAM").addClass("past");
            $("#twelvePM").addClass("present");
            $("#onePM").addClass("future");
            $("#twoPM").addClass("future");
            $("#threePM").addClass("future");
            $("#fourPM").addClass("future");
            $("#fivePM").addClass("future");
        };

        if (hourNow === 13) {
            $("#nineAM").addClass("past");
            $("#tenAM").addClass("past");
            $("#elevenAM").addClass("past");
            $("#twelvePM").addClass("past");
            $("#onePM").addClass("present");
            $("#twoPM").addClass("future");
            $("#threePM").addClass("future");
            $("#fourPM").addClass("future");
            $("#fivePM").addClass("future");
        };

        if (hourNow === 14) {
            $("#nineAM").addClass("past");
            $("#tenAM").addClass("past");
            $("#elevenAM").addClass("past");
            $("#twelvePM").addClass("past");
            $("#onePM").addClass("past");
            $("#twoPM").addClass("present");
            $("#threePM").addClass("future");
            $("#fourPM").addClass("future");
            $("#fivePM").addClass("future");
        };

        if (hourNow === 15) {
            $("#nineAM").addClass("past");
            $("#tenAM").addClass("past");
            $("#elevenAM").addClass("past");
            $("#twelvePM").addClass("past");
            $("#onePM").addClass("past");
            $("#twoPM").addClass("past");
            $("#threePM").addClass("present");
            $("#fourPM").addClass("future");
            $("#fivePM").addClass("future");
        };

        if (hourNow === 16) {
            $("#nineAM").addClass("past");
            $("#tenAM").addClass("past");
            $("#elevenAM").addClass("past");
            $("#twelvePM").addClass("past");
            $("#onePM").addClass("past");
            $("#twoPM").addClass("past");
            $("#threePM").addClass("past");
            $("#fourPM").addClass("present");
            $("#fivePM").addClass("future");
        };

        if (hourNow === 17) {
            $("#nineAM").addClass("past");
            $("#tenAM").addClass("past");
            $("#elevenAM").addClass("past");
            $("#twelvePM").addClass("past");
            $("#onePM").addClass("past");
            $("#twoPM").addClass("past");
            $("#threePM").addClass("past");
            $("#fourPM").addClass("past");
            $("#fivePM").addClass("present");
        };

        if (hourNow > 17) {
            $("#nineAM").addClass("past");
            $("#tenAM").addClass("past");
            $("#elevenAM").addClass("past");
            $("#twelvePM").addClass("past");
            $("#onePM").addClass("past");
            $("#twoPM").addClass("past");
            $("#threePM").addClass("past");
            $("#fourPM").addClass("past");
            $("#fivePM").addClass("past");
        };

        var hourBoxs = $("textarea");
        console.log(hourBoxs)

        for (var i=0; i<hourBoxs.length; i++) {
            var txtVal = hourBoxs[i].getAttribute("value");
            var areaWithVal = `textarea[value='` + txtVal + `']`;
            console.log(areaWithVal);
     
        }

        var locStorageKey = "";
        var locStorageVal = "";

        //saving to page/local storage
      
        $(".btn").on("click",function(){  
            var valueBtn = $(this).val();
            var areaSelector = `textarea[value='` + valueBtn + `']`;
            console.log(areaSelector)
            locStorageVal = $(areaSelector).val();
            locStorageKey = valueBtn;
            localStorage.setItem(locStorageKey,locStorageVal);
        });
        
        
        
        for (var i=0; i<localStorage.length; i++) {
            var keyStorage = localStorage.key(i);
            var valueStorage = localStorage.getItem(keyStorage);
            
            
            var areaSelector = `textarea[value='` + keyStorage + `']`;

            console.log(areaSelector);
            $(areaSelector).val(valueStorage);   
        }
        


    });
        













 