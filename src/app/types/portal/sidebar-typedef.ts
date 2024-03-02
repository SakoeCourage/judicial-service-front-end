
/**
 * Represents a single Sidebar Item i.e link
 */
export type singleSbItem = {
    title: string;
    icon: string;
    link: string;
    links?: undefined
}


/**
 * Represents Sidebar items with Downpdown Links
 * 
 */
export type sbitemWithLinks = {
    title: string;
    icon: string;
    links: {
        title: string;
        link: string;
    }[];
    link?: undefined
}

/**
 * Variants of sidebar routes
 */
export type routesTypesDef = singleSbItem | sbitemWithLinks

/**
 * Typical sidebar section
 */
export type routesListWitSections = {
    sectionName: string,
    routes: routesTypesDef[]
}[]