import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Avatar, Button } from "@nextui-org/react";
import { div } from "framer-motion/m";

export default function App({ columns, data }) {

    var typeIcon = function (elem) {
        switch (elem.type) {
            case "訂單/取消":
                return "🎫";
                break;
            case "付款/退款":
                return "💵";
                break;
            case "車廂/設備":
                return "🚂";
                break;
            case "旅程相關":
                return "🗺️";
                break;
            case "菜單成分或內容":
                return "📄";
                break;

            default:
                break;
        }
    };
    // 訂單/取消, 付款/退款, 車廂/設備, 旅程相關, 菜單成分或內容

    return (
        <div>
            {data.map((elem, index) => (
                <Card key={elem.userId} className="max-w-[340px]">
                    <CardHeader className="justify-between">
                        <div className="flex gap-5">
                            <Avatar isBordered radius="full" size="md" src="https://nextui.org/avatars/avatar-1.png" />
                            <div className="flex flex-col gap-1 items-start justify-center">
                                <h4 className="text-small font-semibold leading-none text-default-600">
                                    {elem.name}
                                </h4>
                                <h5 className="text-small tracking-tight text-default-400">
                                    {elem.email}
                                </h5>
                            </div>
                        </div>
                        <Button
                            className={elem.reply ? "bg-transparent text-foreground border-default-200" : ""}
                            color="primary"
                            radius="full"
                            size="sm"
                            variant={elem.reply ? "bordered" : "solid"}
                            onPress={() => {
                                // 在這裡處理 reply 的更新邏輯
                                console.log(`Replying to ${elem.userId}`);
                            }}
                        >
                            {elem.reply === "N" ? "Reply" : "Replied"}
                        </Button>
                    </CardHeader>
                    <CardBody className="px-3 py-0 text-small text-default-400">
                        <p>
                            {elem.content}
                        </p>
                        <span className="pt-2">
                            #{elem.type}
                            <span className="py-2" aria-label="computer" role="img">
                                {typeIcon()}
                            </span>
                        </span>
                    </CardBody>
                    <CardFooter className="gap-3">
                        <div className="flex gap-1">
                            <p className="font-semibold text-default-400 text-small">
                                4
                            </p>
                            <p className=" text-default-400 text-small">
                                {elem.time}
                            </p>
                        </div>
                        <div className="flex gap-1">
                            <p className="font-semibold text-default-400 text-small">
                                97.1K
                            </p>
                            <p className="text-default-400 text-small">
                                {elem.reply}
                            </p>
                        </div>
                    </CardFooter>
                </Card>
            ))}
        </div>

    );
}
