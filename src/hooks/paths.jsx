import { AgentIcon, ArticlesIcon, ContactIcon, IdeaIcon, OverViewIcon, SettingIcon, SubscriptionIcon, TicketsIcon } from "../assets/icons"
import { Agents, Articles, Contacts, Ideas, Overview, Settings, Subscription, Tickets, TicketCreate,TicketsMore } from "../pages"

export const paths = {
    overview: '/',
    tickets: '/tickets',
    ideas: '/ideas',
    contacts: '/contacts',
    agents: '/agents',
    articles: '/articles',
    settings: '/settings',
    subscription: '/subscription',
    ticketsCreate: "/tickets/create",
    ticketsEdit: "/tickets/:id/edit",
    ticketsMore:"/tickets/:id"
}

export const navList = [
    {
        id: 1,
        title: "Overview",
        path: paths.overview,
        icon: <OverViewIcon/>
    },
    {
        id: 2,
        title: "Tickets",
        path: paths.tickets,
        icon: <TicketsIcon/>
    },
    {
        id: 3,
        title: "Ideas",
        path: paths.ideas,
        icon: <IdeaIcon/>
    },
    {
        id: 4,
        title: "Contacts",
        path: paths.contacts,
        icon: <ContactIcon/>
    },
    {
        id: 5,
        title: "Agents",
        path: paths.agents,
        icon: <AgentIcon/>
    },
    {
        id: 6,
        title: "Articles",
        path: paths.articles,
        icon: <ArticlesIcon/>
    },
    {
        id: 7,
        title: "Settings",
        path: paths.settings,
        icon: <SettingIcon/>
    },
    {
        id: 8,
        title: "Subscription",
        path: paths.subscription,
        icon: <SubscriptionIcon/>
    }
]

export const pageRoutesList = [
    {
        id: 1,
        path: paths.overview,
        element: <Overview/>
    },
    {
        id: 2,
        path: paths.tickets,
        element: <Tickets/>
    },
    {
        id: 3,
        path: paths.ideas,
        element: <Ideas/>
    },
    {
        id: 4,
        path: paths.contacts,
        element: <Contacts/>
    },
    {
        id: 5,
        path: paths.agents,
        element: <Agents/>
    },
    {
        id: 7,
        path: paths.articles,
        element: <Articles/>
    },
    {
        id: 7,
        path: paths.settings,
        element: <Settings/>
    },
    {
        id: 8,
        path: paths.subscription,
        element: <Subscription/>
    },
    {
        id: 9,
        path: paths.ticketsCreate,
        element: <TicketCreate />
    },
    {
        id: 10,
        path: paths.ticketsMore,
        element: <TicketsMore />
    },
    {
        id: 11,
        path: paths.ticketsEdit,
        element: <TicketCreate />
    },
    
]