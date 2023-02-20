import { useAuth } from "@/hooks/AuthContext";
import UserService from "@/pages/services/user.service";
import { Box, Typography } from "@mui/material";
import { DataGrid, GridToolbar, zhTW } from "@mui/x-data-grid";
import axios from "axios";
import { useEffect, useState } from "react";
import FlexBox from "@/components/FlexBox/FlexBox";
import { useParams } from "react-router-dom";

// function randomDate(start, end) {
//     return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
// }

// const fakeOrderData = (() => {
//     const data = [];
//     for (let i = 1; i < 200; i++) {
//         data.push({
//             id: i,
//             product: "dumbell",
//             orderdate: randomDate(new Date(2020, 1, 1), new Date()),
//             cost: Math.floor(Math.random() * 100),
//             address: "Taipei",
//         });
//     }
//     return data;
// })();

const OrderList = () => {
    const { currentUser } = useAuth();
    const [orders, setOrders] = useState([]);
    const params = useParams();
    const userParams = params.username;

    // fetch order data
    useEffect(() => {
        UserService.userOrders(userParams).then((res) => {
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
            {currentUser.username !== userParams && (
                <FlexBox>
                    <Typography variant="h3" fontWeight={800}>
                        你沒有權限啊老哥
                    </Typography>
                </FlexBox>
            )}
            {currentUser.username === userParams && (
                <Box
                    m="10px 0 0 0"
                    height="75vh"
                    sx={{
                        "& .MuiDataGrid-main": {
                            borderRadius: "8px",
                        },
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
                            backgroundColor: "primary.light",
                            color: "black.main",
                            borderBottom: "none",
                        },
                        "& .MuiDataGrid-virtualScroller": {
                            backgroundColor: "neutral.light",
                        },
                        "& .MuiDataGrid-footerContainer": {
                            borderTop: "none",
                            backgroundColor: "primary.light",
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
            )}
        </Box>
    );
};

export default OrderList;
