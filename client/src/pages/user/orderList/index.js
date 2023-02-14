import { Box, Typography } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

import Header from "../components/Header";

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
    return new Date(
        start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
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

const OrderList = () => {
    const columns = [
        { field: "id", headerName: "訂單編號" },
        {
            field: "orderdate",
            headerName: "訂購日期",
            flex: 1,
            cellClassName: "name-column--cell",
        },
        {
            field: "product",
            headerName: "產品名稱",
            flex: 1,
        },
        {
            field: "address",
            headerName: "收件地址",
            flex: 1,
        },
        {
            field: "cost",
            headerName: "Cost",
            flex: 1,
            renderCell: (params) => (
                <Typography color="teal">${params.row.cost}</Typography>
            ),
        },
    ];

    return (
        <Box m="20px">
            <Header
                title="過往訂單"
                subtitle="透過訂單記錄監控自己的體態計畫！"
            />
            <Box
                m="40px 0 0 0"
                height="75vh"
                sx={{
                    "& .MuiDataGrid-root": {
                        border: "none",
                    },
                    "& .MuiDataGrid-cell": {
                        borderBottom: "none",
                    },
                    "& .name-column--cell": {
                        color: "primary.main",
                    },
                    "& .MuiDataGrid-columnHeaders": {
                        backgroundColor: "primary.main",
                        borderBottom: "none",
                    },
                    "& .MuiDataGrid-virtualScroller": {
                        backgroundColor: "primary.main",
                    },
                    "& .MuiDataGrid-footerContainer": {
                        borderTop: "none",
                        backgroundColor: "primary.main",
                    },
                    "& .MuiCheckbox-root": {
                        color: `primary.main !important`,
                    },
                }}
            >
                <DataGrid
                    rows={fakeOrderData}
                    columns={columns}
                    components={{ Toolbar: GridToolbar }}
                />
            </Box>
        </Box>
    );
};

export default OrderList;
