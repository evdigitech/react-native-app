import React, { Component } from "react";
import { Image, View, StatusBar } from "react-native";

import { Container, Button, H3, Text, Header, Title, Body, Left, Right, Item, Input, Content, Form } from "native-base";

import styles from "./styles";

const launchscreenBg = require("../../../img/launchscreen-bg.png");

class Login extends Component {
	// eslint-disable-line

	render() {
		return (
			<Container>
				<StatusBar barStyle="light-content" />
				<Image source={launchscreenBg} style={styles.imageContainer}>
					<H3 style={styles.item}>Login</H3>
					<Content>
						<Form>
							<Item>
								<Input placeholder="Email or Phone no." />
							</Item>
							<Button full onPress={() => this.props.navigation.navigate('Otp')}>
								<Text>Sign In</Text>
							</Button>
						</Form>
					</Content>
				</Image>
			</Container>
		);
	}
}

export default Login;
