import { Rating } from "@mui/material";
import Button from "../../../components/UI/Buttons/Button";
import { BsArrowRightShort } from "react-icons/bs";
import { useState } from "react";

const ProductInfo = () => {
  const [qunatity, setQuantity] = useState(1);

  const handleDecrement = () => {
    if (qunatity > 1) {
      return setQuantity((preValue) => preValue - 1);
    }
    return;
  };
  return (
    <div className="w-[90%] md:w-[50%] lg:w-[40%]">
      <div className="flex flex-col gap-2 mb-3">
        <h2 className="text-xl md:text-3xl font-bold">Health Pistachios</h2>
        <Rating size="small" readOnly value={5} />

        <p className="text-xl font-bold">
          <span>
            <strike className="text-[#B8B8B8] text-base font-normal">
              $20.00
            </strike>
          </span>{" "}
          ${15}
        </p>
      </div>
      <p className="2xl:w-[80%]">
        Simply dummy text of the printing and typesetting industry. Lorem had
        ceased to been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley.
      </p>

      <div className="flex items-center gap-2 lg:gap-4 mt-8">
        <p className="text-xl font-semibold">Quantity: </p>
        <div className="flex items-center gap-2">
          <button
            onClick={handleDecrement}
            className="text-2xl font-semibold bg-white p-1 w-8 h-8 flex justify-center items-center rounded-md"
          >
            -
          </button>
          <input
            className="outline-none border border-[#274C5B] rounded-md w-12 h-8 text-center"
            type="number"
            name="qunatity"
            readOnly
            value={qunatity}
            id=""
            min={1}
            max={10}
          />
          <button
            onClick={() => setQuantity((preValue) => preValue + 1)}
            className="text-2xl font-semibold bg-white p-1 w-8 h-8 flex justify-center items-center rounded-md"
          >
            +
          </button>
        </div>
        <Button className={"w-[150px] bg-[#274c5b] text-white"}>
          Add To Cart{" "}
          <BsArrowRightShort className="bg-[#335B6B] text-white rounded-full ml-1" />
        </Button>
      </div>
    </div>
  );
};

export default ProductInfo;