import { Footer } from "flowbite-react";
import {
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

function Sobre() {
  return (
    <Footer bgDark className="rounded-none" style={{ backgroundColor: "#111827" }}>
      |
      <div className="w-full ">
        <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-5  text-center">
          <div>
            <Footer.Title title="COMPANY" className="text-green-500" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">About</Footer.Link>
              <Footer.Link href="#">Premium</Footer.Link>
              <Footer.Link href="#">Blog</Footer.Link>
              <Footer.Link href="#">Affiliate Program</Footer.Link>
              <Footer.Link href="#">Get Cuoupon</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="HELP AND SUPPORT" className="text-green-500" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">Contac Us</Footer.Link>
              <Footer.Link href="#">Knowledge Center </Footer.Link>
              <Footer.Link href="#">Premiun Support</Footer.Link>
              <Footer.Link href="#">Sponsorships</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="LEARNING" className="text-green-500" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">Learn Hub</Footer.Link>
              <Footer.Link href="#">Manuals</Footer.Link>
              <Footer.Link href="#">Tutorials</Footer.Link>
              <Footer.Link href="#">Communities</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="RESOURCES" className="text-green-500" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">Third-Party Tool</Footer.Link>
              <Footer.Link href="#">Ilustrations</Footer.Link>
              <Footer.Link href="#">Themesberg</Footer.Link>
              <Footer.Link href="#">Blueshots</Footer.Link>
              <Footer.Link href="#">Stock Photos</Footer.Link>
            </Footer.LinkGroup>
          </div>

          <div>
            <Footer.Title title="LEGAL" className="text-green-500" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">Privacy Policy </Footer.Link>
              <Footer.Link href="#">Terms & Conditions</Footer.Link>
              <Footer.Link href="#">EULA</Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>
        <div className="my-5">
          <div className="w-full bg-#1F2A37 px-4 sm:flex sm:items-center sm:justify-between my-4">
            <Footer.Copyright
              className="ml-[600px]"
              href="#"
              by="LeefProject, Inc. All rights reserved ™"
              year={2023}
            />
          </div>
          <div className="flex space-x-6 sm:mt-4 sm:justify-center ml-[-1px] mb-10">
            <Footer.Icon href="https://www.instagram.com/leaftfounding/" icon={BsInstagram} />
            <Footer.Icon href="https://twitter.com/LFounding202" icon={BsTwitter} />
          </div>
        </div>
      </div>
    </Footer>
  );
}

export default Sobre;
