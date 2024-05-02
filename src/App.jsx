import './App.css'
import './index.css'

import axios from 'axios'
import { useState } from 'react';
import Loader from './Loader';

function App() {

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [showLoader, setShowLoader] = useState(false);

  async function generateAnswer() {
    // setAnswer("Loading...");
    setShowLoader(true)
    const response = await axios({
      url:"https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyC7YtWjIASY4K19MudNs_T7eTse8-7dS6U",
      method : "post",
      data : {
        "contents":[
          {
            "parts":[{"text":question + '\n Summarize the given text into 50-150 words depending on length of text.'}]
          }
        ]
      }
    })

    

    console.log(response['data']['candidates'][0]['content']['parts'][0]['text'])
    setAnswer(response['data']['candidates'][0]['content']['parts'][0]['text']);
    setShowLoader(false)

  }

  return (
    <div className=' text-white w-[760px] h-[500px] font-mono '>

      <div className='h-8 w-[800px] bg-black text-center flex justify-center items-center'>
        <h2 className='text-lg'>Text Summarizer</h2>
      </div>

      <div className=' text-center text-xs text-black'>
        
        <textarea onChange={ (e) => setQuestion(e.target.value) } value={question} name="" id="" cols="90" rows="10" className='my-3 border-2 border-black rounded-sm text-xs'></textarea> <br />
        {/* <input type="text" className='px-1 h-16 w-72 border-2 border-black rounded-sm ' onChange={ (e) => setQuestion(e.target.value) } /> <br /> */}

        <button className='h-10 w-36 bg-white border-2 border-black rounded-md' onClick={generateAnswer} >S</button>
        {
          showLoader ? (
            <Loader/>
          ) : (
            <pre className='flex text-wrap text-justify px-2  '>{answer}</pre>
          )
        }
      </div>

    </div>
  )
}

export default App