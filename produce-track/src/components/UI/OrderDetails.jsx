import React from "react";

import cl from "../../styles/OrderDetails.css";

const OrderDetails = ({ order }) => {
    return (
        <div className={cl.orderDetails}>
            <h2 className={cl.title}>{order.title}</h2>
            <div className={cl.details}>
                <p className={cl.detail}>
                    <b>Id:</b> {order.id}
                </p>
                <p className={cl.detail}>
                    <b>Status:</b> {order.status}
                </p>
                <p className={cl.detail}>
                    <b>Creation date:</b> {order.creationDate}
                </p>
                <p className={cl.detail}>
                    <b>Customer:</b> {order.customer}
                </p>
                <p className={cl.detail}>
                    <b>Complete time:</b> {order.completeTime}
                </p>
                <p className={cl.detail}>
                    <b>Description:</b><br/>
                    {order.description}
                </p>
            </div>
        </div>
    );
};

export default OrderDetails;