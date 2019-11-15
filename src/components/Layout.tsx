import React from 'react';
import {Link} from 'gatsby';
import {
    Icon,
    Container,
    Segment,
    Sidebar,
} from 'semantic-ui-react';
import {Provider} from 'react-redux';

import HeaderMenu from './HeaderMenu/HeaderMenu';
import SidebarMenu from './SidebarMenu/SidebarMenu';
import {store} from '../store';

import 'prismjs/themes/prism-okaidia.css';
import '../css/styles.css';
import '../css/responsive.css';
import '../css/semantic.min.css';

export const menuItems = [
    {name: 'Home', path: '/', exact: true, icon: 'home', inverted: true},
    {name: 'About', path: '/about/', exact: true, icon: 'info circle'},
    {name: 'Blog', path: '/blog/', exact: false, icon: 'newspaper'},
];

export interface LayoutProps {
    location: {
        pathname: string;
    };
    children: any;
}

const Layout = (props: LayoutProps) => {
    const {pathname} = props.location;
    const isHome = pathname === '/';

    return (
        <Provider store={store}>
            <Sidebar.Pushable as={Segment}>

                <SidebarMenu Link={Link} pathname={pathname} items={menuItems} visible={false}/>

                <Sidebar.Pusher style={{minHeight: '100vh'}}>
                    {/* Header */}
                    {isHome ? null : <HeaderMenu
                        Link={Link}
                        pathname={pathname}
                        items={menuItems}
                    />}

                    {/* Render children pages */}
                    <div style={{paddingBottom: 60}}>
                        {props.children}
                    </div>

                    {/* Footer */}
                    <Segment inverted vertical style={{position: 'absolute', bottom: 0, width: '100%'}}>
                        <Container textAlign="center">
                            <p>Powered with <Icon name="heart"/> by Gatsby 2.0</p>
                        </Container>
                    </Segment>
                </Sidebar.Pusher>
            </Sidebar.Pushable>
        </Provider>
    );
};

export default Layout;

export const withLayout = <P extends object>(WrappedComponent: React.ComponentType<P>) =>
    class WithLayout extends React.Component<P & LayoutProps> {
        render() {
            return (
                <Layout location={this.props.location}>
                    <WrappedComponent {...this.props} />
                </Layout>
            );
        }
    };
