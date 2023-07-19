import { Container } from "./styles";
import { MdInbox, MdOutlineInsertDriveFile, MdOutlineModeEdit } from "react-icons/md";
import { BiPurchaseTagAlt, BiTimeFive, BiSquare } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { FaRegCopy } from "react-icons/fa";
import { IoMdStarOutline, IoMdRefresh } from "react-icons/io";
import { AiOutlineSend, AiOutlineSearch } from "react-icons/ai"
import { VscSettings } from "react-icons/vsc"
import { TbArrowNarrowLeft } from "react-icons/tb"
import { HiOutlineBars3 } from "react-icons/hi2"

export function Inbox({ size = 13, color }: { size?: Number ; color: string }) {
  return (
    <Container>
      <MdInbox size={String(size)} color={color} />
    </Container>
  );
};

export function Social({ size=18, color }: { size?: Number; color: string }) {
  return (
    <Container>
      <FiUsers size={String(size)} color={color} />
    </Container>
  );
};

export function Tag({ size=18, color }: { size?: Number; color: string }) {
  return (
    <Container>
      <BiPurchaseTagAlt size={String(size)} color={color} />
    </Container>
  );
};

export function Refresh({ size=12, color }: { size?: Number; color: string }) {
  return (
    <Container>
      <IoMdRefresh size={String(size)} color={color} />
    </Container>
  );
};

export function Return({ size=13, color }: { size?: Number; color: string }) {
  return (
    <Container>
      <TbArrowNarrowLeft size={String(size)} color={color} /> 
    </Container>
  );
};

export function Pencil({ size=20, color }: { size?: Number; color: string }) {
  return (
    <Container>
      <MdOutlineModeEdit size={String(size)} color={color} />
    </Container>
  );
};

export function SideBar({ size=24, color }: { size?: Number; color: string }) {
  return (
    <Container>
      <HiOutlineBars3 size={String(size)} color={color} />
    </Container>
  );
};

export function Star({ size=14, color, opacity=1 }: { size?: number; color: string, opacity?: number }) {
  return (
    <Container style={{opacity:opacity}}>
      <IoMdStarOutline size={String(size)} color={color} />
    </Container>
  );
};

export function Time({ size=14, color }: { size?: Number; color: string }) {
  return (
    <Container>
      <BiTimeFive size={String(size)} color={color} />
    </Container>
  );
};

export function Sent({ size=16, color }: { size?: Number; color: string }) {
  return (
    <Container>
      <AiOutlineSend size={String(size)} color={color} />
    </Container>
  );
};

export function Paper({ size=14, color }: { size?: Number; color: string }) {
  return (
    <Container>
      <MdOutlineInsertDriveFile size={String(size)} color={color} />
    </Container>
  );
};

export function CheckBox({ size=14, color, opacity=1 }: { size?: number; color: string, opacity?: number }) {
  return (
    <Container style={{opacity:opacity}}>
      <BiSquare size={String(size)} color={color} /> 
    </Container>
  );
};

export function MagnifyingGlass({ size=18, color }: { size?: Number; color: string }) {
  return (
    <Container>
      <AiOutlineSearch size={String(size)} color={color} />
    </Container>
  );
};

export function Settings({ size=20, color }: { size?: Number; color: string }) {
  return (
    <Container>
      <VscSettings size={String(size)} color={color} />
    </Container>
  );
};

export function Copy({ size=20, color }: { size?: Number; color: string }) {
  return (
    <Container>
      <FaRegCopy size={String(size)} color={color} />
    </Container>
  );
};









