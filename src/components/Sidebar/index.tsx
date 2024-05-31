"use client";

import React, {FC, useState} from "react";
import {Avatar, Box, Flex, Link, Text} from "@radix-ui/themes";
import {MenuStructure, SidebarProps} from "@/components/Sidebar/types";
import classNames from "classnames";
import {MOCK_MENU} from "@/components/Sidebar/constants";

const Index: FC<SidebarProps> = ({
                                     username = "Lorem Ipsum",
                                     description = "sum dolor ip",
                                     setExpand = () => {
                                     },
                                 }) => {
    // states init
    const [menu] = React.useState<Array<MenuStructure>>(MOCK_MENU);
    const [isExpand, setIsExpand] = useState(true);
    const [isExpandOnHover, setIsExpandOnHover] = useState(false);

    // memo
    const hasExpand = React.useMemo(
        () => isExpand || isExpandOnHover,
        [isExpand, isExpandOnHover]
    );

    // ref init
    // ...

    /**
     * handle hover expand
     */
    const handleHoverExpand = React.useCallback(
        (value: boolean) => {
            if (!isExpand) {
                setIsExpandOnHover(value);
            }
        },
        [isExpand]
    );

    /**
     * use effect to detect expand state
     */
    React.useEffect(() => {
        setExpand(isExpand);
    }, [isExpand, setExpand]);

    return (
        <nav
            role="navigation"
            className={[
                "bg-slate-50 border-r border-slate-100 shadow-sm absolute inset-y-0 left-0",
                "duration-300 ease-in-out md:fixed md:translate-x-0",
                `${
                    isExpand
                        ? "bg-slate-50 w-72"
                        : isExpandOnHover
                            ? "bg-slate-50/70 w-72 backdrop-blur-md"
                            : "bg-slate-50 w-20"
                }`,
            ].join(" ")}
        >
            <button
                style={{top: "var(--header-height)"}}
                className="absolute z-50 -translate-y-1/2 -right-3 bg-white hover:bg-slate-100 text-slate-500 p-0.5 rounded-full border border-slate-200"
                onClick={() => {
                    setIsExpand(!isExpand);
                }}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`${
                        isExpand ? "rotate-0" : "rotate-180"
                    } transform duration-500 h-5 w-5`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>
            <div
                onMouseEnter={() => handleHoverExpand(true)}
                onMouseLeave={() => handleHoverExpand(false)}
                className={`relative h-screen overflow-hidden`}
            >
                <Box className="h-full">
                    <Box className="text-slate-500">
                        {/*region info*/}
                        <Box className="my-8 flex flex-col items-center h-44 overflow-x-hidden">
                            <a
                                href="#"
                                className={`text-center flex flex-col items-center justify-center`}
                            >
                                <Avatar
                                    size="6"
                                    src="./profile/avatar.png"
                                    fallback="A"
                                    radius="full"
                                />

                                <div
                                    className={`text-base font-semibold text-slate-700 mt-3 truncate duration-300 ${
                                        isExpand ? "" : isExpandOnHover ? "" : "w-0 h-0 opacity-0"
                                    }`}
                                >
                                    {username}
                                </div>
                                <div
                                    className={`duration-300 text-sm text-slate-500 truncate ${
                                        isExpand ? "" : isExpandOnHover ? "" : "w-0 h-0 opacity-0"
                                    }`}
                                >
                                    {description}
                                </div>
                            </a>
                        </Box>
                        {/*endregion info*/}

                        {/*region list menu*/}
                        <Box className="mt-3 mb-10 p-0">
                            <ul className="list-none text-sm font-normal space-y-3">
                                {menu.map((group, groupIdx) => (
                                    <li
                                        key={groupIdx}
                                        className="text-secondary uppercase font-bold"
                                    >
                                        <Box className="h-6 flex flex-col justify-center">
                                            <Box
                                                px="3"
                                                className={classNames(
                                                    "transition duration-300 overflow-hidden",
                                                    `${hasExpand ? "inline" : "h-0 opacity-0"}`
                                                )}
                                            >
                                                <Text as="span" truncate>
                                                    {group.groupName}
                                                </Text>
                                            </Box>

                                            <Box
                                                className={classNames(
                                                    "transition duration-300 overflow-hidden",
                                                    `${hasExpand ? "h-0 opacity-0" : ""}`
                                                )}
                                            >
                                                <div className="border-b"/>
                                            </Box>
                                        </Box>

                                        <ul className="list-none text-sm font-normal space-y-1 my-3 p-3">
                                            {(group.children || []).map((menu, menuIdx) => (
                                                <li key={`menu-${menuIdx}`} className="">
                                                    <Link
                                                        href={menu.link}
                                                        className="focus:no-underline hover:no-underline"
                                                    >
                                                        <Flex
                                                            gap="3"
                                                            align="center"
                                                            justify="start"
                                                            className={classNames(
                                                                "rounded py-3 text-secondary capitalize",
                                                                "transition duration-300",
                                                                "hover:bg-gray-200"
                                                            )}
                                                        >
                                                            <Box
                                                                as="span"
                                                                className={`ms-7 ${
                                                                    hasExpand ? "" : "-translate-x-1/2"
                                                                }`}
                                                            >
                                                                {menu.icon}
                                                            </Box>
                                                            <Box
                                                                className={classNames(
                                                                    "transition duration-300 overflow-hidden inline",
                                                                    `${hasExpand ? "" : "h-0 opacity-0"}`
                                                                )}
                                                            >
                                                                <Text truncate>{menu.title}</Text>
                                                            </Box>
                                                        </Flex>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </li>
                                ))}
                            </ul>
                        </Box>
                        {/*endregion list menu*/}
                    </Box>
                </Box>
            </div>
        </nav>
    );
};

export default Index;
