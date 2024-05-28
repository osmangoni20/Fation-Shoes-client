import { useLoaderData } from "react-router-dom";
import DashboardCard from "../../component/Dashboard/DashboardCard";


const Dashboard = () => {
    const shoe=useLoaderData();
    console.log(shoe)
    return (
        <div className=" flex flex-wrap gap-10 justify-center align-middle items-center">
           <DashboardCard title={"Total User"} number={5}/>
           <DashboardCard title={"Total Order"} number={5}/>
           <DashboardCard title={"Total Product"} number={5}/>
        </div>
    );
};

export default Dashboard;