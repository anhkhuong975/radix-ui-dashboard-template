import React from "react";
import {Container, Flex, Link, Text} from "@radix-ui/themes";

const Footer = () => {
    return (
        <>
            <Container p="3" className="bg-white" my="auto">
                <Flex align="center">
                    <Link target='_blank' href='https://khuong-pham.vercel.app/'>khuong-pham.vercel.app</Link>
                </Flex>
            </Container>
        </>
    );
};

export default Footer;
