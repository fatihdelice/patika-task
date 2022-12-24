import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateCount } from '../redux/productsSlice';

export default function ProductCard({ item, id }) {
    const [count, setCount] = useState(0);
    const [salable, setSalable] = useState("disabled");
    const [buyable, setBuyable] = useState("");

    const budget = useSelector((state) => state.products.budget);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(updateCount({ id: item.id, count: count }));
    }, [count, item.id, dispatch]);

    const buy = () => {
        setCount(Number(count) + 1);
    };

    const sell = () => {
        setCount(Number(count) - 1);
    };

    useEffect(() => {
        if (count > 0) {
            setSalable("");
        } else {
            setSalable("disabled");
        }
    }, [count]);

    useEffect(() => {
        if (item.price > budget) {
            setBuyable("disabled");
        } else {
            setBuyable("");
        }
    }, [budget, item.price]);

    const handleChange = (value) => {
        const maxCount = Math.floor(budget / item.price) + count;

        if (value && value > 0) {
            if (value > maxCount && budget >= 0) {
                setCount(maxCount);
            } else {
                setCount(value);
            }
        } else {
            setCount(0);
        }
    };

    return (
        <div>
            <img src={item.image} className="item-img" alt={item.title} />
            <div className="item-name">{item.title}</div>
            <div className="item-cost">${Number(item.price).toLocaleString('en-US')}</div>
            <div className="item-controls">
                <button disabled={salable} className="item-sell" onClick={sell} >
                    Sell
                </button>
                <input pattern="\d*" type="number" className="item-input" value={count} onChange={(e) => handleChange(parseInt(e.target.value))} />
                <button disabled={buyable} className="item-buy" onClick={buy} >
                    Buy
                </button>
            </div>
        </div>
    )
}
