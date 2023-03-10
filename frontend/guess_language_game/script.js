


const toTranslateBox = document.getElementById("to_translate_box")

const translateButton = document.getElementById("translate_btn")

const translatedBox =  document.getElementById("translated_box")

let latestlang = "initial"

let latestinputText = "initial1"

const langauges =  {
    "Afrikaans": "af",
    "Amharic": "am",
    "Arabic": "ar",
    "Armenian": "hy",
    "Azerbaijani": "az",
    "Basque": "eu",
    "Belarusian": "be",
    "Bengali": "bn",
    "Bosnian": "bs",
    "Bulgarian": "bg",
    "Catalan": "ca",
    "Cebuano": "ceb",
    "Chinese": "zh-CN",
    "Corsican": "co",
    "Croatian": "hr",
    "Czech": "cs",
    "Danish": "da",
    "Dutch": "nl",
    "English": "en",
    "Esperanto": "eo",
    "Estonian": "et",
    "Finnish": "fi",
    "French": "fr",
    "Frisian": "fy",
    "Galician": "gl",
    "Georgian": "ka",
    "German": "de",
    "Greek": "el",
    "Gujarati": "gu",
    "Haitian": "ht",
    "Hausa": "ha",
    "Hawaiian": "haw",
    "Hebrew": "he",
    "Hindi": "hi",
    "Hmong": "hmn",
    "Hungarian": "hu",
    "Icelandic": "is",
    "Igbo": "ig",
    "Indonesian": "id",
    "Irish": "ga",
    "Italian": "it",
    "Japanese": "ja",
    "Javanese": "jw",
    "Kannada": "kn",
    "Kazakh": "kk",
    "Khmer": "km",
    "Korean": "ko",
    "Kurdish": "ku",
    "Kyrgyz": "ky",
    "Lao": "lo",
    "Latin": "la",
    "Latvian": "lv",
    "Lithuanian": "lt",
    "Luxembourgish": "lb",
    "Macedonian": "mk",
    "Malagasy": "mg",
    "Malay": "ms",
    "Malayalam": "ml",
    "Maltese": "mt",
    "Maori": "mi",
    "Marathi": "mr",
    "Mongolian": "mn",
    "Myanmar": "my",
    "Nepali": "ne",
    "Norwegian": "no",
    "Nyanja": "ny",
    "Pashto": "ps",
    "Persian": "fa",
    "Polish": "pl",
    "Portuguese": "pt",
    "Punjabi": "pa",
    "Romanian": "ro",
    "Russian": "ru",
    "Samoan": "sm",
    "Scots": "gd",
    "Serbian": "sr",
    "Sesotho": "st",
    "Shona": "sn",
    "Sindhi": "sd",
    "Sinhala": "si",
    "Slovak": "sk",
    "Slovenian": "sl",
    "Somali": "so",
    "Spanish": "es",
    "Sundanese": "su",
    "Swahili": "sw",
    "Swedish": "sv",
    "Tagalog": "tl",
    "Tajik": "tg",
    "Tamil": "ta",
    "Telugu": "te",
    "Thai": "th",
    "Turkish": "tr",
    "Ukrainian": "uk",
    "Urdu": "ur",
    "Uzbek": "uz",
    "Vietnamese": "vi",
    "Welsh": "cy",
    "Xhosa": "xh",
    "Yiddish": "yi",
    "Yoruba": "yo",
    "Zulu": "zu"
}


let randomLanguage = function (langauges) {
    var keys = Object.keys(langauges);

    let random_key =  keys[ keys.length * Math.random() << 0]

    latestlang = random_key

    return langauges[random_key];
};

const translate = () => {




   
    let translate_text = String(toTranslateBox.value)

    // Check not already translated 

    if (translate_text == latestinputText) {
        window.alert("Enter new text for translation");
        return
    }

    // Check That There is stuff in translate box = at least 10 

    let no_words = translate_text.split(" ").length - 1

    if ( no_words < 10 ) {
        window.alert("Enter At Least 10 words");
        return
    }

    latestinputText = String(translate_text)


    let random_lang = randomLanguage(langauges)

    
    // API for translation

    const encodedParams = new URLSearchParams();
    encodedParams.append("q", translate_text);
    encodedParams.append("target", random_lang);

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
        .then(response => response.json()).then(response => translatedBox.value = response.data.translations[0].translatedText)
     .catch(err => console.error(err));

    console.log(latestlang)


}



translateButton.onclick = translate


