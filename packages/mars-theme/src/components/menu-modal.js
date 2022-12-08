import { styled, connect, useConnect } from "frontity";
import Link from "./link";

/**
 * The modal containing the mobile menu items.
 *
 * @param props - The props passed to the component from parent.
 * @returns A React component.
 */
const MenuModal = ({ ...props }) => {
  const { state } = useConnect();
  const { menu, isMobileMenuOpen } = state.theme;
  const isThereLinks = menu?.length > 0;
  let translateAmount = "300px"
  if(isMobileMenuOpen) translateAmount = "0px"
  return (
    <div {...props}>
      {state.frontity.mode !== "amp" && <MenuOverlay translateX={translateAmount}/>}
      <MenuContent as="nav">
        {isThereLinks &&
          menu.map(([name, link]) => (
            <MenuLink
              key={name}
              link={link}
              aria-current={state.router.link === link ? "page" : undefined}
            >
              {name}
            </MenuLink>
          ))}
      </MenuContent>
    </div>
  );
};

const MenuOverlay = styled.div`
  background-color: #FF4D00;
  width: 300px;
  /* transform: ${props => `translateX(${props.translateX})`}; */
  height: 100vh;
  overflow: hidden auto;
  position: fixed;
  z-index: 2;
  top: 0;
  right: 0;
  transition: all 1s ease-in 1s;
`;

const MenuContent = styled.div`
  z-index: 3;
  position: fixed;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
`;

const MenuLink = styled(Link)`
  width: 300px;
  /* transform: translateX(300px); */
  display: block;
  outline: 0;
  font-size: 20px;
  text-align: center;
  padding: 1.2rem 0;
  color:white !important;
  &:hover,
  &:focus {
    background-color: rgba(0, 0, 0, 0.05);
  }
  /* styles for active link */
  &[aria-current="page"] {
    color: black;
    font-weight: bold;
  }
`;

export default connect(MenuModal, { injectProps: false });
