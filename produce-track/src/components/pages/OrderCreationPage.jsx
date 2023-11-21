import React from "react";
import Header from "../UI/Header";
import Footer from "../UI/Footer";
import OrderForm from "../../commons/OrderForm/OrderForm";

import classes from "../../styles/OrderCreationPage.css";

const OrderCreationPage = ({ creationHandler }) => {
    return (
        <div className={classes.orderCreationPage}>
            <Header />
            <main className={classes.main}>
                <OrderForm submitHandler={creationHandler}>Create</OrderForm>
            </main>
            <Footer />
        </div>
    );
};

export default OrderCreationPage;