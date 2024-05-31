import React from "react";
import {Container, Flex, Text} from "@radix-ui/themes";

const Footer = () => {
    return (
        <>
            <Container p="3" className="bg-white" my="auto">
                <Flex align="center">
                    <Text>@khuong-pham.vercel.app</Text>
                </Flex>
            </Container>
        </>
    );
};

export default Footer;
