import React, {Component} from 'react';
import { StyleProvider, Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import getTheme from './native-base-theme/components';
import commonColor from './native-base-theme/variables/commonColor';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <StyleProvider style={getTheme(commonColor)}>
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>タイトル</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Right>
        </Header>
      </Container>
      </StyleProvider>
    );
  }
}