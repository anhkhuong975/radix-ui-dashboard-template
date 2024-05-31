import {Flex, Link} from "@radix-ui/themes";
import React from "react";

const Header: React.FC<React.PropsWithChildren> = ({children}) => {
  return (
      <Flex
          direction="column"
          justify="center"
          p="3"
          className="border-b border-1 border-primary h-full"
      >
        <Flex justify="end" gap="3" height="full" align="center">
          {/*region left section*/}
          {children}
          {/*endregion left section*/}

          {/*region right*/}
          <Flex gap="3" justify="end" align="center">
            <Link className='px-3 py-1 ring-1 rounded' target="_blank"
                  href="https://khuong-pham.vercel.app/">Author</Link>
            <Link className='px-3 py-1 ring-1 rounded' target="_blank"
                  href="https://khuong-pham.vercel.app/">Blog</Link>
          </Flex>
          {/*endregion right*/}
        </Flex>
      </Flex>
  );
};

export default Header;
