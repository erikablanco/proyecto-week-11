//import {useEffect, useState} from 'react';
//import Search from '../components/Search/index';
//import './get.data.css';
//
//const GetData = () =>  {
//
//    const [articles, setArticles] = useState([]);
//    const [term, setTerm] = useState('election');
//    const [hold, setHold] = useState(true);
//    
//    
//    
//    useEffect(() => {
//        const fetchArticles = async () => {
//      try {  
//          const res = await fetch (`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${term}&api-key=${process.env.REACT_APP_API_KEY}`
//        )
//          const articles = await res.json()
//          setArticles(articles.response.docs)
//          console.log(articles.response.docs)
//          setHold(false)
//          
//
//        } catch (error) {
//          console.error(error);
//        }        
//    }
//
//       fetchArticles()    
//    }, [term])
//
//    return (
//      <>
//         <div className="showcase">
//           <div className="overlay px-5">
//             <h1 className="text-4xl font-bold text-black capitalize text-center mb-4 lg:text-2xl ">Viewing articles about {term}</h1>
//            
//             <Search searchText={(text) => setTerm(text)}/>
//           </div>
//         </div>
//
//
//        {hold ? (<h1 className="text-center mt-20 font-bold text-6xl">Loanding...</h1>) : ( 
//         <section className="grid grid-cols-1 gap-10 px-5 pt-10 pb-20">
//            {articles.map((article) => {
//                const{abstract, headline:{main}, byline:{original}, 
//                lead_paragraph, news_desk, section_name, web_url,_id, word_count} = article
//
//                return (
//                  <article key={_id} className="bg-white py-10 px-5 rounded-lg lg:w-9/12 lg: mx-auto">
//                    <h2 className="font-bold text-2xl mb-5">{main}</h2>
//                    <p >{abstract}</p>
//                     <p> {lead_paragraph} </p>
//
//                     <ul className="my-4">
//                       <li>{original} </li>
//                       <li>
//                         <span className="font-bold"> News Desk:</span> {news_desk} </li>
//                        
//                       <li>
//                         <span className="font-bold"> Section Name: </span> {section_name} </li>
//
//                       <li> 
//                        <span className="font-bold">Word Count:</span> {word_count}</li>
//
//                     </ul>
//
//                     <a href={web_url} target="_blank" className="underline">Web Resource</a>
//                  </article>
//                )               
//          })}
//      </section>) }
//    </>
//  )  
//}
//export default GetData;







//export default function shearch() {
//    //const Search = GetData
//    const [value, setValue] = useState("")
//    
//    const fetchImages = () => {
//        fetch(`https://api.unsplash.com/search/photos/?client_id=P8LQaJOZFsOCPK08QfCXBKmIw0T2UcVNsECNG8Uo4XA&query=${value}`)
//        .then(response => response.json())
//        .then(data=>{
//            console.log(data)
//        })
//    }
//    return(
//        <div className="search">
//            <div className="search_container">
//                <span>Search</span>
//                <input style={{width:"60%"}} type="text" value={value} onChange={(e) => setValue(e.target.value)}></input>
//                <button onClick= {()=>fetchImages()}>Send</button>
//            </div>
//        </div>
//          
//    ) 
//}