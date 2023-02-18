import * as React from "react";
import { styled } from "@mui/system";
import TabsUnstyled from "@mui/base/TabsUnstyled";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";
import { buttonUnstyledClasses } from "@mui/base/ButtonUnstyled";
import TabUnstyled, { tabUnstyledClasses } from "@mui/base/TabUnstyled";
import OrderList from "../orderList";
import { Box } from "@mui/material";
import Profile from "../profile";
import Reels from "../reels";

const Tab = styled(TabUnstyled)(
    ({ theme }) => `
    color: #fff;
    cursor: pointer;
    font-size: 0.875rem;
    font-weight: 600;
    background-color: transparent;
    width: 100%;
    padding: 10px 12px;
    margin: 6px 6px;
    border: none;
    border-radius: 7px;
    display: flex;
    justify-content: center;

    &:hover {
        background-color: ${theme.palette.primary.main};
    }

    &:focus {
        color: #fff;
        outline: 3px solid ${theme.palette.primary.main};
    }

    &.${tabUnstyledClasses.selected} {
        background-color: #fff;
        color: ${theme.palette.primary.main};
    }

    &.${buttonUnstyledClasses.disabled} {
        opacity: 0.5;
        cursor: not-allowed;
    }
`
);

const TabPanel = styled(TabPanelUnstyled)(
    ({ theme }) => `
  width: 100%;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  padding: 20px 12px;
  background: ${theme.palette.neutral.light};
  border: 1px solid ${theme.palette.neutral.main};
  border-radius: 12px;
  opacity: 1;
  `
);

const TabsList = styled(TabsListUnstyled)(
    ({ theme }) => `
  min-width: 400px;
  background-color: ${theme.palette.teal.main};
  border-radius: 12px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  box-shadow: 0px 4px 30px ${theme.palette.neutral.main};
  `
);

export default function ProfileContent({ currentUser, setCurrentUser }) {
    return (
        <Box flex={4} p={2}>
            <TabsUnstyled defaultValue={0}>
                <TabsList>
                    <Tab>基本資料</Tab>
                    <Tab>收藏</Tab>
                    <Tab>最愛商品</Tab>
                    <Tab>我的菜單</Tab>
                    <Tab>歷史訂單</Tab>
                </TabsList>
                <TabPanel value={0}>
                    <Profile currentUser={currentUser} setCurrentUser={setCurrentUser} />
                </TabPanel>
                <TabPanel value={1}>
                    <Reels />
                </TabPanel>
                <TabPanel value={2}>Language page</TabPanel>
                <TabPanel value={3}>Language page</TabPanel>
                <TabPanel value={4}>
                    <OrderList currentUser={currentUser} setCurrentUser={setCurrentUser} />
                </TabPanel>
            </TabsUnstyled>
        </Box>
    );
}
