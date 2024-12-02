import { currentMessagesList } from "@/atoms/emailMockData";
import { useRecoilValue } from "recoil";

export default function Messages(){

    const todoList = useRecoilValue(currentMessagesList);
    

    return(
        <>
         Messages
        </>
    )
}