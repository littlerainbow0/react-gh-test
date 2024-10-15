import '../assets/css/style.css'


const MenuDessert =()=>{
    return(
        <div>
            <div className="container mx-auto mt-6 font-bold text-center text-h2 font-titleFont text-[#634A34]">精選甜點</div>
            <div className="container mx-auto mt-6"> {/* 容器  */}
                <ul className="grid grid-cols-3 gap-6"> {/* 格線  */}
                <li className="col-span-1 h-200"> {/* 列  */}
                    <ul className="flex flex-col h-full gap-6">  {/* flexbox  */}
                    <li className="h-2/3"><img className='object-cover w-full h-full' src="../../src/assets/images/dessert/dessert_dessert06.png" /></li> 
                    <li className="h-1/3"><img className='object-cover w-full h-full' src="../../src/assets/images/dessert/dessert_dessert07.png" /></li>
                    </ul>
                </li>
                <li className="col-span-1 h-200"> 
                    <ul className="flex flex-col h-full gap-6">
                    <li className="h-full"><img className='object-cover w-full h-full' src="../../src/assets/images/dessert/dessert_dessert08.png" /></li>
                    </ul>
                </li>
                <li className="col-span-1 h-200"> 
                    <ul className="flex flex-col h-full gap-6">
                    <li className="h-1/3"><img className='object-cover w-full h-full' src="../../src/assets/images/dessert/dessert_dessert09.png" /></li>
                    <li className='w-full h-2/3'>
                        <p className="font-normal text-p-2 font-bodyFont text-indent-1">
                        歐式甜點以細膩的口感與華麗造型聞名，甜點列車帶來多款經典歐式甜點，如法式馬卡龍、義式提拉米蘇及德式黑森林蛋糕等。每道甜點由頂級糕點師傅精心製作，讓旅客感受歐洲甜點的優雅與豐富層次。</p>
                        <p className="font-normal text-p-2 font-bodyFont text-indent-1">
                        日式甜點以清新簡約的風味著稱，甜點列車為日式甜點愛好者準備了抹茶蛋糕、大福、和菓子等經典選擇。每款甜點強調自然原味，將四季特色融入其中，帶來如置身日本庭園的愉悅感。</p>
                        <p className="font-normal text-p-2 font-bodyFont text-indent-1">
                        台式甜點則展現了台灣特色，如鳳梨酥、豆沙餅和米糕，這些甜點結合了在地食材與傳統工藝。每一口都蘊含著台灣特有的風味，讓旅客在品嚐時感受到台灣的文化底蘊，為旅程增添一份溫暖。</p>
                    </li>

                    </ul>
                </li>
                </ul>
            </div>
        </div>
    );
};

export default MenuDessert;
