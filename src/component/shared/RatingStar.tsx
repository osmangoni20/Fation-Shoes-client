import React, { useState } from 'react';
import ReactStars from 'react-stars';


type StarRatingProps={
  onRatingChange?:(rating:number)=>void;
}
const StarRating:React.FC<StarRatingProps> = ({ onRatingChange }) => {
  const [rating, setRating] = useState(0); 

  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
    if (onRatingChange) {
      onRatingChange(newRating);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <ReactStars
        count={5}           
        size={30}                
        color2={'#ffd700'}       
        half={true}              
        value={rating}           
        onChange={handleRatingChange}
        className='cursor-pointer transition-transform hover:scale-110'
      />
    </div>
  );
};

export default StarRating;
