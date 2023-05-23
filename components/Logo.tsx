import type { FC } from "react";
import { SxProps, Theme, styled } from "@mui/material/styles";

interface LogoProps {
  sx?: SxProps<Theme>;
  height?: number;
  width?: number;
  src?: string;
}

const LogoRoot = styled("img")();

const LogoX: FC<LogoProps> = ({ src, height, width }) => (
  <LogoRoot
    src={src ? src : "/RoomChild.png"}
    height="52"
    sx={{
      height: height || 25,
      width: width || 140,
    }}
  />
);

export default LogoX;
