import Config from "../config";

const AppWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <Config>{children}</Config>;
};
export default AppWrapper;
