import '../assets/css/style.css'


const HomeJourney =()=>{
    return(
        <div className="container flex mx-auto mt-6 gap sm:gap-14 md:gap-32 lg:gap-44">
            <div className="relative w-3/5" style={{paddingTop: "50%"}}>
                <img className="absolute top-0 left-0 object-cover w-full h-full" src="../../src/assets/images/people/people_client02.png"/>
            </div>
            <div className="flex-1 sm:mt-5 md:mt-10 lg:mt-40">
                <h1 className="text-[#634A34] mb-6 text-center font-titleFont text-h2 font-bold">行程導覽</h1>
                <p className="mb-6 font-normal text-left font- font-bodyFont text-p-1 text-indent-1">
                    甜點列車邀您一同探索美食與美景的饗宴！搭乘列車，享受獨特的甜點料理，
                    同時欣賞沿途壯麗風光，感受視覺與味覺的雙重享受。
                </p>
                <div className="text-center">
                    <button className="py-2 px-4 text-base bg-[#B69C7C] border-none cursor-pointer rounded-md">了解更多</button>
                    <button href="*"></button>
                </div>

            </div>
        </div>
    );
};

export default HomeJourney;