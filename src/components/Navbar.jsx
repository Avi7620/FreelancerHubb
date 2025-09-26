import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import Spinner from "../common/Spinner";

// ✅ Navbar items now match Home.jsx sections
const navItems = [
  { label: "Home", id: "hero" },
  { label: "How It Works", id: "howitworks" },
  { label: "Trending Services", id: "trending" },
  { label: "Browse Talent", id: "browse" },
  { label: "Talent Stats", id: "stats" },
  { label: "Testimonials", id: "testimonials" },
];

const Navbar = () => {
  const [mobileMenuAnchor, setMobileMenuAnchor] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();

  // Smooth scroll to section
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMobileMenuAnchor(null);
    }
  };

  if (loading) return <Spinner />;

  return (
    <AppBar position="static" color="default" elevation={0}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography
            variant="h5"
            component="div"
            sx={{
              flexGrow: 1,
              fontWeight: "bold",
              color: "primary.main",
              letterSpacing: "-0.5px",
              cursor: "pointer",
            }}
            onClick={() => navigate("/")}
          >
            FreelancerHub
          </Typography>

          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                color="inherit"
                sx={{ color: "text.primary" }}
                onClick={() => handleScroll(item.id)}
              >
                {item.label}
              </Button>
            ))}
            <Button
              variant="contained"
              color="secondary"
              onClick={() => navigate("/login")}
            >
              Login
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => navigate("/signup", true)}
            >
              Sign Up
            </Button>
          </Box>

          {/* Mobile Navigation */}
          <IconButton
            size="large"
            aria-label="menu"
            onClick={(e) => setMobileMenuAnchor(e.currentTarget)}
            color="inherit"
            sx={{ display: { xs: "flex", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Menu
            anchorEl={mobileMenuAnchor}
            open={Boolean(mobileMenuAnchor)}
            onClose={() => setMobileMenuAnchor(null)}
          >
            {navItems.map((item) => (
              <MenuItem
                key={item.label}
                onClick={() => handleScroll(item.id)}
              >
                {item.label}
              </MenuItem>
            ))}
            <MenuItem onClick={() => navigate("/login")}>Login</MenuItem>
            <MenuItem onClick={() => navigate("/signup", true)}>Sign Up</MenuItem>
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
