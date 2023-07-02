


export default function Skeleton() {
    return (
        <div className="lg:h-[328px] h-auto w-full grid lg:grid-cols-[1.5fr_1fr] my-5  animate-pulse  rounded-md overflow-hidden ">
            <div className="grid gap-2 md:grid-cols-[2fr_1fr] h-[328px] lg:h-full">

                <div className="relative bg-[lightgray] rounded-md">
                </div>
                <div className="hidden  gap-2 md:grid grid-rows-2">

                    <div className="relative bg-[lightgray] rounded-md">
                    </div>

                    <div className="relative bg-[lightgray] rounded-md">
                    </div>
                </div>

            </div>

            <div className=" pt-4 grid  grid-rows-[auto_70px]">

                <div className="px-5">
                    <h2 className="text-xl font-medium text-secondary mb-1 h-[50px] rounded-md bg-[lightgray]"></h2>
                    <p className="text-sm capitalize h-[20px] rounded-md bg-[lightgray] w-60"></p>

                    <p className="font-light text-sm my-1  capitalize h-[20px] rounded-md bg-[lightgray] w-40"> </p>
                    <div className="flex my-5 gap-2">
                        <div className=" bg-[lightgray] rounded-md h-[30px] w-[100px] _center px-5"></div>
                        <div className=" bg-[lightgray] rounded-md h-[30px] w-[100px] _center border-l border-r border-[#00000010] px-5"></div>
                        <div className=" bg-[lightgray] rounded-md h-[30px] w-[100px] _center px-5"></div>

                    </div>


                </div>

                <div className="border-t border-[#eef0f6]  flex items-center px-5">
                    <button className="px-5 flex items-center text-sm bg-[lightgray] py-3 rounded-full text-white h-[50px] w-[130px]"></button>
                </div>

            </div>

        </div>









        // <div className=" shadow rounded-md p-4 max-w-sm w-full mx-auto">
        //     <div className="animate-pulse flex space-x-4">
        //         <div className="rounded-full bg-primary h-10 w-10"></div>
        //         <div className="flex-1 space-y-6 py-1">
        //             <div className="h-2 bg-primary rounded"></div>
        //             <div className="space-y-3">
        //                 <div className="grid grid-cols-3 gap-4">
        //                     <div className="h-2 bg-primary rounded col-span-2"></div>
        //                     <div className="h-2 bg-primary rounded col-span-1"></div>
        //                 </div>
        //                 <div className="h-2 bg-primary rounded"></div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}