import type { MenuItem } from "../types"

type MenuItemProps={
    item: MenuItem,
    addItem: (item: MenuItem) => void
}

export default function MenuItem({item, addItem}: MenuItemProps) {
  return (
    <button
      className="bg-gray-100 text-m text-[#13474b] tracking-wide hover:bg-[#13474b] hover:border-[#13474b] hover:text-white p-3 rounded-lg flex justify-between w-full transition-all duration-300"
      onClick={() => addItem(item)}
    >
      <p> {item.name} </p>
      <p className="font-bold">{item.price}€</p>
    </button>
  )
}
