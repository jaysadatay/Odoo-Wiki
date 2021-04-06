
module.exports = {
    title: 'Odoo Handbuch',
    description: 'Odoo Handbuch',
    themeConfig: {
        sidebar: 'auto',
        nav: [
            { text: 'Home', link: '/' }
        ]
    },
    plugins: [
        '@vuepress/active-header-links',
        '@vuepress/medium-zoom',
        'vuepress-plugin-mermaidjs',
        'plausible-analytics',
        '@vuepress/back-to-top',
        [
            'vuepress-plugin-sitemap',
            {
                hostname: 'https://odoo-erp.ch'
            }
        ]
    ],
}
