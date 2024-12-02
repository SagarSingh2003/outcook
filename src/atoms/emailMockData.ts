import {get_Mock_Messages} from "@/utils/getMockMessages";
import { get_Paginated_Messages_List } from "@/utils/getMockMessages";
import { atom, selector } from "recoil";

export const currentMessagesList = selector({
    key: 'CurrentMessagesList',
    get : async ({get}) => {
            return await get_Mock_Messages()
    }
});

export const currentPage = atom({
    key : 'currentPage',
    default : 1
})

export const getPaginatedMessageList = selector({
    key: 'GetPaginatedMessageList',
    get: async ({get}) => {
        return await get_Paginated_Message_List(currentPage)
    }    
})