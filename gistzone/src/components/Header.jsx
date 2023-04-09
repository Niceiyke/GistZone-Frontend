import React from "react";
import image from "./images/download.jpeg";
import logo from "./images/logo1.png";
import { Navbar, Dropdown,Avatar } from "flowbite-react";

function Header() {
  return (
    <Navbar fluid={true} rounded={true} color="primary">
      <Navbar.Brand href="https://flowbite.com/">
        <img
          src={logo}
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Gistzone
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline={true}
          label={
            <Avatar
              alt="User settings"
              img={image}
              rounded={true}
            />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
          <input
            type="search"
            placeholder="search "
            className="rounded"
          />
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
