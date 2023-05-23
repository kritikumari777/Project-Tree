import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: <AiIcons.AiFillDashboard/>,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: 'Users',
    path: '/Users',
    icon: <RiIcons.RiUserFill/>,
    icon: <RiIcons.RiAlarmFill/>,
    icon: <RiIcons.RiMenuAddFill/>,
    icon: <FaIcons.FaUser/>,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Users Details',
        path: '/users/userDetails',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Users History',
        path: '/Users/userHistory',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
    ]
  },
  {
    title: 'Products',
    path: '/products',
    icon: <FaIcons.FaCartPlus />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Product Details',
        path: '/products/productDetails',
        icon: <IoIcons.IoIosPaper/>,
        cName: 'sub-nav'
      },
      {
        title: 'Product Type',
        path: '/products/productType',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
    ]
  },
  {
    title: 'Stors',
    path: '/Stors',
    icon:  <IoIcons.IoMdAppstore />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Stors Histoey',
        path: '/stors/storsHistory',
        icon:  <IoIcons.IoMdAppstore />,
        cName: 'sub-nav'
      },
    ]
  },

  {
    title: 'Riders',
    path: '/riders',
    icon: <IoIcons.IoIosBicycle/>,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Rider List',
        path: '/riders/riderList',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Rider Status',
        path: '/riders/riderStatus',
        icon: <IoIcons.IoIosStats/>,
        cName: 'sub-nav'
      },
    ]
  },
  
  {
    title: 'Ads & Stuff',
    path: '/adsnStuff',
    icon: <IoIcons.IoMdAlbums/>
  }
];
