import { Card, CardHeader, CardBody, CardFooter, Image, Button } from "@nextui-org/react";

export default function App({ data }) {
    return (
        <div className="gap-2 grid grid-cols-12 grid-rows-2">
            {data.map((elem, index) => (
                <Card className="
                col-span-12 
                sm:col-span-4 
                h-[120px]
                items-center">
                    <CardHeader className="flex-col">
                        <h4 className="text-lightyellow 
                        font-titleFont 
                        text-center 
                        text-h2 
                        font-bold">
                            {elem.dessertType}
                        </h4>
                    </CardHeader>
                    <Image
                        removeWrapper
                        alt="Card background"
                        className="z-0 w-full h-full object-cover"
                        src={elem.imgSrc}
                    />
                </Card>
            ))}
        </div>
    );
}