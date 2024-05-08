import { menuItems } from "./data/db";
import useOrder from "./hooks/useOrder";
import MenuItem from "./components/MenuItem";
import OrderContents from "./components/OrderContents";
import OrderTotals from "./components/OrderTotals";
import TipPercentageForm from "./components/TipPercentageForm";

function App() {
    const { order, tip, setTip, addItem, removeItem, placeOrder } = useOrder();

    return (
        <>
            <header className="py-5">
                <h1 className="mt-10 text-center text-3xl font-ligth text-[#13474b] uppercase tracking-wide py-5">Tip calculator</h1>
            </header>
            <main className="max-w-7xl mx-auto py-20 px-20 grid md:grid-cols-2 bg-white rounded-3xl ">
                <div className="p-5 mr-4 bg-white rounded-2xl">
                  <h2 className="font-medium text-2xl text-[#13474b] tracking-wide last-of-type:border-b pb-4">MENU</h2>

                      <div className="mt-10 space-y-3">
                          {menuItems.map(item => (
                              <MenuItem key={item.id} item={item} addItem={addItem} />
                          ))}
                      </div>
                </div>
                <div className=" border-slate-300 p-5 rounded-2xl space-y-10 bg-[#13474b]">
                    {order.length > 0 ? (
                      <>
                        <OrderContents
                          order={order}
                          removeItem={removeItem} 
                        />
                        <TipPercentageForm
                          setTip={setTip}
                          tip={tip} 
                        />
                        <OrderTotals
                          order={order}
                          tip={tip}
                          placeOrder={placeOrder}
                        />
                      </>
                    ):(
                      <p className="text-center font-light text-1xl text-[#fff] tracking-wide">No orders</p>
                    ) }
                </div>
            </main>
        </>
    );
}

export default App;
