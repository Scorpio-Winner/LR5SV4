import React, { useState } from "react";
import Header from "../UI/Header";
import OrderList from "../UI/OrderList";
import Footer from "../UI/Footer";
import Modal from "../../commons/Modal/Modal";
import OrderDetails from "../UI/OrderDetails";

import classes from "../../styles/OrdersPage.css";

const OrdersPage = ({ orders, deleteOrder }) => {
    const [modalActive, setModalActive] = useState(false);
    const [modalOrder, setModalOrder] = useState({
        id: 1,
        productType: "",
        quantity: 0,
        customerName: "",
        status: "",
    });

    const showOrderDetails = (order) => {
        setModalOrder(order);
        setModalActive(true);
    };

    return (
        <div className={classes.ordersPage}>
            <Modal visible={modalActive} setVisible={setModalActive}>
                <OrderDetails order={modalOrder} />
            </Modal>
            <Header />
            <main className={classes.main}>
                <h2 className={classes.pageHeader}>Orders</h2>
                <OrderList orders={orders} detailsHandler={showOrderDetails} deleteHandler={deleteOrder} />
            </main>
            <Footer />
        </div>
    );
};

export default OrdersPage;