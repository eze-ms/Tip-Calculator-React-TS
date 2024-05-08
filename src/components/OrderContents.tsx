import { MenuItem, OrderItem } from "../types";
import { formatCurrency } from "../helpers";

type OrderContentsProps = {
    order: OrderItem[];
    removeItem: (id: MenuItem['id']) => void;
};

export default function OrderContents({ order, removeItem }: OrderContentsProps) {
    return (
        <div>
            <h2 className=' text-2xl font-ligth text-white uppercase tracking-wide'>Order</h2>
            <div className="mt-10 space-y-3">
                {order.map(item => (
                    <div
                        key={item.id}
                        className="flex justify-between items-center border-t border-gray-200 py-5 last-of-type:border-b"
                    >
                    <div>
                        <p className="text-lg text-white">
                            {item.name} - {formatCurrency(item.price)}
                        </p>
                        <p className="font-blac text-white">
                            Quantity: {item.quantity} - {formatCurrency(item.price * item.quantity)}
                        </p>
                    </div>
                        <button
                            className="bg-[#c4e4e7] h-8 w-8 rounded-full text-[#13474b] font-black"
                            onClick={() => removeItem(item.id)}
                        >X
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
