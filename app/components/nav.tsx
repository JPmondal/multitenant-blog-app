"use client";

import * as React from "react";
import { UserButton, OrganizationSwitcher } from "@clerk/nextjs";

const Nav: React.FC = () => {
  return (
    <nav className="p-4 flex justify-between items-center">
      <div>
        <h1 className="font-semibold text-2xl">BlogBook</h1>
      </div>
      <div className="flex justify-center items-center gap-2">
        <OrganizationSwitcher afterSelectOrganizationUrl='/org/:slug'/>
        <UserButton />
      </div>
    </nav>
  );
};

export default Nav;
