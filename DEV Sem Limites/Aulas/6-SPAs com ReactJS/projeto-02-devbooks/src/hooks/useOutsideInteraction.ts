import { RefObject, useEffect } from "react";

type CallbackFunction = () => void

export function useOutSideInteraction<T extends HTMLElement> (ref: RefObject<T>, callback: CallbackFunction) {
    useEffect(()=>{
        function clickOutside (event: MouseEvent) {
            if(ref.current && !ref.current.contains(event.target as Node)){
                callback()
            }
        }
        document.addEventListener('mousedown', clickOutside)

        return ()=> {
            document.removeEventListener('mousedown', clickOutside)
        }
    }, [ref, callback])
}