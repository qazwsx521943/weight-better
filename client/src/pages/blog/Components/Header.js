import * as React from "react";
import PropTypes from "prop-types";
import Toolbar from "@mui/material/Toolbar";
import Link from "@mui/material/Link";
import { Link as RouterLink } from 'react-router-dom';

const sections = [
  { title: "最新文章", url: "/articles/latest" },
  { title: "健身鍛鍊", url: "/articles/fitness" },
  { title: "居家運動", url: "/articles/home-workouts" },
  { title: "健康飲食", url: "/articles/healthy-eating" },
  { title: "養生保健", url: "/articles/health-wellness" },
];

function Header(props) {
    return (
        <React.Fragment>
            <Toolbar
                component="nav"
                variant="dense"
                sx={{
                    justifyContent: "space-between",
                    overflowX: "auto",
                    backgroundColor: "#EA99CD",
                }}
            >
                <div sx={{ display: "flex" }}>
                    {sections.map((section) => (
                        <Link
                            color="inherit"
                            noWrap
                            key={section.title}
                            variant="body2"
                            component={RouterLink}
                            to={section.url}
                            sx={{
                                p: 1,
                                flexShrink: 0,
                                color: "white",
                                textDecoration: "none",
                            }}
                        >
                            {section.title}
                        </Link>
                    ))}
                </div>
                <Link
                    color="inherit"
                    noWrap
                    variant="body2"
                    href="/WriteBlog"
                    sx={{
                        p: 1,
                        flexShrink: 0,
                        color: "white",
                        textDecoration: "none",
                    }}
                >
                    發表文章
                </Link>
            </Toolbar>
        </React.Fragment>
    );
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Header;
