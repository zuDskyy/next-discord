"use client";


import { useSocket } from "@/components/providers/socket-provider";
import { Badge } from "@/components/ui/badge";


export const SocketIndicator = () => {
    const {isConnected} = useSocket();

    if(!isConnected){
        return(
            <Badge variant="outline" className="bg-yellow-600 border-none">
                Fallback:Polling every is
            </Badge>
        )
    }
   
    return(
        <Badge variant="outline" 
        className="bg-emerald-600 border-none text-white">
           Live:Real-time Update
        </Badge>
    )
}