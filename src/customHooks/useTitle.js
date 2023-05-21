import { useEffect } from "react";

const useTitle = title => {
 useEffect(() =>{
    document.title =`kiddoz-kuddoz-doll | ${title}`
 },[title])
}

export default useTitle;