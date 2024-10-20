import React, { useState } from 'react'
import Navbar from '../NavBar'
import Popup from 'reactjs-popup'
import { CiSearch } from "react-icons/ci";
import nurserylist from "../nurserylist.json"
import productlist from "../productlist.json"
import { IoClose } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import 'reactjs-popup/dist/index.css'
import "./index.css"
import Footer from '../Footer';
import { Link } from 'react-router-dom';


const filterList = [
    "Types of Plants",
    "Price",
    "Nursery",
    "Ideal Plants Location",
    "Indoor/Outdoor",
    "Maintenece",
    "Plant Size",
    "Water Schedule",
    "Color",
    "Seasonal",
    "Light Efficient"
]

const Home = () => {

   const [currentPage, setCurrentPage] = useState(1)
   const recordsPerPage = 9;
   const lastIndex = currentPage * recordsPerPage;
   const firstIndex = lastIndex - recordsPerPage;
   const records = productlist.slice(firstIndex, lastIndex)
   const npage = Math.ceil(productlist.length / recordsPerPage)
   const numbers = [...Array(npage + 1).keys()].slice(1)


   function prePage(){
      if(currentPage !== 1){
        setCurrentPage(currentPage - 1)
      }
   }
 
   function changeCPage(id){
     setCurrentPage(id)
   }
 
   function nextPage(){
        if(currentPage !== npage){
            setCurrentPage(currentPage + 1)
        }
   }


  return (
   <>
   <Navbar />
   <div className='home-container'>
        <div className='search-container'>
        <button type='button' className='search-btn'><CiSearch size={20} /></button>
            <input type='search' placeholder='Search Plant' className='search-field' />
           
        </div>

        <div className='plants-pots-container'>
            <div className='plant-pot-btns'>
                <button type='button' className='plants-btn btn'>Plants</button>
                <button type='button' className='pots-btn btn'>Pots</button>
            </div>
            <p className='plant-pot-para'>
            Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum 
            quidem aut necessitatibus enim ut internos accusantium a numquam autem ab rerum omnis. Non molestiae ratione et laborum doloribus aut molestiae voluptates ut porro excepturi sit molestiae obcaecati qui quis beatae est voluptatem eius.
             Et architecto nihil id labore omnis hic iste deleniti et porro aspernatur.
            </p>
        </div>

        <div className='nursery-container'>
            <h1 className='nursery-text'>Nursery</h1>
            <ul className='nursery-list'>
                {
                    nurserylist.map((d, i ) =>(
                        <li key = {i} className='round-item'>
                            <img src={d.imageUrl} alt='images' className='round-image' />
                            <p className='round-text'>{d.text}</p> 
                        </li>
                    ))
                }
            </ul>
        </div>

        <div className='body-container'>
            <div className='body-left-container'>
                <ul className='filter-list'>
                    <li className='head'><p >Filter</p> <p>CLEAR ALL</p></li>
                    {filterList.map((each) =>(
                        <li className='filter-item'>{each} <p>+</p></li>
                    ))}
                </ul>
            </div>

            <div className='body-right-container'>

              <div className='product-count'>
                <p>300 products</p>
                <select className='select-list'>
                    <option className='option-item'>SORT BY</option>
                    <option className='option-item'>Low To High</option>
                    <option className='option-item'>High To Low</option>
                    <option className='option-item'>Pots</option>
                    <option className='option-item'>Plants</option>
                </select>
              </div>

              <div className='product-container'>

                <ul className='product-list'>
                    {
                        records.map((data,i) => (
                            <li key = {i} className='product-item'>
                                <div className='card'>
                                    <div className='img-container'>
                                        <CiHeart size={25} className='heart' />
                                    <img src={data.imageUrl} alt='prod' className='product-img' />
                                    <Link to = "/thanks" className='view-link'><button type='button' className='view-btn'>View Product</button></Link>
                                    </div>
                                    <div className='card-details'>
                                        <h1 className='title'>{data.title}</h1>
                                        <p className='texts'>{data.texts}</p>
                                        <p className='rating'><img src='https://res.cloudinary.com/dcbul0ogm/image/upload/v1729408294/2d5f9291095d1210262f4a0d5f4c77e7_ywrxab.png' alt = "rates" className='rate-img' /> <span className='rate'>4.9</span></p>
                                        <p className='price'><span className='old'>$349</span> $299</p>
                                        <div className='add-buttons'>
                                           

<Popup
     modal
     trigger={
        <button type='button' className='add-to-cart'>-  Add to cart  +</button>
     }
   >
     {close => (
      
         <div className='pop-container'>
             <button
           type="button"
           className="trigger-button"
           onClick={() => close()}
         >
           <IoClose size={20} />
         </button>
           <div className='pop-details'>
           <p className='your-cart'>Your Cart</p>
           <h1 className='pop-head'>Congratulations Order Placed!</h1>
           <br />
           <img src='https://res.cloudinary.com/dcbul0ogm/image/upload/v1729414779/14d6293522911d4a2548b9b1cf65a33a_cahot2.png' alt = "pops" className='pops-img' />
           <p className='pop-para'>Thank you for choosing Chaperone services.
           We will soon get in touch with you!</p>
           <button type='button'  onClick={() => close()} className='type-btn'>CONTINUE SHOPPING</button>
           </div>
         </div>
        
      
     )}
   </Popup>



                                            <button type='button' className='buy-on-rent'>Buy on Rent</button>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))
                    }
                </ul>


               <nav>
                <ul className='pagination'>
                    <li className='page-item'>
                        <button type='button' className='page-link' onClick={prePage}>Prev</button>
                    </li>
                    {
                        numbers.map((n, i) =>(
                            <li className="page-item" key = {i}>
                                <button type='button' className={`page-link ${currentPage === n ? "actives" : ""}`}
                                onClick={() => changeCPage(n)}>{n}</button>
                            </li>
                        ))
                    }

                    <li className='page-item'>
                        <button type='button' className='page-link' onClick={nextPage}>Next</button>
                    </li>
                </ul>
               </nav>

              </div>

            </div>

        </div>

        <Footer />

    </div>
   </>
  )



}

export default Home