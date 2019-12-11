export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5df12691f1d30e7921b26596',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-2smhw1bj',
                  apiId: 'f5fc539e-5d23-40cb-83d9-093b6bc1678c'
                },
                {
                  buildHookId: '5df1269171797b91b12e746e',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-9zm3jroq',
                  apiId: '00b30d0a-e9bc-4a03-a7b3-7ba1dd989928'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/JordiYahii/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-9zm3jroq.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
