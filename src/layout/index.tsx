import { Flex } from "antd";
import AppWrapper from "src/utils/app-wrapper";
import Nav from "src/components/nav";
import AppOverview from "src/components/app-overview";
import Working from "src/components/working";
import Wrapper from "src/common/wrapper";
import Feature from "src/components/feature";
import Starter from "src/components/starter";
import Contact from "src/components/contact";
import Help from "src/components/help";
import Footer from "src/components/footer";
import { TitleType } from "src/utils/types";
import { useRef, useState, useLayoutEffect } from "react";
const Layout = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number>(0);
  useLayoutEffect(() => {
    if (headerRef.current) {
      setHeight(headerRef.current!.clientHeight);
    }
  }, [height]);
  return (
    <AppWrapper>
      <Flex vertical flex="1" style={{ minWidth: "100%" }}>
        <Flex flex="1" ref={headerRef} style={{ width: "100%" }}>
          <Nav />
        </Flex>
        {height !== 0 && (
          <Flex
            vertical
            align="center"
            style={{
              overflowY: "scroll",
              height: window.innerHeight - height + 1,
              scrollBehavior: "smooth",
            }}
          >
            <Flex flex="1" style={{ maxWidth: "85%" }} vertical>
              <AppOverview />
              <Working />
              <Wrapper
                titleType={TitleType.Secondary}
                titleValue="Welcome to Zestlead"
                titleHeading="ZestLead, where we specialize in transforming leads into successful real estate transactions. Our innovative platform is designed to provide realtors with the tools and support they need to thrive in today's competitive market"
              />
              <Feature />
            </Flex>
            <Flex flex="1" vertical style={{ minWidth: "100%" }}>
              <Starter />
              <Contact />
              <Help />
              <Footer />
            </Flex>
          </Flex>
        )}
      </Flex>
    </AppWrapper>
  );
};

export default Layout;
