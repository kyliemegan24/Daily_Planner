
$(document).ready(function() {
        var currentDay = $("#currentDay");
        var date = new Date();
        currentDay.append(date);
    

        //var container = document.getElementsByClassName("container");
        //put elijah notes here?
        //for (var i = 0; i < hours.length; i++) {
        //var newHourDiv = $("<div class='row'>" + hours[i] + "</div>");
        //var textbox = $("<input type='text' id='myInput'></input>");
       
        var date = new Date();
        var hourNow = date.getHours(); 
        console.log(hourNow);
        

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




        saveBtn = $(".saveBtn").on("click", function() {
                var task = document.getElementsByClassName("myInput").value;
                localStorage.setItem("calendar item", JSON.stringify(task));
                updateHTML();
        });
            

        

        function updateHTML() {
            var task = getTask();
            document.getElementsByClassName("myInput").innerHTML = task;
        }
      

        function getTask() {
            return localStorage.getItem("myInput");
        }

        /*function updateHTML () {
            var task = getTask();
            document.getElementsByClassName("myInput").innerHTML = task;
        }*/

        /*function saveItem() {
            var task = document.getElementsByClassName("myInput").value;
            localStorage.setItem("calendar item", task);
            updateHTML();
        };*/

        
       


        

        

        /*function saveItem() {
            var inputVal = document.getElementsByClassName("myInput").value;
            document.getElementById("myInput").innerHTML = inputVal;
            localStorage.setItem("calendar item", inputVal);
            document.getElementById("myInput").innerHTML = localStorage.getItem("calendar item");
        };*/

       



})




















        //var hoursArray = hours[i];

       /* for (i = 0; i < hours.length; i++) {
            
            var nine = document.getElementById("nineAM");
            var ten = document.getElementById("tenAM");
            var eleven = document.getElementById("elevenAM");
            var twelve = document.getElementById("twelvePM");
            var one = document.getElementById("onePM");
            var two = document.getElementById("twoPM");
            var three = document.getElementById("threePM");
            var four = document.getElementById("fourPM");
            var five = document.getElementById("fivePM");
            //const element = array[index];

            var myInput = document.getElementsByClassName("myInput");

            console.log(myInput);

            if (hours[i] < hourNow - 9) {
                
                nine.classList.add("future");
                ten.classList.add("future");
                eleven.classList.add("future");
                twelve.classList.add("future");
                one.classList.add("future");
                two.classList.add("future");
                three.classList.add("future");
                four.classList.add("future");
                five.classList.add("future");
        
            } else if (hours[i] === hourNow - 9) {
                nine.classList.add("present");
                ten.classList.add("present");
                eleven.classList.add("present");
                twelve.classList.add("present");
                one.classList.add("present");
                two.classList.add("present");
                three.classList.add("present");
                four.classList.add("present");
                five.classList.add("present");
            } else {
                nine.classList.add("past");
                ten.classList.add("past");
                eleven.classList.add("past");
                twelve.classList.add("past");
                one.classList.add("past");
                two.classList.add("past");
                three.classList.add("past");
                four.classList.add("past");
                five.classList.add("past");
            };
            

           






        }*/
           

        //newHourDiv.append(textbox);
        //container.append(newHourDiv);

        //var saveButton = $("<btn class='saveBtn saveBtn i:hover'>save</btn>");

        //newHourDiv.append(saveButton);


    
    
    
   












 