<script>
//Initiate event variable
var event = new Event('change');

window.addEventListener('DOMContentLoaded', function() {
    //Hide submit button
    var submitButton = document.getElementById('fsSubmit4167702');
    submitButton.style.display = "none";


    //Get ID & PW from query string
    var href = window.location.href;
        if (href.match(/surveyID=\d\d\d\d\d\d/)){
            var surveyID = href.split('surveyID=')[1]
            if (surveyID.match(/&/)){
              surveyID = surveyID.split('&')[0]
              document.getElementById('field109386793').value = surveyID;
            }
        }
        else{
            var surveyID = null;
        }
         if (href.match(/PW=/)){
            var PW = href.split('PW=')[1]
            if (PW.match(/&/)){
              PW = PW.split('&')[0]
            }
        }
        else{
            var PW = null;
        }
    
    //If no ID or query string, display error message
    if (!surveyID || !PW){
        displayNotAvailableError();
        return;
    }
    
    //Check ID & PW via API
    var url = 'https://script.google.com/macros/s/AKfycbw-XH8JOdn4RQeGkdrbQPoMl5WMlsptm-IJDQarz2NxnADhAo3RrUtrAkSgoQK1rOGh/exec?surveyID='+surveyID+'&PW='+PW;
    fetch(url)
    .then(res => res.json())
    .then(data => initiateForm(data))
    .catch(error => displayNotAvailableError());
    
    // Initiates form settings after successful API communication
    function initiateForm(data){
        var status = data.status;
        var options = data.options;
        console.log(options)
        //If not valid, display error message1; if already submitted, display error message 2
        if (status == "Submitted"){
            //Display error message
            displaySubmittedError();
            return;
        }
        if (status =="Not found"){
            //Display error message
            displayNotAvailableError();
            return;    
        }
        //Set up parameter fields based on package
        //Set up type
        var typeSelect = document.getElementById('field109386599');
        typeSelect.value = options.type;
        typeSelect.dispatchEvent(event);
        
        //Set up tutors
        var numTutorsSelect = document.getElementById('field109387240');
        numTutorsSelect.value = options.numTutors;
        numTutorsSelect.dispatchEvent(event);
        
        //Tutor 1 name
        var tutor1Legend = document.getElementById('fsLegend109385512');
        var tutor1Label = "<span>What do you think about your tutor, "+options.tutor1 + "?*</span>";
        tutor1Legend.innerHTML = tutor1Label;
        var tutor1CommentLabel = document.getElementById('label111540691');
        var tutor1CommentLabelText = "Comments about " +options.tutor1 + ":";
        tutor1CommentLabel.innerHTML = tutor1CommentLabelText;
        //Tutor 2 name
        var tutor2Legend = document.getElementById('fsLegend109399028');
        var tutor2Label = "<span>What do you think about your tutor, "+options.tutor2 + "?*</span>";
        tutor2Legend.innerHTML = tutor2Label;
        var tutor2CommentLabel = document.getElementById('label111540746');
        var tutor2CommentLabelText = "Comments about " +options.tutor2 + ":";
        tutor2CommentLabel.innerHTML = tutor2CommentLabelText;
        //Tutor 3 name
        var tutor3Legend = document.getElementById('fsLegend109399031');
        var tutor3Label = "<span>What do you think about your tutor, "+options.tutor3 + "?*</span>";
        tutor3Legend.innerHTML = tutor3Label;
        var tutor3CommentLabel = document.getElementById('label111540751');
        var tutor3CommentLabelText = "Comments about " +options.tutor3 + ":";
        tutor3CommentLabel.innerHTML = tutor3CommentLabelText;
        //Tutor 4 name
        var tutor4Legend = document.getElementById('fsLegend109399030');
        var tutor4Label = "<span>What do you think about your tutor, "+options.tutor4 + "?*</span>";
        tutor4Legend.innerHTML = tutor4Label;
        var tutor4CommentLabel = document.getElementById('label111540757');
        var tutor4CommentLabelText = "Comments about " +options.tutor4 + ":";
        tutor4CommentLabel.innerHTML = tutor4CommentLabelText;
        
        //Set up components
        var numComponentsSelect = document.getElementById('field109387239');
        numComponentsSelect.value = options.numComponents;
        numComponentsSelect.dispatchEvent(event);
        
        //Component 1 name
        var component1Legend = document.getElementById('fsLegend109386156');
        var component1Label = "<span>Please rate the component: "+options.component1+".*<span>";
        component1Legend.innerHTML = component1Label;
        var component1CommentLabel = document.getElementById('label109894022');
        var component1CommentLabelText = "Comments about this component (" + options.component1 +"):";
        component1CommentLabel.innerHTML = component1CommentLabelText;
        
        //Component 2 name
        var component2Legend = document.getElementById('fsLegend109395317');
        var component2Label = "<span>Please rate the component: "+options.component2+".*<span>";
        component2Legend.innerHTML = component2Label;
        var component2CommentLabel = document.getElementById('label109894024');
        var component2CommentLabelText = "Comments about this component (" + options.component2 +"):";
        component2CommentLabel.innerHTML = component2CommentLabelText;        
        
        //Component 3 name
        var component3Legend = document.getElementById('fsLegend109395315');
        var component3Label = "<span>Please rate the component: "+options.component3+".*<span>";
        component3Legend.innerHTML = component3Label;
        var component3CommentLabel = document.getElementById('label109894072');
        var component3CommentLabelText = "Comments about this component (" + options.component3 +"):";
        component3CommentLabel.innerHTML = component3CommentLabelText;     
        
        //Component 4 name
        var component4Legend = document.getElementById('fsLegend109395314');
        var component4Label = "<span>Please rate the component: "+options.component4+".*<span>";
        component4Legend.innerHTML = component4Label;
        var component4CommentLabel = document.getElementById('label109894073');
        var component4CommentLabelText = "Comments about this component (" + options.component4 +"):";
        component4CommentLabel.innerHTML = component4CommentLabelText;
        
        //Component 5 name
        var component5Legend = document.getElementById('fsLegend109395312');
        var component5Label = "<span>Please rate the component: "+options.component5+".*<span>";
        component5Legend.innerHTML = component5Label;
        var component5CommentLabel = document.getElementById('label109894074');
        var component5CommentLabelText = "Comments about this component (" + options.component5 +"):";
        component5CommentLabel.innerHTML = component5CommentLabelText;
        
        //Component 6 name
        var component6Legend = document.getElementById('fsLegend109395311');
        var component6Label = "<span>Please rate the component: "+options.component6+".*<span>";
        component6Legend.innerHTML = component6Label;
        var component6CommentLabel = document.getElementById('label109894075');
        var component6CommentLabelText = "Comments about this component (" + options.component6 +"):";
        component6CommentLabel.innerHTML = component6CommentLabelText;
        
        //Component 7 name
        var component7Legend = document.getElementById('fsLegend109395309');
        var component7Label = "<span>Please rate the component: "+options.component7+".*<span>";
        component7Legend.innerHTML = component7Label;
        var component7CommentLabel = document.getElementById('label109894077');
        var component7CommentLabelText = "Comments about this component (" + options.component7 +"):";
        component7CommentLabel.innerHTML = component7CommentLabelText;
        
        //Component 8 name
        var component8Legend = document.getElementById('fsLegend109395308');
        var component8Label = "<span>Please rate the component: "+options.component8+".*<span>";
        component8Legend.innerHTML = component8Label;
        var component8CommentLabel = document.getElementById('label109394408');
        var component8CommentLabelText = "Comments about this component (" + options.component8 +"):";
        component8CommentLabel.innerHTML = component8CommentLabelText;
        
        //Set up trips
        var numTripsSelect = document.getElementById('field109387078');
        numTripsSelect.value = options.numTrips;
        numTripsSelect.dispatchEvent(event);
        
        //Trip 1 name
        var trip1Legend = document.getElementById('fsLegend109386186');
        var trip1Label = "<span>Please rate the trip to "+options.trip1+".*<span>";
        trip1Legend.innerHTML = trip1Label;
        //Trip 2 name
        var trip2Legend = document.getElementById('fsLegend109395414');
        var trip2Label = "<span>Please rate the trip to "+options.trip2+".*<span>";
        trip2Legend.innerHTML = trip2Label;
        //Trip 3 name
        var trip3Legend = document.getElementById('fsLegend109395450');
        var trip3Label = "<span>Please rate the trip to "+options.trip3+".*<span>";
        trip3Legend.innerHTML = trip3Label;
        //Trip 4 name
        var trip4Legend = document.getElementById('fsLegend109395455');
        var trip4Label = "<span>Please rate the trip to "+options.trip4+".*<span>";
        trip4Legend.innerHTML = trip4Label;
        //Trip 5 name
        var trip5Legend = document.getElementById('fsLegend109395454');
        var trip5Label = "<span>Please rate the trip to "+options.trip5+".*<span>";
        trip5Legend.innerHTML = trip5Label;
        //Trip 6 name
        var trip6Legend = document.getElementById('fsLegend109395453');
        var trip6Label = "<span>Please rate the trip to "+options.trip6+".*<span>";
        trip6Legend.innerHTML = trip6Label;
        //Trip 7 name
        var trip7Legend = document.getElementById('fsLegend109395452');
        var trip7Label = "<span>Please rate the trip to "+options.trip7+".*<span>";
        trip7Legend.innerHTML = trip7Label;
        //Trip 8 name
        var trip8Legend = document.getElementById('fsLegend109395451');
        var trip8Label = "<span>Please rate the trip to "+options.trip8+".*<span>";
        trip8Legend.innerHTML = trip8Label;
        
        //Set up mentors
        if (options.mentors){
            var mentorsSelect = document.getElementById('field109387145');
            mentorsSelect.value = "TRUE";
            mentorsSelect.dispatchEvent(event);
        }
        
        //Set up activities
        if (options.activities){
            var activitiesSelect = document.getElementById('field124463817');
            activitiesSelect.value = "TRUE";
            activitiesSelect.dispatchEvent(event);
        }
        
        //Set up homestay
        if (options.homestay){
            var homestaySelect = document.getElementById('field109387140');
            homestaySelect.value = "TRUE";
            homestaySelect.dispatchEvent(event);
        }
        
        //Set up virtual homestay
        if (options.virtualHomestay){
            var virtualHomestaySelect = document.getElementById('field124463820');
            virtualHomestaySelect.value = "TRUE";
            virtualHomestaySelect.dispatchEvent(event);
        }
        
        //Set up campus
        if (options.campus){
            var campusSelect = document.getElementById('field109387144');
            campusSelect.value = "TRUE";
            campusSelect.dispatchEvent(event);
        }        
        
        // Set status as OK
        var statusSelect = document.getElementById('field109394733');
        statusSelect.value = "OK";
        statusSelect.dispatchEvent(event);
        
        
        //Display Submit button
        submitButton.style.display = "block";
    }
    
    // Displays already submitted error message
    function displaySubmittedError(){
        var statusSelect = document.getElementById('field109394733');
        statusSelect.value = "SUBMITTED";
        statusSelect.dispatchEvent(event);
    }
    
    // Displays not available error message
    function displayNotAvailableError(){
        var statusSelect = document.getElementById('field109394733');
        statusSelect.value = "ERROR";
        statusSelect.dispatchEvent(event);
    }

});
</script>
