import { FC } from "react";
import { Box } from "@mui/material"
import Head from "next/head"
import { title } from "process";
import { Navbar } from "../ui";
import Sidebar from "../ui/Sidebar";


interface Props {
    title?: string;
}


const Layout: FC<Props> = ({ title = 'OpenJira - App', children }) => {
  return (
    <Box sx={{ flexFlow: 1 }}>
        <Head>
            <title>{ title }</title>
        </Head>
        <Navbar></Navbar>
        <Sidebar></Sidebar>
        <Box sx={{ padding: '0.625rem 1.25rem' }}>
            { children }
        </Box>
    </Box>
  )
}

export default Layout
