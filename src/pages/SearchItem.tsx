import { useParams } from "react-router-dom";
import SingleProduct, { TProductInfo } from "../component/Home/SingleProduct";
import { useEffect, useState } from "react";
import React from "react";
import Loader from "../component/shared/Loader";
import Pagination from "../component/shared/Pagination";
import { TProductProps } from "../component/Home/Product";


const SearchItem = () => {
  const { category, searchValue } = useParams();

  const [productsData, setProductData] = useState<TProductProps>();
  const [itemsPerPage, setItemPerPage]=useState(5);
  const [currentPage, setCurrentPage]=useState(0)
  const paginationParamsData={totalPages:productsData?.totalPages, itemsPerPage, currentPage, setItemPerPage,  setCurrentPage}

  useEffect(() => {
    fetch(
      `https://fationshoe-server.vercel.app/product/?searchValue=${searchValue}&searchCategory=${category}&page=${currentPage}&size=${itemsPerPage}`
    )
      .then((res) => res.json())
      .then((data) => setProductData(data));
  }, [searchValue, category, itemsPerPage, currentPage]);
  console.log(paginationParamsData);
  return (
    <div>
      {Number(productsData?.data.length )> 0 ? (
        <div className="p-5 grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-10 justify-center align-to items-start">
          {productsData?.data?.map((shoe) => (
            <SingleProduct shoe={shoe} key={shoe._id} />
          ))}
        </div>
      ) : (
        <div>
          <figure className="w-full flex justify-center">
            <Loader />
          </figure>
        </div>
      )}

      <div>
        {
            productsData&&<Pagination params={paginationParamsData}/>
        }
      </div>
    </div>
  );
};

export default SearchItem;
