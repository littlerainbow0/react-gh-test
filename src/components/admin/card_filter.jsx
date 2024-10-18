import { Card, CardHeader, CardBody, CardFooter, Image, Button, button } from "@nextui-org/react";

export default function App({ data }) {
    return (
        <div className="my-5 flex flex-wrap justify-center  gap-3">
            {data.map((elem, index) => (
                <button
                    key={index}
                    className="flex-grow" // 使用 flex-grow 使按鈕能自動調整大小
                    style={{ minWidth: '150px' }} // 可以設置最小寬度
                >
                    <Card
                        className="flex-auto h-[120px] items-center p-1  rounded-full"
                        style={{ backgroundImage: `url(${elem.imgSrc})`,
                    boxShadow: '0 0 4px #B1B1B1' }}
                    >
                        <CardHeader className="flex-col">
                            <h4
                                className="text-lightyellow font-titleFont text-h3 font-bold p-6"
                                style={{
                                    borderRadius: '3rem',
                                    backdropFilter: 'blur(8px)',
                                }}
                            >
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
                </button>
            ))}
        </div>

    );
}