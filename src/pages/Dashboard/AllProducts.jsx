    import { useLoaderData } from "react-router-dom";
    import SingleProductCardDashboard from "../../component/Dashboard/SingleProductCardDashboard";
    import { useState } from "react";


    const AllProducts = () => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const shoes=useLoaderData()
        const [shoesData,setLoadShoesData]=useState(shoes);
        
        const HandleDelete=(id)=>{
            const UpdateData=shoesData.filter((item)=>item?.id!=id);
            setLoadShoesData(UpdateData);
        }
        return (
            <div >
                <div className="grid grid-cols-3 gap-1 justify-center align-to items-start">
                {
                    shoesData?.map((shoe)=><SingleProductCardDashboard
                     shoe={shoe} key={shoe.id}
                     onDelete={HandleDelete}/>)
                }
            </div>
            </div>
        );
    };

    export default AllProducts;