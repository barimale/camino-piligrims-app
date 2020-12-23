import { FabricCaServerApi } from "./fabric-ca-client-api/typescript-axios-client-generated/api";
import { Configuration } from "./fabric-ca-client-api/typescript-axios-client-generated/configuration";
import { useState, PropsWithChildren, useEffect } from "react";
import { StampInstance } from "../screens/app/journey/JourneyInProgress";

const config: Configuration = {}
export const Instance = new FabricCaServerApi(config);

interface ListenerProps extends PropsWithChildren<any>{
    address: string;
    port: string | number;
    isActive: boolean;
    // TODO: implement in system
    onEvent: (data: StampInstance) => void;
}

export const ListenerComponent = (props: ListenerProps) => {
    const [isOpened, setIsOpened] = useState<boolean>(false);
    var socket = new WebSocket('ws://' + props.address + ':' + props.port.toString() + '/');

    useEffect(() => {
        if(props.isActive === true){
            socket = new WebSocket('ws://' + props.address + ':' + props.port.toString() + '/');
        }else{
            socket?.close();
        }

        return () => {
            socket?.close();
        };
    }, [props.isActive]);

    socket.onopen = () => {
        setIsOpened(true);
        console.log('Start connection');
    };

    // socket.addEventListener() 
    socket.onmessage = (message: any) => {
        debugger
        // TODO: expose to the parent
    };

    socket.onerror = (error: any) => {
        console.log(error.toStrng());
    };

    socket.onclose = () => {
        setIsOpened(false);
        console.log('Closed connection');
    };

    return (
    <>
        {props.children}
    </>);
}

