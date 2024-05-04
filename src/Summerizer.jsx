import './App.css'
import './index.css'
import axios from 'axios'
import { useState } from 'react';
import Loader from './Loader';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Navbar';

function Summarizer() {

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [showLoader, setShowLoader] = useState(false);
  const [copied, setCopied] = useState(false);

  const command = 'Summarize the given text into 50-100 words depending on length of text. For example if text contains less than 250 words then summarize it in 50-55 words and if text contains more then 1000 words then summarize it in 2 paragraphs and in 90-100 words and so on'

  async function generateAnswer() {
    // setAnswer("Loading...");
    setShowLoader(true)
    const response = await axios({
      url:"https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyC7YtWjIASY4K19MudNs_T7eTse8-7dS6U",
      method : "post",
      data : {
        "contents":[
          {
            "parts":[{"text":question +'\n'+ command }]
          }
        ]
      }
    })

    console.log(response['data']['candidates'][0]['content']['parts'][0]['text'])
    setAnswer(response['data']['candidates'][0]['content']['parts'][0]['text']);
    setShowLoader(false)
    setCopied(true);
  }

  const notify = () => {
    toast('Content is Copied')
  }

  return (
    <div className=' text-white w-[760px] h-[500px] font-mono '>

      <Navbar/>

      <div className=' text-center text-xs text-black'>
        
        <textarea onChange={ (e) => setQuestion(e.target.value) } value={question} name="" id="" cols="90" rows="10" className='my-3 px-2 text-justify border-2 border-black rounded-sm text-xs'></textarea> <br />
        {/* <input type="text" className='px-1 h-16 w-72 border-2 border-black rounded-sm ' onChange={ (e) => setQuestion(e.target.value) } /> <br /> */}

        <button className='h-10 w-36 bg-white border-2 border-black rounded-md' onClick={generateAnswer} >Summarize</button>
        {
          showLoader ? (
            <Loader/>
          ) : (
            <pre className='flex text-wrap text-justify px-3 py-3 '>{answer}</pre>
          )
        }

        
        
        {copied ? 
          <CopyToClipboard text={answer} onCopy={ () => toast('Content is copied') }>
          <button className='h-8 w-36  border-2 border-black rounded-md bg-fuchsia-200 hover:bg-fuchsia-600'>Copy to clipboard</button>
          </CopyToClipboard>
        : null 
        }

      </div>
    </div>
  )
}

export default Summarizer