import { mock_message_list_api } from "@/constants/api";
import axios from "axios";
import { RecoilState } from "recoil";


interface IEMAIL_LIST_DATA{
        id: string;
        from: {
            email: string;
            name: string;
        };
        date: number;
        subject: string;
        short_description: string;        
}

interface IMOCK_API_EMAIL_LIST_RESPONSE{
    data : {
        list : [IEMAIL_LIST_DATA]
    }
}

export const get_Mock_Messages = async (suffix? : string) => {

    try{
        
        const api = `${mock_message_list_api + suffix}`.trim()

        const api_response : IMOCK_API_EMAIL_LIST_RESPONSE = await axios.get(api)
    
        return api_response.data.list

    }catch(err){

        console.log("Error occured in getMockMessage api *****");
        console.log(err);

    }
}


export const get_Paginated_Messages_List = async (page_id : RecoilState<number>) => {
        return await get_Mock_Messages(`page=${page_id}`)
}
