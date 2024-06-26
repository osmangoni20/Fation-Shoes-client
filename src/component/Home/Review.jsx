
import quoteImg from '../../assets/quote.png'
const UserReview=[
    {
        id:"1",
        user_name:"Mohamad Abdul Kader",
        user_review_time:"6/25/2024",
        user_image:"https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        user_review:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, laborum modi numquam laboriosam a porro quas repellendus, placeat cum error saepe consectetur explicabo unde. Minima, aperiam. Quisquam dolores adipisci distinctio"
       
    },
    {
        id:"2",
        user_name:"Abdur Rahman Rahat",
        user_review_time:"6/25/2024",
        user_image:"https://img.freepik.com/premium-photo/concept-people-with-young-man-yellow-background_185193-81811.jpg?size=626&ext=jpg&ga=GA1.1.291005766.1716642525&semt=sph",
        user_review:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, laborum modi numquam laboriosam a porro quas repellendus, placeat cum error saepe consectetur explicabo unde. Minima, aperiam. Quisquam dolores adipisci distinctio"
    },
    {
        id:"3",
        user_name:"Tabassum Khatun",
        user_review_time:"6/25/2024",
        user_image:"https://media.istockphoto.com/id/1309696402/photo/headshot-of-mid-adult-british-asian-woman-wearing-hijab.jpg?s=1024x1024&w=is&k=20&c=R0lcO4kkLSwKyyHmAncQ7BWD-tf29YCpmCFTnuWk6ho=",
        user_review:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, laborum modi numquam laboriosam a porro quas repellendus, placeat cum error saepe consectetur explicabo unde. Minima, aperiam. Quisquam dolores adipisci distinctio"
    },
]

const Review = () => {
    return (
       <div className="py-10">
        <h1 className="text-4xl text-center font-serif py-10 ">Clint's Testimonial</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-10 p-5">
           {
            UserReview.map(user=>(
                <div key={user.id} className="shadow-xl p-4 rounded-md bg-white text-black">
                  
                   <div className=" flex justify-between">
                       <div className=" flex gap-2 items-start">
                       <img className=" h-[60px] w-[60px] rounded-full " src={user?.user_image}></img>
                        <span>
                        <h3 className="font-serif text_ghost text-xl">{user?.user_name}</h3>
                        <p>{user?.user_review_time}</p>
                        </span>
                       </div>
                        <div>
                        <span className="flex justify-between items-center">
                        <img className='h-[50px] w-[50px]' src={quoteImg}/>
                        </span>
                        </div>
                    </div>
                    <div>
                       
                    <p className="text-justify font-serif py-2">{user?.user_review}</p>
                    </div>
               
                </div>
            ))
           }
        </div>
       </div>
    );
};

export default Review;