import { div } from "framer-motion/client";

export default function RadiusCard({ data }) {
    return (
        <div>
            <div id="title">
                <div id="mainbody">
                    <h3>{data.title}</h3>
                </div>
                {data.items.map((cardElem, cardIndex) => (
                    <div key={cardIndex} className="">
                        <label htmlFor="">
                            {cardElem.subtitle}
                        </label>
                        <br />
                        {cardElem.tag === "input" ? (
                            <input
                                type={cardElem.inputType}
                                defaultValue={cardElem.value}
                                placeholder={cardElem.placeholderWords}
                                readOnly={cardElem.readOnly}
                            />
                        ) : cardElem.tag === "radio" ? (
                            cardElem.options.map((option, optionIndex) => (
                                <div key={optionIndex} className="inline-block">
                                    <input
                                        type="radio"
                                        id={option.value}
                                        name="gender"
                                        value={option.value}
                                        defaultChecked={option.value === cardElem.selectedValue}
                                        readOnly={cardElem.readOnly}
                                    />
                                    <label htmlFor={option.value}>{option.label}</label>
                                    &emsp;
                                </div>
                            ))
                        ) : null}
                        <hr />
                    </div>
                ))}
            </div>
        </div>
    )
}