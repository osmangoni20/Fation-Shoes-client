    import { useLoaderData } from "react-router-dom";
    import DashboardCard from "../../component/Dashboard/DashboardCard";
import Graphs from "../../component/Dashboard/Graphs";
import RecentProduct from "../../component/Dashboard/RecentProduct";
import Order from "./Order";
import RecentMessage from "../../component/Dashboard/RecentMessage";

    const Dashboard = () => {
    const shoe = useLoaderData();
    console.log(shoe);

    return (
        <div>
        <div className="flex gap-3 text-white font-serif font-extrabold">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
            >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
            </svg>

            <h3 className="text-xl ml-5 lg:ml-2">Dashboard</h3>
        </div>

        <div className="flex justify-center py-5">
            <DashboardCard />
        </div>
       
        <div className="grid grid-cols-1 lg:grid-cols-10 xl:grid-cols-12  rounded-md bg-[#171A3B] p-5 text-white align-middle items-center gap-5 ">

            
            <div className="col-span-6 grid " >
            <div className="flex gap-3 font-serif font-extrabold ">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
    </svg>

        
            <h3 className="text-xl">Product Category</h3>
        </div>
        <div>
            <div className="">
            <table className="table">
                {/* head */}
                <thead>
                <tr>
                    <th>
                    <label>
                        <input type="checkbox" className="checkbox" />
                    </label>
                    </th>
                    <th>Category Name</th>
                    <th>Quantity</th>
                    <th>Status</th>
                   
                </tr>
                </thead>
                <tbody>
                {/* row 1 */}
                <tr>
                    <th>
                    01
                    </th>
                    <td>
                    <div className="flex items-center gap-3">
                       
                        <div className="mask  w-20 h-16">
                            <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQHi40--0kaqEcY2uiNLQL3yIGidNSTuDsQLEcoRvyOoUxPCoHYyNhHac&s"
                            alt="Avatar Tailwind CSS Component"
                            />
                        </div>
                      
                        <div>
                        <div className="font-bold">Boots</div>
                        <div className="text-sm opacity-50">Fation Shoe</div>
                        </div>
                    </div>
                    </td>

                    <td>
                    <span className="badge badge-ghost badge-sm">
                        500
                    </span>
                    </td>
        
                    <td>
                    <button className="btn btn-ghost btn-xs">Available</button>
                    </td>
                </tr>


                {/* row 2 */}
                <tr>
                    <th>
                   02
                    </th>
                    <td>
                    <div className="flex items-center gap-3">
                       
                        <div className="mask  w-20 h-16">
                            <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhbGUfb6mv4grwl8bm9lYpNVw2Y98Rm1qxi1s8LGEFKb-omAbrbl71sn1r&s"
                            alt=""
                            />
                        </div>
                      
                        <div>
                        <div className="font-bold">Formal Shoe</div>
                        <div className="text-sm opacity-50">Fation Shoe</div>
                        </div>
                    </div>
                    </td>

                    <td>
                    <span className="badge badge-ghost badge-sm">
                        1200
                    </span>
                    </td>
                   
                    <td>
                    <button className="btn btn-ghost btn-xs">Available</button>
                    </td>
                </tr>
                {/* row 3 */}
                <tr>
                    <th>
                   03
                    </th>
                    <td>
                    <div className="flex items-center gap-3">
                       
                        <div className="mask  w-20 h-16">
                            <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEWUN91DgnKIIclAXPN8nrQMM1aZMKRWsLG4esfjctp1eO2hB1pNvCCDw&s"
                            alt=""
                            />
                        </div>
                      
                        <div>
                        <div className="font-bold">Casual Shoe</div>
                        <div className="text-sm opacity-50">Fation Shoe</div>
                        </div>
                    </div>
                    </td>

                    <td>
                    <span className="badge badge-ghost badge-sm">
                        500
                    </span>
                    </td>
                  
                    <td>
                    <button className="btn btn-ghost btn-xs">Available</button>
                    </td>
                </tr>
                {/* row 4 */}
                <tr>
                    <th>
                   04
                    </th>
                    <td>
                    <div className="flex items-center gap-3">
                       
                        <div className="mask  w-20 h-16">
                            <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkXLxExBS_VI2NNSy1SK2Ml4trA28mhmGu7aJE_pdRSEVHLGAYT0o_--4&s"
                            alt="Loafers"
                            />
                        </div>
                      
                        <div>
                        <div className="font-bold">Loafers</div>
                        <div className="text-sm opacity-50">Fation Shoe</div>
                        </div>
                    </div>
                    </td>

                    <td>
                    <span className="badge badge-ghost badge-sm">
                        1500
                    </span>
                    </td>
                   
                    <td>
                    <button className="btn btn-ghost btn-xs">Available</button>
                    </td>
                </tr>
                </tbody>
            </table>
            </div>
        </div>
        
            </div>
            <div className="md:grid col-span-6 hidden  lg:grid  pr-4">
            <Graphs />
            </div>
        </div>
       
        <RecentMessage/>
        <Order/>
        <RecentProduct/>
        </div>
    );
    };

    export default Dashboard;
