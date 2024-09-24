import React from "react";

    // eslint-disable-next-line react/prop-types
    const DashboardCard = () => {
    return (
        <div>
        <div className="stats shadow">
            <div className="stat">
            <div className="stat-figure text-primary">
            <svg xmlns="http://www.w3.org/2000/svg"  className="inline-block w-8 h-8 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>

            
        
            </div>
            <div className="stat-title">Total Order</div>
            <div className="stat-value text-primary">10K</div>
            <div className="stat-desc">5% more than last month</div>
            </div>
            <div className="stat">
            <div className="stat-figure text-primary">
            <svg xmlns="http://www.w3.org/2000/svg"  className="inline-block w-8 h-8 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
    </svg>

            </div>
            <div className="stat-title">New Order</div>
            <div className="stat-value text-primary">0.5K</div>
            <div className="stat-desc">15% more than last month</div>
            </div>


            <div className="stat">
            <div className="stat-figure text-secondary">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
                </svg>
            </div>
            <div className="stat-title">Total Products</div>
            <div className="stat-value text-secondary">1.0K</div>
            <div className="stat-desc">10% more than last month</div>
            </div>
            <div className="stat">
            <div className="stat-figure text-secondary">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
                </svg>

            </div>
            <div className="stat-title">New Product</div>
            <div className="stat-value text-secondary">0.5K</div>
            <div className="stat-desc">15% more than last month</div>
            </div>
            
        </div>
        </div>
    );
    };

    export default DashboardCard;
