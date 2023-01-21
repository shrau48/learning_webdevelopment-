


const toTranslateBox = document.getElementById("to_translate_box")

const translateButton = document.getElementById("translate_btn")

const translatedBox =  document.getElementById("translated_box")

const translate = () => {

    // Check That There is stuff in translate box = at least 10 
   
    let translate_text = String(toTranslateBox.value)

    // if ( translate_text.split(" ").length - 1 < 10) {
    //     window.alert("Enter At Least 10 words");
    //     return
    // }

    // API for translation

    const encodedParams = new URLSearchParams();
    encodedParams.append("q", translate_text);
    encodedParams.append("target", "es");

    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'Accept-Encoding': 'application/gzip',
            'X-RapidAPI-Key': '229d3e4f14mshb0dfc03ec100401p14b7f9jsn21cfaa014b40',
            'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
        },
        body: encodedParams
    };

    let apiData = fetch('https://google-translate1.p.rapidapi.com/language/translate/v2', options)
        .then(response => response.json())
        .catch(err => console.error(err));


    let translated_text = apiData.data

    console.log(apiData)

    

}



translateButton.onclick = translate


