"use client";
import { authClient } from "@/lib/auth-client";
import {AlertDialog, Button} from "@heroui/react";
import { useRouter } from "next/navigation";

const CancelBooking = ({bookingId}) => {
  const router = useRouter()
  const handleCancel = async()=>{
    const {data:tokenData} = await authClient.token()
      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${bookingId}`,{
        method: 'DELETE',
        headers:{ authorization: `Bearer ${tokenData?.token}`}
      })
      const data = await res.json()
      if(data.acknowledged){
       router.refresh()
      }
  }
    return (
        <div>
      <AlertDialog>
       <Button className="w-full sm:w-auto mr-3" variant="danger">Cancel</Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Cancel Your Trip permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>My Awesome Project</strong> and all of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Keep
              </Button>
              <Button onClick={handleCancel} slot="close" variant="danger">
                Confirm
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
        </div>
    );
};

export default CancelBooking;