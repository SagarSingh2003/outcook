import { currentMessagesList } from "@/atoms/emailMockData";
import Header from "@/ui/components/Header";
import MessagePreviewCards from "@/ui/components/messagePreviewCard";
import { useRecoilValue } from "recoil";

export default function Messages(){

    const messageList = useRecoilValue(currentMessagesList);
    

    return(
        <main>
            <Header />
            <MessagePreviewCards isFavorite={true}/>
        </main>
    )
}