import AddAntetype from "./pages/add-antetype";
import AntetypeList from "./pages/antetype-list";
import About from './pages/about'

export function routeConfig() {
    return [
        {
            key: '1',
            title: '新增原型',
            breadcrumb: ['原型管理', '新增原型'],
            path: '/control/add-antetype',
            component: AddAntetype
        },
        {
            key: '2',
            title: '原型列表',
            breadcrumb: ['原型管理', '原型列表'],
            path: '/control/antetype-list',
            component: AntetypeList
        },
        {
            key: '3',
            title: '关于',
            breadcrumb: ['一级导航', '常用工具', '关于'],
            path: '/control/about',
            component: About
        },
    ]
}

export function defaultTag() {
    return [
        {
            key: '1',
            title: '新增原型',
            breadcrumb: ['原型管理', '新增原型'],
            path: '/control/add-antetype',
            component: AddAntetype,
            closed: false
        }
    ]
}
export function menuConfig() {
    return {
        defaultOpenKeys: ['sub1'],
        defaultSelectedKeys: ['1'],
        menuList: [
            {
                key: 'sub1',
                title: '原型管理',
                icon: 'dashboard',
                isSub: true,
                disabled: false,
                children: [
                    {
                        key: '1',
                        title: '新增原型',
                        breadcrumb: ['原型管理', '新增原型'],
                        path: '/control/add-antetype',
                        isSub: false,
                        disabled: false
                    },
                    {
                        key: '2',
                        title: '原型列表',
                        breadcrumb: ['原型管理', '原型列表'],
                        path: '/control/antetype-list',
                        isSub: false,
                        disabled: false
                    },
                ]
            },
            {
                key: 'sub2',
                title: '一级导航',
                icon: 'appstore',
                isSub: true,
                disabled: false,
                children: [
                    {
                        key: 'sub3',
                        title: '常用工具',
                        icon: 'tool',
                        isSub: true,
                        disabled: false,
                        children: [
                            {
                                key: '3',
                                title: '关于',
                                breadcrumb: ['一级导航', '常用工具', '关于'],
                                path: '/control/about',
                                isSub: false,
                                disabled: false
                            }
                        ]
                    }
                ]
            }
        ]
    }
}