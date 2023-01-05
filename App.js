import React from "react"
import ReactDOM from "react-dom"
import Header from "./components/Header"
import Body from "./components/Body"
import Footer from "./components/Footer"
import data from "./data"

export default function App(){
    let out = data.map(item => {
        return (
            <Body
                 title={item.title}  
                 img={item.imageUrl} 
                 description={item.description} 
                 location={item.location}
                 map={item.googleMapsUrl}
                 sDate={item.startDate}
                 eDate={item.endDate}
            
            
            
            />
        )
    })
    
    return (
             <div> 
                  <Header/>
                  <ul className="nav-list">     
             <li><a href="#abc">HOME</a>  </li>
             <li><a href="#abc">EXPLORE</a>  </li>
             <li><a href="#abc">ABOUT </a>  </li>
          </ul>
          <h2>GET TO KNOW RWANDA</h2>
          <p>Rwanda (/ruˈɑːndə, -ˈæn-/ (listen); Kinyarwanda: u Rwanda [u.ɾɡwaː.nda] (listen)), officially the Republic of Rwanda,[10] is a landlocked country in the Great Rift Valley of Central Africa, where the African Great Lakes region and Southeast Africa converge. Located a few degrees south of the Equator, Rwanda is bordered by Uganda, Tanzania, Burundi, and the Democratic Republic of the Congo. It is highly elevated, giving it the soubriquet "land of a thousand hills", with its geography dominated by mountains in the west and savanna to the southeast, with numerous lakes throughout the country. The climate is temperate to subtropical, with two rainy seasons and two dry seasons each year. Rwanda has a population of over 12.6 million[11] living on 26,338 km2 (10,169 sq mi) of land, and is the most densely populated mainland African country; among countries larger than 10,000 km2, it is the fifth most densely populated country in the world. One million people live in the capital and largest city Kigali.</p>
           <h3 className="subtitle2">CHOOSE YOUR DESTINATION</h3>
           
                 {out}
                 <Footer/>
                 <marquee className="end">Made by ChrisDevelopment </marquee>
         </div>
    )
  }