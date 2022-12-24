import React from 'react'
import { useSelector } from "react-redux";

export default function Receipt() {
    const items = useSelector((state) => state.products.items);
    const filtered = items.filter((item) => item.count > 0);

    let spentMoney = 0;
    filtered.forEach((item) => {
        spentMoney += item.price * item.count;
    });

    if (filtered.length === 0) {
        return null;
    }

    function nFormatter(num) {
        if (num >= 1000000) {
           return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
        }
        if (num >= 1000) {
           return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
        }
        return num;
   }

    return (
        <div className='spree-wrapper'>
            <div className="spree-headline">Your Receipt</div>
            {
                filtered.map((item) => (
                    <div className="spree-items">
                        <div className="spree-item-name">{item.title}</div>
                        <div className="spree-item-amount">x{item.count}</div>
                        <div className="spree-item-cost">
                            ${nFormatter(item.price * item.count)}
                        </div>
                    </div>
                ))
            }
            <div className="spree-total">
                <span>TOTAL</span>
                <div className="spree-total-money">
                    ${Number(spentMoney).toLocaleString('en-US')}
                </div>
            </div>
        </div>
    )
}
