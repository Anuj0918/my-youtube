import React,{ useState,useEffect} from "react";
import { BiSearchAlt2, BiVideoPlus } from "react-icons/bi";
import { BsBell } from "react-icons/bs";
import { useDispatch , useSelector } from "react-redux";
import { togglemenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "./contants/api_data";
import { cacheResults } from "../utils/searchSlice";

const Header = () => {
   const [searchQuery, setSearchQuery] = useState("");
   const [suggestions, setSuggestions] = useState([]);
   const [showSuggestion, setShowSuggestion] = useState(false);
   const dispatch = useDispatch();  

    const searchCache = useSelector((store) => store.search);
   useEffect(() => {
      // make an api call after ever key press
      // but if the difference between 2 API calls is greate that (<) 200ms
      // decline the api call
      const timer = setTimeout(() => {
        if (searchCache[searchQuery]) {
          setSuggestions(searchCache[searchQuery]);
        } else {
          getYoutubeSearchAPI();
        }
      }, 200);
  
      return () => {
        clearTimeout(timer);
      };
    }, [searchQuery]);
    const getYoutubeSearchAPI = async () => {
      console.log("API CALL =>" + searchQuery);
      const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
      const json = await data.json();
      // console.log(json);
      setSuggestions(json[1]);
      dispatch(
         cacheResults({
           [searchQuery]: json[1],
         })
       );
     };
     const togglemenuhandler = () => {
        dispatch(togglemenu());
     };
    return ( 
    <div className="grid grid-flow-col p-6 m-2 shadow-lg">
        <div className="flex col-span-1">
 <img onClick={() => togglemenuhandler()}
   className="h-8 cursor-pointer"
  src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp" alt="menu"/>
       <a href="/">
        <img className="h-8 mx-2"
        alt="youtube-logo"
 src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1200px-YouTube_Logo_2017.svg.png"
  />
     </a>
        </div>
    <div className=" flex col-span-10 px-2">
       <div>
    <input className="  w-8/12 border border-gray-500 p-2 pl-3  rounded-l-full" 
    type="text"
    onChange={(e) => {
      setSearchQuery(e.target.value);
    }}
    value={searchQuery}
    onFocus={() => setShowSuggestion(true)}
    onBlur={() => setShowSuggestion(false)}
    />
    <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-200 "> 🔍 </button>
     </div>
     {showSuggestion && (
          <div className="fixed py-2 mt-9 w-[32rem] rounded-lg border border-gray-200 bg-white shadow-lg">
            <ul>
              {suggestions.map((suggest) => (
                <li
                  key={suggest}
                  className="flex py-1 text-lg hover:bg-gray-200 rounded-lg p-2"
                >
                  <BiSearchAlt2 className="mt-2 mr-2" />
                  {suggest}
                </li>
              ))}
            </ul>
          </div>
        )}
        <img
          className="h-8 border border-gray-200 rounded-full ml-3 bg-gray-100"
          src="https://i.pinimg.com/originals/74/ce/14/74ce14befb22695743659cf8a8290c2b.png"
          alt="mic-icon"
        />
      </div>
    <div className="flex">
    <BiVideoPlus className="h-8 mr-5 text-3xl"/>
        <BsBell className="h-8 mr-7 text-2xl"/>
 <img className="h-9 col-span-1"
 src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt="user-icon"/>
    </div>
    </div>
    );
};
export default Header;