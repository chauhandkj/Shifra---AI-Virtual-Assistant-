let btn=document.querySelector("#btn")
let content=document.querySelector("#content")
let voice=document.querySelector("#voice")


function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang="en-gb"
    window.speechSynthesis.speak(text_speak)
}
function wishMe(){
    let day=new Date()
    let hours=day.getHours()
    if(hours>=0 && hours<12){
        speak("Good Morning mam!")
    }
    else if(hours>=12 && hours<16){
        speak("Good Afternoon mam!")
    }
    else{
        speak("Good Evening mam!")
    }
}
window.addEventListener("load",()=>{
    wishMe()
})
let speechRecognition=window.SpeechRecognition || window.webkitURLspeechRecognition
let recognition=new speechRecognition()
recognition.onresult=(event)=>{
    let currentIndex=event.resultIndex
    let transcript=event.results[currentIndex][0].transcript
    content.innerText=transcript
    takeCommand(transcript.toLowerCase())
}

btn.addEventListener("click",()=>{
    recognition.start()
    btn.style.display="none"
    voice.style.display="block"
})
function takeCommand(message){
    btn.style.display="flex"
    voice.style.display="none"
    if(message.includes("hello")||message.includes("hi")){
        speak("hello mam,what can i help you")
    }
    else if(message.includes("how are you")){
        speak("i am  fine mam,what about you")
    }
    else if(message.includes("who are you")){
         speak("i am virtual assistant ,created by dharani chauhan")
    }
    else if(message.includes("open youtube")){
        speak("opening youtube...")
        window.open("https://www.youtube.com/","_blank")
    }
    else if(message.includes("open whatsapp")){
        speak("opening whatsapp...")
        window.open("https://web.whatsapp.com/","_blank")
    }
    else if(message.includes("open chat gpt")){
        speak("opening chatgpt...")
        window.open("https://chatgpt.com/","_blank")
    }
    else if(message.includes("open gemini")){
        speak("opening gemini...")
        window.open("https://gemini.google.com/app","_blank")
    }
    else if(message.includes("open google")){
        speak("opening google...")
        window.open("https://www.google.com/","_blank")
    }
    else if(message.includes("open calculator")){
        speak("opening calculator...")
        window.open("calculator://")
    }
    else if(message.includes("time")){
        let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
        speak(time)
       
    }
    else if(message.includes("date")){
        let date=new Date().toLocaleString(undefined,{day:"numeric",month:"short",year:"numeric"})
        speak(date)
    }
    
    else{
         let finalText="this is what i found on google for"+ message.replace("shipra","") || message.replace("shifra","")
         speak(finalText)
         window.open(`https://www.google.com/search?q=${message.replace("shifra","")}`,"_blank")
        }


}
