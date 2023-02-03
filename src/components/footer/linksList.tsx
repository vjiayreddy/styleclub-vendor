import React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { footerLinkType } from "../../shared/types";
import Link from "next/link";

const StyledFooterLinksTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[400],
}));

const StyledFooterLinks = styled("ul")(() => ({
  listStyle: "none",
  padding: 0,
}));

const StyledFooterATag = styled("a")(({ theme }) => ({
  textDecoration: "none",
  fontSize: theme.spacing(1.8),
  color: theme.palette.grey[300],
  ":hover": {
    cursor: "pointer",
    color: theme.palette.primary.main,
    textDecoration: "underLine",
  },
}));

interface LinksListProps {
  title: string;
  links: footerLinkType[];
}

const UiFooterLinksList = ({ links,title }: LinksListProps) => {
  return (
    <Box>
      <StyledFooterLinksTitle variant="body2">
        {title}
      </StyledFooterLinksTitle>
      <StyledFooterLinks>
        {links.map((item: footerLinkType, index) => (
          <li key={index}>
            <Link href="/">
              <StyledFooterATag>{item.name}</StyledFooterATag>
            </Link>
          </li>
        ))}
      </StyledFooterLinks>
    </Box>
  );
};

export default UiFooterLinksList;
