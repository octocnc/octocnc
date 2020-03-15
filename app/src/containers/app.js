// @flow

import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { ConnectionStatus } from 'enums';

import {Layout, Menu, Button, Row, Col} from 'antd';
const { Header, Content, Footer, Sider } = Layout;

import { ReactSVG } from "react-svg";
import logo from 'assets/octocnc_sprites_logo.svg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faUser, faArrowsAlt, faTerminal } from '@fortawesome/free-solid-svg-icons';

import {Route, Link, Switch, HashRouter} from 'react-router-dom';

import './app.scss';
import 'antd/dist/antd.css';

import 'basscss-margin/index.css';
import 'basscss-padding/index.css';
import 'basscss-layout/index.css';

import Connection from './connection';
import DRO from './dro';
import Commands from './commands';
import Login from './login';
import Path from './path';
import Files from './files';

import {PrivateRoute, PublicRoute} from "../routes";
import { shouldHandleLogin } from "../selectors";
import {authCheck, authLogout} from "../action_creators";
import DragOutlined from "@ant-design/icons/es/icons/DragOutlined";
import GatewayOutlined from "@ant-design/icons/es/icons/GatewayOutlined";
import FileTextOutlined from "@ant-design/icons/es/icons/FileTextOutlined";
import CodeOutlined from "@ant-design/icons/es/icons/CodeOutlined";
import ConnectSVG from 'assets/icons/circle-solid.svgi';
import Icon from "@ant-design/icons";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            'collapsed':false
        };
    }

    componentDidMount() {
        if(this.props.authEnabled) {
            this.props.checkAuth();
        }
    }

    onCollapse = collapsed => {
        this.setState({ collapsed });
    };

    render() {

        let authenticated = <div/>;
        if(this.props.authenticated) {
            authenticated =
              <div className="right">
                  <span>
                      <FontAwesomeIcon icon={faUser} size='lg'/>
                      Logged in as: {this.props.username}.
                  </span>
                  <Button type="link" onClick={this.props.logout}>Logout</Button>
              </div>;
        }

        return (
            <HashRouter history={this.props.history}>
                <Layout style={{height: '100vh'}}>
                    <Sider style={{overflow: 'auto'}} collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                        <Menu theme="dark" mode="inline">
                            <Menu.Item key="1">
                                <Link to={`connection`}>
                                    <span className={this.props.status === ConnectionStatus.CONNECTED ? 'menu-icon active':'menu-icon'}><Icon component={ConnectSVG} /></span>
                                    <span className="pl1  h5">Connection</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Link to={`position`}>
                                    <span className={'menu-icon'}><DragOutlined /></span>
                                    <span className="pl1 h5">Position</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <Link to={`path`}>
                                    <span className={'menu-icon'}><GatewayOutlined /></span>
                                    <span className="pl1 h5">Path</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Link to={`files`}>
                                    <span className={'menu-icon'}><FileTextOutlined /></span>
                                    <span className="pl1 h5">Files</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="4">
                                <Link to={`commands`}>
                                    <span className={'menu-icon'}><CodeOutlined /></span>
                                    <span className="pl1 h5">Command</span>
                                </Link>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout>
                        <Header style={{background: '#fff', padding: 0}}>
                            <Row>
                                <Col span={4} className={'header-logo'}>
                                    <ReactSVG src={logo} className="m1"/>
                                </Col>
                                <Col span={6} offset={12}>{authenticated}</Col>
                            </Row>
                        </Header>
                        <Content style={{margin: '24px 16px 0', overflow: 'initial'}}>
                            <div style={{padding: 24, textAlign: 'center'}}>
                                <Switch>
                                    <Route path='/login' exact component={Login} />
                                    <PrivateRoute path='/position' exact component={DRO} authed={this.props.authenticated} />
                                    <PrivateRoute path='/commands' exact component={Commands} authed={this.props.authenticated} />
                                    <PrivateRoute path='/files' exact component={Files} authed={this.props.authenticated} />
                                    <PrivateRoute path='/path' exact component={Path} authed={this.props.authenticated} />
                                    <PrivateRoute path='/' component={Connection} authed={this.props.authenticated} />
                                </Switch>
                            </div>
                        </Content>
                        <Footer style={{textAlign: 'center'}}>
                            <a target="_blank" href="http://octocnc.github.io">OctoCNC</a> powered by <a target="_blank" href="http://octoprint.org">OctoPrint</a>.
                        </Footer>
                    </Layout>
                </Layout>
            </HashRouter>
        );
    }
}

const mapStateToProps = () => {
  return (state, props) => {
    return {
        authEnabled: state.config.user_management,
        authenticated: !shouldHandleLogin()(state,props),
        username: state.auth.username,
        status: state.devices.status
    };
}};

App.defaultProps = {
  authenticated: false
};

App.propTypes = {

};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
        checkAuth: authCheck,
        logout: authLogout
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
