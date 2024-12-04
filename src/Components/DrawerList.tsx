import { Divider, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router";
import { string } from "yup";
import { useAppDispatch } from "../Redux/Store";
import { sellerLogout } from "../Redux/Seller/SellerSlice";


interface menuItem {
  name: string;
  path: string;
  icon: any;
  activeIcon: any;
}

interface DrawerListProps {
  menu: menuItem[];
  menu2: menuItem[];
  toggleDrawer: () => void;
}

const DrawerList = ({ menu, menu2, toggleDrawer }: DrawerListProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch=useAppDispatch();
  const handleLogout=()=>{
    dispatch(sellerLogout(navigate));
  }
  return (
    <div className="h-full">
      <div className="flex flex-col justify-between h-full w-[300px] border-r py-5">
        <div className="">
          <div className="space-y-1">
            {menu.map((item: any, index: any) => (
              <div
                className=" hover:cursor-pointer pr-6"
                key={index}
                onClick={() => navigate(item.path)}
              >
                <p
                  className={`${
                    item.path === location.pathname
                      ? "bg-primary-color text-white"
                      : "text-primary-color"
                  } rounded-r-full px-3 py-3 flex items-center `}
                >
                  <ListItemIcon>
                    {item.path === location.pathname
                      ? item.activeIcon
                      : item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.name} />
                </p>
              </div>
            ))}
          </div>
        </div>
       
        <div className="absolute bottom-0 left-0 space-y-2 w-[300px]"> 
        <Divider />
        <div className="space-y-1">
          {menu2.map((item: any, index: any) => (
            <div
              className=" hover:cursor-pointer pr-6"
              key={index}
              onClick={() => 
                {navigate(item.path)
                if(item.path==="/") handleLogout()}
              }
            >
              <p
                className={`${
                  item.path === location.pathname
                    ? "bg-primary-color text-white"
                    : "text-primary-color"
                } rounded-r-full px-3 py-1 flex items-center `}
              >
                <ListItemIcon>
                  {item.path === location.pathname
                    ? item.activeIcon
                    : item.icon}
                </ListItemIcon>
                <ListItemText primary={item.name} />
              </p>
            </div>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
};

export default DrawerList;
