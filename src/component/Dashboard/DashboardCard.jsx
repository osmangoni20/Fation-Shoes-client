

        // eslint-disable-next-line react/prop-types
        const DashboardCard = ({title,number}) => {
            return (
                <div>
                    <div className="h-[180px] w-[180px] text-red-500  rounded-md  shadow-2xl bg-white ">
                        
                    <div className="block text-center">
                    <div className="text-bold font-serif text-xl pt-10">
                    <h3 >{title}</h3>
                        <p className="text-7xl">{number>9?number:`0${number}`}</p>
                    </div>
                    </div>
                    </div>
                </div>
            );
        };

        export default DashboardCard;