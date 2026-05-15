import {Button, Card} from "@heroui/react";
import Image from "next/image";
import CancelBooking from "./CancelBooking";

const BookingCard = ({booking}) => {
    return (
        <div >
            <Card className="w-full items-stretch md:flex-row">
                <div className="relative h-[140px] w-full shrink-0 overflow-hidden rounded-2xl sm:h-[120px] sm:w-[120px]">
                    <Image
                        alt="Cherries"
                        className="pointer-events-none absolute inset-0 h-full w-full scale-125 object-cover select-none"
                        width={200} height={200}
                        src={booking.imageUrl}
                    />
                </div>
                <div className="flex flex-1 flex-col gap-3">
                    <Card.Header className="gap-1">
                        <Card.Title className="pr-8">{booking.destinationId}</Card.Title>
                        <Card.Description>
                           Departure Date: {new Date(booking.departureDate).toLocaleDateString()}
                        </Card.Description>
                    </Card.Header>
                    <Card.Footer className="mt-auto flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex flex-col">
                            <span className="text-lg  font-medium text-cyan-500">$ {booking.price}</span>
                            <span className="text-xs text-muted">Location: {booking.country}</span>
                        </div>
                      <div className="flex items-center gap-3">
                         <CancelBooking bookingId={booking._id}/>
                          <Button className="w-full sm:w-auto">view</Button>
                      </div>
                        
                    </Card.Footer>
                </div>
            </Card>
        </div>
    );
};

export default BookingCard;