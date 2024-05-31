"use client";

import React from "react";
import {Box, Theme} from "@radix-ui/themes";
import Header from "@/components/MainLayout/Header";
import Footer from "@/components/MainLayout/Footer";
import Sidebar from "@/components/Sidebar";
import classNames from "classnames";

const MainLayout: React.FC<React.PropsWithChildren> = ({children}) => {
    // state
    const [isSidebarExpand, setIsSidebarExpand] = React.useState<boolean>(true);

    return (
        <>
            <Theme>
                {/*region header*/}
                <Box
                    className="bg-white z-50"
                    position="fixed"
                    width="100%"
                    height={"var(--header-height)"}
                >
                    <Header>
                        <Sidebar setExpand={setIsSidebarExpand}/>
                    </Header>
                </Box>
                {/*endregion header*/}

                {/*region body*/}
                <Box
                    pt={"var(--header-height)"}
                    minHeight={"calc(100vh - var(--footer-height))"}
                    className={classNames(
                        "bg-gray-50",
                        "transition-all duration-300 ease-in-out mx-0",
                        isSidebarExpand ? "ml-72" : "ml-20"
                    )}
                >
                    <main className="transition-none p-6">{children}</main>
                </Box>
                {/*endregion body*/}

                {/*region footer*/}
                <Box
                    height={"var(--footer-height)"}
                    className={classNames(
                        "flex align-bottom",
                        "transition-all duration-300 ease-in-out mx-0",
                        isSidebarExpand ? "ml-72" : "ml-20"
                    )}
                >
                    <Footer/>
                </Box>
                {/*endregion footer*/}
            </Theme>
        </>
    );
};

export default MainLayout;
