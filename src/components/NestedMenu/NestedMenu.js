import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { ListGroup, Collapse } from 'react-bootstrap';
import { FaAngleRight, FaAngleDown } from 'react-icons/fa';
import Link from 'next/link';
import GlobalContext from '../../context/GlobalContext';
import { menuItems } from '../Header/menu-items';
import { useAuth } from '@/context/AuthUserContext';

const NestedMenuContainer = styled.div`
  a,
  .label {
    color: ${({ dark, theme }) =>
      dark ? theme.colors.light : theme.colors.heading};
    font-size: 15px;
    font-weight: 500;
    transition: all 0.3s ease-out;
    &:hover,
    &:active {
      color: ${({ theme }) => theme.colors.primary};
      text-decoration: none;
    }
  }

  .list-group-item {
    & + .collapse:not(.show) {
      .list-group-item {
        border: none !important;
        border-width: 0 !important;
      }
    }
    & + .collapse.show {
      .list-group-item {
        &:first-child {
          border-top: none !important;
        }
      }
    }
  }
  .collapse + .list-group-item {
    border-top-width: 0;
  }
  /* .list-group-flush:last-child .list-group-item:last-child {
    border-bottom-width: 1px;
  } */
`;

const MenuItem = ({
  label,
  isExternal = false,
  clickFunction,
  addClasses = '',
  name,
  items,
  depthStep = 20,
  depth = 0,
  ...rest
}) => {
  const [open, setOpen] = useState(false);
  const hasSubItems = Array.isArray(items);

  const gContext = useContext(GlobalContext);

  return (
    <>
      {hasSubItems ? (
        <ListGroup.Item
          {...rest}
          css={`
            padding-left: ${depth * depthStep}px !important;
            cursor: pointer;
          `}
          onClick={() => setOpen(!open)}
          className="d-flex align-items-center justify-content-between"
        >
          <span className="label">{label}</span>
          <span>{open ? <FaAngleDown /> : <FaAngleRight />}</span>
        </ListGroup.Item>
      ) : (
        <ListGroup.Item
          {...rest}
          css={`
            padding-left: ${depth * depthStep}px !important;
          `}
        >
          {isExternal ? (
            <a
              className={addClasses}
              href={`${name}`}
              onClick={(e) => {
                name === '/#' && e.preventDefault();

                if (gContext.visibleOffCanvas) {
                  gContext.toggleOffCanvas();
                  clickFunction && clickFunction();
                }
              }}
            >
              {label}
            </a>
          ) : (
            <Link href={`/${name}`}>
              <a
                className={addClasses}
                onClick={() => {
                  if (gContext.visibleOffCanvas) {
                    gContext.toggleOffCanvas();
                  }
                }}
              >
                {label}
              </a>
            </Link>
          )}
        </ListGroup.Item>
      )}

      {hasSubItems ? (
        <Collapse in={open}>
          <ListGroup>
            {items.map((subItem) => (
              <MenuItem
                key={subItem.name}
                depth={depth + 1}
                depthStep={depthStep}
                {...subItem}
              />
            ))}
          </ListGroup>
        </Collapse>
      ) : null}
    </>
  );
};

const NestedMenu = () => {
  const { user, logout } = useAuth();
  const gContext = useContext(GlobalContext);

  const menuUserItems = {
    signedIn: [
      {
        name: '/#',
        label: 'Log In',
        isExternal: true,
        clickFunction: gContext.toggleSignInModal,
        addClasses: 'text-primary',
      },
      {
        name: '/#',
        label: 'Sign Up',
        isExternal: true,
        clickFunction: gContext.toggleSignUpModal,
        addClasses: 'text-primary',
      },
    ],
    signedOut: [
      {
        name: 'dashboard',
        label: 'Dashboard',
      },
      {
        name: 'dashboard/settings',
        label: 'Settings',
      },
      {
        name: '/#',
        label: 'Log Out',
        isExternal: true,
        clickFunction: logout,
        addClasses: 'text-danger',
      },
    ],
  };

  const properMenuItems = user
    ? menuUserItems.signedOut
    : menuUserItems.signedIn;

  return (
    <NestedMenuContainer>
      <ListGroup variant="flush">
        {menuItems.map((menuItem, index) => (
          <MenuItem
            key={`${menuItem.name}${index}`}
            depthStep={20}
            depth={0}
            {...menuItem}
          />
        ))}
      </ListGroup>
      <ListGroup
        variant="flush"
        className="d-xs-none mt-10 pt-2 border-top border-primary"
      >
        {properMenuItems.map((menuItem, index) => (
          <MenuItem
            key={`${menuItem.name}${index}`}
            depthStep={20}
            depth={0}
            {...menuItem}
          />
        ))}
      </ListGroup>
    </NestedMenuContainer>
  );
};

export default NestedMenu;
