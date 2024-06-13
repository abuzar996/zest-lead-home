import Title from "src/common/title";
import { Flex, theme } from "antd";
import { TitleType } from "src/utils/types";
import Dashboard from "src/public/images/Dashboard.jpg";
import MobileDashboard from "src/public/images/mobile-view.png";
import { workingData } from "./constants";
import Card from "src/common/card";
const Working = () => {
  const { token } = theme.useToken();
  return (
    <Flex
      vertical
      align="center"
      flex="1"
      style={{
        padding: token.paddingSM,
        paddingTop: token.paddingLG * 2,
        paddingBottom: token.paddingLG * 2,
      }}
      gap="large"
    >
      <Title
        title="How It Works"
        type={TitleType.Secondary}
        heading="Simple Steps to Real Estate Success. Powerful, self-serve product and growth analytics to help you convert."
      />

      <Flex
        flex="1"
        justify="center"
        style={{
          position: "relative",
          maxWidth: "70%",
          borderRadius: token.borderRadiusLG,
          paddingBottom: token.paddingLG * 6,
        }}
        className="animate-starting-point"
      >
        <img
          src={MobileDashboard}
          style={{
            width: "fit-content",
            borderRadius: token.borderRadiusLG,
            //position: "absolute",
            position: "relative",
            left: "10%",
            top: "15%",
            zIndex: 100,
          }}
        />

        <img
          src={Dashboard}
          style={{
            width: "fit-content",
            borderRadius: token.borderRadiusLG,
            position: "relative",
            left: -30,
          }}
        />
      </Flex>
      <Flex flex="1" className="xxs:max-md:flex-col">
        {workingData.map(({ id, heading, subHeading, Image }) => (
          <Flex flex="1" gap={"small"} key={id}>
            <Card heading={heading} subHeadings={subHeading} Image={Image} />
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

export default Working;
