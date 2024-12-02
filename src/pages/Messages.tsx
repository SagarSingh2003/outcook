import { currentMessagesList } from "@/atoms/emailMockData";
import Header from "@/ui/Component/Header";
import { useRecoilValue } from "recoil";

export default function Messages(){

    const todoList = useRecoilValue(currentMessagesList);
    

    return(
        <main>
            <Header />
        </main>
    )
}