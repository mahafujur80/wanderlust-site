import { DeleteDialog } from "@/components/DeleteDialog";
import DestinationDetails from "@/components/DestinationDetails";
import { EditModal } from "@/components/EditModal";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";


const DetailsPage = async({params}) => {
     const {token} = await auth.api.getToken({
        headers: await headers()
     })
    

    const {id} = await params;
    const res = await fetch(`${process.env.SERVER_API_URL}/destination/${id}`,{
        headers:{
           authorization: `Bearer ${token}`
        }
    })
    const destination = await res.json()
    return (
        <div>
            <div className="w-3xl mx-auto">
                <h1>Destination Details </h1>
                 <div className="flex justify-end items-center gap-3">
                    <EditModal destination={destination}/>
                    <DeleteDialog destination={destination}/>
                 </div>
                <DestinationDetails destination={destination}/>
            </div>
        </div>
    );
};

export default DetailsPage;