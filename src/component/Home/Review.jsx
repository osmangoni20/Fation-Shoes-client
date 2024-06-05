

const UserReview=[
    {
        id:"1",
        user_name:"Mohamad Abdul Kader",
        user_image:"https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        user_review:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, laborum modi numquam laboriosam a porro quas repellendus, placeat cum error saepe consectetur explicabo unde. Minima, aperiam. Quisquam dolores adipisci distinctio"
    },
    {
        id:"2",
        user_name:"Abdur Rahman Rahat",
        user_image:"https://img.freepik.com/premium-photo/concept-people-with-young-man-yellow-background_185193-81811.jpg?size=626&ext=jpg&ga=GA1.1.291005766.1716642525&semt=sph",
        user_review:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, laborum modi numquam laboriosam a porro quas repellendus, placeat cum error saepe consectetur explicabo unde. Minima, aperiam. Quisquam dolores adipisci distinctio"
    },
    {
        id:"3",
        user_name:"Tabassum Khatun",
        user_image:"https://media.istockphoto.com/id/1309696402/photo/headshot-of-mid-adult-british-asian-woman-wearing-hijab.jpg?s=1024x1024&w=is&k=20&c=R0lcO4kkLSwKyyHmAncQ7BWD-tf29YCpmCFTnuWk6ho=",
        user_review:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, laborum modi numquam laboriosam a porro quas repellendus, placeat cum error saepe consectetur explicabo unde. Minima, aperiam. Quisquam dolores adipisci distinctio"
    },
]

const Review = () => {
    return (
       <div className="bg-gray-50 py-10">
        <h1 className="text-4xl text-center font-serif py-10 ">Customer Say</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 p-5">
           {
            UserReview.map(user=>(
                <div key={user.id}>
                  
                   <figure className=" flex justify-center">
                        <img className=" h-[100px] w-[100px] rounded-full " src={user?.user_image}></img>
                    </figure>
                    <div>
                    <h3 className="font-serif py-5 text-center">{user?.user_name}</h3>
                    <p className="text-justify">{user?.user_review}</p>
                    </div>
               
                </div>
            ))
           }
        </div>
       </div>
    );
};

export default Review;