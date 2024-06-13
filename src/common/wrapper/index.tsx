import { TitleType } from "src/utils/types";
import Title from "../title";
import { Flex } from "antd";

interface WrapperProps {
  titleType: TitleType;
  titleValue: string;
  titleHeading?: string;
  chidlren?: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({
  titleType,
  titleValue,
  titleHeading,
  chidlren,
}) => {
  return (
    <Flex flex="1" vertical gap={"middle"}>
      <Title type={titleType} title={titleValue} heading={titleHeading} />
      {chidlren && <Flex flex="1">{chidlren}</Flex>}
    </Flex>
  );
};

export default Wrapper;
