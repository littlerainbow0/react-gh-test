import { div } from "framer-motion/client"

const data = [
    {
        title: "車廂及設施",
        text: "總覽蜂鳴號的車廂及設施。"
    },
    {
        title: "供餐及活動",
        text: "總覽蜂鳴號提供的各式甜點、飲品、活動。"
    },
    {
        title: "行程介紹",
        text: "總覽蜂鳴號為旅客規劃各式的甜點行程。"
    },
    {
        title: "常見問題",
        text: "收錄乘客提出的常見問題，也許對您有幫助。"
    },
]

export default function BtnContact() {
    return (
        <div>
            {data.map((elem, index) => (
                <div>
                    <button>
                        <h3 className="font-titleFont text-p-1 font-bold">
                            {elem.title}
                        </h3>
                        <span className="font-titleFont text-p-2 font-semibold">
                            {elem.text}
                            </span>
                    </button>
                    <hr />
                </div >
            ))}
        </div>
    )
}