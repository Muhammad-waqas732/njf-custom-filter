window.customFilterSettings = {
    'targets': [{
        container: '.BlogList,.blog-list,.article-list',//modern templates have .BlogList, this is not not final list, your old template may have another selectors like .blog-list
        items: '.hentry',// usually blog articles across different templates still has .hentry classname
        settings: {
            showItemsCount: false,
            position: 'Top',
          	view: 'buttons-round',
          	clearAllButton: { //Button that resets all filter and search control
                    enabled: true, // if true, you will see Clear button, clicking it resets all filters
                    text: 'All', // button value
                    place: 'before' // may be before (all dropdowns) or after or valid css selector to append in
                },
            keepDropdownsOpen: false,
            customClasses: 'lite-dropdowns',
            simpleFilter: {
                show: {
                    effect: 'fade',
                    transitionDuration: 300,
                    stagger: 60
                },
                hide: {
                    effect: 'fade',
                    transitionDuration: 100,
                    stagger: 18 
                }
            },
            pagination: {
                enabled: true,
                pageSize: 20
            },
            filter: {
                category: false,
                tag: false,
                items: [{
                    name: 'Category',
                    multiple: false,
                    getAttr: 'categories'
                }, {
                    name: 'Tags',
                    multiple: true,
                    capitalcase: true,
                    getAttr: 'tags'
                }]
            },
            sort: {
                enabled: true,
                items: [{
                    name: 'Alphabetical',
                    order: 'asc|desc',
                    orderTexts: 'A-Z|Z-A',
                    hideName: true,
                    sort: '.BlogList-item-title'// need inspect, because may be some another selector
                }, {
                    name: 'Date',
                    order: 'desc|asc',
                    orderTexts: 'Newest|Oldest',
                    hideName: true,
                    sort: '[data-publish-on] parseInt'
                }]
            },
            search: {
                text: '',
                enabled: false
            }
        }
    }]
};