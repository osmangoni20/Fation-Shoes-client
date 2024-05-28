import { useLoaderData } from "react-router-dom";
import SingleProductCardDashboard from "../../component/Dashboard/SingleProductCardDashboard";


const Dashboard = () => {
    const shoe=useLoaderData();
    return (
        <div className="flex flex-wrap gap-5 justify-center align-middle items-center">
            {
                shoe?.map((shoe)=><SingleProductCardDashboard shoe={shoe} key={shoe.id}/>)
            }
        </div>
    );
};

export default Dashboard;