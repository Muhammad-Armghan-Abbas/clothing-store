import { useContext } from 'react';
import Item from './item.js'
import CartContext from './Context/CartContext.js';
function ItemList() {
const item=useContext(CartContext);
const items=item.item;
    return (
        <>{
            items.map(it => <Item
                type={it.category}
                name={it.title}
                price={it.price}
                link={it.image}
                id={it.id}
                key={it.id}
            ></Item>)
        }
        </>
    )
}
export default ItemList;