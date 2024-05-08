import { useState } from "react";
import type { MenuItem, OrderItem } from "../types";

export default function useOrder() {
    // Estado para almacenar la orden de los elementos
    const [order, setOrder] = useState<OrderItem[]>([]); // Inicializada como un array vacío de objetos OrderItem

    // Estado para almacenar la propina
    const [tip, setTip] = useState(0);

    // Función para agregar un nuevo artículo a la orden
    const addItem = (item: MenuItem) => {
        // Verifica si el artículo ya está en la orden
        const itemExist = order.find(orderItem => orderItem.id === item.id);
        
        if (itemExist) {
            // Si el artículo ya está en la orden, se actualiza la cantidad
            const updatedOrder = order.map(orderItem => 
                orderItem.id === item.id 
                    ? { ...orderItem, quantity: orderItem.quantity + 1 } 
                    : orderItem
            );
            
            setOrder(updatedOrder); // Actualiza el estado con la orden actualizada
        } else {
            // Si el artículo no está en la orden, se agrega como un nuevo elemento
            const newItem: OrderItem = { ...item, quantity: 1 }; 
            setOrder([...order, newItem]); // Agrega un nuevo elemento a la orden
        }
    }

    // Función para eliminar un artículo de la orden
    const removeItem = (id: MenuItem['id']) => {
        setOrder(order.filter(item => item.id !== id)); // Filtra los elementos de la orden, removiendo el artículo con el ID especificado
    }
    
    // Función para realizar un pedido (limpia la orden y reinicia la propina)
    const placeOrder = () => {
        setOrder([]);
        setTip(0);
    }

    // Devuelve el estado de la orden, la propina y las funciones para manipularlas
    return {
        order,
        tip,
        setTip,
        addItem,
        removeItem,
        placeOrder
    };
}
