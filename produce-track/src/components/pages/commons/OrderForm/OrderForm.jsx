import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import Input from "../Input/Input";

import classes from "./OrderForm.css";

const OrderForm = ({ children, orderData, submitHandler }) => {
    const [order, setOrder] = useState(
        orderData
            ? orderData
            : {
                productType: "",
                quantity: 0,
                customerName: "",
                status: "",
              }
    );

    const router = useNavigate();

    const submit = (e) => {
        e.preventDefault();
        submitHandler(order);
        setOrder({
            productType: "",
            quantity: 0,
            customerName: "",
            status: "",
        });

        router("/orders");
    };

    return (
        <form className={classes.form}>
            <h2 className={classes.formHeader}>{children} order</h2>
            <div className={classes.inputs}>
                <Input
                    type="text"
                    placeholder="Product Type"
                    value={order.productType}
                    onChange={(e) =>
                        setOrder({ ...order, productType: e.target.value })
                    }
                />
                <Input
                    type="number"
                    placeholder="Quantity"
                    value={order.quantity}
                    onChange={(e) =>
                        setOrder({ ...order, quantity: parseInt(e.target.value) })
                    }
                />
                <Input
                    type="text"
                    placeholder="Customer Name"
                    value={order.customerName}
                    onChange={(e) =>
                        setOrder({ ...order, customerName: e.target.value })
                    }
                />
                <Input
                    type="text"
                    placeholder="Status"
                    value={order.status}
                    onChange={(e) =>
                        setOrder({ ...order, status: e.target.value })
                    }
                />
            </div>
            <Button onClick={submit}>{children}</Button>
        </form>
    );
};

export default OrderForm;    