import React from 'react';
import Link from "next/link";
import Image from "next/image";


const Header = ({children}: HeaderProps) => {
    return (
        <div className="header">
            <Link href="/" className="md:flex-1">
                <div className="hidden md:flex items-center">
                    <Image
                        src="/assets/icons/logo-icon.svg"
                        alt="logo"
                        width={32}
                        height={32}
                    />
                    <h1 className="ml-2 tracking-wide text-center">MantraDocs</h1> {/* Adjust margin as needed */}
                </div>
                <Image
                    src="/assets/icons/logo-icon.svg"
                    alt="logo"
                    width={32}
                    height={32}
                    className="mr-2 md:hidden"
                />
            </Link>
            {children}
        </div>
    );
};

export default Header;