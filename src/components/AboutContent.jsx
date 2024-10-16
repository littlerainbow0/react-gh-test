import '../assets/css/style.css'



const AboutContent =()=>{
    return(
        <div>
            <div className="relative flex justify-center w-full h-screen mt-40 ">
                <div className="relative flex items-center justify-center w-full h-screen p-4 ">
                {/* 圖卡片  */}
                    <div className="relative w-full max-w-[90%]  z-10 aspect-[13/10] mx-auto">
                        <img className="object-fill w-full h-full max-w-full max-h-screen pl-40" src="../../src/assets/images/train_exterior/train_exterior_partion01.png" alt="Train Exterior"/>
                    </div>
                </div>
                 {/* 文卡片  */}
                <div className="absolute left-1/4 w-1/3 aspect-[4/4.5] bg-[#ffffff] shadow-lg transform -translate-x-1/3 translate-y-[20%] z-20 border border-solid border-[#8F755A]">
                    <h1 className="text-[#634A34] mb-6 text-left font-titleFont text-h6 sm:text-h5 md:text-h4 lg:text-h2 font-bold mt-10 pl-10">
                        火車外觀
                    </h1>
                
                 {/* 限制段落高度  */}
                <p className="px-10 mt-1 font-normal text-left sm:mt-1 font-bodyFont text-p-3 sm:text-p-3 md:text-p-2 lg:text-p-1 text-indent-1 max-h-[250px] overflow-y-auto">
                    甜點列車的外觀設計融合了現代奢華與復古元素，車身以優雅的鎏金細紋圖案作為點綴，
                    像極甜點的構圖與細膩。車內外都佈置有特殊的裝飾圖案，靈感來自台灣特色甜點的造型，
                    當您乘坐將會上得到獨家享受。列車整體設計不僅兼具美感，還富有文化氣息，象徵著我們對每段旅程的極心打磨。
                    甜點列車的外觀設計融合了現代奢華與復古元素，車身以優雅的鎏金細紋圖案作為點綴，
                    像極甜點的構圖與細膩。車內外都佈置有特殊的裝飾圖案，靈感來自台灣特色甜點的造型，
                    當您乘坐將會上得到獨家享受。列車整體設計不僅兼具美感，還富有文化氣息，象徵著我們對每段旅程的極心打磨。
                </p>
            </div>
            
            
        
             {/* Icon 卡片固定在底部  */}
            <div className="absolute z-20 w-full bottom-10">
                <img className="object-cover w-full h-full" src="../../src/assets/img/icon/icon_polygonLine.png" alt="Polygon Line Icon"/>
            </div>
        </div>

        
        <div className="relative flex justify-center w-full h-screen mt-40 ">
            <div className="relative flex items-center justify-center w-full h-screen p-4 ">
                 {/* 圖卡片  */}
                <div className="relative w-full max-w-[90%]  z-10 aspect-[13/10] mx-auto">
                    <img className="object-fill w-full h-full max-w-full max-h-screen pr-40" src="../../src/assets/images/dessert/dessert_dessert04.png" alt="Train Exterior"/>
                </div>
            </div>
            
            
             {/* 文卡片  */}
            <div className="absolute w-1/3 aspect-[4/4.5] bg-[#ffffff] shadow-lg transform translate-y-[20%] z-20 border border-solid border-[#8F755A] right-5">
                <h1 className="text-[#634A34] mb-6 text-left font-titleFont text-h6 sm:text-h5 md:text-h4 lg:text-h2 font-bold mt-10 pl-10">
                    甜點選材與工藝 
                </h1>
                
                 {/* 限制段落高度  */}
                <p className="px-10 mt-1 font-normal text-left sm:mt-1 font-bodyFont text-p-3 sm:text-p-3 md:text-p-2 lg:text-p-1 text-indent-1 max-h-[250px] overflow-y-auto">
                    甜點列車的外觀設計融合了現代美感與復古元素，車身以優雅的曲線和溫暖的色調為主，象徵著甜點的精緻與細膩。
                    車廂外部飾有獨特的藝術圖案，靈感來自各地特色甜點的造型，為旅客帶來視覺上的享受。列車整體設計不僅美觀大方，
                    更富有文化氣息，象徵著我們對每段旅程的細心打造。
                </p>
            </div>
            
            
        
             {/* Icon 卡片固定在底部  */}
            <div className="absolute z-20 w-full bottom-10">
                <img className="object-cover w-full h-full" src="../../src/assets/img/icon/icon_polygonLine.png" alt="Polygon Line Icon"/>
            </div>
        </div>
        
        <div className="relative flex justify-center w-full h-screen mt-40 ">
            <div className="relative flex items-center justify-center w-full h-screen p-4 ">
                 {/* 圖卡片  */}
                <div className="relative w-full max-w-[90%]  z-10 aspect-[13/10] mx-auto">
                    <img className="object-fill w-full h-full max-w-full max-h-screen pl-40" src="../../src/assets/images/people/people_staff01-3.png" alt="Train Exterior"/>
                </div>
            </div>
            
            
             {/* 文卡片  */}
            <div className="absolute left-1/4 w-1/3 aspect-[4/4.5] bg-[#ffffff] shadow-lg transform -translate-x-1/3 translate-y-[20%] z-20 border border-solid border-[#8F755A]">
                <h1 className="text-[#634A34] mb-6 text-left font-titleFont text-h6 sm:text-h5 md:text-h4 lg:text-h2 font-bold mt-10 pl-10">
                    接待導覽
                </h1>
                
                 {/* 限制段落高度  */}
                <p className="px-10 mt-1 font-normal text-left sm:mt-1 font-bodyFont text-p-3 sm:text-p-3 md:text-p-2 lg:text-p-1 text-indent-1 max-h-[250px] overflow-y-auto">
                    我們的接待團隊致力於提供專業且親切的導覽服務，讓每位旅客在旅程中能感受到賓至如歸的體驗。
                    從登車到旅程結束，專屬導覽員將介紹每一站的景點與美食文化，並解說甜點製作的故事，
                    讓旅客在享用美食的同時，深入了解當地的風土人情與甜點的歷史背景。
                </p>
            </div>
            
            
        
             {/* Icon 卡片固定在底部  */}
            <div className="absolute z-20 w-full bottom-10">
                <img className="object-cover w-full h-full" src="../../src/assets/img/icon/icon_polygonLine.png" alt="Polygon Line Icon"/>
            </div>
        </div>

        
        <div className="relative flex justify-center w-full h-screen mt-40 ">
            <div className="relative flex items-center justify-center w-full h-screen p-4 ">
                 {/* 圖卡片  */}
                <div className="relative w-full max-w-[90%]  z-10 aspect-[13/10] mx-auto">
                    <img className="object-fill w-full h-full max-w-full max-h-screen pr-40" src="../../src/assets/images/people/people_staff02-1.png" alt="Train Exterior"/>
                </div>
            </div>
            
            
            {/* 文卡片  */}
            <div className="absolute w-1/3 aspect-[4/4.5] bg-[#ffffff] shadow-lg transform translate-y-[20%] z-20 border border-solid border-[#8F755A] right-5">
                <h1 className="text-[#634A34] mb-6 text-left font-titleFont text-h6 sm:text-h5 md:text-h4 lg:text-h2 font-bold mt-10 pl-10">
                    服務承諾
                </h1>
                
                 {/* 限制段落高度  */}
                <p className="px-10 mt-1 font-normal text-left sm:mt-1 font-bodyFont text-p-3 sm:text-p-3 md:text-p-2 lg:text-p-1 text-indent-1 max-h-[250px] overflow-y-auto">
                    甜 甜點列車以提供頂級的旅遊與美食體驗為宗旨，我們承諾每一位旅客都能享受到高品質的服務與貼心的款待。
                    我們將以專業、熱情的態度，確保每個細節都能符合您的期待，讓您安心享受每一段旅程。
                    我們相信，無論是旅途中的美景、甜點還是服務，都會成為您難忘的美好回憶。
                </p>
            </div>
            
            
        
             {/* Icon 卡片固定在底部  */}
            <div className="absolute z-20 w-full bottom-10">
                <img className="object-cover w-full h-full" src="../../src/assets/img/icon/icon_polygonLine.png" alt="Polygon Line Icon"/>
            </div>
        </div>

        </div>
        
    );
};

export default AboutContent;
