let consoleFormEl = document.getElementById("consoleForm");


let requestUrlEl = document.getElementById("requestUrl");
let requestUrlErrMsgEl = document.getElementById("requestUrlErrMsg");


let requestMethodEl = document.getElementById("requestMethod");
let requestBodyEl = document.getElementById("requestBody");
let sendRequestBtnEl = document.getElementById("sendRequestBtn");

let responseStatusEl = document.getElementById("responseStatus");
let responseBodyEl = document.getElementById("responseBody");

let formData={
    requestUrl:"https://gorest.co.in/public-api/users",
    requestMethod:"POST",
    requestBody:""
};

requestUrlEl.addEventListener("change",function(event){
    formData.requestUrl = event.target.value;
});

requestMethodEl.addEventListener("change",function(event){
    formData.requestMethod = event.target.value;
});

requestBodyEl.addEventListener("change",function(event){
    formData.requestBody = event.target.value;
});

function validateRequestUrl(formData){
    let {requestUrl} = formData;
    if(requestUrl === ""){
        requestUrlErrMsgEl = "*Required";
    }
    else{
        requestUrlErrMsgEl = "";
    }
};

function sendRequest(formData){
    let{requestUrl,requestMethod,requestBody} = formData;

    let options={
        method:requestMethod,
        headers:{
            "Content-Type":"application/json",
            Accept:"application/json",
            Authorization:"Bearer 45b494af4b1fe49538c570a0232869af3f9f3de5c9465d2bc2b53555a37f479b"
        },
        body:requestBody
    };
    fetch(requestUrl,options)
        .then(function(response){
            return response.json();
        })
        .then(function(jsonData){
            let responseStatus = jsonData.code;
            let responseBody = JSON.stringify(jsonData);
            responseStatusEl.value = responseStatus;
            responseBodyEl.value = responseBody;
         });
};


consoleFormEl.addEventListener("submit",function(event){
    event.preventDefault();
    validateRequestUrl(formData);
    sendRequest(formData);
});

