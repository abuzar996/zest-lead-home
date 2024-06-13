import { ConfigProvider, Flex, theme } from "antd";
import { Color } from "src/utils/types";

interface ConfigProps {
  children: React.ReactNode;
}

const Config: React.FC<ConfigProps> = ({ children }) => {
  const { token } = theme.useToken();
  return (
    <ConfigProvider
      theme={{
        components: {
          Table: {
            padding: 8,
            headerColor: Color.PRIMARY,
            headerSplitColor: "transparent",
          },
          Spin: { colorPrimary: Color.SHADE },
          Drawer: {
            colorBgElevated: Color.SECONDARY100,
            paddingLG: 0,
          },
          Typography: {
            fontFamily: "Montserrat",
          },
          Modal: {
            zIndexBase: 1,
            colorBgMask: "transparent",
            colorSplit: "#ffffff",
            margin: 0,
            marginXS: 0,
            marginSM: 0,
            boxShadow: "0",
          },
          Segmented: {
            zIndexBase: 1,
            zIndexPopupBase: 1,
            itemSelectedBg: Color.PRIMARY,
            itemSelectedColor: Color.TEXT,

            controlHeight: 1,
            itemColor: Color.SECONDARY,
          },
          Collapse: {
            colorTextHeading: Color.SECONDARY100,
            contentPadding: 0,
          },
          Checkbox: {
            colorPrimary: Color.PRIMARY,
            colorPrimaryHover: Color.PRIMARY,
          },
          Radio: {
            colorPrimary: Color.PRIMARY,
            paddingLG: 0,
            padding: 0,
            paddingSM: 0,
            paddingMD: 0,
            paddingXS: 0,
            lineWidthFocus: 0,
          },
          Divider: {
            colorBgBase: Color.PRIMARY,
            colorSplit: Color.TEXT,
            marginLG: 0,
            margin: 0,
          },
          Input: {
            activeBorderColor: Color.PRIMARY,
            hoverBorderColor: Color.PRIMARY,
            colorBorder: Color.PRIMARY,
            colorTextPlaceholder: Color.SECONDARY,
            colorText: Color.SECONDARY,
          },
          Slider: {
            trackBg: Color.PRIMARY,
            trackHoverBg: Color.PRIMARY,
            handleColor: Color.PRIMARY,
            handleActiveColor: Color.PRIMARY,
            dotActiveBorderColor: Color.PRIMARY,
            colorPrimaryBorderHover: Color.PRIMARY,
          },
          Select: {
            colorBorder: Color.PRIMARY,
            colorIcon: Color.PRIMARY,
            colorIconHover: Color.PRIMARY,
            colorPrimary: Color.PRIMARY,
            colorPrimaryHover: Color.PRIMARY,
            colorTextPlaceholder: Color.TEXT,
          },

          Button: {
            colorPrimary: Color.SHADE,
            colorPrimaryHover: Color.SHADE,
            colorPrimaryActive: Color.SHADE,

            colorBgContainerDisabled: Color.PRIMARY,
            colorTextLightSolid: Color.PRIMARY,

            defaultActiveColor: Color.PRIMARY,
            defaultActiveBg: Color.SHADE,
            defaultActiveBorderColor: Color.PRIMARY,
            defaultHoverBorderColor: Color.PRIMARY,
            defaultBg: Color.PRIMARY,
            defaultHoverBg: Color.PRIMARY,
            defaultColor: Color.SHADE,
            defaultHoverColor: Color.SHADE,
            colorBorder: Color.PRIMARY,
            colorBgBase: Color.PRIMARY,
            borderRadiusLG: 10,
            borderRadius: 8,
            borderRadiusSM: 8,
            borderColorDisabled: "red",
            colorTextDisabled: Color.TEXT,
          },
          Dropdown: {},

          Card: {
            colorBgContainer: Color.SECONDARY100,
            colorText: Color.PRIMARY,
            padding: 0,
            paddingLG: token.paddingXXS,
          },
          Descriptions: {
            //labelBg: COLOR.SHADE,

            colorSplit: Color.PRIMARY,
            borderRadius: token.borderRadiusLG,
          },
          Tabs: {
            itemSelectedColor: Color.TEXT,
            itemHoverColor: Color.TEXT,
            itemActiveColor: Color.TEXT,
            cardGutter: 4,
            marginXS: 0,
            controlHeight: 0,
            margin: 0,
            cardBg: Color.SHADE,
            verticalItemMargin: "0px",
          },
        },
      }}
    >
      <Flex flex={1}>{children}</Flex>
    </ConfigProvider>
  );
};

export default Config;
