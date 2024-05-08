import { useMemo } from "react";
import { OrderItem } from "../types";
import { formatCurrency } from "../helpers";

type OrderTotalsProps = {
    order: OrderItem[];
    tip: number,
    placeOrder: () => void

}

export default function OrderTotals({order, tip, placeOrder}: OrderTotalsProps) {

    // Calcula el subtotal de la orden, sumando el precio de cada artículo multiplicado por su cantidad
  const subTotalAmount = useMemo(() => { // useMemo para memorizar este cálculo y evitar renders adicionales
    return order.reduce((total, item) => total + (item.quantity * item.price), 0);
  }, [order]); /* 'order' se incluye en el array de dependencias para que el cálculo se actualice cuando 'order' cambie */

  // Calcula el monto de la propina, multiplicando el subtotal por el porcentaje de propina
  const tipAmount = useMemo(() => {
    return subTotalAmount * tip;
  }, [tip, subTotalAmount]); // 'tip' y 'subTotalAmount' se incluyen en el array de dependencias para que el cálculo se actualice cuando cambien

  // Calcula el total a pagar, sumando el subtotal y el monto de la propina
  const totalAmount = useMemo(() => {
    return subTotalAmount + tipAmount;
  }, [tipAmount, subTotalAmount]); // 'tipAmount' y 'subTotalAmount' se incluyen en el array de dependencias para que el cálculo se actualice cuando cambien


    return (
        <>
            <div className="space-y-3 text-white tracking-wide">
                <h2 className="font-medium text-2xl">Amount: </h2>
                <p>Subtotal Amount: {' '}
                    <span className="font-bold text-[#c4e4e7] text-xl ml-1" >{ formatCurrency(subTotalAmount) }</span>
                </p>
                <p>Tip: {' '}
                    <span className="font-bold  text-[#c4e4e7] text-xl ml-1">{ formatCurrency(tipAmount) }</span>
                </p>
                <p className="text-2xl">Total Amount: {' '}
                    <span className="font-bold  text-[#c4e4e7] text-3xl ml-1">{ formatCurrency(totalAmount) }</span>
                </p>
            </div>
            <button 
              className=" w-full bg-[#c4e4e7] p-3 uppercase font-bold mt-10 disabled:opacity-10 rounded-lg text-[#13474b] tracking-wide hover:bg-[#20686d] hover:text-white transition-all duration-300"
              disabled = {totalAmount === 0 }
              onClick={placeOrder}
            >
              Save
            </button>
        </>
    );
}
