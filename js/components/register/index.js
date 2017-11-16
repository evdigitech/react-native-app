import React, { Component } from "react";
import { Image, View, StatusBar } from "react-native";

import { Container, Button, H3, Text, Header, Title, Body, Left, Right, Item, Input, Content, Form } from "native-base";

import styles from "./styles";

const launchscreenBg = require("../../../img/launchscreen-bg.png");

class Register extends Component {
	// eslint-disable-line

	render() {
		return (
			<Container>
				<StatusBar barStyle="light-content" />
				<Image source={launchscreenBg} style={styles.imageContainer}>
				<H3 style={styles.item}>Register</H3>
				<Content>
					<Form>
						<Item>
							<Input placeholder="Enter Email or Phone no." />
						</Item>
						<Button full onPress={() => this.props.navigation.navigate('Login')}>
							<Text>Signup</Text>
						</Button>
					</Form>
				</Content>
				</Image>
			</Container>
		);
	}
}

export default Register;
