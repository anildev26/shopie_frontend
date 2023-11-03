import { Search } from "@mui/icons-material";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
	height: 60px;
	${mobile({ height: "50px" })}
`;
const Wrapper = styled.div`
	padding: 10px 20px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	${mobile({ padding: "10px 0px" })}
`;
const Left = styled.div`
	display: flex;
	align-items: center;
	flex: 1;
`;
const Language = styled.div`
	font-size: 14px;
	cursor: pointer;
	${mobile({ display: "none" })}
`;
const SearchContainer = styled.div`
	border: 0.5px solid lightgray;
	display: flex;
	align-items: center;
	margin-left: 25px;
	padding: 5px;
`;
const Input = styled.input`
	border: none;
	${mobile({ width: "50px" })}
`;
const Logo = styled.h1`
	font-weight: none;
	${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	${mobile({ flex: 2, justifyContent: "center" })}
`;
const Center = styled.div`
	text-align: center;
	flex: 1;
`;
const MenuItem = styled.div`
	font-size: 14px;
	cursor: pointer;
	margin-left: 25px;
	${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;
const Navbar = () => {
	return (
		<Container>
			<Wrapper>
				<Left>
					<Language>En</Language>
					<SearchContainer>
						<Input placeholder='Search' />
						<Search style={{ color: "gray", fontSize: 16 }} />
					</SearchContainer>
				</Left>
				<Center>
					<Logo>Shopie.</Logo>
				</Center>
				<Right>
					<MenuItem>Register</MenuItem>
					<MenuItem>Log in</MenuItem>
					<MenuItem>
						<Badge badgeContent={4} color='primary'>
							<ShoppingCartOutlinedIcon color='action' />
						</Badge>
					</MenuItem>
				</Right>
			</Wrapper>
		</Container>
	);
};

export default Navbar;
