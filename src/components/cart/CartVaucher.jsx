export const CartVaucher = () => {
  return (
    <div className="my-7">
      <div className=" flex justify-between">
        <input
          type="text"
          className=" border h-12 w-56"
          placeholder="Cupon Code"
        ></input>
        <button
          type="button"
          title="Apply Cupon"
          className="px-7 h-12 border border-solid border-black font-bold  hover:bg-zinc-400 transition-colors"
        >
          Apply Cupon
        </button>

        <button
          type="button"
          title="Update cart"
          className="px-7 h-12 text-white bg-zinc-400 font-bold"
        >
          Update cart
        </button>
      </div>
    </div>
  );
};
