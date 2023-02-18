import { Box, Typography } from "@mui/material";
import { DataGrid, GridToolbar, zhTW } from "@mui/x-data-grid";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// const fakeOrderData = [
//     {
//         id: 1,
//         product: "dumbell",
//         orderdate: "02/11/2022",
//         cost: "60",
//         address: "Taipei",
//     },
// ];

function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

const fakeOrderData = (() => {
    const data = [];
    for (let i = 1; i < 200; i++) {
        data.push({
            id: i,
            product: "dumbell",
            orderdate: randomDate(new Date(2020, 1, 1), new Date()),
            cost: Math.floor(Math.random() * 100),
            address: "Taipei",
        });
    }
    return data;
})();

const OrderList = ({ currentUser, setCurrentUser }) => {
    const [orders, setOrders] = useState({});

    // fetch order data
    useEffect(() => {
        console.log(currentUser.username);
        axios.get(`${process.env.REACT_APP_API_KEY}/user/${currentUser.username}/orders`).then((res) => {
            setOrders(res.data);
        });
    }, []);

    const columns = [
        { field: "id", headerName: "訂單編號" },
        {
            field: "order_date",
            headerName: "訂購日期",
            flex: 1,
            cellClassName: "name-column--cell",
        },
        {
            field: "address",
            headerName: "收件地址",
            flex: 1,
        },
        {
            field: "total_amount",
            headerName: "總金額",
            flex: 1,
        },
        // {
        //     field: "cost",
        //     headerName: "Cost",
        //     flex: 1,
        //     renderCell: (params) => <Typography color="teal">${params.row.cost}</Typography>,
        // },
    ];

    return (
        <Box m="20px">
            <Box
                m="10px 0 0 0"
                height="75vh"
                sx={{
                    "& .MuiDataGrid-root": {
                        border: "none",
                    },
                    "& .MuiDataGrid-cell": {
                        borderBottom: "1px solid black.light",
                    },
                    "& .name-column--cell": {
                        color: "",
                    },
                    "& .MuiDataGrid-columnHeaders": {
                        backgroundColor: "teal.main",
                        borderBottom: "none",
                    },
                    "& .MuiDataGrid-virtualScroller": {
                        backgroundColor: "teal.light",
                    },
                    "& .MuiDataGrid-footerContainer": {
                        borderTop: "none",
                        backgroundColor: "teal.main",
                    },
                    "& .MuiCheckbox-root": {
                        color: `primary.main !important`,
                    },
                }}>
                <DataGrid
                    rows={orders}
                    columns={columns}
                    localeText={zhTW.components.MuiDataGrid.defaultProps.localeText}
                    components={{ Toolbar: GridToolbar }}
                />
            </Box>
        </Box>
    );
};

export default OrderList;
